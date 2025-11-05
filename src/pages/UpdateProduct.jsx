import { useState } from "react";
import axios from "axios";
import useParams from "react-router-dom";

const UpdateProduct = () => {
    const [product_name, setProduct_name] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [error, setError] = useState("");
    const { product_id } = useParams();

    const Update = async() => {
        try {
           setIsLoading(true);
           await axios.put(`http://localhost:5000/product/update/${product_id}`, {product_name, price, stock, image }, { withCredentials: true });
           setIsLoading(false);
           setProduct_name("");
           setPrice("");
           setStock("");
           setImage("");
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
                    <input type="file" onChange={(e) => setImage(e.target.value)} />
               </div>
               <button onChange={Update}>Update</button>
            </div>
        </div>
    )
}

export default UpdateProduct;