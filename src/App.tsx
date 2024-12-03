import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Preview from './pages/Preview';
import VerifyMail from './pages/auth/VerifyMail';
import ParticipantsPage from './pages/dashboard/participants/Participants';
import DashboardTemplate from './components/templates/DashboardTemplate';
import NotFound from './pages/NotFound';
import Sessions from './pages/dashboard/sessions/Sessions';
// import Calendar from './components/organisms/dashboard/Calendar/Calendar';
import { AuthContextProvider } from './context/auth/AuthState';
import Curriculum from './components/organisms/dashboard/Curriculum/Curriculum';
import RequireAuth from './pages/auth/RequireAuth';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import ResendMail from './pages/auth/ResendMail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardTemplate />
        </RequireAuth>
      ),
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "participants",
          element: <ParticipantsPage />,
        },
        {
          path: "sessions",
          element: <Sessions />,
        },
        {
          path: "sessions",
          element: <Sessions />,
        },
      ],
    }, 
    // {
    //   path: "calendar",
    //   element: <Calendar />
    // },
    {
      path: "curriculum",
      element: <Curriculum />
    },
    {
      path: "/signup",
      element: <SignUp />
    }, 
    {
      path: "/login",
      element: <Login />
    }, 
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    }, 
    {
      path: "/reset-password",
      element: <ResetPassword />
    },
    {
      path: "/resend-mail",
      element: <ResendMail />
    },
    {
      path: "/activate/:id",
      element: <VerifyMail />
    },
    {
      path: '/preview',
      element: <Preview />
    }, {
      path: '*',
      element: <NotFound />
    }


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
