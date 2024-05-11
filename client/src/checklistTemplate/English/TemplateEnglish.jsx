import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/IRLogo.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import { getUsername } from "../../helper/helper";

export default function TemplateEnglish() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { uid } = useParams();
  const [isLoading, setLoading] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  const [sign2, setSign2] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { username } = await getUsername();
        setSign2(username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/getEnglishFormData/${uid}`
        );
        console.log("Response object:", response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching form data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [uid]);

  return (
    <>
      <div className="flex flex-col justify-center container overflow-x">
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error: {error.message}</p>}
        <div className="text-center">
          <br></br>
          <header>
            <div className="mx-auto mb-4 lg:mb-0">
              <h1 className="text-xl font-bold">
                Electric Loco Shed , Bhusawal
              </h1>
              <h2 className="text-lg font-semibold">
                Check-sheet for English Electric Relay <br />
                (Q51,QV60,QV61,QV62,QV63,QV64, QOLSOL)
              </h2>
            </div>
            <img
              src={logo}
              alt="IR Logo"
              className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
            />
          </header>
        </div>
        <br></br>
        {data && (
          <section className="container  justify-center">
            <div className="container mt-5 px-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Date of removal
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {new Date(data.date_removal).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          }
                        )}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Removed from Loco
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>
                          {data.removed_locono}
                        </span>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Make
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>{data.make}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Sr No of Relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>
                          {data.equipmentNumber}
                        </span>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Last Overhaul Dt.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {new Date(data.overhaul_date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          }
                        )}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        MFG of Relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>
                          {data.mfg_relay}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Type of Relay
                      </td>
                      <td
                        className="border border-gray-400 px-4 py-2"
                        colSpan="5"
                      >
                        <span style={{ whiteSpace: "pre" }}>
                          {data.type_relay}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br className="mt-5" />
            </div>
            <div className="container">
              <br className="mt-5" />
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
                        Reason for removal of Loco :-
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.std_value1}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Coil resistance at 200C
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        990 – 1210 Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        <div className="flex items-center justify-center">
                          {data.actual_value2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For Woama relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        3.61 – 3.99 Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value2_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Min. pickup Voltage
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        62 – 68 VDC
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Contact Gap
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        1.7 – 2.0 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For Woama relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.8 – 2.2 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        <div className="flex items-center justify-center">
                          {data.actual_value4_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Series Economy Resistance For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.235 – 1.365 K Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">6</td>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Contact Pressure
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.235 – 1.365 K Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value6}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For Woama relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        20 – 25 gms
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value6_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">7</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Q Factor
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.std_value7}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_value7}
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
            <br className="mt-5" />
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
                <div className="flex items-center justify-center">{sign2}</div>
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
