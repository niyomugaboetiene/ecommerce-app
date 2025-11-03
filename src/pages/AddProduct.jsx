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
}