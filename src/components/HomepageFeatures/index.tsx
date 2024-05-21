import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <Heading as="h3">
              <Translate>Freeform 5 for Craft CMS</Translate>
            </Heading>
            <p>
              <Translate>
                Freeform is a versatile form-building tool that can adjust to
                the evolving needs of your project, whether it's a simple or
                complex form.
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
