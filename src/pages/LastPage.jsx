import ecommerce from "../assets/clothes/ecommerce-big_Big.webp";

const LastPage =  () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-7xl relative group">
                    <img src={ecommerce} className="w-[800px] object-cover rounded-lg transition-transform duration-300"/>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 text-white p-4 rounded-lg flex flex-col items-center justify-end">
                        <p className="text-2xl">
                           Believe us by clicking to add to cart button.
                         </p>
                    </div>

            </div>
        </div>
    )
}

export default LastPage