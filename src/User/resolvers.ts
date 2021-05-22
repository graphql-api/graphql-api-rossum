import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  User: {
    async organization(root, args, { dataSources }) {
      if (root.organization)
        return dataSources.rossum.organizations.retrieve(root.organization)
      return null
    }
  },
  Query: {
    async listUserRoles(root, args, { dataSources: { rossum } }, info) {
      return rossum.groups.list(args?.input)
    },
    retrieveUserRole(root, args, { dataSources: { rossum } }, info) {
      return rossum.groups.retrieve(args?.input)
    },
    listMemberships(root, args, { dataSources: { rossum } }, info) {
      return rossum.memberships.list(args.input)
    },
    retrieveMembership(root, args, { dataSources: { rossum } }, info) {
      return rossum.memberships.retrieve(args.input)
    },
    listUsers(root, args, { dataSources: { rossum } }, info) {
      return rossum.users.list(args.input)
    },
    retrieveUser(root, args, { dataSources: { rossum } }, info) {
      return rossum.users.retrieve(args.input)
    }
  },
  Mutation: {
    createMembership(root, args, { dataSources: { rossum } }, info) {},
    updateMembership(root, args, { dataSources: { rossum } }, info) {},
    deleteMembership(root, args, { dataSources: { rossum } }, info) {},
    createUser(root, args, { dataSources: { rossum } }, info) {},
    updateUser(root, args, { dataSources: { rossum } }, info) {},
    deleteUser(root, args, { dataSources: { rossum } }, info) {},
    changePassword(root, args, { dataSources: { rossum } }, info) {
      return rossum.changePassword(args.input)
    },
    resetPassword(root, args, { dataSources: { rossum } }, info) {
      return rossum.resetPassword(args.input)
    }
  }
}
