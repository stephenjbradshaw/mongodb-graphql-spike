const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type User {
    _id: ID!
    username: String!
    numberOfPets: Int!
    likesMarmite: Boolean!
    createdAt: String!
  }

  input UserInput {
    username: String!
    numberOfPets: Int!
    likesMarmite: Boolean!
  }

  type Query {
    users:[User!]
  }

  type Mutation {
    createUser(user:UserInput): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
