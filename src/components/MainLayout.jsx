import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Spinner = () => (
    <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
)
const MainLayout = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    return (
        <div>
            <Navbar></Navbar>
            {isLoading && <Spinner></Spinner>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;