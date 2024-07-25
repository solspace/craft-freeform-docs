import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import { FlexCards } from '@site/src/components/docs';
import { Footer } from '@site/src/components/layout';

import Icons from '@site/static/card-icons';

const Support: React.FC = () => {
  return (
    <Layout
      title="Support"
      description="Need help with Freeform? We love helping our customers discover best practices, resolve issues, and achieve their goals!"
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
              icon: Icons.GithubIcon,
              fullCardLink: 'https://github.com/solspace/craft-freeform/issues',
            },
            {
              title: 'GitHub Questions',
              description:
                "Search questions others have asked or create your own if it hasn't been asked already.",
              icon: Icons.GithubIcon,
              fullCardLink:
                'https://github.com/solspace/craft-freeform/discussions',
            },
            {
              title: 'Craft Stack Exchange',
              description:
                'Research or get advice from all over the Craft CMS community.',
              icon: Icons.StackExchangeIcon,
              fullCardLink:
                'https://craftcms.stackexchange.com/questions/tagged/plugin-freeform',
            },
          ]}
        />
        <div className="mt-10">
          <div className="flex gap-1">
            <h2 className="leading-0 mb-0 px-6 py-4 bg-[#ff6624] rounded-t-md">
              Private Ticket
            </h2>
            <div className="flex gap-1 items-end">
              <Link
                className="px-6 py-2 bg-[rgba(0,127,230,0.2)]  rounded-t-md text-red-600 font-bold hover:text-red-600 hover:bg-[#058ffe] dark:bg-[rgba(0,105,190,0.25)] dark:hover:hover:bg-[#058ffe]"
                href="/support/premium"
              >
                Urgent
              </Link>
              <Link
                className="px-6 py-2 bg-[rgba(0,127,230,0.2)]  rounded-t-md text-black dark:text-white font-bold hover:text-white hover:bg-[#058ffe] dark:bg-[rgba(0,105,190,0.25)] dark:hover:hover:bg-[#058ffe]"
                to="https://github.com/solspace/craft-freeform/"
              >
                Github
              </Link>
              <Link
                className="px-6 py-2 bg-[rgba(0,127,230,0.2)]  rounded-t-md text-black dark:text-white font-bold hover:text-white hover:bg-[#058ffe] dark:bg-[rgba(0,105,190,0.25)] dark:hover:hover:bg-[#058ffe]"
                to="https://craftcms.stackexchange.com/questions/tagged/solspace"
              >
                Stack Exchange
              </Link>
            </div>
          </div>
          <div className="mx-auto p-6 bg-[#181d27] text-white rounded-b-md rounded-tr-md border border-solid border-[#ff6624]">
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
        </div>
      </main>
      <footer className="docusaurus-mt-lg docs-footer">
        <Footer />
      </footer>
    </Layout>
  );
};

export default Support;
