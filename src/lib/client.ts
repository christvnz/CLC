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

// Request counter for debugging
let requestCount = 0;
const requestLog: Array<{ timestamp: Date; query: string; stack?: string }> = [];

// Middleware to log all GraphQL requests
const requestMiddleware = (request: any) => {
  requestCount++;
  const timestamp = new Date();
  const stack = new Error().stack;

  // Log request details
  console.log(`[GraphQL Request #${requestCount}]`, {
    timestamp: timestamp.toISOString(),
    endpoint,
    query: request.body?.slice(0, 100) + '...', // First 100 chars of query
  });

  // Store in log for analysis
  requestLog.push({
    timestamp,
    query: request.body || 'unknown',
    stack,
  });

  return request;
};

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
  },
  requestMiddleware,
});

const previewGraphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${CONTENTFUL_PREVIEW_TOKEN}`,
  },
  requestMiddleware,
});

export const client = getSdk(graphQlClient);
export const previewClient = getSdk(previewGraphQlClient);

// Helper to get request stats
export const getRequestStats = () => ({
  totalRequests: requestCount,
  requests: requestLog,
  lastRequest: requestLog[requestLog.length - 1],
});
