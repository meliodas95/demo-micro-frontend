import { motion } from 'framer-motion';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';

const queryClient = new QueryClient();

function AppContent() {
  const { data, isLoading } = useQuery({
    queryKey: ['app2-data'],
    queryFn: async () => {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { 
        message: 'Data from App 2',
        timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss')
      };
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <h2 className="text-2xl font-bold text-secondary-600 mb-4">App 2</h2>
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-3 mt-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      ) : (
        <div className="card">
          <p className="text-gray-600">{data?.message}</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {data?.timestamp}</p>
          <button className="btn btn-secondary mt-4">Action Button</button>
        </div>
      )}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
