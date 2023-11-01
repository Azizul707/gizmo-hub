/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ShowCart = ( { product } ) => {

    const {_id, image, name, price } = product;

    const [ item, setItem ] = useState( [] );
   

    
    const handleDelete = ( id ) => {
        
        fetch( `https://gizmo-hub-server-cshtl15lq-theappboundmarketing-gmailcom.vercel.app/cart/${ id }`, {
            method: 'DELETE',
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.deletedCount > 0 ) {
                    toast.success( 'Product Removed From Cart!' )
                    setItem( data );
            }} )
    }

   

  
     


    return (
        <div>
            <div className=" px-5 ">
            <div className="md:flex gap-20 items-center justify-around w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-semibold p-2 rounded border">
                    <div>
                    <div className="flex-1"><img src={image} alt="" className="w-32" /></div>
                </div>
                
                    <div>Name
                    <div className="flex-1">{ name }</div>
                </div>
                    <div>Price
                    <div className="flex-1">{ price }</div>
                </div>
                    <div>Remove
                    <div className=""><button onClick={()=> handleDelete (_id)} className="text-xl font-semibold text-red-500">X</button></div>
                </div>
            </div>

            
                
               
                
            </div>
            
        </div>
    );
};

export default ShowCart;