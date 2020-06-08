const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    userExists(email: String!): Boolean
    getChat(link: String): [chat]
  }
  type Mutation {
    sendEmailVerify(email: String!): String!
    linkGenerate: String!
    sendMessage(link: String, email: String, text: String): String!
  }
  type Subscription {
    getChatDetails(link: String): [chat]
  }
  type chat {
    email: String
    text: String
  }
`;
