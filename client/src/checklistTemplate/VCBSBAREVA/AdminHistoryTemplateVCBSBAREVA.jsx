import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/IRLogo.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";

export default function AdminHistoryTemplateVCBSBAREVA() {
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
          `${BASE_URL}/api/VCBSBAREVA/${submittedDate}/${uid}`
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
            <h2>
              Electric Loco Shed , Bhusawal <br></br>
              Check-sheet for Single Bottle VCB 22 CB (Areva )
            </h2>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              height="70px"
              width="70px"
            ></img>
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
              <div className="loco-dept"></div>
              <div className="flex-container"></div>
              <br></br>
              <div className="table-responsive">
                <table>
                  <tr>
                    <td>
                      <label htmlFor="O/H Date">
                        <span style={{ whiteSpace: "pre" }}>O/H Date</span>
                        {new Date(data.oh_date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })}
                      </label>
                    </td>
                    <td>
                      <label htmlFor="Schedule -">
                        <span style={{ whiteSpace: "pre" }}>
                          Schedule - {data.schedule}
                        </span>
                      </label>
                    </td>
                    <td>
                      <label htmlFor="VCB Sr. No -">
                        <span style={{ whiteSpace: "pre" }}>
                          VCB Sr. No - {data.equipmentNumber}
                        </span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="Remove from Loco">
                        <span style={{ whiteSpace: "pre" }}>
                          Remove from Loco: {data.removed_loco}
                        </span>
                      </label>
                    </td>
                    <td></td>
                    <td>
                      <label htmlFor="Provided Date:-">
                        <span style={{ whiteSpace: "pre" }}>
                          Provided Date:-
                        </span>
                        {new Date(data.provided_date).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          }
                        )}
                      </label>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="table-responsive">
              <table>
                <tr>
                  <th>Sr. No</th>
                  <th>Description of Test</th>
                  <th>Specified Value</th>
                  <th>Observed Value</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Surge suppressor current at 110 V AC. </td>
                  <td>14 - 19.5 mA </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value01}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Pressure regulator setting </td>
                  <td>5.2 -5.4 kg/cm²</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value02}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Record QPDJ setting<br></br>
                    Cut in <br></br>Cut Out
                  </td>
                  <td>
                    <br></br>4.6 - 4.75 kg/cm² <br></br>3.85 -.4.0 kg/cm²
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value03}
                    </div>
                    <br></br>
                    <div className="flex items-center justify-center">
                      {data.actual_value04}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Pickup voltage </td>
                  <td>55- 70 V DC </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value05}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>VCB contact travel test. </td>
                  <td>Must be taken.</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value06}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mag. valve resistance at R20C </td>
                  <td>798 Ω – 882 Ω</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value07}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Magnet valve clearance.<br></br>
                    (a)Between armature & armature plate.<br></br>
                    (b) Slight clearance must be available between top fluted
                    valve & stem.
                  </td>
                  <td>
                    (a) 0.51mm -0.61mm<br></br>
                    (b) Must be available
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value08}
                    </div>
                    <br></br>
                    <div className="flex items-center justify-center">
                      {data.actual_value09}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Gap between 21 mm setting gauge & operating rod. </td>
                  <td>0.25 mm feeler gauge.</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value10}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    H.V. Testing. VCB close- power terminal to earth. VCB open -{" "}
                    <br></br>
                    (a) Between I/C terminal to O/G terminal.<br></br>
                    (b) Between I/C terminal to earth terminal.<br></br>
                    (c) Between O/G terminal to earth terminal
                  </td>
                  <td>
                    40 kV for one minute.
                    <br></br>
                    40 kV for one minute.
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value11}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    I. R. Value. <br></br>
                    (1)Power ckt<br></br>(2)L.T. ckt.{" "}
                  </td>
                  <td>
                    (1) Power ckt. 200 MΩ by 1 kv megger.<br></br>
                    (2) L.T. ckt. 10 MΩ by by 500V megger
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value12}
                    </div>
                    <br></br>
                    <div className="flex items-center justify-center">
                      {data.actual_value13}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <br></br>
            <br></br>
            <div className="table-responsive">
              <table>
                <tr>
                  <th>Sr. No</th>
                  <th>Description of Test</th>
                  <th>Specified Value</th>
                  <th>Observed Value</th>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    Air leakage test: -<br></br>
                    (1)VCB OFF position: - After applying air pressure at 6.5
                    Kg/cm2 to the breaker with the control magnet valve
                    de-energized, seal the air entry to the circuit breaker &
                    check the air pressure after 10 minute.<br></br>
                    (2)VCB ON position: - After applying air pressure at 6.5
                    Kg/cm2 to the breaker with the control magnet valve
                    energized, seal the air entry to the circuit breaker & check
                    the air pressure after 10 minute
                  </td>
                  <td>
                    The drop in pressure must not exceed 10 % of the initial
                    pressure.
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value14}
                    </div>
                    <br></br>
                    <div className="flex items-center justify-center">
                      {data.actual_value15}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Q factor of coil (As per Instructions)</td>
                  <td>Checked</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value16}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    Endurance test: - 200 operations to be taken on test bench &
                    see any abnormality.{" "}
                  </td>
                  <td>
                    <br></br>Must be taken.
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value17}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Check auxiliary switch and clean the contact . </td>
                  <td>Check and clean</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value18}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    Overhaul (a) Magnet valve (b) Air filter (c) Pressure switch
                    (d) Pressure regulator.{" "}
                  </td>
                  <td>Overhaul done.</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value19}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Take Mili volt Drop of VST ( As per OEM manual)</td>
                  <td>46.7 mV</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.actual_value20}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <br></br>
            <p1>Note:- (1) Point no 1 to 11& 13 to 16 from OEM manual.</p1>
            <br></br>
            <br></br>
            <p></p>
            <b></b>Must change Item of VCB 22 CB <b></b>
            <p></p>
            <br></br>
            <div className="table-responsive">
              <table>
                <tr>
                  <th>Sr. No</th>
                  <th>Item Description </th>
                  <th>Change</th>
                  <th>Not Change</th>
                  <th>Remark</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>AOH Replacement Kit </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.change_aoh}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.notchange_aoh}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.remark_aoh}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>IOH Replacement Kit</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.change_ioh}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.notchange_ioh}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {data.remark_ioh}
                    </div>
                  </td>
                </tr>
              </table>
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
