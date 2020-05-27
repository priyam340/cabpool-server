const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    userExists(email: String!): Boolean
  }
  type Mutation {
    sendEmailVerify(email: String!): String!
    linkGenerate: String!
    sendMessage(link: String, email: String, text: String): String!
    signUp(input: details): User
  }
  type Subscription {
    getChatDetails(link: String): [chat]
  }
  type chat {
    email: String
    text: String
  }
  type User {
    id: ID
    name: String
    email: String
  }
  input details {
    email: String!
    password: String!
    personalDetails: userPersonalDetails!
  }
  input userPersonalDetails {
    firstName: String
    lastName: String
    gender: String
    mobileNumber: String
  }
  
`;
