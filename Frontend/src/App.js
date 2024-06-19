import React, { Profiler } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import { Navigate } from "react-router-dom";
import User from "./pages/user/User";
import SocialMediaStoryPost from "./pages/Story/SocialMediaStoryPost";
import SocialMediaPostPage from "./pages/home/post/SocialMediaPostPage";
const App = () => {
  const currentUser = false;
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;

      return children;
    }
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/post",
      element: <SocialMediaPostPage />,
    },
    {
      path: "/story",
      element: <SocialMediaStoryPost />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
