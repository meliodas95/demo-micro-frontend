import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const queryClient = new QueryClient();

// Lazy load micro frontends
const App1 = lazy(() => import('app1/App'));
const App2 = lazy(() => import('app2/App'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="text-black shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold text-primary-600">Micro Frontend Demo</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      Home
                    </Link>
                    <Link
                      to="/app1"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      App 1
                    </Link>
                    <Link
                      to="/app2"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      App 2
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Suspense fallback={<div className="card">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<div className="card">Welcome to the Micro Frontend Demo</div>} />
                  <Route path="/app1" element={<App1 />} />
                  <Route path="/app2" element={<App2 />} />
                </Routes>
              </Suspense>
            </motion.div>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
