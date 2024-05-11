import { useState } from "react";
import axios from "axios";
import Details from "../TemplateVCB_SB_BT/details";
import Table from "../TemplateVCB_SB_BT/table";
import Footer from "../TemplateVCB_SB_BT/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./VCB_SB_BT.css";

function AppVCB_SB_BT() {
  const [showForm, setShowForm] = useState(false);
  const [oh_date, setOh_date] = useState("");
  const [schedule, setSchedule] = useState("");
  const [vcb_srno, setVcb_srno] = useState("");
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
  const [std_value13, setStd_value13] = useState("");
  const [actual_value13, setActual_value13] = useState("");
  const [change_aoh, setChange_aoh] = useState("");
  const [notchange_aoh, setNotchange_aoh] = useState("");
  const [remark_aoh, setRemark_aoh] = useState("");
  const [change_ioh, setChange_ioh] = useState("");
  const [notchange_ioh, setNotchange_ioh] = useState("");
  const [remark_ioh, setRemark_ioh] = useState("");
  const [tech_sign, setTech_sign] = useState("");
  const [jesse_sign, setJesse_sign] = useState("");
  const [tech_name, setTech_name] = useState("");
  const [jesse_name, setJesse_name] = useState("");
  const [actual_value14, setActual_value14] = useState("");
  const [actual_value15, setActual_value15] = useState("");
  const [actual_value16, setActual_value16] = useState("");
  const [actual_value17, setActual_value17] = useState("");
  const [actual_value18, setActual_value18] = useState("");
  const [actual_value19, setActual_value19] = useState("");
  const [actual_value20, setActual_value] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    oh_date: "",
    schedule: "",
    vcb_srno: "",
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
    std_value13: "",
    actual_value13: "",
    change_aoh: "",
    notchange_aoh: "",
    remark_aoh: "",
    change_ioh: "",
    notchange_ioh: "",
    remark_ioh: "",
    tech_sign: "",
    jesse_sign: "",
    tech_name: "",
    jesse_name: "",
    actual_value14: "",
    actual_value15: "",
    actual_value16: "",
    actual_value17: "",
    actual_value18: "",
    actual_value19: "",
    actual_value20: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      oh_date,
      schedule,
      vcb_srno,
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
      actual_value14,
      actual_value15,
      actual_value16,
      actual_value17,
      actual_value18,
      actual_value19,
      actual_value20,
      std_value13,
      actual_value13,
      change_aoh,
      notchange_aoh,
      remark_aoh,
      change_ioh,
      notchange_ioh,
      remark_ioh,
      tech_sign,
      jesse_sign,
      tech_name,
      jesse_name,
    } = data;
    try {
      const { data } = await axios.post("/submitForm/OCB", {
        oh_date,
        schedule,
        vcb_srno,
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
        std_value13,
        actual_value13,
        change_aoh,
        notchange_aoh,
        remark_aoh,
        change_ioh,
        notchange_ioh,
        remark_ioh,
        tech_sign,
        jesse_sign,
        tech_name,
        jesse_name,
        actual_value14,
        actual_value15,
        actual_value16,
        actual_value17,
        actual_value18,
        actual_value19,
        actual_value20,
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
                vcb_srno={vcb_srno}
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
                std_value13={std_value13}
                actual_value13={actual_value13}
                change_aoh={change_aoh}
                notchange_aoh={notchange_aoh}
                remark_aoh={remark_aoh}
                change_ioh={change_ioh}
                notchange_ioh={notchange_ioh}
                remark_ioh={remark_ioh}
                actual_value14={actual_value14}
                actual_value15={actual_value15}
                actual_value16={actual_value16}
                actual_value17={actual_value17}
                actual_value18={actual_value18}
                actual_value19={actual_value19}
                actual_value20={actual_value20}
              />

              <Footer
                tech_sign={tech_sign}
                jesse_sign={jesse_sign}
                tech_name={tech_name}
                jesse_name={jesse_name}
              />

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
                    src="IR Logo.png"
                    alt="Logo"
                    className="logo"
                    height="70px"
                    width="70px"
                  ></img>
                </div>
                <div className="loco-dept">
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
                              value={data.vcb_srno}
                              onChange={(e) => {
                                setData({ ...data, vcb_srno: e.target.value });
                                setVcb_srno(e.target.value);
                              }}
                            ></input>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
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
                </div>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>Sr. No</th>
                      <th>Description of Test</th>
                      <th>Standard Value</th>
                      <th>Actual Value</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        I. R. Value. <br></br>
                        (1)Power ckt. <br> </br>
                        (2) L.T. ckt.{" "}
                      </td>
                      <td>
                        (1) Power ckt. 200 mega ohms by 1kv megger.<br></br>
                        (2) L.T. ckt. 10 mega ohms by 500 V megger
                      </td>
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
                        <br></br>
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
                        <br></br>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        High Voltage Test<br></br>
                        (a) Main circuit (Close to Earth)<br></br>
                        (b) Between input and output of main contact (Open)
                        <br></br>
                        (c) To aux circuit{" "}
                      </td>
                      <td>
                        40 kV AC for 10 Sec. with stood. <br></br>
                        40 kV AC for 10 Sec. with stood. <br></br>
                        2kV AC for 1 min with stood.
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
                        <br></br>
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
                      <td>3</td>
                      <td>
                        Aux switch <br></br>
                        (i)Contact check and clean.<br></br>
                        (ii)Check lever assembly for any crackness.
                      </td>
                      <td>
                        Check & Clean<br></br>
                        No crack
                      </td>
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
                        <br></br>
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
                      <td>4</td>
                      <td>Leakage Test. - </td>
                      <td> 10% at 6.5 Kg/cm2 in 10 minutes.</td>
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
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        (i) Check resistance of EV Coil at R20º<br></br>
                        (ii) Check resistance of Holding coil at R20º
                      </td>
                      <td>
                        275 – 321 Ω<br></br>
                        690 – 810 Ω
                      </td>
                      <td>
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
                        <br></br>
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
                      <td>6</td>
                      <td>Check pressure regulator setting.</td>
                      <td>4.4 – 4.6 Kg/cm2</td>
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
                      <td>7</td>
                      <td>
                        Pressure Switch Setting.<br></br>
                        a.Cut In <br></br>
                        b.Cut Out.
                      </td>
                      <td>
                        3.5 – 3.7 kg/cm²<br></br>
                        3.2 – 3.4 kg/cm²
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
                    <tr>
                      <td>8</td>
                      <td>
                        Overhaul<br></br>
                        (a)EV valve assembly<br></br>
                        (b)Pressure Regulator
                      </td>
                      <td> O/H Done </td>
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
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Check the timing of CMDE unit</td>
                      <td>600 m.sec.</td>
                      <td>
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
                      <td>10</td>
                      <td>Lubrication to be done.</td>
                      <td>Done</td>
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
                      <td>11</td>
                      <td>Minimum Operating Voltage.</td>
                      <td>≤ 77.0 V.</td>
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
                      <td>12</td>
                      <td>Check Q factor of coil.</td>
                      <td>Check.</td>
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
                      <td>13</td>
                      <td>Take speed travel record (OEM manual)</td>
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
                      </td>{" "}
                      <br></br>
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
                            setActual_value01(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <p1>NOTE:- All points from OEM</p1>
                <br></br>
                <br></br>
              </form>
            </section>
            <div style="height: 25px;"></div>

            <section className="container">
              <form>
                <br></br>
                <p>
                  <b>Must change Item of single bottle</b>
                </p>{" "}
                <br></br>
                VCB (Type-BVAC 25.10 M07) of M/s BT<b></b>
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
                            setData({ ...data, change_aoh: e.target.value });
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
                            setData({ ...data, notchange_aoh: e.target.value });
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
                            setData({ ...data, remark_aoh: e.target.value });
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
                            setData({ ...data, change_ioh: e.target.value });
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
                            setData({ ...data, notchange_ioh: e.target.value });
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
                            setData({ ...data, remark_ioh: e.target.value });
                            setRemark_ioh(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="signature">
                  <label htmlFor="Sign of Tech -">
                    Sign of Tech -
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.tech_sign}
                      onChange={(e) => {
                        setData({ ...data, tech_sign: e.target.value });
                        setTech_sign(e.target.value);
                      }}
                    ></input>
                  </label>

                  <label htmlFor="Sign of JE/SSE -">
                    Sign of JE/SSE -
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.jesse_sign}
                      onChange={(e) => {
                        setData({ ...data, jesse_sign: e.target.value });
                        setJesse_sign(e.target.value);
                      }}
                    ></input>{" "}
                  </label>
                  <br></br>
                  <label htmlFor="Name of Tech -">
                    Name of Tech -
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.tech_name}
                      onChange={(e) => {
                        setData({ ...data, tech_name: e.target.value });
                        setTech_name(e.target.value);
                      }}
                    ></input>
                  </label>

                  <label htmlFor="Name of JE/SSE -">
                    Name of JE/SSE -
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.jesse_name}
                      onChange={(e) => {
                        setData({ ...data, jesse_name: e.target.value });
                        setJesse_name(e.target.value);
                      }}
                    ></input>
                  </label>
                </div>
              </form>
              <br></br>
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-500 py-2 px-8 rounded shadow border-2  border-blue-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview from
              </button>
              <button
                className="bg-yellow-400 py-2 px-8 rounded shadow border-2 border-yellow-500 text-white font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default AppVCB_SB_BT;
