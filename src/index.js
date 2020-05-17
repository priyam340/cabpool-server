const { ApolloServer, PubSub } = require("apollo-server");
const { typeDefs } = require("./graphql/schema/schema");
const resolvers = require("./graphql/resolvers/resolvers");
const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  debug: true,
  playground: true,
});
PORT = 5000;
server.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${PORT}`);
});
