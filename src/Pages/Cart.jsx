import { useLoaderData } from "react-router-dom";
import ShowCart from "./ShowCart";


const Cart = () => {
    const products = useLoaderData();
   
    
    
    



    return (
        <div className="mt-20 max-w-screen-lg mx-auto">
            
            {
                products.map((product,idx)=><ShowCart key={idx} product={product}></ShowCart>)
            }
        </div>
    );
};

export default Cart;