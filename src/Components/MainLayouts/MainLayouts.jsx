import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";


const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-2">
                <Header />
            </div>
            <div className="px-2"><Outlet /></div>
            <Toaster/>
        </div>
    );
};

export default MainLayouts;