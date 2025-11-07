import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUserInfo = () => {
  const { user_id } = useParams();
  const [user_name, setUser_name] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const Update = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.put(
        `http://localhost:5000/user/update/${user_id}`,
        {
          user_name: user_name,
          OldPassword: oldPassword,
          NewPassword: newPassword,
        },
        {
          withCredentials: true, 
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-xl font-bold mb-4">Update Account Info</h2>

      <form onSubmit={Update} className="flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="New username"
          value={user_name}
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
