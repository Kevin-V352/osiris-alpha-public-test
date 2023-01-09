import { GraphQLClient } from 'graphql-request';
import { constants } from '@/config';

export const client = new GraphQLClient(
  constants.HYGRAPH_PROJECT_API,
  { headers: { authorization: `Bearer ${constants.HYGRAPH_PROD_AUTH_TOKEN}` } }
);