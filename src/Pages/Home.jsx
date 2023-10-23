import { FaCaravan, FaHeadphonesSimple, FaMoneyBillTransfer, FaOpencart } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import SliderProduct from "../Components/SliderProduct";

const Home = () => {

    const brands = useLoaderData();
   


    return (
        <div>
            <div className="">
            <section>
                <div className="max-w-screen-2xl mx-auto ">
                    <img className="w-full " src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7bad8c93546277.5f48a570f12f8.jpg" alt="" />
                </div>
            </section>
            </div>
            {/* section two */ }
            <section className="max-w-screen-xl mx-auto mt-10">
                <div className="grid grid-cols-2 gap-5 justify-items-center md:grid-cols-4 md:gap-10">
                    <div className="">
                        <div className=""><p className="text-xl font-bold">Free Shipping</p></div>
                        <div className="ml-8 text-5xl text-blue-500"><FaCaravan/></div>
                    </div>
                    <div className="">
                        <div className=""><p className="text-xl font-bold">Easy Returns</p></div>
                        <div className="ml-5 text-5xl text-blue-500"><FaOpencart/></div>
                    </div>
                    <div className="">
                        <div className=""><p className="text-xl font-bold">24/7 Customer Support</p></div>
                        <div className="ml-20 text-5xl text-blue-500"><FaHeadphonesSimple/></div>
                    </div>
                    <div className="">
                        <div className=""><p className="text-xl font-bold">Money-Back Guarantee</p></div>
                        <div className="ml-20 text-5xl text-blue-500"><FaMoneyBillTransfer/></div>
                    </div>
                    
                </div>
            </section>
            {/* category section */}
            <section className="max-w-screen-xl mx-auto mt-10">
                <div className="">
                    <h2 className="text-xl font-bold text-center py-10">Shop By Category</h2> 
                    <div className="grid grid-cols-2 justify-items-center md:grid-cols-6  justify-between">
                        {
                            brands.map( brand => <Brands key={brand.id} brand={brand}></Brands>)
                        }
                    </div>
                </div>
            </section>
            <section className="max-w-screen-xl mx-auto mt-32">
                <div className="bg-blue-50 max-w-fit p-5 rounded-md"><h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Grab The Latest Offer Now!</h1></div>
                <div className=" px-8 my-10">
                    <img className="rounded-xl" src="https://static.vecteezy.com/system/resources/previews/008/601/839/non_2x/online-shopping-background-design-free-vector.jpg" alt="" />
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto mt-32">

                <SliderProduct/>
                
            </section>
        </div>
    );
};

export default Home;