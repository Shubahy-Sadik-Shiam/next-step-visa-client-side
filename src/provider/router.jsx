import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyVisaApplication from "../pages/MyVisaApplication";
import VisaDetails from "../pages/VisaDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment-10-server-tau-nine.vercel.app/visas"),
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch("https://assignment-10-server-tau-nine.vercel.app/allVisas"),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "/myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisas></MyAddedVisas>
          </PrivateRoute>
        ),
      },
      {
        path: "/myVisaApplication",
        element: (
          <PrivateRoute>
            <MyVisaApplication></MyVisaApplication>
          </PrivateRoute>
        ),
        loader: () => fetch("https://assignment-10-server-tau-nine.vercel.app/myApplied"),
      },
      {
        path: "/visa/:id",
        element: (
          <PrivateRoute>
            {" "}
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-tau-nine.vercel.app/allVisas/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
