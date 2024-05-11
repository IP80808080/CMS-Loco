import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/IRLogo.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";

export default function AdminHistoryTemplateFDCS() {
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
          `${BASE_URL}/api/FDCS/${submittedDate}/${uid}`
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
            <h1 className="text-xl font-bold flex-grow text-center">
              Electric Loco Shed, Bhusawal<br></br>Check sheet for FDCS
              Maintenance
            </h1>
            <img src={logo} alt="IR Logo" className="w-20 h-20" />
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
              <div className="flex mb-6">
                <div className="mr-4">
                  <label
                    htmlFor="Loco No."
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loco No.
                    <div className="flex items-center justify-center">
                      {data.equipmentNumber}
                    </div>
                  </label>
                </div>

                <div className="mr-4">
                  <label
                    htmlFor="Schedule – AOH/IOH"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Schedule – AOH
                    <div className="flex items-center justify-center">
                      {data.aoh}
                    </div>
                    /IOH
                    <div className="flex items-center justify-center">
                      {data.ioh}
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date -
                    <div className="flex items-center justify-center">
                      {new Date(data.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </label>
                </div>
              </div>
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
                        Points for checking{" "}
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
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Download fault data and record major loggings. Check and
                        record the fault logging history from downloaded data
                        and analyze.
                        <br />
                        1.
                        <br />
                        2.
                        <br />
                        3.
                        <br />
                        4.
                        <br />
                        5.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        There should be no fault message.
                        <br />
                        Issue booking if any fault is noticed
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        A
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Main Unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        Check the proper tightness of mounting bolts of the main
                        control unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper connectivity of the earthing terminal
                        of the main control unit and its tightness.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of Bayonet connectors
                        at control unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of all Facia fixing
                        thumbscrew of the cards.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check and ensure the dust free environment in the
                        control unit. Check the condition of the rubber gasket.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Dust free
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Clean the Bayonet connectors using appropriate connect
                        cleaner.{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Clean
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a6}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Remove all cards and main unit cabinet to be clean by
                        vacuum cleaner.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Clean
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_a7}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        B
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Display Unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the physical condition of unit for any breakage
                        and condition of indication panel and keypad
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        <div className="flex items-center justify-center">
                          {data.actual_b1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of mounting bolts of Display
                        unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_b2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of bayonet connectors
                        at Display unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_b3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check display units in both cabs and its operation
                        through menu driven keys.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_b4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check and set the proper date and time
                      </td>
                      <td className="border border-gray-400 px-4 py-2">Set</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_b5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        C
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Signal conditioning unit (SCU)
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of mounting bolts of SCU box.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_c1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check connection tightness.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_c2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of Bayonet connectors
                        at signal conditioning unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_c3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        D
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Current sensing unit/ ISCU
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of mounting bolts of ISCU
                        box.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_d1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check all connection tightness.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_d2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of bayonet connectors
                        at TM current sensing unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_d3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        E
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        General
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of control cable termination
                        on BD Panel.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_e1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Before functional testing Check negative bonding as per
                        prescribed schedule of loco.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_e2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Before functional testing check all LED status on cards
                        for any abnormality.{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_e3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Ensure all RDSO modifications are completed.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Ensure.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_e4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check that equipment earthing is intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_e5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check proper Cleating of cables and provide grommet if
                        necessary.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        ssdZee34455
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.actual_e6}
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
