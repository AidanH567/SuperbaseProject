import { createBrowserRouter } from "react-router-dom";
import  Signin from "./components/Signin";
import  Header  from "./components/Header";
import  DashBoard  from "./routes/DashBoard";
import Signup from "./components/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Header />
        <DashBoard />
      </>
    ),
  },
]);
