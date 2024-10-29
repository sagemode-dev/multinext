// scripts/check-tenants.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function checkTenants() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    
    const tenants = await db.collection('tenants').find({}).toArray();
    console.log('Current tenants in database:', JSON.stringify(tenants, null, 2));
    
    await client.close();
  } catch (error) {
    console.error('Error checking tenants:', error);
  }
}

checkTenants();