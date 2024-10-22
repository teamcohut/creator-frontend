import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  const router = ([
    {
      path: '/signup',
      element: <Sign
    }
  ])
  return (
    <>
      <RouterProvider />
    </>
  );
}

export default App;
