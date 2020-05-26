const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    userExists(email: String!): Boolean
  }
  type Mutation {
    sendEmailVerify(email: String!): String!
    linkGenerate: String!
  }
  
`;
