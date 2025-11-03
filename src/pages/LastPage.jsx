import ecommerce from "../assets/speakers/speaker2.png";

const LastPage =  () => {
    return (
 <div className="flex justify-center items-center min-h-screen p-4">
            <div className="bg-black rounded-lg w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <img 
                        src={ecommerce} 
                        alt="Speaker product"
                        className="w-full max-w-[400px] mx-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-2xl text-white font-bold mb-8">
                            Enhance your music experience by clicking to buy now button
                        </p>
                        <button className="bg-blue-500 py-3 px-6 text-white rounded-lg transition duration-200 hover:bg-blue-600 hover:scale-105">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastPage