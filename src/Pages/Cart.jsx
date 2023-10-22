import { useLoaderData } from "react-router-dom";


const Cart = () => {
    const products = useLoaderData();
    
    



    return (
        <div>
            {products.length}
        </div>
    );
};

export default Cart;