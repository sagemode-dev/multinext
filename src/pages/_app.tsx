// src/pages/_app.tsx
import { useTenant } from '@/hooks/useTenant';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';

export default function App({ Component, pageProps }: AppProps) {
  const { tenant, loading } = useTenant();

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {tenant && (
        <header className="border-b" style={{ borderColor: tenant.theme.primaryColor }}>
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image 
                src={tenant.theme.logo}
                alt={tenant.name}
                width={100}
                height={50}
                priority
              />
              <span 
                className="font-bold text-xl"
                style={{ color: tenant.theme.primaryColor }}
              >
                {tenant.theme.name}
              </span>
            </div>
            <nav className="flex gap-4">
              <button className="px-4 py-2 rounded hover:bg-gray-100">
                Features
              </button>
              <button className="px-4 py-2 rounded hover:bg-gray-100">
                About
              </button>
              <button 
                className="px-4 py-2 rounded text-white"
                style={{ backgroundColor: tenant.theme.primaryColor }}
              >
                Sign In
              </button>
            </nav>
          </div>
        </header>
      )}
      <main className="container mx-auto px-4 py-8">
        <Component {...pageProps} tenant={tenant} />
      </main>
    </div>
  );
}