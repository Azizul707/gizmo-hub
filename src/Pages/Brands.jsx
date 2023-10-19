/* eslint-disable react/prop-types */


const Brands = ( { brand } ) => {
    console.log(brand);

    return (
        <div>
            <div className=" shadow-xl border rounded p-5 mt-10">
                {/* <div className="w-40 h-14"><img className="w-full" src={ brand.brandImage } alt="" /></div> */}
                <div className="avatar">
                    <div className="w-24 rounded ">
                        <img src={ brand.brandImage } />
                    </div>
                </div>
                    <div className=""><button className="bg-neutral py-1 px-2 rounded text-slate-300">All Collection</button></div>
            </div>
        </div>
    );
};

export default Brands;