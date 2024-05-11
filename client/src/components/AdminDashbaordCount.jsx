import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

export default function AdminDashbaordCount() {
  const [userCounts, setUserCounts] = useState({
    adminCount: 0,
    moderatorCount: 0,
    clientCount: 0,
  });

  useEffect(() => {
    const fetchUserCounts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/userCounts`);
        setUserCounts(response.data);
      } catch (error) {
        console.error("Error fetching user counts:", error);
      }
    };

    fetchUserCounts();
  }, []);

  return (
    <div className=" flex flex-wrap justify-center items-center space-y-3">
      <div className="card bg-red-500 text-white mx-4 p-8 rounded-lg">
        <div className="flex justify-center space-x-2">
          <h2 className="text-4xl font-bold">Admin</h2>
          <span className="text-4xl">-</span>
          <p className="text-4xl">{userCounts.adminCount}</p>
        </div>
      </div>
      <br></br>
      <div className="card bg-green-500 text-white mx-4 p-8 rounded-lg">
        <div className="flex justify-center space-x-2">
          <h2 className="text-4xl font-bold">JE/SSE</h2>
          <span className="text-4xl">-</span>
          <p className="text-4xl">{userCounts.moderatorCount}</p>{" "}
        </div>
      </div>
      <br></br>
      <div className="card bg-blue-500 text-white mx-4 p-8 rounded-lg">
        <div className="flex justify-center space-x-2">
          <h2 className="text-4xl font-bold">Staff</h2>
          <span className="text-4xl">-</span>
          <p className="text-4xl">{userCounts.clientCount}</p>{" "}
        </div>
      </div>
    </div>
  );
}
