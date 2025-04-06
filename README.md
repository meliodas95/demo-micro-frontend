# Micro Frontend Demo

A demonstration of a micro frontend architecture using React 19, Vite, and Module Federation.

## Features

- Container application that hosts micro frontends
- Two micro frontend applications (App1 and App2)
- Shared dependencies and styling
- React Router for navigation
- React Query for data fetching
- Framer Motion for animations
- TailwindCSS for styling
- TypeScript for type safety

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository
2. Install dependencies for each application:

```bash
# Install container dependencies
cd container
npm install

# Install App1 dependencies
cd ../micro-apps/app1
npm install

# Install App2 dependencies
cd ../app2
npm install
```

## Running the Application

You can start all applications using the provided script:

```bash
./start.sh
```

This will start:
- Container application on http://localhost:5170
- App1 on http://localhost:5171
- App2 on http://localhost:5172

## Architecture

- **Container**: The main application that hosts the micro frontends
- **App1**: A micro frontend that demonstrates data fetching and animations
- **App2**: A micro frontend that demonstrates date formatting and different styling
- **Shared**: Common dependencies and utilities

## Technologies Used

- React 19
- Vite
- Module Federation
- TypeScript
- TailwindCSS
- React Router
- React Query
- Framer Motion
- dayjs

## Development

Each application can be developed independently. The container application will load the micro frontends dynamically using Module Federation.

## Tailwind CSS Setup

This project uses Tailwind CSS for styling. The configuration is set up with:

1. `tailwind.config.cjs` files in each application with:
   - A shared color palette
   - A `safelist` of common utility classes to ensure they're always included
   - Proper content sources for scanning

2. `postcss.config.cjs` files configured to use Tailwind CSS with the appropriate configuration path

3. CSS files with the required Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

If you encounter any styling issues, check that:
- Your utility classes are included in the safelist
- The proper Tailwind CSS packages are installed
- PostCSS is correctly configured

## License

MIT
