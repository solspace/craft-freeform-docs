import Layout from '@theme/Layout';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FlexCards } from '@site/src/components/docs';

import GithubIcon from '@site/static/icons/github.png';
import StackExchangeIcon from '@site/static/icons/stack-exchange.png';

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
  updates: boolean;
}

const Support: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

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
              title: 'Ask on Github',
              description: 'Lorem Ipsum is simply dummy text.',
              imgSrc: GithubIcon,
              fullCardLink: 'https://github.com/solspace/',
            },
            {
              title: 'Craft Stack Exchange',
              description: 'Lorem Ipsum is simply dummy text.',
              imgSrc: StackExchangeIcon,
              fullCardLink:
                'https://craftcms.stackexchange.com/questions/tagged/solspace',
            },
            {
              title: 'EE Stack Exchange',
              description: 'Lorem Ipsum is simply dummy text.',
              imgSrc: StackExchangeIcon,
              fullCardLink:
                'https://expressionengine.stackexchange.com/questions/tagged/solspace',
            },
          ]}
        />
        <div className="mx-auto mt-10 p-6 bg-gray-100 dark:bg-gray-800 text-white rounded-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-200">
            Create a Support Ticket
          </h2>
          <p className="text-gray-700 dark:text-gray-200">
            If you've encountered any issues, have a pre-sale question or need
            help with anything else, please fill out the form below.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2  dark:text-white  rounded-md border border-gray-60"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 text-white rounded-md border focus:border-0"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
                htmlFor="subject"
              >
                Subject *
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2  dark:text-white rounded-md border "
                {...register('subject', { required: 'Subject is required' })}
              >
                <option value="">Please select...</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="general">General</option>
              </select>
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
                htmlFor="message"
              >
                Message *
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2  text-white rounded-md border"
                {...register('message', { required: 'Message is required' })}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                If you need to include template code, long errors with stack
                traces, or file attachments, please submit this ticket without
                those. Then include them by replying to the email confirmation
                you receive once this support ticket is created.
              </p>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600"
                  {...register('updates')}
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-100">
                  Keep me up-to-date about important Solspace product updates?
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="flex w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Support;
