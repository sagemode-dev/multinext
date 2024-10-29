// src/pages/index.tsx
import { useTenant } from '@/hooks/useTenant';
import Head from 'next/head';

export default function Home() {
  const { tenant } = useTenant();

  if (!tenant) return null;

  return (
    <>
      <Head>
        <title>{tenant.name}</title>
        <meta name="description" content={`Welcome to ${tenant.name}`} />
      </Head>

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to {tenant.name}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a multi-tenant application demonstration
        </p>
        <button
          className="px-6 py-3 rounded text-white"
          style={{ backgroundColor: tenant.theme.primaryColor }}
        >
          Get Started
        </button>
      </div>
    </>
  );
}