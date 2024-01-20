import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AIServicePage from './pages/AIServicePage/AIServicePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/' || '/*',
        element: <AIServicePage />,
      },
      {
        path: 'archive/service',
        element: <div style={{ height: '300px' }}>service</div>,
      },
      {
        path: 'archive/lecture',
        element: <div style={{ height: '300px' }}>lecture</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
