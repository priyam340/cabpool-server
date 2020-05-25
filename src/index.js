const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
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
mongoose.connect(
  "mongodb+srv://cabpool:Priyam@cappool-idla4.mongodb.net/test?authSource=admin&replicaSet=cappool-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
  { useNewUrlParser: true }
);
PORT = process.env.PORT || "5000";
server.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${PORT}`);
});
