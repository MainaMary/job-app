import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "../pages/NotFound";
import AddJob from "../dashboard/AddJob";
import Alljobs from "../dashboard/Alljobs";
import Chat from "../pages/chat/Chat";
const HomePage = React.lazy(() => import("../pages/HomePage"))
const Register =React.lazy(()=> import("../pages/Register"))
const UserProfile = React.lazy(() =>import( "../dashboard/UserProfile"))
const LogIn = React.lazy(() =>import("../pages/LogIn"))
const Home = React.lazy(() =>import("../pages/Dashboard"))
const ProtectedRoute = React.lazy(() => import("../routes/ProtectedRoute"))
const array = [
  { path: "/", component: <HomePage /> },
  { path: "/register", component: <Register /> },
  { path: "/LogIn", component: <LogIn /> },
  {path: "/userProfile", component: <UserProfile /> },
  {path:"/addJob", component:<AddJob/>},
  {path:"/allJobs", component:<Alljobs/>},
  {path:"/home", component:<Home/>},
  {path:"/chat", component:<Chat/>},
  { path: "*", component: <NotFound /> },
];
const AllRoutes = () => {
  return (
    <Routes>
      {array.map(({ path, component }, index) => (
        <Route key={index} path={path} element={component} />
      ))}
    </Routes>
  );
};
export default AllRoutes;
