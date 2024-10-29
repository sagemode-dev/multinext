// src/pages/api/tenant-config.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Try to get hostname from x-hostname header or fallback to host header
  const hostname = req.headers['x-hostname'] as string || req.headers.host || '';
  
  console.log('API - Using hostname:', hostname);

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    
    // Log the query we're making
    console.log('API - Looking for domain:', hostname);
    
    const tenant = await db.collection('tenants').findOne({ domain: hostname });
    console.log('API - Found tenant:', tenant);

    if (!tenant) {
      const defaultTenant = {
        id: 'default',
        name: 'Default App',
        domain: hostname,
        theme: {
          primaryColor: '#000000',
          logo: 'https://placehold.co/100x50/000000/FFFFFF/svg?text=Default',
          name: 'Default App'
        }
      };
      console.log('API - Using default tenant for', hostname);
      return res.status(200).json(defaultTenant);
    }
    
    console.log('API - Returning tenant for', hostname);
    res.status(200).json(tenant);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}