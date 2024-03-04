const HeroSection = () =>{
    return(
        <main className="m-0 w-full ">
            <div className=" Hero flex items-center ">
                <h2>Air Jordan</h2>
                <h1>ZION 3 GEN 1</h1>
            </div>
            <div className="flex px-6 space-x-4 ">
                <button type="button" className="p-2  rounded-md text-lg  text-white bg-gray-900 px-6">Buy Now</button>
                <button type="button" className="p-2  rounded-md text-lg  text-white bg-gray-900 px-6">Shop Now</button>
            </div>
            <div className="flex justify-end absolute inset-y-0 right-0">
                <img src="./images/shoe.png" alt="" />
            </div>

        </main>
    )
}

export default HeroSection;