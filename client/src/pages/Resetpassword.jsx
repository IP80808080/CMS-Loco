import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../config";

export default function Resetpassword() {
  const [uid, setUid] = useState("");
  const [newPin, setNewPin] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`${BASE_URL}/api/resetpassword`, {
        uid,
      });
      if (response.status === 200) {
        setNewPin(response.data.newPin);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form
            onSubmit={handleResetPassword}
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action="#"
          >
            <div>
              <label
                htmlFor="uid"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ID
              </label>
              <input
                onChange={(e) => setUid(e.target.value)}
                value={uid}
                type="uid"
                name="uid"
                id="uid"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter ID"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
            {newPin && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-900 dark:text-white">
                  New Password: {newPin}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
