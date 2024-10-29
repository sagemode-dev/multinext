// scripts/seed-tenants.js
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const tenants = [

  {
    id: 'default',
    name: 'Client A',
    domain: 'www.investchic.com',
    theme: {
      primaryColor: '#D4F3B7',
      logo: 'https://placehold.co/100x50/D4F3B7/000000/svg?text=Default',
      name: 'Client A'
    }
  },
  {
    id: 'vibhakara',
    name: 'VB Portal',
    domain: 'app.vibhakara.com',
    theme: {
      primaryColor: '#FF0000',
      logo: 'https://placehold.co/100x50/FF0000/FFFFFF/svg?text=ClientA',
      name: 'Vibhakara'
    }
  },
  {
    id: 'meramaster',
    name: 'meramaster portal',
    domain: 'multidemo.meramaster.com',
    theme: {
      primaryColor: '#743089',
      logo: 'https://placehold.co/100x50/743089/FFFFFF/svg?text=ClientA',
      name: 'Meramaster'
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