import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAccount = () => {
    const [user_name, setUser_name] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();

    const Login = async() => {
        if (!user_name || !password) {
            alert("All fields are required");
            return;
        }

        try {
            setIsLoading(true);
            await axios.post('http://localhost:5000/user/login',{ user_name, password }, {
                withCredentials: true,
            });
            
            setSuccess("login successfully");
            setTimeout(() => {
                setSuccess("");
            }, 6000);
            setIsLoading(false);
            navigate("/")
        } catch (error) {
            setError("Error during login");
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

                <button onClick={Login}>{isLoading ? "loging in..." : "login"}</button>
                {error && (<p>{error}</p>)}
                {success && (<p>{success}</p>)}
            </div>
        </div>
    )
}

export default LoginAccount