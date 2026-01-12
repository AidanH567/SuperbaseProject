import { createBrowserRouter } from "react-router-dom";
import  Signin from "./components/Signin";
import  Header  from "./components/Header";
import  DashBoard  from "./routes/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
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
