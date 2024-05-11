import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/IRLogo.png";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import { getUsername } from "../../helper/helper";

export default function TemplateEMC() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { uid } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [sign2, setSign2] = useState("");

  const handlePrint = () => {
    window.print();
  };

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
          `${BASE_URL}/api/getEMCFormData/${uid}`
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
          <header className="bg-white">
            <div className="mx-auto mb-4 lg:mb-0">
              <h1 className="text-xl font-bold">
                Electric Loco Shed , Bhusawal
                <br />
                Check sheet for QD Relay
              </h1>
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
          <section className="container justify-center">
            <div className="container mt-5 px-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border-collapse">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="date_of_overhauling"
                          className="font-bold"
                        >
                          Date of overhauling:
                        </label>
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
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="make_of_contactor"
                          className="font-bold"
                        >
                          Make of contactor:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.make_contractor}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="schedule" className="font-bold">
                          Schedule:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.schedule}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="removed_from_loco"
                          className="font-bold"
                        >
                          Removed from loco:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.removed_locono}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="EMC_TR_sr_no" className="font-bold">
                          EMC/ TR Sr. No.:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.equipmentNumber}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="provided_on_loco" className="font-bold">
                          Provided on Loco:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.provided_loco}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="sr_no_of_coil" className="font-bold">
                          Sr. No. of coil:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.srno_coil}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="used_as_EMC_contactor"
                          className="font-bold"
                        >
                          Used as EMC Contactor:
                        </label>
                        <div className="flex items-center justify-center">
                          {data.emc_contractor}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="container">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">
                        Sr. No.
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Description of Test
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Standard Value
                      </th>
                      <th
                        className="border border-gray-400 px-4 py-2"
                        colSpan="2"
                      >
                        Measured value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Condition of EMC before dismantling (any defects Notice)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        No defect
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value1a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value1b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Insulation resistance with 500V megger between Magnet
                        coil terminal and earth.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        10 Mega ohm (Min)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value2a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value2b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        `IR with 1000 Volts Megger of main contacts.
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Between phases
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        10 Mega ohm (Min)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value3a1}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value3b1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Between each phase & insulated shaft.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        10 Mega ohm (Min)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value3a2}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value3b2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Coil resistance at Room temp./R 20°C (SMI – 69)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        539 Ω – 632 Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value4a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value4b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Pick up voltage (maintenance manual)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        60 – 70 V DC
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value5a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value5b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">6</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Drop out voltage (maintenance manual)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        10 – 20 V DC
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value6a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value6b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">7</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Main contact spring tension. Difference of contact
                        pressure between poles should not be more than 25 gms
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        850 -1100 gms.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value7a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value7b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">8</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Aux contact pressure N/O
                        <br />
                        (maintenance manual) N/C
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        80 – 120 gms
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value8a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value8b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">9</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Main contact gap (maintenance manual)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        7.5 – 9.5 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value9a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value9b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">10</td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Check play between Armature and Yoke.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        No defect
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Right side
                      </td>
                      <td className="border border-gray-400 px-4 py-2">1 mm</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value10righta}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value10rightb}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Left side
                      </td>
                      <td className="border border-gray-400 px-4 py-2">1 mm</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value10lefta}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value10leftb}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">11</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Inter turn short circuit test of coils by Inter turn
                        short tester. (SMI – 59)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        No inter turn short{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value11a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value11b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">12</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check distance between core and armature. (maintenance
                        manual)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        2 + 0 mm
                        <br />- 0.5 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value12a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value12b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">13</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check conditions of Arc chutes. (ELS Practice)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Good condition
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value13a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value13b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">14</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Crushing of main contacts. (CLW Routine Test)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        3.8 – 4.3 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value14a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value14b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">15</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Crushing of auxiliary contacts.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.5 + 1.7 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value15a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value15b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">16</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Air Gap of Aux. contacts.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        3.8 – 4.2 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value16a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value16b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">17</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the condition of copper shunts (If stiff or badly
                        frayed) & more than 10% strands are out. (ELS Practice)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Good condition
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value17a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value17b}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">18</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check tips contacts for simultaneous closing by delay
                        timer. (ELS Practice)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value18a}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.measured_value18b}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br className="mt-5" />
              <tr>
                <th className="border border-gray-400 px-4 py-2" colSpan="5">
                  <h2 className="font-bold text-lg">Must change Item of EMC</h2>
                </th>
              </tr>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">
                        Sr. No.
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Item Description
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Change
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Not Change
                      </th>
                      <th className="border border-gray-400 px-4 py-2">Make</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Set of contact tips (Fix & Mobile) (AOH)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.change_1}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.notchange_1}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.make_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Mobile contact with shunt. (IOH)
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.change_2}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.notchange_2}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {data.make_2}
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
