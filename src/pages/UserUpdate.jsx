import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateUserInfo = () => {
  const [user_name, setUser_name] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const Update = async (e) => {
    e.preventDefault(); 
    try {
      const formData = new FormData();
      formData.append("user_name", user_name);
      formData.append("OldPassword", oldPassword);
      formData.append("NewPassword", newPassword);
      if (image) {
        formData.append("image", image);
      }

      const res = await axios.put(
        `http://localhost:5000/user/update`,
        {
           formData
        },
        {
          withCredentials: true, 
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(res.data.message);
      setOldPassword("");
      setNewPassword("");
      setImage(null);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

   const [currentUser, setCurrentUser] = useState([]);
    const fetchCurrentUser = async () => {
        try {
          const res = await axios.get("http://localhost:5000/user/userInfo", {
            withCredentials: true,
          });
          setCurrentUser(res.data.userInfo);
          console.log("current user", res.data);
        } catch (error) {
          console.log("Error fetching user info:", error.message);
          
        }
      };

      useEffect(() => {
        fetchCurrentUser();
      }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-xl font-bold mb-4">Update Account Info</h2>

      <form onSubmit={Update} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="New username"
          value={currentUser.user_name}
          onChange={(e) => setUser_name(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="border p-2 rounded"
        />     
         <input
          type="file"
          accept="images/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          Update
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-gray-700 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default UpdateUserInfo;
