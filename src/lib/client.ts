import { GraphQLClient } from 'graphql-request';

import { getSdk } from '@src/lib/__generated/sdk';
import { endpoint } from 'codegen';

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer 3d03j_MK1wUZRGUGH1quZ6tH9vNZt6DdQPPhYbI2cpI`,
  },
});

const previewGraphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
  },
});

export const client = getSdk(graphQlClient);
export const previewClient = getSdk(previewGraphQlClient);
