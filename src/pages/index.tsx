import { NextPage } from 'next';
import { RouterInput, trpc } from '../client/trpc';
import { Buttons } from '../components/Buttons';
import { Header } from '../components/Header';
import { Row } from '../components/Row';

const IndexPage: NextPage = () => {
  const utils = trpc.useContext();
  const authors = trpc.author.list.useQuery();

  const handleDelete = trpc.author.delete.useMutation({
    async onSuccess() {
      // refetches authors after a post is deleted
      await utils.author.list.invalidate();
    },
  });

  const handleSave = trpc.author.add.useMutation({
    async onSuccess() {
      // refetches authors after a post is added
      await utils.author.list.invalidate();
    },
  });

  const randomString = () => (Math.random() + 1).toString(36).substring(7);

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
          <Buttons
            {...{ handleDelete }}
            handleSave={async () => {
              const input: RouterInput['author']['add'] = {
                firstName: randomString(),
                lastName: randomString(),
                country: 'IT',
              };
              await handleSave.mutateAsync(input);
            }}
            handleDelete={async () => {
              if (authors.data) {
                await handleDelete.mutateAsync({ id: authors.data[0].id });
              }
            }}
          />
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <Header />
              <tbody>
                {authors.data?.map((author, key) => (
                  <Row key={key} author={author} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
