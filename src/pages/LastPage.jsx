import ecommerce from "../assets/clothes/ecommerce-big_Big.webp";

const LastPage =  () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-7xl relative group">
                    <img src={ecommerce} className="w-[800px] object-cover rounded-lg transition-transform duration-300"/>
                    <p className="text-2xl">
                        Believe us by clicking to add to cart button.
                    </p>
            </div>
        </div>
    )
}

export default LastPage