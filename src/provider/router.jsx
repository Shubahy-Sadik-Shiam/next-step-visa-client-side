import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyVisaApplication from "../pages/MyVisaApplication";
import VisaDetails from "../pages/VisaDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:4000/visas')
        },
        {
            path: "/allVisas",
            element: <AllVisas></AllVisas>,
            loader: ()=> fetch("http://localhost:4000/allVisas")
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
        {
          path: "/visa/:id",
          element: <VisaDetails></VisaDetails>,
          loader: ({params})=> fetch(`http://localhost:4000/allVisas/${params.id}`)
        }
      ]
    },
  ]);

export default router;