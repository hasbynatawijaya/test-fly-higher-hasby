import { createBrowserRouter } from "react-router-dom";

import AuthPage from "@/pages/auth";
import HomePage from "@/pages/home";
import SignInPage from "@/pages/signin";
import SignUpPage from "@/pages/signup";

// import MainLayout from "@/layouts/MainLayout";

// import NotFoundPage from "@/pages/not-found";
// import PokeListPage from "@/pages/poke-list";
// import PokeDetailsPage from "@/pages/poke-details";
// import MyPoke from "@/pages/my-poke";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        index: true,
        element: <SignInPage />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
