import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
    const [user_name, setUser_name] = useState("");
    const [password, setPassword] = useState("");
    const [isLoaing, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    const [image, setImage] = useState(null);

    const Add = async() => {
        if (!product_name || !category || !price || !stock || !image) {
            alert("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append('user_name', user_name);
        formData.append("password", password);
        formData.append("image", image);
        try {
            setIsLoading(true);
            await axios.post('http://localhost:5000/product/add', formData, {
                withCredentials: true
            }, {
               headers: { "Content-Type": "multipart/form-data" },
            });
            
            setSuccess("Product added successfully");
            setTimeout(() => {
                setSuccess("");
            }, 6000);
            setIsLoading(false);
        } catch (error) {
            console.error("ERROR:", error.message);
            setError("Error during add product");
            setTimeout(() => {
                setError("");
            }, 6000);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
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
                    <label>Price</label>
                    <input type="number"
                       onChange={(e) => setPrice(e.target.value)}
                     />
                 </div>
                 <div>
                   <label>Category</label>
                   <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select Category</option>
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}
                   </select>
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
                         onChange={(e) => setImage(e.target.files[0])}
                         accept="images/*"
                      />
                  </div>

                <button onClick={Add}>{isLoaing ? "Registring.." : "Register"}</button>
                {error && (<p>{error}</p>)}
                {success && (<p>{success}</p>)}
            </div>
        </div>
    )
}

export default AddProduct