import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  Hook: {
    events(root) {
      if (root.events) {
        return root.events.map(formatHookEventForGraphQL)
      }
      return null
    },
    async queues(root: { queues?: [string] }, args, { dataSources }) {
      if (root.queues)
        return Promise.all(
          root.queues.map((queue) =>
            dataSources.rossum.queues.retrieve<{ id: string }>(queue)
          )
        )
      return null
    }
  },
  Query: {
    async listHooks(root, args, { dataSources: { rossum } }, info) {
      return rossum.hooks.list(args?.input)
    },
    async retrieveHooks(root, args, { dataSources: { rossum } }, info) {
      return rossum.hooks.retrieve(args.input)
    }
  },
  Mutation: {
    async createHook(root, args, { dataSources: { rossum } }, info) {},
    async updateHook(root, args, { dataSources: { rossum } }, info) {},
    async deleteHook(root, args, { dataSources: { rossum } }, info) {},
    async testHook(
      _,
      args,
      { dataSources }
    ): Promise<{ response: { messages: any[]; operations: any[] } }> {
      return dataSources.rossum.testHook(args.input)
    }
  }
}

const formatHookEventForRossum = (event) => event.replace('__', '.')
const formatHookEventForGraphQL = (event) => event.replace('.', '__')
