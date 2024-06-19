import React, { Profiler } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { Navigate } from "react-router-dom";
import User from "./pages/user/User";
import SocialMediaStoryPost from "./pages/Story/SocialMediaStoryPost";
import SocialMediaPostPage from "./pages/post/SocialMediaPostPage";
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
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
