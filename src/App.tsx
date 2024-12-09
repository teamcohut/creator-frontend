import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Preview from "./pages/Preview";
import VerifyMail from "./pages/auth/VerifyMail";
import ParticipantsPage from "./pages/dashboard/participants/Participants";
import DashboardTemplate from "./components/templates/DashboardTemplate";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./context/auth/AuthState";
import Curriculum from "./components/organisms/dashboard/Curriculum/Curriculum";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ResendMail from "./pages/auth/ResendMail";
import SessionsDisplay from "./components/organisms/dashboard/Sessions/SessionsDisplay";
import { ProgramContextProvider } from "./context/programs/ProgramState";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <ProgramContextProvider>
            <DashboardTemplate />
          </ProgramContextProvider>
        </ProtectedRoute>
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
          path: "learning",
          element: <SessionsDisplay />,
        },
      ],
    },
    {
      path: "curriculum",
      element: <Curriculum />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/resend-mail",
      element: <ResendMail />,
    },
    {
      path: "/activate/:id",
      element: <VerifyMail />,
    },
    {
      path: "/preview",
      element: <Preview />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
