import { NextApiRequest, NextApiResponse } from 'next';
import { getRequestStats } from '@src/lib/client';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const stats = getRequestStats();

  // Format the response
  const response = {
    totalRequests: stats.totalRequests,
    requestsWithTimestamps: stats.requests.map((r, index) => ({
      requestNumber: index + 1,
      timestamp: r.timestamp.toISOString(),
      queryPreview: r.query.slice(0, 200),
      stackTrace: r.stack?.split('\n').slice(0, 5).join('\n'), // First 5 lines of stack
    })),
  };

  res.status(200).json(response);
}
