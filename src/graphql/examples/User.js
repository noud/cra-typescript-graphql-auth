import { gql } from 'graphql.macro';

const query = gql`
  query GetUser($id: ID!) {
    apolloSingleUser(id: $id) {
      name
      email
    }
  }
`;
export default query;