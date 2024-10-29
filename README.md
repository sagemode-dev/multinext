# 🏢 Multi-tenant Next.js Application

A production-ready multi-tenant application built with Next.js that serves different content based on the domain name. Perfect for SaaS applications that require white-labeling.

[![Next.js](https://img.shields.io/badge/Next.js-latest-blue.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-latest-green.svg)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-latest-blue.svg)](https://tailwindcss.com/)

## 🌟 Features

- 🔐 Domain-based tenant detection
- 🎨 Dynamic branding per tenant (logos, colors, names)
- 📦 MongoDB integration for tenant configuration
- 🚀 Easy deployment to Vercel
- 📱 Responsive design with Tailwind CSS
- 🔄 Real-time tenant configuration updates

## 📖 Detailed Tutorial

Check out the step-by-step tutorial series:
- [Part 1: Building a Multi-tenant Next.js Application](your-blog-url-1)
- [Part 2: Deploying to Vercel](your-blog-url-2)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VibhakaraAcharya/multitenant-next-demo
cd multitenant-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your MongoDB connection string:
```env
MONGODB_URI=your_mongodb_uri
MONGODB_DB=multitenant-demo
```

4. Seed the database:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

### Local Testing

Add to your hosts file:
```bash
127.0.0.1 localhost
127.0.0.1 clienta.localhost
```

Visit:
- http://localhost:3000 (default tenant)
- http://clienta.localhost:3000 (client tenant)

## 🏗️ Project Structure

```
├── public/
│   └── logos/            # Tenant logos
├── src/
│   ├── components/       # React components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities
│   ├── pages/           # Next.js pages
│   └── types/           # TypeScript types
├── scripts/             # Database scripts
└── package.json
```

## 📝 Environment Variables

```env
MONGODB_URI=            # MongoDB connection string
MONGODB_DB=             # Database name
```

## 🔧 Configuration

### Tenant Configuration Example

```typescript
{
  id: 'default',
  name: 'Default App',
  domain: 'localhost:3000',
  theme: {
    primaryColor: '#000000',
    logo: '/logos/default-logo.svg',
    name: 'Default App'
  }
}
```

## 🚀 Deployment

Detailed deployment instructions available in [Part 2 of the tutorial](your-blog-url-2).

Quick deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/multitenant-nextjs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vercel Platform](https://vercel.com)
- [Tailwind CSS](https://tailwindcss.com)

## 📧 Contact

Vibhakara Acharya - [@SageModeDev](https://x.com/SageModeDev)

Project Link: [https://github.com/VibhakaraAcharya/multitenant-next-demo](https://github.com/VibhakaraAcharya/multitenant-next-demo)

---

⭐️ If this project helped you, don't forget to give it a star!
