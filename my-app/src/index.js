import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Detail from './pages/details';
import HomePage from './pages/Homepage'

const router = createBrowserRouter([
  {
    path: '/PokeEasySave',
    element:<App/>,
    children:[
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'PokeEasySave/detail/:id',
        element: <Detail/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
