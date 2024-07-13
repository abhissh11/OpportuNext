import React from "react";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import AllJobjsPage from "./pages/AllJobjsPage";
import JobsPage from "./pages/JobsPage";
import HomePage from "./pages/HomePage";
import JobPostingPage from "./pages/JobPostingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <AllJobjsPage />,
      },
      {
        path: "/jobs/:slug",
        element: <JobsPage />,
      },
      {
        path: "/post-Job",
        element: <JobPostingPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
