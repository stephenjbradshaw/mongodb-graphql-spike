const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type User {
    _id: ID!
    username: String!
    numberOfPets: Int!
    likesMarmite: Bool!
    createdAt: String!
  }

  input UserInput {
    username: String!
    numberOfPets: Int!
    likesMarmite: Bool!
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
