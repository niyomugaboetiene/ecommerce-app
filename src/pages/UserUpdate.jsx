import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUserInfo = () => {
    const { user_id } = useParams();
    const [user_name, setUser_name] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const Update = async(e) => {
        e.preventDefault();
       try {
        const res = await axios.put(`http://localhost:5000/user/update/${user_id}`, {
              user_name: user_name,
              oldPassword: oldPassword,
              newPassword: newPassword
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': "application/json",
            },
        }
    );
    setMessage(res.data.message);
    } catch (error) {
        setMessage(err.response?.data?.message || "Something went wrong");
        console.error(err);
    }
    }

    return (
        <div>
            <h2>Update Account</h2>

            <form>
                <input type="text"  value={user_name}
                   onChange={(e) => setUser_name(e.target.value)}
                />
            </form>
        </div>
    )
}