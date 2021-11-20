import { getStaticPropsForTina } from "tinacms";
import { Container } from "../components/container";
import { Section } from "../components/section";
import { Posts } from "../components/posts";
import { layoutQueryFragment } from "../components/layout";
import type { PostsConnection } from "../.tina/__generated__/types";
import { useRouter } from 'next/router';

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { type } = useRouter().query;
  const posts = props.data.getPostsList.edges;
  let filteredPosts = posts;
  const allCategories = posts.map(item => item.node.values.type);
  if (allCategories.indexOf(type) > -1) {
    filteredPosts = posts.filter(item => item.node.values.type === type);
  }
  console.log("Filtered Posts:", filteredPosts);
  return (
    <Section className="flex-1">
      <Container size="large">
        <Posts data={filteredPosts} />
      </Container>
    </Section>
  );
}

export const getStaticProps = async () => {
  const tinaProps = (await getStaticPropsForTina({
    query: `#graphql
      query PageQuery {
        ${layoutQueryFragment}
        getPostsList {
          edges {
            node {
              id
              values
              data {
                author {
                  ... on AuthorsDocument {
                    data {
                      name
                      avatar
                    }
                  }
                }
              }
              sys {
                filename
              }
            }
          }
        }
      }
    `,
    variables: {},
  })) as { data: { getPostsList: PostsConnection } };

  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
