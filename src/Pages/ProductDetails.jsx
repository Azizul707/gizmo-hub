import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import toast from "react-hot-toast";

const ProductDetails = () => {


    const { id } = useParams();

    const products = useLoaderData()


    const [ newProduct, setNewProduct ] = useState( null );

    const name = newProduct?.name;
    const price = newProduct?.price;
    const image = newProduct?.image;

    const addToCart = { name, price, image };

    useEffect( () => {

        const findProduct = products?.find( product => product._id == id )
        setNewProduct( findProduct )

    }, [ id, products ] );


    const handleAddToCart = () => {
        fetch( 'https://gizmo-hub-server-dah6y3v2e-theappboundmarketing-gmailcom.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify( addToCart )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data?.insertedId ) {
                    toast.success('Product Added To Cart')
                }
            } )
        
    }
 



    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <section>

                <div className="py-5 flex gap-10">
                    <h2 className="text-2xl font-semibold">{ newProduct?.name }</h2>
                    

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
                            
                            <button onClick={handleAddToCart} className="flex items-center gap-5 justify-center w-full mx-auto md:mt-28 bg-neutral text-white p-2 rounded font-semibold"> <span>Add To Cart</span> <span><FaCartShopping /></span></button>
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-40">

                <div className="">

                    <div className="font-bold text-slate-500 text-center border-b-4 pb-4">
                        <span className="hover:bg-neutral p-2 rounded" >Details</span>
                        <span className="ml-10 hover:bg-neutral p-2 rounded">More Information</span>
                        <span className="ml-10 hover:bg-neutral p-2 rounded">Reviews</span>
                        <span className="ml-10 hover:bg-neutral p-2 rounded">Product Question</span>
                    </div>
                </div>
                <div className="mt-10 max-w-screen-md">
                    <h1 className="text-2xl font-semibold">{ newProduct?.name }</h1><hr /> <br /><br />
                    <p className="text-2xl font-semibold">Product Over View</p>
                    <p>The Panasonic Lumix GH5 is a flagship mirrorless camera designed to meet the demands of professional photographers and videographers. Renowned for its exceptional image quality, robust build, and advanced video capabilities, the GH5 is a versatile tool that empowers creatives to capture stunning visuals.</p> <br />
                    <p className="text-xl font-semibold">Key Features</p><br />
                    <p><span className="text-md font-semibold">Outstanding Image Quality: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">Outstanding Image Quality: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">4K Video Excellence: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">5-Axis Dual I.S: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">Advanced Autofocus: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">Rugged Build: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">Articulating Touchscreen: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    <p><span className="text-md font-semibold">Professional Audio: </span>
                    
                        The GH5 boasts a 20.3-megapixel Digital Live MOS sensor and Venus Engine processor, delivering high-resolution images with exceptional clarity and dynamic range.</p> <br />
                    
                </div>

            </section>
        </div>
    );
};

export default ProductDetails;
