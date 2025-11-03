import ecommerce from "../assets/clothes/ecommerce-big_Big.webp";

const LastPage =  () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-7xl">
                    <img src={ecommerce} className="w-[800px] items-center"/>
                    <p className="text-2xl">
                        Believe us by clicking to add to cart button.
                    </p>
            </div>
        </div>
    )
}

export default LastPage