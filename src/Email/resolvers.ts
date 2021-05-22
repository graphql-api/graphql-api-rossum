import { Resolvers } from '../types'

export const resolvers: Resolvers = {
  Email: {
    id: (root) => String(root.id)
  }
}
