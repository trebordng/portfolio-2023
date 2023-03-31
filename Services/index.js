import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GPAPHCMS_ENDPOINT;
export const getContents = async () => {
  const projectQuery = gql`
    query ProjectQuery {
      projectsConnection {
        edges {
          node {
            description
            id
            languages
            company
            slug
            title
            images {
              url
            }
            startDate
            endDate
          }
        }
      }
    }
  `;
  const contentQuery = gql`
    query ContentQuery {
      contentsConnection {
        edges {
          node {
            alternative
            id
            images {
              url
            }
            title
          }
        }
      }
    }
  `;
  const ProjectsResults = await request(graphqlAPI, projectQuery);
  const ContentResults = await request(graphqlAPI, contentQuery)
  return {projects:ProjectsResults.projectsConnection.edges,contents:ContentResults.contentsConnection.edges};
};
