import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Preview from "./pages/Preview";
import VerifyMail from "./pages/auth/VerifyMail";
import ParticipantsPage from "./components/organisms/dashboard/participants/Participants";
import DashboardTemplate from "./components/templates/DashboardTemplate";
import NotFound from "./pages/NotFound";
import { AuthContextProvider } from "./context/auth/AuthState";
import Curriculum from "./components/recycle/Curriculum/Curriculum";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ResendMail from "./pages/auth/ResendMail";
import SessionsDisplay from "./components/organisms/dashboard/Sessions/SessionsDisplay";
import { ProgramContextProvider } from "./context/programs/ProgramState";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GeneralSettings from "./pages/dashboard/settings/GeneralSettings";
import SessionDetails from "./components/organisms/dashboard/Sessions/SessionDetails";
import { ErrorBoundary } from "react-error-boundary";
import Mainloader from "./helpers/loader";
import ErrorUI from "./helpers/ErrorUI";


function App() {

  const errorHandler = (err: any, info: any) => {
    console.log(err, 'logged error');
    console.log(info, 'Logged error info');
  }

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
        {
          path: "/learning/:sessionId",
          element: <SessionDetails />
        },
        {
          path: "settings",
          element: <GeneralSettings />,
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
          <Suspense fallback={<Mainloader />}>
            <ErrorBoundary FallbackComponent={ErrorUI} onReset={() => { window.location.reload() }} onError={errorHandler}>
              <RouterProvider router={router} />

            </ErrorBoundary>

          </Suspense>
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
