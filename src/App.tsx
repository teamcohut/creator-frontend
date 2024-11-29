import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import ForgotPassword from './components/organisms/forms/loginForm/ForgotPassword';
import ResetPassword from './components/organisms/forms/loginForm/ResetPassword';
import LoginPage from './components/organisms/forms/loginForm/LoginPage';
import ResetPasswordSuccess from './components/organisms/forms/loginForm/ResetPasswordSuccess';
import UserChoice from './components/organisms/forms/CustomizeProgram';
import ProgramDetails from './components/organisms/forms/CustomizeProgram/programdetails'
import LoginSuccess from './components/organisms/forms/loginForm/LoginSuccess';
import Dashboard from './pages/dashboard/Dashboard';
import Preview from './pages/Preview';
import ParticipantsPage from './pages/dashboard/participants/Participants';
import DashboardTemplate from './components/templates/DashboardTemplate';
import NotFound from './pages/NotFound';
<<<<<<< HEAD
import Sessions from './pages/dashboard/sessions/Sessions';
=======
import Calendar from './components/organisms/dashboard/Calendar/Calendar';
import { AuthContextProvider } from './context/auth/AuthState';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardTemplate />,
      children: [
        {
          path: "",
          element: <Dashboard />,
<<<<<<< HEAD
        },
        {
=======
        }, {
        }, {
>>>>>>> 5f79feb1501b412bfee5dd215608508e190ec49e
path: "participants",
  element: <ParticipantsPage />,
        },
{
<<<<<<< HEAD
  path: "sessions",
    element: <Sessions />,
        },
      ],
=======
          path: "calendar",
          element: <Calendar />
        },
        {
          path: "curriculum",
          element: <Curriculum />
        }
      ]
>>>>>>> 5f79feb1501b412bfee5dd215608508e190ec49e
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
  path: '/preview',
    element: <Preview />,
    }, {
}, {
  path: '*',
    element: <NotFound />,
    },


>>>>>>> 5f79feb1501b412bfee5dd215608508e190ec49e
  ]);

return (
  <>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </>
);
}

export default App;
