import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyVisaApplication from "../pages/MyVisaApplication";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/allVisas",
            element: <AllVisas></AllVisas>
        },
        {
            path: "/addVisa",
            element: <AddVisa></AddVisa>
        },
        {
            path: "/myAddedVisas",
            element: <MyAddedVisas></MyAddedVisas>
        },
        {
            path: "/myVisaApplication",
            element: <MyVisaApplication></MyVisaApplication>
        },
      ]
    },
  ]);

export default router;