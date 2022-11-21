
const express = require("express");
const app = express();
const http = require("http");
const PORT = 8000;
const path = require("path");
const { graphqlHTTP } = require("express-graphql");
const { graphql, buildSchema } = require("graphql");

const { ApolloServer } = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");


const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const schemaText = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"))

// const schema = makeExecutableSchema({
//   typeDefs: [schemaText],
//   resolvers: resolversArray
// });

// const root = {
//   products: require("./products/products.model"),
//   orders: require("./orders/orders.model"),
// };
// const server = http.createServer();

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

// app.listen(PORT, () => {
//   console.log("RUNNING GRAPH QL SERVER");
// });


async function startApolloServer(){
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: [schemaText],
    resolvers: resolversArray
  });

  const server = new ApolloServer({
    schema
  })

const {url} = await startStandaloneServer(server,{
  listen: {port:PORT},
})
console.log("RUNNING GRAPH QL SERVER",url);
  
// app.listen(PORT, () => {
// });

}

startApolloServer();