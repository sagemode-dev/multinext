// scripts/seed-tenants.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const tenants = [
    {
        id: 'defaultlocal',
        name: 'Default App',
        domain: 'localhost:3000',
        theme: {
          primaryColor: '#000000',
          logo: 'https://placehold.co/100x50/000000/FFFFFF/svg?text=Default',
          name: 'Default App'
        }
      },
      {
        id: 'clienta',
        name: 'Client A Portal',
        domain: 'clienta.localhost:3000',
        theme: {
          primaryColor: '#FF0000',
          logo: 'https://placehold.co/100x50/FF0000/FFFFFF/svg?text=ClientA',
          name: 'Client A Portal'
        }
      },
  {
    id: 'default',
    name: 'Client A',
    domain: 'investchic.com',
    theme: {
      primaryColor: '#D4F3B7',
      logo: 'https://placehold.co/100x50/D4F3B7/000000/svg?text=Default',
      name: 'Client A'
    }
  },
  {
    id: 'vibhakara',
    name: 'VB Portal',
    domain: 'vibhakara.com',
    theme: {
      primaryColor: '#FF0000',
      logo: 'https://placehold.co/100x50/FF0000/FFFFFF/svg?text=ClientA',
      name: 'Vibhakara'
    }
  }
];

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