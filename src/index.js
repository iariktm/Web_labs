import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.js';
import Restaurant from './pages/Restaurant.js';
import TheHeader from './components/TheHeader.js';
import TheFooter from './components/TheFooter.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "restaurant",
    element: <Restaurant />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <TheHeader />
    <RouterProvider router={router} />
    <TheFooter />
  </>
);
