import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/IRLogo.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";

export default function AdminHistoryTemplateflasher() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { submittedDate, uid } = useParams();
  const [adminVerified, setAdminVerified] = useState(false);
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/flasher/${submittedDate}/${uid}`
        );
        setData(response.data);
        setAdminVerified(response.data.adminVerified);
        setLoading(false);
        console.log(response);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error fetching form data:", error);
      }
    };

    fetchFormData();
  }, [submittedDate, uid]);

  return (
    <>
      <div className="flex flex-col justify-center container overflow-x">
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error: {error.message}</p>}
        <div className="text-center mr-3">
          <br></br>
          <header className="flex justify-center items-center flex-col bg-white">
            <div className="mx-auto mb-4 lg:mb-0">
              <h1 className="text-xl font-bold">
                Electric Loco Shed , Bhusawal
                <br />
                Check-sheet for Flasher Light Control Box / LED
              </h1>
            </div>
            <img
              src={logo}
              alt="IR Logo"
              className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
            />
            <div className={`mt-4 ${adminVerified ? "" : "invisible"}`}>
              <svg
                className="w-10 h-10 text-green-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </header>
        </div>
        <br></br>

        {data && (
          <section className="container justify-center">
            <div className="container mt-5 px-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Date of Overhaul
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="col-span-3 sm:col-span-1">
                          {new Date(data.date_overhaul).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "numeric",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Make
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.make}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Sr No of FL BOX / LED
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.equipmentNumber}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Removed from Loco No
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.removed_locono}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Fitted on Loco No
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.fitted_locono}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Schedule
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.schedule}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="container">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2">
                          S. No{" "}
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Description{" "}
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Standard Value{" "}
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Actual Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Cleaning PCB with anti static brush
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Cleaned
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {data.actual_1}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">2</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check connection tightness
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {data.actual_2}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">3</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check Flasher light flashing rate/minute
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          35 – 45 Flashes
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {data.actual_3}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">4</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check for endurance testing for 2 Hrs.{" "}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Done
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {data.actual_4}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">5</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Apply RTV silicon to avoid ingress for dust.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Apply
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {data.actual_5}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="border border-gray-400 px-4 py-2 font-bold"
                          colSpan="4"
                        >
                          Remark: -
                          <div className="flex items-center justify-center">
                            {data.remark}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}
        <br></br>
        <br></br>
        <footer>
          <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
              <div className="grid items-center space-x-2 mb-4 md:mb-0">
                <div className="flex items-center justify-center">
                  {data.sign}
                </div>
                <span style={{ whiteSpace: "pre" }}>
                  तकनिशियन का नाम एवं हस्ताक्षर:
                </span>
                <b />
              </div>

              <div className="grid items-center space-x-2">
                <div className="flex items-center justify-center">
                  {data.sign2}
                </div>
                सुपरवाईजर का नाम एवं हस्ताक्षर:
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handlePrint}
              className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
            >
              Print
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
