import ecommerce from "../assets/speakers/speaker2.png";

const LastPage =  () => {
    return (
        <div className="flex justify-center items-center">
            <div className=" bg-black">

            <div className="max-w-7xl grid grid-cols-2">
                    <img src={ecommerce} 
                        className="w-[400px] object-cover rounded-lg transition-transform duration-300"
                    />
                        <p className="text-2xl text-white font-bold text-center mt-16">
                           Believe us by clicking to add to Buy Now button.
                     <button className="bg-blue-500  py-3 px-6 text-white mt-12 rounded-lg">Buy Now</button>

                </p>
            </div>
            </div>
        </div>
    )
}

export default LastPage