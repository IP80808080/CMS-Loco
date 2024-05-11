import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateVCBSBAREVA/details";
import Table from "../TemplateVCBSBAREVA/table";
import Footer from "../TemplateVCBSBAREVA/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./VCB_SB_AREVA.css";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";
import logo from "../../../../assets/IRLogo.png";

function RevertHistoryInputFieldVCB_SB_AREVA() {
  const [showForm, setShowForm] = useState(false);
  const [oh_date, setOh_date] = useState("");
  const [schedule, setSchedule] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [removed_loco, setRemoved_loco] = useState("");
  const [provided_date, setProvided_date] = useState("");
  const [actual_value01, setActual_value01] = useState("");
  const [actual_value02, setActual_value02] = useState("");
  const [actual_value03, setActual_value03] = useState("");
  const [actual_value04, setActual_value04] = useState("");
  const [actual_value05, setActual_value05] = useState("");
  const [actual_value06, setActual_value06] = useState("");
  const [actual_value07, setActual_value07] = useState("");
  const [actual_value08, setActual_value08] = useState("");
  const [actual_value09, setActual_value09] = useState("");
  const [actual_value10, setActual_value10] = useState("");
  const [actual_value11, setActual_value11] = useState("");
  const [actual_value12, setActual_value12] = useState("");
  const [actual_value13, setActual_value13] = useState("");
  const [actual_value14, setActual_value14] = useState("");
  const [actual_value15, setActual_value15] = useState("");
  const [actual_value16, setActual_value16] = useState("");
  const [actual_value17, setActual_value17] = useState("");
  const [actual_value18, setActual_value18] = useState("");
  const [actual_value19, setActual_value19] = useState("");
  const [actual_value20, setActual_value20] = useState("");
  const [change_aoh, setChange_aoh] = useState("");
  const [notchange_aoh, setNotchange_aoh] = useState("");
  const [remark_aoh, setRemark_aoh] = useState("");
  const [change_ioh, setChange_ioh] = useState("");
  const [notchange_ioh, setNotchange_ioh] = useState("");
  const [remark_ioh, setRemark_ioh] = useState("");
  const [remark, setRemark] = useState("");

  const [uid, setUID] = useState("");
  const [sign, setSign] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { username, uid } = await getUsername();
        setSign(username);
        setUID(uid);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    oh_date: "",
    schedule: "",
    equipmentNumber: "",
    removed_loco: "",
    provided_date: "",
    actual_value01: "",
    actual_value02: "",
    actual_value03: "",
    actual_value04: "",
    actual_value05: "",
    actual_value06: "",
    actual_value07: "",
    actual_value08: "",
    actual_value09: "",
    actual_value10: "",
    actual_value11: "",
    actual_value12: "",
    actual_value13: "",
    actual_value14: "",
    actual_value15: "",
    actual_value16: "",
    actual_value17: "",
    actual_value18: "",
    actual_value19: "",
    actual_value20: "",
    change_aoh: "",
    notchange_aoh: "",
    remark_aoh: "",
    change_ioh: "",
    notchange_ioh: "",
    remark_ioh: "",
    remark: "",
    tech_sign: "",
    jesse_sign: "",
    tech_name: "",
    jesse_name: "",
  });

  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(
        `${BASE_URL}/api/revert/TR-VCBSBAREVA/${uid}`
      );
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        uid: fetchedData.uid,
        oh_date: fetchedData.oh_date,
        schedule: fetchedData.schedule,
        equipmentNumber: fetchedData.equipmentNumber,
        removed_loco: fetchedData.removed_loco,
        provided_date: fetchedData.provided_date,
        actual_value01: fetchedData.actual_value01,
        actual_value02: fetchedData.actual_value02,
        actual_value03: fetchedData.actual_value03,
        actual_value04: fetchedData.actual_value04,
        actual_value05: fetchedData.actual_value05,
        actual_value06: fetchedData.actual_value06,
        actual_value07: fetchedData.actual_value07,
        actual_value08: fetchedData.actual_value08,
        actual_value09: fetchedData.actual_value09,
        actual_value10: fetchedData.actual_value10,
        actual_value11: fetchedData.actual_value11,
        actual_value12: fetchedData.actual_value12,
        actual_value13: fetchedData.actual_value13,
        actual_value14: fetchedData.actual_value14,
        actual_value15: fetchedData.actual_value15,
        actual_value16: fetchedData.actual_value16,
        actual_value17: fetchedData.actual_value17,
        actual_value18: fetchedData.actual_value18,
        actual_value19: fetchedData.actual_value19,
        actual_value20: fetchedData.actual_value20,
        change_aoh: fetchedData.change_aoh,
        notchange_aoh: fetchedData.notchange_aoh,
        remark_aoh: fetchedData.remark_aoh,
        change_ioh: fetchedData.change_ioh,
        notchange_ioh: fetchedData.notchange_ioh,
        remark_ioh: fetchedData.remark_ioh,
        remark: fetchedData.remark,
        tech_sign: fetchedData.tech_sign,
        jesse_sign: fetchedData.jesse_sign,
        tech_name: fetchedData.tech_name,
        jesse_name: fetchedData.jesse_name,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error if needed
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      oh_date,
      schedule,
      equipmentNumber,
      removed_loco,
      provided_date,
      actual_value01,
      actual_value02,
      actual_value03,
      actual_value04,
      actual_value05,
      actual_value06,
      actual_value07,
      actual_value08,
      actual_value09,
      actual_value10,
      actual_value11,
      actual_value12,
      actual_value13,
      actual_value14,
      actual_value15,
      actual_value16,
      actual_value17,
      actual_value18,
      actual_value19,
      actual_value20,
      change_aoh,
      notchange_aoh,
      remark_aoh,
      change_ioh,
      notchange_ioh,
      remark_ioh,
      remark,
      tech_sign,
      jesse_sign,
      tech_name,
      jesse_name,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/VCBSBAREVA`, {
        sign: sign,
        uid,
        oh_date,
        schedule,
        equipmentNumber,
        removed_loco,
        provided_date,
        actual_value01,
        actual_value02,
        actual_value03,
        actual_value04,
        actual_value05,
        actual_value06,
        actual_value07,
        actual_value08,
        actual_value09,
        actual_value10,
        actual_value11,
        actual_value12,
        actual_value13,
        actual_value14,
        actual_value15,
        actual_value16,
        actual_value17,
        actual_value18,
        actual_value19,
        actual_value20,
        change_aoh,
        notchange_aoh,
        remark_aoh,
        change_ioh,
        notchange_ioh,
        remark_ioh,
        remark,
        tech_sign,
        jesse_sign,
        tech_name,
        jesse_name,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Submitted successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during checklist submission:", error);
      toast.error("Error during checklist submission");
    }
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <Details
                oh_date={oh_date}
                schedule={schedule}
                equipmentNumber={equipmentNumber}
                removed_loco={removed_loco}
                provided_date={provided_date}
              />

              <br></br>

              <Table
                actual_value01={actual_value01}
                actual_value02={actual_value02}
                actual_value03={actual_value03}
                actual_value04={actual_value04}
                actual_value05={actual_value05}
                actual_value06={actual_value06}
                actual_value07={actual_value07}
                actual_value08={actual_value08}
                actual_value09={actual_value09}
                actual_value10={actual_value10}
                actual_value11={actual_value11}
                actual_value12={actual_value12}
                actual_value13={actual_value13}
                actual_value14={actual_value14}
                actual_value15={actual_value15}
                actual_value16={actual_value16}
                actual_value17={actual_value17}
                actual_value18={actual_value18}
                actual_value19={actual_value19}
                actual_value20={actual_value20}
                change_aoh={change_aoh}
                notchange_aoh={notchange_aoh}
                remark_aoh={remark_aoh}
                change_ioh={change_ioh}
                notchange_ioh={notchange_ioh}
                remark_ioh={remark_ioh}
              />

              <Footer remark={remark} />

              <br></br>

              <footer className="flex justify-center items-center space-x-4 px-4">
                <span style={{ whiteSpace: "pre" }}> </span>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                >
                  Edit
                </button>
                <button
                  onClick={handlePrint}
                  className="bg-green-500 py-2 px-8 rounded shadow border-2 border-green-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                >
                  Print
                </button>
                <button
                  className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </footer>
            </div>
          </div>
        ) : (
          <>
            <section className="container">
              <form>
                <div className="header">
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
                </div>
                <div className="loco-dept"></div>
                <div className="flex-container"></div>
                <br> </br>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <td>
                        <label htmlFor="O/H Date">
                          O/H Date
                          <input
                            type="date"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.oh_date}
                            onChange={(e) => {
                              setData({ ...data, oh_date: e.target.value });
                              setOh_date(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                      <td>
                        <label htmlFor="Schedule -">
                          Schedule -
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.schedule}
                            onChange={(e) => {
                              setData({ ...data, schedule: e.target.value });
                              setSchedule(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                      <td>
                        <label htmlFor="VCB Sr. No -">
                          VCB Sr. No -
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.equipmentNumber}
                            onChange={(e) => {
                              setData({
                                ...data,
                                equipmentNumber: e.target.value,
                              });
                              setEquipmentNumber(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Remove from Loco">
                          Remove from Loco:
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.removed_loco}
                            onChange={(e) => {
                              setData({
                                ...data,
                                removed_loco: e.target.value,
                              });
                              setRemoved_loco(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                      <td></td>
                      <td>
                        <label htmlFor="Provided Date:-">
                          Provided Date:-
                          <input
                            type="date"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.provided_date}
                            onChange={(e) => {
                              setData({
                                ...data,
                                provided_date: e.target.value,
                              });
                              setProvided_date(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                    </tr>
                  </table>
                </div>
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
                      <td>1</td>
                      <td>Surge suppressor current at 110 V AC. </td>
                      <td>14 - 19.5 mA </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value01}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value01: e.target.value,
                            });
                            setActual_value01(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Pressure regulator setting </td>
                      <td>5.2 -5.4 kg/cm²</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value02}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value02: e.target.value,
                            });
                            setActual_value02(e.target.value);
                          }}
                        ></input>
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
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value03}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value03: e.target.value,
                            });
                            setActual_value03(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value04}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value04: e.target.value,
                            });
                            setActual_value04(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pickup voltage </td>
                      <td>55- 70 V DC </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value05}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value05: e.target.value,
                            });
                            setActual_value05(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>VCB contact travel test. </td>
                      <td>Must be taken.</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value06}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value06: e.target.value,
                            });
                            setActual_value06(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mag. valve resistance at R20C </td>
                      <td>798 Ω – 882 Ω</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value07}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value07: e.target.value,
                            });
                            setActual_value07(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        Magnet valve clearance.<br></br>
                        (a)Between armature & armature plate.<br></br>
                        (b) Slight clearance must be available between top
                        fluted valve & stem.
                      </td>
                      <td>
                        (a) 0.51mm -0.61mm<br></br>
                        (b) Must be available
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value08}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value08: e.target.value,
                            });
                            setActual_value08(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value09}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value09: e.target.value,
                            });
                            setActual_value09(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Gap between 21 mm setting gauge & operating rod. </td>
                      <td>0.25 mm feeler gauge.</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value10}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value10: e.target.value,
                            });
                            setActual_value10(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        H.V. Testing. VCB close- power terminal to earth. VCB
                        open - <br></br>
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
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value11}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value11: e.target.value,
                            });
                            setActual_value11(e.target.value);
                          }}
                        ></input>
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
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value12}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value12: e.target.value,
                            });
                            setActual_value12(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value13}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value13: e.target.value,
                            });
                            setActual_value13(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <br></br>
              </form>
            </section>

            <section className="container">
              <form>
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
                        (1)VCB OFF position: - After applying air pressure at
                        6.5 Kg/cm2 to the breaker with the control magnet valve
                        de-energized, seal the air entry to the circuit breaker
                        & check the air pressure after 10 minute.<br></br>
                        (2)VCB ON position: - After applying air pressure at 6.5
                        Kg/cm2 to the breaker with the control magnet valve
                        energized, seal the air entry to the circuit breaker &
                        check the air pressure after 10 minute
                      </td>
                      <td>
                        The drop in pressure must not exceed 10 % of the initial
                        pressure.
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value14}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value14: e.target.value,
                            });
                            setActual_value14(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value15}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value15: e.target.value,
                            });
                            setActual_value15(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Q factor of coil (As per Instructions)</td>
                      <td>Checked</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value16}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value16: e.target.value,
                            });
                            setActual_value16(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>
                        Endurance test: - 200 operations to be taken on test
                        bench & see any abnormality.{" "}
                      </td>
                      <td>
                        <br></br>Must be taken.
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value17}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value17: e.target.value,
                            });
                            setActual_value17(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Check auxiliary switch and clean the contact . </td>
                      <td>Check and clean</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value18}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value18: e.target.value,
                            });
                            setActual_value18(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>
                        Overhaul (a) Magnet valve (b) Air filter (c) Pressure
                        switch (d) Pressure regulator.{" "}
                      </td>
                      <td>Overhaul done.</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value19}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value19: e.target.value,
                            });
                            setActual_value19(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Take Mili volt Drop of VST ( As per OEM manual)</td>
                      <td>46.7 mV</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.actual_value20}
                          onChange={(e) => {
                            setData({
                              ...data,
                              actual_value20: e.target.value,
                            });
                            setActual_value20(e.target.value);
                          }}
                        ></input>
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
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.change_aoh}
                          onChange={(e) => {
                            setData({
                              ...data,
                              change_aoh: e.target.value,
                            });
                            setChange_aoh(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.notchange_aoh}
                          onChange={(e) => {
                            setData({
                              ...data,
                              notchange_aoh: e.target.value,
                            });
                            setNotchange_aoh(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.remark_aoh}
                          onChange={(e) => {
                            setData({
                              ...data,
                              remark_aoh: e.target.value,
                            });
                            setRemark_aoh(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>IOH Replacement Kit</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.change_ioh}
                          onChange={(e) => {
                            setData({
                              ...data,
                              change_ioh: e.target.value,
                            });
                            setChange_ioh(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.notchange_ioh}
                          onChange={(e) => {
                            setData({
                              ...data,
                              notchange_ioh: e.target.value,
                            });
                            setNotchange_ioh(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.remark_ioh}
                          onChange={(e) => {
                            setData({
                              ...data,
                              remark_ioh: e.target.value,
                            });
                            setRemark_ioh(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="signature">
                  <label htmlFor="Remark">
                    Remark :-
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.remark}
                      onChange={(e) => {
                        setData({
                          ...data,
                          remark: e.target.value,
                        });
                        setRemark(e.target.value);
                      }}
                    ></input>
                  </label>
                  <br></br>
                </div>
                <div>
                  <div className="container mx-auto p-4">
                    <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
                      <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <label
                          htmlFor="तकनिशियन"
                          className="form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>
                            तकनिशियन का नाम एवं हस्ताक्षर:{" "}
                          </span>
                        </label>
                        <input
                          type="text"
                          className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                          placeholder="Name"
                          aria-label="Name"
                          value={sign}
                          readOnly
                        ></input>
                      </div>
                      <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <label
                          htmlFor="तकनिशियन"
                          className="form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>
                            तकनिशियन का ID:{" "}
                          </span>
                        </label>
                        <input
                          type="text"
                          className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                          placeholder="ID"
                          aria-label="ID"
                          required
                          value={uid}
                          readOnly
                        ></input>
                      </div>

                      <div className="flex items-center space-x-2">
                        <label
                          htmlFor="सुपरवाईजर"
                          className="form-label custom-label"
                        >
                          सुपरवाईजर का नाम एवं हस्ताक्षर:
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <br></br>
              <div className="flex container flex-col items-center justify-center ">
                <button
                  className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default RevertHistoryInputFieldVCB_SB_AREVA;
