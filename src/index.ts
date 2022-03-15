import introspection from '../introspection.json'
import { buildClientSchema, IntrospectionQuery, printSchema } from 'graphql'
const typeDefs = printSchema(buildClientSchema(introspection as unknown as IntrospectionQuery))

export { typeDefs }
export { RossumDataSource, getRossumContext } from './dataSource'
export { resolvers } from './resolvers'
