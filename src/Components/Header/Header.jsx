import { Link, NavLink } from "react-router-dom";
import { FaCartFlatbedSuitcase} from "react-icons/fa6";


const Header = () => {
    return (
        <div className="bg-[#f1f1f1f1]">
            <div className="md:flex justify-between items-center py-2  max-w-screen-xl mx-auto">
            
            <div className=""><img className="h-24" src="https://i.ibb.co/PGwgFGc/logo.png" alt="" /></div>

            <nav>
                <ul className="md:flex gap-5 font-semibold ">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/add-product'>Add Product</NavLink>
                    </li>
                </ul>
            </nav>

                <div className="flex items-center gap-3 font-semibold"><button>My Cart</button><FaCartFlatbedSuitcase className="text-3xl font-bold"></FaCartFlatbedSuitcase></div>
            <div className="">
                <div className="avatar online">
                    <div className="w-14 rounded-full">
                        <img src="https://w7.pngwing.com/pngs/140/492/png-transparent-user-avatar-playerunknown-s-battlegrounds-cryptocurrency-mixer-others-thumbnail.png" />
                    </div>
                </div>
            </div>
            <div className="">
                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
                  
                    
            </div>
            </div>
        </div>
        
    );
};

export default Header;