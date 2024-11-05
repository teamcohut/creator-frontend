import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import SignUpPage1 from './components/organisms/forms/signUpForm';
import Login from './pages/auth/Login';
import ForgotPassword from './components/organisms/forms/loginForm/ForgotPassword';
import ResetPassword from './components/organisms/forms/loginForm/ResetPassword';
import LoginPage from './components/organisms/forms/loginForm/LoginPage';
import SignupSuccess from './components/organisms/forms/signUpForm/SignupSuccess';
import ResetPasswordSuccess from './components/organisms/forms/success/ResetPasswordSuccess';
import UserChoice from './components/organisms/forms/loginForm/UserChoice';
import ProgramDetails from './components/organisms/forms/loginForm/UserChoice/programdetails'
import LoginSuccess from './components/organisms/forms/success/LoginSuccess';

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
          path: 'program-details',
          element: <ProgramDetails />
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
