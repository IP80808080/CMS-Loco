import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateREV-CTF/details";
import Table from "../TemplateREV-CTF/table";
import Footer from "../TemplateREV-CTF/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./REV-CTF.css";
import { getUsername } from "../../../../helper/helper";

function RevertHistoryInputFieldREV_CTF() {
  const [showForm, setShowForm] = useState(false);
  const [overhaul_date, setOverhaul_date] = useState("");
  const [revctf_make, setRevctf_make] = useState("");
  const [schedule, setSchedule] = useState("");
  const [removed_locono, setRemoved_locono] = useState("");
  const [coil_srno, setCoil_srno] = useState("");
  const [provided_locono, setProvided_locono] = useState("");
  const [epvalve_srno1, setEpvalve_srno1] = useState("");
  const [epvalve_srno2, setEpvalve_srno2] = useState("");
  const [measured_value1, setMeasured_value1] = useState("");
  const [measured_value2, setMeasured_value2] = useState("");
  const [measured_value3, setMeasured_value3] = useState("");
  const [measured_value4, setMeasured_value4] = useState("");
  const [measured_value5, setMeasured_value5] = useState("");
  const [measured_value6, setMeasured_value6] = useState("");
  const [measured_value7, setMeasured_value7] = useState("");
  const [measured_value8, setMeasured_value8] = useState("");
  const [measured_value9, setMeasured_value9] = useState("");
  const [measured_value10, setMeasured_value10] = useState("");
  const [measured_value11, setMeasured_value11] = useState("");
  const [measured_value12, setMeasured_value12] = useState("");
  const [measured_value13, setMeasured_value13] = useState("");
  const [measured_value14, setMeasured_value14] = useState("");
  const [measured_value15, setMeasured_value15] = useState("");
  const [measured_value16, setMeasured_value16] = useState("");
  const [measured_value17, setMeasured_value17] = useState("");
  const [measured_value18, setMeasured_value18] = useState("");
  const [measured_value19, setMeasured_value19] = useState("");
  const [measured_value20, setMeasured_value20] = useState("");
  const [change_cup, setChange_cup] = useState("");
  const [notchange_cup, setNotchange_cup] = useState("");
  const [make_cup, setMake_cup] = useState("");
  const [change_servomotor, setChange_servomotor] = useState("");
  const [notchange_servomotor, setNotchange_servomotor] = useState("");
  const [make_servomotor, setMake_servomotor] = useState("");
  const [change_ring, setChange_ring] = useState("");
  const [notchange_ring, setNotchange_ring] = useState("");
  const [make_ring, setMake_ring] = useState("");
  const [remark, setRemark] = useState("");
  const [tech_name, setTech_name] = useState("");
  const [jesse_name, setJesse_name] = useState("");
  const [jesse_sign, setJesse_sign] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    overhaul_date: "",
    revctf_make: "",
    schedule: "",
    removed_locono: "",
    coil_srno: "",
    provided_locono: "",
    epvalve_srno1: "",
    epvalve_srno2: "",
    measured_value1: "",
    measured_value2: "",
    measured_value3: "",
    measured_value4: "",
    measured_value5: "",
    measured_value6: "",
    measured_value7: "",
    measured_value8: "",
    measured_value9: "",
    measured_value10: "",
    measured_value11: "",
    measured_value12: "",
    measured_value13: "",
    measured_value14: "",
    measured_value15: "",
    measured_value16: "",
    measured_value17: "",
    measured_value18: "",
    measured_value19: "",
    measured_value20: "",
    change_cup: "",
    notchange_cup: "",
    make_cup: "",
    change_servomotor: "",
    notchange_servomotor: "",
    make_servomotor: "",
    change_ring: "",
    notchange_ring: "",
    make_ring: "",
    remark: "",
    tech_name: "",
    jesse_name: "",
    jesse_sign: "",
  });

  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(`/revert/Au-REV-CTF/${uid}`);
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        equipmentNumber: fetchedData.equipmentNumber,
        overhaul_date: fetchedData.overhaul_date,
        revctf_make: fetchedData.revctf_make,
        schedule: fetchedData.schedule,
        removed_locono: fetchedData.removed_locono,
        coil_srno: fetchedData.coil_srno,
        provided_locono: fetchedData.provided_locono,
        epvalve_srno1: fetchedData.epvalve_srno1,
        epvalve_srno2: fetchedData.epvalve_srno2,
        measured_value1: fetchedData.measured_value1,
        measured_value2: fetchedData.measured_value2,
        measured_value3: fetchedData.measured_value3,
        measured_value4: fetchedData.measured_value4,
        measured_value5: fetchedData.measured_value5,
        measured_value6: fetchedData.measured_value6,
        measured_value7: fetchedData.measured_value7,
        measured_value8: fetchedData.measured_value8,
        measured_value9: fetchedData.measured_value9,
        measured_value10: fetchedData.measured_value10,
        measured_value11: fetchedData.measured_value11,
        measured_value12: fetchedData.measured_value12,
        measured_value13: fetchedData.measured_value13,
        measured_value14: fetchedData.measured_value14,
        measured_value15: fetchedData.measured_value15,
        measured_value16: fetchedData.measured_value16,
        measured_value17: fetchedData.measured_value17,
        measured_value18: fetchedData.measured_value18,
        measured_value19: fetchedData.measured_value19,
        measured_value20: fetchedData.measured_value20,
        change_cup: fetchedData.change_cup,
        notchange_cup: fetchedData.notchange_cup,
        make_cup: fetchedData.make_cup,
        change_servomotor: fetchedData.change_servomotor,
        notchange_servomotor: fetchedData.notchange_servomotor,
        make_servomotor: fetchedData.make_servomotor,
        change_ring: fetchedData.change_ring,
        notchange_ring: fetchedData.notchange_ring,
        make_ring: fetchedData.make_ring,
        remark: fetchedData.remark,
        tech_name: fetchedData.tech_name,
        jesse_name: fetchedData.jesse_name,
        jesse_sign: fetchedData.jesse_sign,
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
      overhaul_date,
      revctf_make,
      schedule,
      removed_locono,
      coil_srno,
      provided_locono,
      epvalve_srno1,
      epvalve_srno2,
      measured_value1,
      measured_value2,
      measured_value3,
      measured_value4,
      measured_value5,
      measured_value6,
      measured_value7,
      measured_value8,
      measured_value9,
      measured_value10,
      measured_value11,
      measured_value12,
      measured_value13,
      measured_value14,
      measured_value15,
      measured_value16,
      measured_value17,
      measured_value18,
      measured_value19,
      measured_value20,
      change_cup,
      notchange_cup,
      make_cup,
      change_servomotor,
      notchange_servomotor,
      make_servomotor,
      change_ring,
      notchange_ring,
      make_ring,
      remark,
      tech_name,
      jesse_name,
      jesse_sign,
    } = data;
    try {
      const { data } = await axios.post("/submitForm/OCB", {
        overhaul_date,
        revctf_make,
        schedule,
        removed_locono,
        coil_srno,
        provided_locono,
        epvalve_srno1,
        epvalve_srno2,
        measured_value1,
        measured_value2,
        measured_value3,
        measured_value4,
        measured_value5,
        measured_value6,
        measured_value7,
        measured_value8,
        measured_value9,
        measured_value10,
        measured_value11,
        measured_value12,
        measured_value13,
        measured_value14,
        measured_value15,
        measured_value16,
        measured_value17,
        measured_value18,
        measured_value19,
        measured_value20,
        change_cup,
        notchange_cup,
        make_cup,
        change_servomotor,
        notchange_servomotor,
        make_servomotor,
        change_ring,
        notchange_ring,
        make_ring,
        remark,
        tech_name,
        jesse_name,
        jesse_sign,
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
                overhaul_date={overhaul_date}
                revctf_make={revctf_make}
                schedule={schedule}
                removed_locono={removed_locono}
                coil_srno={coil_srno}
                provided_locono={provided_locono}
                epvalve_srno1={epvalve_srno1}
                epvalve_srno2={epvalve_srno2}
              />

              <br></br>

              <Table
                measured_value1={measured_value1}
                measured_value2={measured_value2}
                measured_value3={measured_value3}
                measured_value4={measured_value4}
                measured_value5={measured_value5}
                measured_value6={measured_value6}
                measured_value7={measured_value7}
                measured_value8={measured_value8}
                measured_value9={measured_value9}
                measured_value10={measured_value10}
                measured_value11={measured_value11}
                measured_value12={measured_value12}
                measured_value13={measured_value13}
                measured_value14={measured_value14}
                measured_value15={measured_value15}
                measured_value16={measured_value16}
                measured_value17={measured_value17}
                measured_value18={measured_value18}
                measured_value19={measured_value19}
                measured_value20={measured_value20}
                change_cup={change_cup}
                notchange_cup={notchange_cup}
                make_cup={make_cup}
                change_servomotor={change_servomotor}
                notchange_servomotor={notchange_servomotor}
                make_servomotor={make_servomotor}
                change_ring={change_ring}
                notchange_ring={notchange_ring}
                make_ring={make_ring}
              />

              <Footer
                remark={remark}
                tech_name={tech_name}
                jesse_name={jesse_name}
                jesse_sign={jesse_sign}
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
                    Check-sheet for SPM (AOH/IOH)
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
                <div className="flex-container">
                  <p>(MMCLW)</p>
                </div>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <td>
                        <label htmlFor="Date of overhauling:-">
                          Date of overhauling:-
                          <input
                            type="date"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.overhaul_date}
                            onChange={(e) => {
                              setData({
                                ...data,
                                overhaul_date: e.target.value,
                              });
                              setOverhaul_date(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                      <td>
                        <label htmlFor="Make of Rev/CTF:-">
                          Make of Rev/CTF:-
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.revctf_make}
                            onChange={(e) => {
                              setData({ ...data, revctf_make: e.target.value });
                              setRevctf_make(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Schedule:-">
                          Schedule:-
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
                        <label htmlFor="Removed from Loco No.:-">
                          Removed from Loco No.:-
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.removed_locono}
                            onChange={(e) => {
                              setData({
                                ...data,
                                removed_locono: e.target.value,
                              });
                              setRemoved_locono(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Sr. No. of coil :-">
                          Sr. No. of coil :-
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.coil_srno}
                            onChange={(e) => {
                              setData({ ...data, coil_srno: e.target.value });
                              setCoil_srno(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                      <td>
                        <label htmlFor="Provided on Loco No.:-">
                          Provided on Loco No.:-
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.provided_locono}
                            onChange={(e) => {
                              provided_locono;
                              setData({
                                ...data,
                                provided_locono: e.target.value,
                              });
                              setProvided_locono(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="EP valve Sr. No.:-">
                          EP valve Sr. No.:-
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.epvalve_srno1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                epvalve_srno1: e.target.value,
                              });
                              setEpvalve_srno1(e.target.value);
                            }}
                          ></input>
                        </label>
                      </td>
                      <td>
                        <label htmlFor="EP valve Sr. No.:-">
                          EP valve Sr. No.:-
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.epvalve_srno2}
                            onChange={(e) => {
                              setData({
                                ...data,
                                epvalve_srno2: e.target.value,
                              });
                              setEpvalve_srno2(e.target.value);
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
                      <th>Sr. No.</th>
                      <th>Description of Test</th>
                      <th>Standard Value</th>
                      <th>Measured Value</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        Check complete Drum contacts & Frame for any
                        Damage/defect. (As per Description of Testing). (MMCLW)
                      </td>
                      <td>No Damages</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value1}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value1: e.target.value,
                            });
                            setMeasured_value1(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Varnishing of Drum to be done. (MMCLW)</td>
                      <td>Done</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value2}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value2: e.target.value,
                            });
                            setMeasured_value2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>
                        Check thickness of finger contact. (MMCLW) 2 mm (min)
                      </td>
                      <td>2 mm (min)</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value3}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value3: e.target.value,
                            });
                            setMeasured_value3(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Check the bedding of main contact. (MMCLW)</td>
                      <td>80% approx</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value4}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value4: e.target.value,
                            });
                            setMeasured_value4(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        Checks dip clearance between finger contact and contact
                        holder of main finger contact. (SMI-234)
                      </td>
                      <td>1.5 – 2.5 mm</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value5}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value5: e.target.value,
                            });
                            setMeasured_value5(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        Check Main contact Pressure (SMI-234)<br></br>
                        1000 Amp.<br></br>
                        1500 Amp.
                      </td>
                      <td>
                        09 – 11 kg/cm2<br></br>
                        11 – 13 kg/cm2
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value6}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value6: e.target.value,
                            });
                            setMeasured_value6(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        Check Aux. Switch Contact pressure. (SMI-234) 1000 Amp.
                        <br></br>
                        1500 Amp.{" "}
                      </td>
                      <td>
                        180 – 220 gms.<br></br>
                        160 – 250 gms.
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value7}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value7: e.target.value,
                            });
                            setMeasured_value7(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Check Aux. Switch contact gap. (MMCLW)</td>
                      <td>4 – 6 mm</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value8}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value8: e.target.value,
                            });
                            setMeasured_value8(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        Check for proper opening and closing of aux. contact.
                        (MMCLW).
                      </td>
                      <td>Checked</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value9}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value9: e.target.value,
                            });
                            setMeasured_value9(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>
                        Check IR with 1000 Volts Megger between<br></br>
                        (a) Forward coil Terminal & frame.<br></br>
                        (b) Reverse coil Terminal & frame (MMCLW)
                      </td>
                      <td>
                        1 M ohm ( Min)<br></br>1 M ohm ( Min)
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value10}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value10: e.target.value,
                            });
                            setMeasured_value10(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>
                        Check Air leakage of both EP valves in Energize &
                        De-Energize condition. (MMCLW)
                      </td>
                      <td>No leakage</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value11}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value11: e.target.value,
                            });
                            setMeasured_value11(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>
                        Check Air leakage of Servomotor in forward and reverse
                        direction. (MMCLW)
                      </td>
                      <td>No leakage</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value12}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value12: e.target.value,
                            });
                            setMeasured_value12(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>
                        Provision of double check nuts at all possible
                        positions. (MMCLW)
                      </td>
                      <td>Provided</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value13}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value13: e.target.value,
                            });
                            setMeasured_value13(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>
                        Provision of double Dowell pins at all Places. (MMCLW)
                      </td>
                      <td>Provided</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value14}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value14: e.target.value,
                            });
                            setMeasured_value14(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
              </form>
            </section>
            <div style="height: 25px;"></div>

            <section className="container">
              <form>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Description of Test</th>
                      <th>Standard Value</th>
                      <th>Measured Value</th>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>
                        Minimum operating. Air pressure. (CLW Spec.)<br></br>
                        1000 Amp.<br></br>
                        1500 Amp
                      </td>
                      <td>
                        {" "}
                        2.5 Kg/cm²<br></br>
                        4.00 Kg/cm²
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value15}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value15: e.target.value,
                            });
                            setMeasured_value15(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>
                        Check 20 times the operation of J/CTF at air pressure
                        8.5 Kg/Cm2 by giving DC Volts (SMI-234).<br></br>
                        70 V<br></br>
                        80 V<br></br>
                        90 V<br></br>
                        110 V{" "}
                      </td>
                      <td>Checked</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value16}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value16: e.target.value,
                            });
                            setMeasured_value16(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>
                        MV drop Description of Test of J/CTF at 3 points in cold
                        condition. (SMI-234)<br></br>
                        (a)Connection to connection<br></br>
                        (b)Connection to half contact<br></br>
                        (c)Contact to contact
                      </td>
                      <td>
                        Done<br></br>
                        60 mv<br></br>
                        30 mv<br></br>
                        10 mv
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value17}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value17: e.target.value,
                            });
                            setMeasured_value17(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Lock marking at all Nuts & bolts. (MMCLW)</td>
                      <td>Marking done</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value18}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value18: e.target.value,
                            });
                            setMeasured_value18(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Provision of Petroleum jelly on drums. (MMCLW)</td>
                      <td>Provided</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value19}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value19: e.target.value,
                            });
                            setMeasured_value19(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>
                        Replacement of old / Defective Forks to be change during
                        O/H .(MMCLW)
                      </td>
                      <td>Change / Not change</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.measured_value20}
                          onChange={(e) => {
                            setData({
                              ...data,
                              measured_value20: e.target.value,
                            });
                            setMeasured_value20(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <p></p>
                <b></b>Must change Item of Reverser/CTF<b></b>
                <p></p>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Item Description </th>
                      <th>Change</th>
                      <th>Not Change</th>
                      <th>Make</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Piston cup</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.change_cup}
                          onChange={(e) => {
                            setData({ ...data, change_cup: e.target.value });
                            setChange_cup(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.notchange_cup}
                          onChange={(e) => {
                            setData({ ...data, notchange_cup: e.target.value });
                            setNotchange_cup(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make_cup}
                          onChange={(e) => {
                            setData({ ...data, make_cup: e.target.value });
                            setMake_cup(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Servo Motor gasket</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.change_servomotor}
                          onChange={(e) => {
                            setData({
                              ...data,
                              change_servomotor: e.target.value,
                            });
                            setChange_servomotor(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.notchange_servomotor}
                          onChange={(e) => {
                            setData({
                              ...data,
                              notchange_servomotor: e.target.value,
                            });
                            setNotchange_servomotor(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make_servomotor}
                          onChange={(e) => {
                            setData({
                              ...data,
                              make_servomotor: e.target.value,
                            });
                            setMake_servomotor(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Felt ring </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.change_ring}
                          onChange={(e) => {
                            setData({ ...data, change_ring: e.target.value });
                            setChange_ring(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.notchange_ring}
                          onChange={(e) => {
                            setData({
                              ...data,
                              notchange_ring: e.target.value,
                            });
                            setNotchange_ring(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make_ring}
                          onChange={(e) => {
                            setData({ ...data, make_ring: e.target.value });
                            setMake_ring(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="signature">
                  <label htmlFor="Remark">Remark :-</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.remark}
                    onChange={(e) => {
                      setData({ ...data, remark: e.target.value });
                      setRemark(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="Name of Tech ">Name of Tech</label>
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
                  <label htmlFor="Name and sign.of JE/SSE ">
                    Name and sign.of JE/SSE{" "}
                  </label>
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
                  <input
                    type="text"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.jesse_sign}
                    onChange={(e) => {
                      setData({ ...data, jesse_sign: e.target.value });
                      setJesse_sign(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <label htmlFor="तकनिशियन" className="form-label custom-label">
                    <span style={{ whiteSpace: "pre" }}>तकनिशियन का ID: </span>
                  </label>
                  <input
                    type="text"
                    className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                    placeholder="ID"
                    aria-label="ID"
                    required
                    value={data.uid}
                    onChange={(e) => {
                      setData({ ...data, uid: e.target.value });
                    }}
                  ></input>
                </div>
              </form>
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

export default RevertHistoryInputFieldREV_CTF;
