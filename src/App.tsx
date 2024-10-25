import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/pages/auth/SignUp';
import SignUpPage1 from './components/ui/organisms/forms/signupForm';
import Login from './components/pages/auth/Login';
import ForgotPassword from './components/ui/organisms/forms/loginForm/ForgotPassword';
import ResetPassword from './components/ui/organisms/forms/loginForm/ResetPassword';
import LoginPage from './components/ui/organisms/forms/loginForm/LoginPage';
import SignupSuccess from './components/ui/organisms/forms/signupForm/SignupSuccess';
import ResetPasswordSuccess from './components/ui/organisms/forms/success/ResetPasswordSuccess';
import UserChoice from './components/ui/organisms/forms/loginForm/UserChoice';
import LoginSuccess from './components/ui/organisms/forms/success/LoginSuccess';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp />
    },
    {
      path: '/signup',
      element: <SignUp />,
      children: [
        {
          path: "",
          element: <SignUpPage1 />
        },
        {
          path: "success",
          element: <SignupSuccess />
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
        },
        {
          path: 'reset-password-success',
          element: <ResetPasswordSuccess />
        },
        {
          path: 'user-choice',
          element: <UserChoice />
        },
        {
          path: 'login-success',
          element: <LoginSuccess />
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
