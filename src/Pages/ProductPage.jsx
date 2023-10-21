import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductPage = () => {
    const brandsName = useParams()
    const brandSelect = brandsName.product;
   
    const [ products, setProducts ] = useState( [] );

    console.log(products);
    
   
    useEffect( () => {
        fetch( `http://localhost:5000/products/${ brandSelect}`, )
        .then( res => res.json() )
        .then( data =>setProducts(data) )
   },[brandSelect])
    

    return (
        <div className="grid md:grid-cols-3 gap-5 justify-items-center mt-10">
            {
                products?.map((product,idx)=><ProductCard key={idx} product={product}></ProductCard>)
          }
        </div>
    );
};

export default ProductPage;