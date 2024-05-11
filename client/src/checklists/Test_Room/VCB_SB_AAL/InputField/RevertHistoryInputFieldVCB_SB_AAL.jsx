import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateVCB_SB_AAl/details";
import Table from "../TemplateVCB_SB_AAl/table";
import Footer from "../TemplateVCB_SB_AAl/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./VCB_SB_AAL.css";
import { getUsername } from "../../../../helper/helper";

function RevertHistoryInputFieldVCB_SB_AAl() {
  const [showForm, setShowForm] = useState(false);
  const [loco_no1, setLoco_no1] = useState("");
  const [date_1, setDate_1] = useState("");
  const [oh_date, setOh_date] = useState("");
  const [schedule, setSchedule] = useState("");
  const [vcb_srno, setVcb_srno] = useState("");
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
  const [loco_no2, setLoco_no2] = useState("");
  const [date_2, setDate_2] = useState("");
  const [change_aoh, setChange_aoh] = useState("");
  const [notchange_aoh, setNotchange_aoh] = useState("");
  const [remark_aoh, setRemark_aoh] = useState("");
  const [change_ioh, setChange_ioh] = useState("");
  const [notchange_ioh, setNotchange_ioh] = useState("");
  const [remark_ioh, setRemark_ioh] = useState("");
  const [remark, setRemark] = useState("");
  const [tech_sign, setTech_sign] = useState("");
  const [jesse_sign, setJesse_sign] = useState("");
  const [tech_name, setTech_name] = useState("");
  const [jesse_name, setJesse_name] = useState("");
  const [sign3_ppio, setSign3_ppio] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    loco_no1: "",
    date_1: "",
    oh_date: "",
    schedule: "",
    vcb_srno: "",
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
    loco_no2: "",
    date_2: "",
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
      const response = await axios.get(`/revert/VCB_SB_AAL/${uid}`);
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        loco_no1: fetchedData.equipmentNumeber,
        date_1: fetchedData.date_1,
        oh_date: fetchedData.oh_date,
        schedule: fetchedData.schedule,
        vcb_srno: fetchedData.vcb_srno,
        removed_loco: fetchedData.removed_loco,
        provided_date: fetchedData.provided_date,
        actual_value01: fetchedData.actual_value10,
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
        loco_no2: fetchedData.loco_no2,
        date_2: fetchedData.date_2,
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
      loco_no1,
      date_1,
      oh_date,
      schedule,
      vcb_srno,
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
      loco_no2,
      date_2,
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
      const { data } = await axios.post("/submitForm/OCB", {
        loco_no1,
        date_1,
        oh_date,
        schedule,
        vcb_srno,
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
        loco_no2,
        date_2,
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
                loco_no1={loco_no1}
                date_1={date_1}
                oh_date={oh_date}
                schedule={schedule}
                vcb_srno={vcb_srno}
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
                loco_no2={loco_no2}
                date_2={date_2}
                change_aoh={change_aoh}
                notchange_aoh={notchange_aoh}
                remark_aoh={remark_aoh}
                change_ioh={change_ioh}
                notchange_ioh={notchange_ioh}
                remark_ioh={remark_ioh}
                remark={remark}
                tech_sign={tech_sign}
                jesse_sign={jesse_sign}
                tech_name={tech_name}
                jesse_name={jesse_name}
              />

              <Footer
                remark={remark}
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
                <div className="header-text">
                  <h4>
                    CENTRAL RAILWAY <br></br>ELECTRIC LOCO SHED, BHUSAWAL
                  </h4>
                </div>
                <label htmlFor="loco-number">Loco No:</label>
                <input
                  type="text"
                  placeholder="Enter"
                  aria-label=" "
                  value={data.loco_no1}
                  onChange={(e) => {
                    setData({ ...data, loco_no1: e.target.value });
                    setLoco_no1(e.target.value);
                  }}
                ></input>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  placeholder="Enter"
                  aria-label=" "
                  value={data.date_1}
                  onChange={(e) => {
                    setData({ ...data, date_1: e.target.value });
                    setDate_1(e.target.value);
                  }}
                ></input>
                <br></br>
                <div>
                  <label htmlFor="section">Section:</label>
                  <span>Test Room</span>
                </div>
                <div>
                  <label htmlFor="inspection">Inspection:</label>
                  <span>
                    AOH<input type="checkbox" aria-label=" "></input> IOH
                    <input type="checkbox" aria-label=" "></input> TOH
                    <input type="checkbox" aria-label=" "></input>
                  </span>
                </div>

                <br> </br>
                <div className="header">
                  <h2>
                    Electric Loco Shed , Bhusawal <br></br>
                    Check Sheet for Single bottle VCB (Type VCBA 25.10 Tr ) of
                    M/s AAL
                  </h2>
                  <img
                    src="IR Logo.png"
                    alt="Logo"
                    className="logo"
                    height="70px"
                    width="70px"
                  ></img>
                </div>
                <div className="loco-dept"></div>
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
                            Remove from Loco-
                            <input
                              type="date"
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
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Description of Test</th>
                      <th>Standard Value</th>
                      <th>Actual Value</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        I. R. Value. <br></br>
                        (1)Power ckt.<br></br>
                        (2) L.T. ckt{" "}
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
                      </td>
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
                      <td>2</td>
                      <td>
                        High Voltage Test<br></br>
                        (a) Fix Contact (HT) to Earth & Moving Contact (HT).
                        <br></br>
                        (b) Earth to Contacts (HT).<br></br>
                        (c) Earth & LT Terminals.
                      </td>
                      <td>
                        40 kV AC for 10 sec. withstand <br></br>
                        40 kV AC for 10 sec. withstand <br></br>2 kV AC for 1
                        min withstand
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
                      </td>
                      <td>
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
                      <td>3</td>
                      <td>
                        Aux switch <br></br>
                        (i)Contact check and clean.<br></br>
                        (ii)Check lever assembly for any crackness.
                      </td>
                      <td> Check & Clean No crack</td>
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
                      <td>4</td>
                      <td>Leakage Test. - </td>
                      <td> 10% at 6.5 Kg/cm2 in 10 minutes.</td>
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
                      <td>5</td>
                      <td>Check resistance of holding coil. (1510+/-8%)</td>
                      <td>1390 – 1630 Ω</td>
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
                      <td>6</td>
                      <td>Check pressure regulator setting.</td>
                      <td>4.4 – 4.6 Kg/cm2</td>
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
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        Pressure Switch Setting.<br></br>
                        (a)Cut In.<br></br>
                        (b) Cut Out.
                      </td>
                      <td>
                        {" "}
                        3.5 – 3.7 kg/cm²<br></br>
                        3.2 – 3.4 kg/cm²
                      </td>
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
                      <td>8</td>
                      <td>
                        Overhaul<br></br>
                        (a)EV valve assembly<br></br>
                        (b)Pressure Regulator
                      </td>
                      <td> O/H Done</td>
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
                      <td>9</td>
                      <td>Minimum Operating Voltage.</td>
                      <td>≤ 77.0 V.</td>
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
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Check Q factor of coil.</td>
                      <td>Check</td>
                      <td>
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
                      <td>11</td>
                      <td>Lubrication to be done.</td>
                      <td>Done</td>
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
                      <td>12</td>
                      <td>Take speed travel record As per OEM</td>
                      <td>Done</td>
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
                  </table>
                </div>
                <br></br>
                <br></br>
              </form>
            </section>
            <div style="height: 25px;"></div>

            <section className="container">
              <form>
                <div className="header-text">
                  <h4>
                    CENTRAL RAILWAY <br></br>ELECTRIC LOCO SHED, BHUSAWAL
                  </h4>
                </div>
                <label htmlFor="loco-number">Loco No:</label>
                <input
                  type="text"
                  placeholder="Enter"
                  aria-label=" "
                  value={data.loco_no2}
                  onChange={(e) => {
                    setData({
                      ...data,
                      loco_no2: e.target.value,
                    });
                    setLoco_no2(e.target.value);
                  }}
                ></input>
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  placeholder="Enter"
                  aria-label=" "
                  value={data.date_2}
                  onChange={(e) => {
                    setData({
                      ...data,
                      date_2: e.target.value,
                    });
                    setDate_2(e.target.value);
                  }}
                ></input>
                <br></br>
                <div>
                  <label htmlFor="section">Section:</label>
                  <span>Test Room</span>
                </div>
                <div>
                  <label htmlFor="inspection">Inspection:</label>
                  <span>
                    AOH<input type="checkbox" aria-label=" "></input> IOH
                    <input type="checkbox" aria-label=" "></input> TOH
                    <input type="checkbox" aria-label=" "></input>
                  </span>
                </div>
                <br></br>
                <p></p>
                <b></b>Must change Item of single bottle VCB<br></br>(Type- VCBA
                25.10 Tr) of M/s AAL<b></b>
                <p></p>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>Sr. No.</th>
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
                  <label htmlFor="Sign of Tech -">
                    Sign of Tech -
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.tech_sign}
                      onChange={(e) => {
                        setData({
                          ...data,
                          tech_sign: e.target.value,
                        });
                        setTech_sign(e.target.value);
                      }}
                    ></input>
                  </label>

                  <label htmlFor="Sign of JE/SSE-">
                    Sign of JE/SSE-
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.jesse_sign}
                      onChange={(e) => {
                        setData({
                          ...data,
                          jesse_sign: e.target.value,
                        });
                        setJesse_sign(e.target.value);
                      }}
                    ></input>
                  </label>
                  <br></br>

                  <label htmlFor="Name of Tech ">
                    Name of Tech
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.tech_name}
                      onChange={(e) => {
                        setData({
                          ...data,
                          tech_name: e.target.value,
                        });
                        setTech_name(e.target.value);
                      }}
                    ></input>
                  </label>

                  <label htmlFor="Name of JE/SSE ">
                    Name and sign.of JE/SSE{" "}
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.jesse_name}
                      onChange={(e) => {
                        setData({
                          ...data,
                          jesse_name: e.target.value,
                        });
                        setJesse_name(e.target.value);
                      }}
                    ></input>
                  </label>
                </div>
              </form>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default RevertHistoryInputFieldVCB_SB_AAl;
