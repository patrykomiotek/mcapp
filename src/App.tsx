import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GeneratorPage } from './pages';
import { LoginPage } from './pages';
import { AuthInfoPage } from '@pages/AuthInfoPage';
import { AuthProvider } from '@components/Auth';
import { ThemeProvider } from '@components/Theme';
import { ProductsPage } from '@pages/ProductsPage';
import { ProductPage } from '@pages/ProductPage';
import { Footer } from '@atoms/Footer';
import { Header } from '@molecules/Header';

const queryClient = new QueryClient();

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/generator" element={<GeneratorPage />} />
              <Route path="/auth-info" element={<AuthInfoPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
          </Router>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
