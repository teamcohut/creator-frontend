import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/pages/auth/SignUp';
import SignUpPage1 from './components/ui/organisms/forms/signUpForm/SignUpPage1';
import SignUpPage2 from './components/ui/organisms/forms/signUpForm/SignUpPage2';
import Login from './components/pages/auth/Login';
import ForgotPassword from './components/ui/organisms/forms/loginForm/ForgotPassword';
import ResetPassword from './components/ui/organisms/forms/loginForm/ResetPassword';
import LoginPage from './components/ui/organisms/forms/loginForm/LoginPage';

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
    },
    {
      path: '/login',
      element: <Login />,
      children: [
        {
          path: '',
          element: <LoginPage />
        },
        {
          path: 'forgot-password',
          element: <ForgotPassword />
        },
        {
          path: 'reset-password',
          element: <ResetPassword />
        }
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
