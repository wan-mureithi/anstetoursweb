import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/responsive.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';
import PackageList from './pages/PackageList';
import PackageDetails from './pages/PackageDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  //  loader: <Loader/>
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/tour-packages",
    element: <PackageList />,
  },
  {
    path: "/tour-packages/:id",
    element: <PackageDetails />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
