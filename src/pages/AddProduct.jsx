import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [product_name, setProduct_name] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isLoaing, setIsLoading] = useState(false);

    const Add = async() => {
        try {
            await axios.post('http://localhost:5000/product/add', {
                product_name, category, price, stock
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
                <div>
                   <label htmlFor="">Product Name</label>
                    <input type="text" 
                      onChange={(e) => setProduct_name(e.target.value)}
                    />
                </div>
                 <div>
                    <label htmlFor="">Category</label>
                    <input type="text"
                       onChange={(e) => setCategory(e.target.value)}
                     />
                 </div>
                 <div>
                   <label>Price</label>
                   <input type="number" 
                       onChange={(e) => setPrice(e.target.value)}
                    />
                 </div>
                  <div>
                      <label>Numbers in Stock</label>
                      <input type="number"  
                         onChange={(e) => setStock(e.target.value)}
                      />
                  </div>

                <button onClick={Add}>Add</button>
            </div>
        </div>
    )
}

export default AddProduct