const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: false,
  })
);

const uri = 'mongodb://localhost/test';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(uri, options)
  .then(() => app.listen(9090, () => console.log("Server is listening")))
  .catch(err => {
    throw err
  })

