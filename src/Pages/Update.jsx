import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {

    const products = useLoaderData();

    const id = products._id;




    const handleUpdateProduct = ( e ) => {
        e.preventDefault();
        const form = e.target;
        const productName = e.target.name.value;
        const image = e.target.image.value;
        const productCategory = e.target.category.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;

        const updatedProducts = { productName, image, productCategory, price, description, rating };


        fetch( `http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( updatedProducts )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.modifiedCount > 0 ) {
                    toast.success( 'Product Updated Successfully' )
                    form.reset();
                }
            } )


    }


    return (
        <div className="max-w-screen-xl mx-auto h-screen">
            <div className=""><p className="text-5xl py-10 font-bold text-center">Update Product</p></div>
            <form onSubmit={ handleUpdateProduct } className="border px-4 py-10 rounded-lg max-w-5xl mx-auto bg-[#f1f1f1]">
                <div className="md:flex gap-5">
                    <div className="mb-4 w-1/2">
                        <label htmlFor="name" className="block pb-2 pl-1">Name:</label>
                        <input type="text" id="name" name="name" className="border rounded px-3 py-2 w-full" defaultValue={ products?.name } required />
                    </div>

                    <div className="mb-4 w-1/2">
                        <label htmlFor="email" className="block pb-2 pl-1">Image URL:</label>
                        <input type="text" id="email" name="image" className="border rounded px-3 py-2 w-full" defaultValue={ products?.image } required />
                    </div>
                </div>

                <div className="md:flex gap-5">
                    <div className="mb-4 w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Select a Brand:</label>

                        <select className="w-full py-2" id="brandSelect" name="brandSelect">
                            <option value="1">samsung</option>
                            <option value="2">apple</option>
                            <option value="3">sony</option>
                            <option value="4">lg</option>
                            <option value="5">panasonic</option>
                            <option value="6">bose</option>
                        </select>
                    </div>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Product Category:</label>
                        <input type="text" name="category" className="border rounded px-3 py-2 w-full" defaultValue={ products?.type } required />
                    </div>

                </div>
                <div className="md:flex gap-5">
                    <div className="mb-4 w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Price:</label>
                        <input type="text" name="price" className="border rounded px-3 py-2 w-full" defaultValue={ products?.price } required />
                    </div>
                    <div className="mb-4 w-1/2">
                        <label htmlFor="password" className="block pb-2 pl-1">Short Description:</label>
                        <input type="textarea" id="password" name="description" className="border rounded px-3 py-2 w-full" defaultValue={ products?.shortdescription } required />
                    </div>

                </div>
                <div className="mb-4 w-1/2">
                    <label htmlFor="password" className="block pb-2 pl-1">Rating:</label>
                    <input type="text" id="password" name="rating" className="border rounded px-3 py-2 w-full" defaultValue={ products?.rating } required />
                </div>
                <div className="">
                    <div className="py-5 md:ml-[28rem]"> <input type="submit" value="Update" className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2" /></div>
                </div>


            </form>
        </div>
    );
};

export default Update;