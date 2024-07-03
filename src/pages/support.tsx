import Layout from '@theme/Layout';

import { FlexCards } from '@site/src/components/docs';

import GithubIcon from '@site/static/icons/github.png';
import StackExchangeIcon from '@site/static/icons/stack-exchange.png';

const Support: React.FC = () => {
  return (
    <Layout
      title="Support"
      description="Description will go into a meta tag in <head />"
    >
      <main className="max-w-5xl m-auto my-12">
        <h1>Support</h1>
        <p>
          Need help with Freeform? We love helping our customers discover best
          practices, resolve issues, and achieve their goals!
        </p>
        <FlexCards
          items={[
            {
              title: 'GitHub Issues',
              description: "Report an issue you're experiencing with Freeform",
              imgSrc: GithubIcon,
              fullCardLink: 'https://github.com/solspace/craft-freeform/issues',
            },
            {
              title: 'GitHub Questions',
              description: "Search questions others have asked or create your own if it hasn't been asked already.",
              imgSrc: GithubIcon,
              fullCardLink: 'https://github.com/solspace/craft-freeform/discussions',
            },
            {
              title: 'Craft Stack Exchange',
              description: 'Research or get advice from all over the Craft CMS community.',
              imgSrc: StackExchangeIcon,
              fullCardLink:
                'https://craftcms.stackexchange.com/questions/tagged/plugin-freeform',
            },
          ]}
        />
        <div className="mx-auto mt-10 p-6 bg-[#181d27] text-white rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-200">
            Create a Support Ticket
          </h2>
          <p className="text-gray-200">
            If you need help with anything, have a question before making a
            purchase, or just want to reach out, please feel free to fill out
            the form below.
          </p>
          <iframe
            title="Support Form"
            id="support-form"
            src="https://support.solspace.com/software/support"
            scrolling="yes"
            height="850px"
            width="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
};

export default Support;
