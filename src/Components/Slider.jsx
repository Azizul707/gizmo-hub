

const Slider = () => {
    return (
        <div>
            <div className="mt-5">
    <div className="carousel h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-psd/sales-discount-facebook-template_23-2149959351.jpg?w=1060&t=st=1697612768~exp=1697613368~hmac=a874319d98058f0391ad4aff8dcf222e9cf634a350d0dbbc6c0629a0b9263c3b" className="w-full " />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">
                
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1544.jpg?w=1380&t=st=1697612667~exp=1697613267~hmac=6c8d9feead0315c844560d1ee15e5301d6a1c47ed802a91ecdf5ea94332f4688
            " className="w-full" />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">
                
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_106176-1577.jpg?w=1380&t=st=1697613108~exp=1697613708~hmac=b1897a83d669b9cc7c059880f612c69899ca64547b8cf5afe690617f21af2634" className="w-full" />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">
                
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img src="https://img.freepik.com/free-psd/futuristic-cyber-monday-banner-template_23-2149117343.jpg?w=1060&t=st=1697612580~exp=1697613180~hmac=823fb36a260a739361ec085a70c093d01c607eba10dd0720c4abfa3f08147d28
            " className="w-full" />
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">
               
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default Slider;


