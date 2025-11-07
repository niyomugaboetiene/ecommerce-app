import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  const [userName, setUserName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_name", userName);
    formData.append("OldPassword", oldPassword);
    formData.append("NewPassword", newPassword);
    if (image) formData.append("image", image);

    try {
      const res = await axios.put(
        "http://localhost:5000/user/updateUser",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(res.data.message);
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center mb-4">Update Profile</h2>

        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter new username"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Old Password</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter old password"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter new password"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Profile Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
        >
          Update
        </button>

        {message && (
          <p className="text-center text-sm mt-2 text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
};

export default UpdateUser;
