import { FaCaravan, FaHeadphonesSimple, FaMoneyBillTransfer, FaOpencart } from "react-icons/fa6";

const Home = () => {
    return (
        <div>
            <div className="">
            <section>
                <div className=" ">
                    <img className="w-full h-[85vh]" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7bad8c93546277.5f48a570f12f8.jpg" alt="" />
                </div>
            </section>
            </div>
            {/* section two */ }
            <section className="max-w-screen-xl mx-auto mt-10">
                <div className="md:flex justify-between">
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
        </div>
    );
};

export default Home;