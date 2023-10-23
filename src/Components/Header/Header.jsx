/* eslint-disable no-unused-vars */
import { Link, NavLink, useParams } from "react-router-dom";
import { FaCartFlatbedSuitcase, FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Header = () => {
    const { id } = useParams()
    const { user, singOutUser } = useContext( AuthContext );


    const handleLogOut = () => {
        singOutUser()
            .then( res => {
                toast.success( 'Logout Successfully' )
            } )
            .catch()


    }

    return (
        <div className="bg-[#f1f1f1f1]">
            <div className="md:flex justify-between items-center py-2  max-w-screen-xl mx-auto">

                <div className=""><img className="h-24" src="https://i.ibb.co/MPvtQnx/logo-removebg-preview.png" alt="" /></div>

                <nav>
                    <ul className="md:flex gap-5 font-semibold ">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            {
                                user ? <NavLink to='/add-product'>Add Product</NavLink> : ''
                            }
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-3 font-semibold"><NavLink to='/cart'><button>My Cart</button></NavLink><FaCartFlatbedSuitcase className="text-3xl font-bold"></FaCartFlatbedSuitcase></div>
                <div className="">
                    {
                        user ? <div className="flex items-center gap-3">
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src={ user?.photoURL } />
                                </div>
                            </div>
                            <h2>{ user?.displayName }</h2>
                        </div>

                            :

                            <div className="avatar offline">
                                <div className="w-14 rounded-full">
                                    <img src="https://w7.pngwing.com/pngs/140/492/png-transparent-user-avatar-playerunknown-s-battlegrounds-cryptocurrency-mixer-others-thumbnail.png" />
                                </div>
                            </div>
                    }



                </div>
                <div className="">

                    {
                        user ?
                            <button onClick={ handleLogOut } className=" text-blue-400 flex">
                            <span className="text-2xl"><FaUser /></span>Logout</button>
                            :
                            <Link to='/login'>
                                <button className="btn text-orange-500"><span className="text-2xl"><FaUser /></span>Login</button> </Link>
                    }



                </div>
            </div>
        </div>

    );
};

export default Header;