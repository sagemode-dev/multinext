// scripts/seed-tenants.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const tenants = [

  /** Replace this with actual domain data in production
   * 
   * To test locally, you'll need to modify your hosts file:
   * ----------------------------------------------------------
   * On Windows: C:\Windows\System32\drivers\etc\hosts
   * On Mac/Linux: /etc/hosts
   * 
   * Add these lines:
   * ---------------------------------
   * 127.0.0.1	localhost
   * 127.0.0.1	clienta.localhost
   * ---------------------------------
   */

  {
    id: 'default',
    name: 'Default App',
    domain: 'localhost:3000',       // loads @ localhost:3000
    theme: {
      primaryColor: '#000000',
      logo: 'https://placehold.co/100x50/D4F3B7/000000/svg?text=Default',  
      name: 'Default App'
    }
  },
  {
    id: 'clienta',
    name: 'Client A Portal',
    domain: 'clienta.localhost:3000', // loads @ clienta.localhost:3000
    theme: {
      primaryColor: '#FF0000',
      logo: 'https://placehold.co/100x50/FF0000/000000/svg?text=ClientA',  // Changed to PNG
      name: 'Client A Portal'
    }
  }
];
//	#007FFF

async function seedTenants() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db(process.env.MONGODB_DB);
    
    // Delete existing tenants
    await db.collection('tenants').deleteMany({});
    
    // Insert new tenants
    await db.collection('tenants').insertMany(tenants);
    
    console.log('Tenants seeded successfully');
    await client.close();
  } catch (error) {
    console.error('Error seeding tenants:', error);
    process.exit(1);
  }
}

seedTenants();