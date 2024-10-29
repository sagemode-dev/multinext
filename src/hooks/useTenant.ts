// src/hooks/useTenant.ts
import { useEffect, useState } from 'react';
import type { Tenant } from '../types/tenant';

export function useTenant() {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tenant-config')
      .then(res => res.json())
      .then(config => {
        console.log('Tenant config received:', config);
        setTenant(config);
        setLoading(false);
      })
      .catch(() => {
        
        setLoading(false);
      });
  }, []);

  return { tenant, loading };
}