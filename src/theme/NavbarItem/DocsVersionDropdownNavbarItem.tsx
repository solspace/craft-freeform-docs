import React from 'react';
import {
  useVersions,
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type { Props } from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type { GlobalVersion } from '@docusaurus/plugin-content-docs/client';

import versionsBadge from '@site/versionsBadge.json';

const badgeObj = {
  Latest: (
    <div className="inline-block relative bg-green-100 text-green-800 text-[9px] font-medium me-2 px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
      ✓ Latest
    </div>
  ),
  Retired: (
    <div className="inline-block relative bg-gray-200 text-gray-800 text-[9px] font-medium me-2 px-2 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-300">
      Retired
    </div>
  ),
};

const LabelWithBadge = ({ version }) => {
  const versionBadge = versionsBadge.versions.find(
    (v) => v.version === version.name
  );

  return (
    <div className="flex items-center gap-2">
      {version.label}
      {versionBadge && badgeObj[versionBadge.badge]}
    </div>
  );
};

const getVersionMainDoc = (version: GlobalVersion) =>
  version.docs.find((doc) => doc.id === version.mainDocId)!;

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}: Props): JSX.Element {
  const { search, hash } = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);

  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ??
      getVersionMainDoc(version);
    return {
      label: <LabelWithBadge version={version} />,
      // preserve ?search#hash suffix on version switches
      to: `${versionDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  });
  const items = [
    ...dropdownItemsBefore,
    ...versionLinks,
    ...dropdownItemsAfter,
  ];

  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0];

  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1 ? (
      translate({
        id: 'theme.navbar.mobileVersionsDropdown.label',
        message: 'Versions',
        description:
          'The label for the navbar versions dropdown on mobile view',
      })
    ) : (
      <LabelWithBadge version={dropdownVersion} />
    );
  const dropdownTo =
    mobile && items.length > 1
      ? undefined
      : getVersionMainDoc(dropdownVersion).path;

  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown
  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }

  return (
    <div className="version">
      <DropdownNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        items={items}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
        className="flex items-center"
      />
    </div>
  );
}
