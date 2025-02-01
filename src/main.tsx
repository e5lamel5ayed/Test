import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // React Query
import { IntlProvider } from 'react-intl'; // React Intl
import App from './App';
import Home from './app/Modules/Home/Home';
import StudentPage from './app/Modules/Student/index';
import MessagePage from './app/Modules/Message/index';



// PrimeReact core styles
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';

// PrimeIcons
import 'primeicons/primeicons.css';

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthPage } from './app/Modules/auth';
import { Error404 } from './app/Modules/errors/components/Error404';
// import Login from './app/Modules/auth/components/Login';
import "./app/Modules/layout/Layout.css";

// Messages for localization
const messages = {
  en: {
    welcome: 'Welcome',
    studentPage: 'Student Page',
    // Add more translations as needed
  },
  fr: {
    welcome: 'Bienvenue',
    studentPage: 'Page Étudiant',
    // Add more translations for French
  },
};

// Default locale
const locale = 'en'; // Change this dynamically as needed

// Create a new QueryClient instance
const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<StudentPage />} />
        <Route path="team" element={<Home />} />
        <Route path="student" element={<StudentPage />} />
        <Route path="message" element={<MessagePage />} />

        <Route path="login" element={<AuthPage />} />

      </Route>
        <Route path="*" element={<Error404 />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Wrap with IntlProvider */}
    <IntlProvider locale={locale} messages={messages[locale]}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </IntlProvider>
  </React.StrictMode>
);
