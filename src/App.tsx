import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import SignUpPage1 from './components/ui/organisms/forms/signUpForm/SignUpPage1';
import SignUpPage2 from './components/ui/organisms/forms/signUpForm/SignUpPage2';

function App() {
  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <SignUp />,
      children: [
        {
          path: "/signup/",
          element: <SignUpPage1 />
        },
        {
          path: "/signup/step2",
          element: <SignUpPage2 />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
