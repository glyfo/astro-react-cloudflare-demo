# Astro + Cloudflare Workers Demo

This project demonstrates island architecture using Astro running on Cloudflare Workers. It showcases:

- Server-rendered Astro components
- A client-side React component "island"
- Cloudflare Workers API integration
- Tailwind CSS 4 for styling

## Island Architecture Explained

Island architecture is a web development approach where most of the page is static HTML (the "sea"), with interactive components ("islands") sprinkled throughout.

This demo includes:

- Static content rendered by Astro at build time
- An interactive React counter component that hydrates on the client
- A simple API endpoint using Cloudflare Workers

## Project Structure

```
/
├── src/
│   ├── components/
│   │   └── Counter.jsx      # React island component
│   ├── layouts/
│   │   └── Layout.astro     # Main layout template
│   └── pages/
│       └── index.astro      # Main page
├── functions/
│   └── api/
│       └── data.js          # Cloudflare Worker API endpoint
├── public/
│   └── favicon.svg          # Site favicon
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.mjs      # Tailwind CSS configuration
└── worker.js                # Main Cloudflare Worker script
```

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
npx wrangler deploy
```

## Understanding Island Architecture

In this architecture:

1. **The Sea:** Static HTML rendered by Astro on the server

   - Loads quickly
   - Uses no client-side JavaScript
   - Great for SEO and Core Web Vitals

2. **The Islands:** Interactive React components

   - Only hydrate the parts of the page that need interactivity
   - Minimal JavaScript sent to the client
   - Better performance than full client-side rendering

3. **Edge Computing:** Cloudflare Workers
   - Runs your code close to users around the world
   - Low latency responses
   - Serverless execution model
