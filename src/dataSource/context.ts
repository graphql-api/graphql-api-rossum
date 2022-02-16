import { ContextFunction } from 'apollo-server-core'
import { AuthorizationToken } from './types'
/**
 *
 * @see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields
 *
 */

export const getRossumContext: ContextFunction<Request, { token?: AuthorizationToken }> = (
  request
) => {
  const authorizationToken = request?.headers?.get?.('Authorization')
  if (authorizationToken?.startsWith('token ')) {
    return { token: authorizationToken as AuthorizationToken }
  } else if (typeof authorizationToken === 'string') {
    return { token: `token ${authorizationToken}` }
  }
  return {}
}
