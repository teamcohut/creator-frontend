import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import ForgotPassword from './components/organisms/forms/loginForm/ForgotPassword';
import ResetPassword from './components/organisms/forms/loginForm/ResetPassword';
import LoginPage from './components/organisms/forms/loginForm/LoginPage';
import ResetPasswordSuccess from './components/organisms/forms/loginForm/ResetPasswordSuccess';
import UserChoice from './components/organisms/forms/loginForm/CustomizeProgram';
import ProgramDetails from './components/organisms/forms/loginForm/CustomizeProgram/programdetails'
import LoginSuccess from './components/organisms/forms/loginForm';
import Dashboard from './pages/dashboard/Dashboard';
import Preview from './pages/Preview';
import ParticipantsPage from './pages/dashboard/participants/Participants';
import DashboardTemplate from './components/templates/DashboardTemplate';
import NotFound from './pages/NotFound';
import Calendar from './components/organisms/dashboard/Calendar/Calendar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
        {
          path: "reset-password-success",
          element: <ResetPasswordSuccess />,
        },
        {
          path: "user-choice",
          element: <UserChoice />,
        },
        {
          path: "program-details",
          element: <ProgramDetails />,
        },
        {
          path: "login-success",
          element: <LoginSuccess />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardTemplate />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        }, {
          path: "participants",
          element: <ParticipantsPage />,
        },
        {
          path: "calendar",
          element: <Calendar />
        },
      ]
    }, {
      path: '/preview',
      element: <Preview />,
    }, {
      path: '*',
      element: <NotFound />,
    },

  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
