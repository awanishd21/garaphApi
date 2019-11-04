const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = `
  type User {
    id: Int!
    firstname: String!
    lastname: String
    email: String!
  }

  type Query {
    profile: User
  }

  type Mutation {
    signup (firstname: String!, lastname:String, email: String!, password: String!): String
    login (email: String!, password: String!): String
  }
`
module.exports = makeExecutableSchema({ typeDefs, resolvers })