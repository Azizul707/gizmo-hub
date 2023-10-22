import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetails = () => {


    const { id } = useParams();

    const products = useLoaderData()


    const [ newProduct, setNewProduct ] = useState( null );

    useEffect( () => {

        const findProduct = products?.find( product => product._id == id )
        setNewProduct( findProduct )

    }, [ id, products ] )




    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <section>

                <div className="py-5 flex gap-10">
                    <h2 className="text-2xl font-semibold">{ newProduct?.name }</h2>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>

                    <hr />
                </div>
                <div className="md:flex gap-10">
                    <div className="flex-1 shadow-lg">
                        <img className="p-2" src={ newProduct?.image } alt="" /></div>
                    <div className="flex-1 text-xl bg-[#f1f1f1] p-5 space-y-5">
                        <p className="text-2xl text-blue-500">Price: { newProduct?.price }$</p>
                        <p> <span className="font-semibold" >Rating:</span> { newProduct?.rating }</p>
                        <p><span className="font-semibold" >Brand:</span> { newProduct?.brandname.toUpperCase() }</p>
                        <p><span className="font-semibold" >Short Descriptions: </span>{ newProduct?.shortdescription }</p> <hr />

                        <div className="w-full">
                            <button className="flex items-center gap-5 justify-center w-full mx-auto md:mt-28 bg-neutral text-white p-2 rounded font-semibold"> <span>Add To Cart</span> <span><FaCartShopping /></span></button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ProductDetails;
