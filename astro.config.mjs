import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    runtime: {
      mode: 'advanced'
    }
  }),

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge"
      } : {}
    },
    
    build: {
      // Ensure client-side code is properly bundled
      assetsInlineLimit: 0,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Create a separate chunk for React
            if (id.includes('node_modules/react') || 
                id.includes('node_modules/react-dom')) {
              return 'react';
            }
          }
        }
      }
    }
  },

  integrations: [
    // Configure React with specific client directives
    react({
      include: ['**/*.jsx', '**/*.tsx'],
      // These options ensure proper client hydration
      experimentalReactChildren: true, 
      // Enable client directives for React components
      ssr: true,
      client: {
        // Force these components to load immediately for client-side rendering
        // Add your component paths here
        load: [
          // Example: './src/components/ClientComponent.jsx'
        ]
      }
    })
  ],
});