import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isLoaing, setIsLoading] = useState(false);

    const Add = async() => {
        try {
            const res = await axios.post('http://localhost:5000/product/add', {
                productName, category, price, stock
            }, {
                withCredentials: true
            })
        } catch (error) {
            console.error("ERROR:", error.message);
        }
    }  


    return (
        <div>
            <div>
                <input type="text" 
                   onChange={() => setProductName(e.target.value)}
                />
                <input type="text"
                    onChange={() => setCategory(e.target.value)}
                />
                <input type="text" 
                    onChange={() => setPrice(e.target.value)}
                />
                <input type="text"  
                  onChange={() => setStock(e.target.value)}
                />
                <button onClick={Add}>Add</button>
            </div>
        </div>
    )
}

export default AddProduct