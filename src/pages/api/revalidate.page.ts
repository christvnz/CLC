import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Get the slug from the request or Contentful webhook payload
    const body = req.body || {};
    const fieldSlug = body?.fields?.slug;
    const resolvedFieldSlug =
      typeof fieldSlug === 'string'
        ? fieldSlug
        : fieldSlug && typeof fieldSlug === 'object'
          ? Object.values(fieldSlug)[0]
          : undefined;
    const slug = body?.slug || req.query.slug || resolvedFieldSlug;
    
    if (slug) {
      // Revalidate specific page
      await res.revalidate(`/${slug}`);
      await res.revalidate('/food');
      await res.revalidate('/lifestyle');
      await res.revalidate('/');
    } else {
      // Revalidate common pages
      await res.revalidate('/');
      await res.revalidate('/food');
      await res.revalidate('/lifestyle');
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
