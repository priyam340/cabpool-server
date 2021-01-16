const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
const { typeDefs } = require("./graphql/schema/schema");
const resolvers = require("./graphql/resolvers/resolvers");
const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    onConnect: () => {
      return { pubsub };
    },
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context;
    }

    return {
      pubsub,
    };
  },
  cors: true,
  debug: true,
  playground: true,
});
mongoose.connect("mongodb://localhost/cabpool", {useNewUrlParser: true});
PORT = process.env.PORT || "5000";
server.listen(PORT).then(({ url, subscriptionsUrl }) => {
  console.log(
    `Server ready at ${url} and subscription ready at ${subscriptionsUrl}`
  );
});
