import { useState } from "react";
import axios from "axios";

const SpecificUpdation = () => {
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const product_id = 20;

    const Update = async() => {
        try {
           setIsLoading(true);

           const formData = new FormData();
           if (image) formData.append('image', image);


           await axios.put(`http://localhost:5000/product/update/${product_id}`, formData, {
            withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } });
            
           setIsLoading(false);
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

export default SpecificUpdation;