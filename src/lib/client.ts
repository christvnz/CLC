import { GraphQLClient } from 'graphql-request';

import { getSdk } from '@src/lib/__generated/sdk';
import { endpoint } from 'codegen';

// Make sure environment variables are properly accessed
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_PREVIEW_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN || process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

// Log for debugging (remove in production)
if (!CONTENTFUL_ACCESS_TOKEN) {
  console.warn('Warning: CONTENTFUL_ACCESS_TOKEN is not defined in environment variables');
}

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
});

const previewGraphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_PREVIEW_TOKEN}`,
  },
});

export const client = getSdk(graphQlClient);
export const previewClient = getSdk(previewGraphQlClient);
