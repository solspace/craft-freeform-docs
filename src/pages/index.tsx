import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { ThemedIdealImage } from '@site/src/components/utils';

import FreeformIntroBlackPhoto from '@site/static/img/freeform-intro-black.png';
import FreeformIntroWhitePhoto from '@site/static/img/freeform-intro-white.png';

import {
  SimpleTextLink,
  PrimaryButtonWithLink,
  FlexButton,
} from '@site/src/components/utils';

function HomepageHeader() {
  return (
    <header className="flex flex-col m-auto items-center gap-6 mt-32 max-w-7xl">
      <ThemedIdealImage
        sources={{
          light: FreeformIntroBlackPhoto,
          dark: FreeformIntroWhitePhoto,
        }}
        className="max-w-3xl"
        alt="Freeform 5 for Craft CMS"
      />
      <h2 className="text-amber-500	">
        Ready for wherever your project takes you.
      </h2>
      <p className="text-center">
        Freeform is a versatile form-building tool that can adjust to the
        evolving needs of your project, whether it's a simple or complex form.
        It offers effective spam protection and an easy-to-use form builder with
        powerful field types and built-in convenience features that your users
        will love. Freeform integrates seamlessly with popular CRMs, email
        marketing services, Craft elements, and more. It includes fully
        customizable ready-to-go templates and also offers headless support.
      </p>
      <FlexButton
        items={[
          { to: '/v5#reliability', label: 'Feature Tour' },
          { to: '/v5#compare', label: 'Primary' },
          { to: '/v5/user-guides/getting-started/', label: 'Getting Started' },
        ]}
      />
      <small>
        <SimpleTextLink
          to="https://plugins.craftcms.com/freeform"
          label="INSTALL A FREE, UNLIMITED TRIAL TODAY!"
        />
      </small>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section className="flex flex-col gap-2 items-center max-w-7xl m-auto my-20 py-10 bg-slate-200 dark:bg-black rounded-lg">
          <h4 className="text-lg">
            <i>Select a version below:</i>
          </h4>
          <div className="flex gap-4">
            {[
              { label: 'v5 (latest)', link: 'v5', latest: true },
              { label: 'v4', link: 'v4' },
              { label: 'v3', link: 'v2' },
              { label: 'v2', link: 'v2' },
              { label: 'v1', link: 'v1' },
            ].map((item, index) => (
              <PrimaryButtonWithLink
                key={`${item.link}-${index}`}
                to={item.link}
                label={item.label}
                classes={`${
                  item?.latest ? '!bg-green-600' : '!bg-gray-800'
                } hover:opacity-90`}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
