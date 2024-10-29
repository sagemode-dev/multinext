// src/types/tenant.ts
export interface Tenant {
    id: string;
    name: string;
    domain: string;
    theme: {
      primaryColor: string;
      logo: string;
      name: string;
    };
  }