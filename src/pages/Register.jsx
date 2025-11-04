import axios from "axios";
import { useState } from "react";

const RegisterAccount = () => {
    const [user_name, setUser_name] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    const [image, setImage] = useState(null);

    const Register = async() => {
        if (!user_name || !password || !image) {
            alert("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append('user_name', user_name);
        formData.append("password", password);
        formData.append("image", image);
        try {
            setIsLoading(true);
            await axios.post('http://localhost:5000/user/register', formData, {
                withCredentials: true,
               headers: { "Content-Type": "multipart/form-data" },
            });
            
            setSuccess("Account created successfully");
            setTimeout(() => {
                setSuccess("");
            }, 6000);
            setIsLoading(false);
        } catch (error) {
            setError("Error during Registering");
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
                   <label>User name</label>
                    <input type="text" 
                      onChange={(e) => setUser_name(e.target.value)}
                    />
                </div>
                 <div>
                    <label>Password</label>
                    <input type="text"
                       onChange={(e) => setPassword(e.target.value)}
                     />
                 </div>
        
                     <div>
                      <label>Choose your image</label>
                      <input type="file"  
                         onChange={(e) => setImage(e.target.files[0])}
                         accept="image/*"
                      />
                  </div>

                <button onClick={Register}>{isLoading ? "Registering..." : "Register"}</button>
                {error && (<p>{error}</p>)}
                {success && (<p>{success}</p>)}
            </div>
        </div>
    )
}

export default RegisterAccount