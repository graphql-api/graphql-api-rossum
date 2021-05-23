import { Resolvers } from '../types'
export const resolvers: Resolvers = {
  Query: {
    async token(root, args, { dataSources }, info) {
      return { key: await dataSources.rossum.token }
    }
  },
  Mutation: {
    async login(root, args, { dataSources }, info) {
      return dataSources.rossum.login()
    }
  }
}
