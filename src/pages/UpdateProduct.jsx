import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
    const [product_name, setProduct_name] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { product_id } = useParams();
    const [success, setSuccess] = useState("");

    const Update = async() => {
        try {
           setIsLoading(true);

           const formData = new FormData();
           formData.append('product_name', product_name);
           formData.append('price', price);
           formData.append('stock', stock);
           if (image) formData.append('image', image);


           await axios.put(`http://localhost:5000/product/update/${product_id}`, formData, {
            withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } });
            
           setIsLoading(false);
           setProduct_name("");
           setPrice("");
           setStock("");
           setImage(null);
           setSuccess("Updated successfully");
        } catch (error) {
            const message = error.message;
            setError(message);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div>
                <div>
                   <label>Enter new product name</label>
                   <input type="text" onChange={(e) => setProduct_name(e.target.value)} />
                </div>
               <div>
                    <label>Enter new Price</label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
               </div>
               <div>
                    <label>Enter new Stock Number</label>
                    <input type="number" onChange={(e) => setStock(e.target.value)} />
               </div>
               <div>
                    <label>Choose and image</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*"/>
               </div>
               <button onClick={Update}>{isLoading ? "Updating..." : "Update" }</button>
               {error && <p className="text-red-500">{error}</p>}
               {success && <p className="text-green-500">{success}</p>}
            </div>
        </div>
    )
}

export default UpdateProduct;