import ecommerce from "../assets/speakers/speaker2.png";

const LastPage =  () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-7xl relative group  bg-black grid grid-cols-3">
                    <img src={ecommerce} 
                        className="w-[400px] object-cover rounded-lg transition-transform duration-300"
                    />
                        <p className="text-2xl text-white font-bold text-center mt-16">
                           Believe us by clicking to add to cart button.
                         </p>

            </div>
        </div>
    )
}

export default LastPage