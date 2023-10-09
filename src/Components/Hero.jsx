

const Hero = () => {
    return (


        <div>

            <h1  className="text-5xl mt-5 mb-5 font-bold text-center">
                Games Gellery
            </h1>

            <div className="carousel carousel-center rounded-box items-center justify-center flex mt-10 mb-10 w-auto">
                <div  className="lg:carousel-item max-w-md">
                    <img src="https://i.ibb.co/vxvxgYK/pubg.png" alt="Pizza" />
                </div>
                <div className="lg:carousel-item max-w-md">
                    <img src="https://i.ibb.co/3sRRR3j/cricket.jpg" alt="Pizza" />
                </div>
                <div className="lg:carousel-item max-w-md">
                    <img src="https://i.ibb.co/yQnNwYF/basketball.jpg" alt="Pizza" />
                </div>

            </div>

        </div>
    );
};

export default Hero;