import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [product_name, setProduct_name] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [isLoaing, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    const [image, setImage] = useState(null);

    const Add = async() => {

        const formData = new FormData();
        formData.append('product_name', product_name);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("image", image);
        try {
            setIsLoading()
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
                   <label>Product Name</label>
                    <input type="text" 
                      onChange={(e) => setProduct_name(e.target.value)}
                    />
                </div>
                 <div>
                    <label>Category</label>
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
                     <div>
                      <label>Numbers in Stock</label>
                      <input type="file"  
                         onChange={(e) => setStock()}
                         accept="images/*"
                      />
                  </div>

                <button onClick={Add}>Add</button>
            </div>
        </div>
    )
}

export default AddProduct