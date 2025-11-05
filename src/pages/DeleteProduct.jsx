import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState("");
    const navigate = useNavigate();
    const { product_id } = useParams();

    const Delete = async() => {
       try {
           setIsLoading(true);
           await axios.delete(`http://localhost:5000/product/delete/${product_id}`, { withCredentials: true });
           setIsLoading(false);
           navigate('/');
        } catch (error) {
            const errorMessage = error.messsage;
            setError(errorMessage);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }
}