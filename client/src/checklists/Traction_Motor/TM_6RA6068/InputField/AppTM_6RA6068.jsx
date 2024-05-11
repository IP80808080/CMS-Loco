import { useState } from "react";
import axios from "axios";
import Details from "../TemplateTM_6RA6068/details";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import "./TM 6RA6068.css";
import { BASE_URL } from "../../../../config";

function AppTM() {
  const [uid, setUID] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loco_no, setLoco_no] = useState("");
  const [TMsr_no, setTMsr_no] = useState("");
  const [date_removed, setDate_removed] = useState("");
  const [reason_removed, setReason_removed] = useState("");
  const [actualvalueI01, setActualvalueI01] = useState("");
  const [actualvalueI02, setActualvalueI02] = useState("");
  const [actualvalueI03, setActualvalueI03] = useState("");
  const [actualvalueI04, setActualvalueI04] = useState("");
  const [actualvalueI05, setActualvalueI05] = useState("");
  const [actualvalueI06, setActualvalueI06] = useState("");
  const [date_oh, setDate_oh] = useState("");
  const [TMsr1_no, setTMsr1_no] = useState("");
  const [make_1, setMake_1] = useState("");
  const [rotor_no, setRotor_no] = useState("");
  const [make_2, setMake_2] = useState("");
  const [pinion_no, setPinion_no] = useState("");
  const [make_3, setMake_3] = useState("");
  const [bearing_de, setBearing_de] = useState("");
  const [bearing_nde, setBearing_nde] = useState("");
  const [actualvalue_a1, setActualvalue_a1] = useState("");
  const [actualvalue_a2, setActualvalue_a2] = useState("");
  const [actualvalue_a3, setActualvalue_a3] = useState("");
  const [actualvalue_a4, setActualvalue_a4] = useState("");
  const [actualvalue_b1, setActualvalue_b1] = useState("");
  const [actualvalue_c1, setActualvalue_c1] = useState("");
  const [actualvalue_c2, setActualvalue_c2] = useState("");
  const [actualvalue_c3, setActualvalue_c3] = useState("");
  const [actualvalue_c4, setActualvalue_c4] = useState("");
  const [actualvalue_c5, setActualvalue_c5] = useState("");
  const [actualvalue_c6, setActualvalue_c6] = useState("");
  const [actualvalue_c7, setActualvalue_c7] = useState("");
  const [actualvalue_d1, setActualvalue_d1] = useState("");
  const [actualvalue_d2, setActualvalue_d2] = useState("");
  const [actualvalue_d3, setActualvalue_d3] = useState("");
  const [actualvalue_d4, setActualvalue_d4] = useState("");
  const [actualvalue_d5, setActualvalue_d5] = useState("");
  const [actualvalue_d6, setActualvalue_d6] = useState("");
  const [actualvalue_d7, setActualvalue_d7] = useState("");
  const [actualvalue_d8, setActualvalue_d8] = useState("");
  const [actualvalue_d9, setActualvalue_d9] = useState("");
  const [actualvalue_d10, setActualvalue_d10] = useState("");
  const [actualvalue_d11, setActualvalue_d11] = useState("");
  const [actualvalue_d12, setActualvalue_d12] = useState("");
  const [actualvalue_d13, setActualvalue_d13] = useState("");
  const [actualvalue_d14, setActualvalue_d14] = useState("");
  const [actualvalue_d15, setActualvalue_d15] = useState("");
  const [actualvalue_d16, setActualvalue_d16] = useState("");
  const [actualvalue_e1, setActualvalue_e1] = useState("");
  const [actualvalue_e2, setActualvalue_e2] = useState("");
  const [actualvalue_e3, setActualvalue_e3] = useState("");
  const [actualvalue_e4, setActualvalue_e4] = useState("");
  const [actualvalue_e5, setActualvalue_e5] = useState("");
  const [actualvalue_e6, setActualvalue_e6] = useState("");
  const [actualvalue_f1, setActualvalue_f1] = useState("");
  const [actualvalue_f2, setActualvalue_f2] = useState("");
  const [actualvalue_f3, setActualvalue_f3] = useState("");
  const [actualvalue_g1, setActualvalue_g1] = useState("");
  const [actualvalue_g2, setActualvalue_g2] = useState("");
  const [actualvalue_g3, setActualvalue_g3] = useState("");
  const [actualvalue_g4, setActualvalue_g4] = useState("");
  const [actualvalue_g5, setActualvalue_g5] = useState("");
  const [actualvalue_g6, setActualvalue_g6] = useState("");
  const [actualvalue_h1, setActualvalue_h1] = useState("");
  const [actualvalue_h2, setActualvalue_h2] = useState("");
  const [actualvalue_h3, setActualvalue_h3] = useState("");
  const [actualvalue_h4, setActualvalue_h4] = useState("");
  const [actualvalue_i1, setActualvalue_i1] = useState("");
  const [actualvalue_i2, setActualvalue_i2] = useState("");
  const [actualvalue_i3, setActualvalue_i3] = useState("");
  const [actualvalue_i4, setActualvalue_i4] = useState("");
  const [tech_name, setTech_name] = useState("");
  const [tech_sign, setTech_sign] = useState("");
  const [jesse_name, setJesse_name] = useState("");
  const [jesse_sign, setJesse_sign] = useState("");
  const [actualvalue_c4_1, setActualvalue_c4_1] = useState("");
  const [srno_e, setSrno_e] = useState("");
  const [make_e, setMake_e] = useState("");
  const [actualvalue_e4_1, setActualvalue_e4_1] = useState("");
  const [srno_f, setSrno_f] = useState("");
  const [make_f, setMake_f] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    uid: "",
    loco_no: "",
    TMsr_no: "",
    date_removed: "",
    reason_removed: "",
    actualvalueI01: "",
    actualvalueI02: "",
    actualvalueI03: "",
    actualvalueI04: "",
    actualvalueI05: "",
    actualvalueI06: "",
    date_oh: "",
    TMsr1_no: "",
    make_1: "",
    rotor_no: "",
    make_2: "",
    pinion_no: "",
    make_3: "",
    bearing_de: "",
    bearing_nde: "",
    actualvalue_a1: "",
    actualvalue_a2: "",
    actualvalue_a3: "",
    actualvalue_a4: "",
    actualvalue_b1: "",
    actualvalue_c1: "",
    actualvalue_c2: "",
    actualvalue_c3: "",
    actualvalue_c4: "",
    actualvalue_c5: "",
    actualvalue_c6: "",
    actualvalue_c7: "",
    actualvalue_d1: "",
    actualvalue_d2: "",
    actualvalue_d3: "",
    actualvalue_d4: "",
    actualvalue_d5: "",
    actualvalue_d6: "",
    actualvalue_d7: "",
    actualvalue_d8: "",
    actualvalue_d9: "",
    actualvalue_d10: "",
    actualvalue_d11: "",
    actualvalue_d12: "",
    actualvalue_d13: "",
    actualvalue_d14: "",
    actualvalue_d15: "",
    actualvalue_d16: "",
    actualvalue_e1: "",
    actualvalue_e2: "",
    actualvalue_e3: "",
    actualvalue_e4: "",
    actualvalue_e5: "",
    actualvalue_e6: "",
    actualvalue_f1: "",
    actualvalue_f2: "",
    actualvalue_f3: "",
    actualvalue_g1: "",
    actualvalue_g2: "",
    actualvalue_g3: "",
    actualvalue_g4: "",
    actualvalue_g5: "",
    actualvalue_g6: "",
    actualvalue_h1: "",
    actualvalue_h2: "",
    actualvalue_h3: "",
    actualvalue_h4: "",
    actualvalue_i1: "",
    actualvalue_i2: "",
    actualvalue_i3: "",
    actualvalue_i4: "",
    tech_name: "",
    tech_sign: "",
    jesse_name: "",
    jesse_sign: "",
    actualvalue_c4_1: "",
    srno_e: "",
    make_e: "",
    actualvalue_e4_1: "",
    srno_f: "",
    make_f: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      uid,
      loco_no,
      TMsr_no,
      date_removed,
      reason_removed,
      actualvalueI01,
      actualvalueI02,
      actualvalueI03,
      actualvalueI04,
      actualvalueI05,
      actualvalueI06,
      date_oh,
      TMsr1_no,
      make_1,
      rotor_no,
      make_2,
      pinion_no,
      make_3,
      bearing_de,
      bearing_nde,
      actualvalue_a1,
      actualvalue_a2,
      actualvalue_a3,
      actualvalue_a4,
      actualvalue_b1,
      actualvalue_c1,
      actualvalue_c2,
      actualvalue_c3,
      actualvalue_c4,
      actualvalue_c4_1,
      actualvalue_c5,
      actualvalue_c6,
      actualvalue_c7,
      actualvalue_d1,
      actualvalue_d2,
      actualvalue_d3,
      actualvalue_d4,
      actualvalue_d5,
      actualvalue_d6,
      actualvalue_d7,
      actualvalue_d8,
      actualvalue_d9,
      actualvalue_d10,
      actualvalue_d11,
      actualvalue_d12,
      actualvalue_d13,
      actualvalue_d14,
      actualvalue_d15,
      actualvalue_d16,
      srno_e,
      make_e,
      actualvalue_e1,
      actualvalue_e2,
      actualvalue_e3,
      actualvalue_e4,
      actualvalue_e4_1,
      actualvalue_e5,
      actualvalue_e6,
      srno_f,
      make_f,
      actualvalue_f1,
      actualvalue_f2,
      actualvalue_f3,
      actualvalue_g1,
      actualvalue_g2,
      actualvalue_g3,
      actualvalue_g4,
      actualvalue_g5,
      actualvalue_g6,
      actualvalue_h1,
      actualvalue_h2,
      actualvalue_h3,
      actualvalue_h4,
      actualvalue_i1,
      actualvalue_i2,
      actualvalue_i3,
      actualvalue_i4,
      tech_name,
      tech_sign,
      jesse_name,
      jesse_sign,
    } = data;
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/submitForm/TM_6RA6068`,
        {
          uid,
          loco_no,
          actualvalue_c4_1,
          srno_e,
          make_e,
          actualvalue_e4_1,
          srno_f,
          make_f,
          TMsr_no,
          date_removed,
          reason_removed,
          actualvalueI01,
          actualvalueI02,
          actualvalueI03,
          actualvalueI04,
          actualvalueI05,
          actualvalueI06,
          date_oh,
          TMsr1_no,
          make_1,
          rotor_no,
          make_2,
          pinion_no,
          make_3,
          bearing_de,
          bearing_nde,
          actualvalue_a1,
          actualvalue_a2,
          actualvalue_a3,
          actualvalue_a4,
          actualvalue_b1,
          actualvalue_c1,
          actualvalue_c2,
          actualvalue_c3,
          actualvalue_c4,
          actualvalue_c5,
          actualvalue_c6,
          actualvalue_c7,
          actualvalue_d1,
          actualvalue_d2,
          actualvalue_d3,
          actualvalue_d4,
          actualvalue_d5,
          actualvalue_d6,
          actualvalue_d7,
          actualvalue_d8,
          actualvalue_d9,
          actualvalue_d10,
          actualvalue_d11,
          actualvalue_d12,
          actualvalue_d13,
          actualvalue_d14,
          actualvalue_d15,
          actualvalue_d16,
          actualvalue_e1,
          actualvalue_e2,
          actualvalue_e3,
          actualvalue_e4,
          actualvalue_e5,
          actualvalue_e6,
          actualvalue_f1,
          actualvalue_f2,
          actualvalue_f3,
          actualvalue_g1,
          actualvalue_g2,
          actualvalue_g3,
          actualvalue_g4,
          actualvalue_g5,
          actualvalue_g6,
          actualvalue_h1,
          actualvalue_h2,
          actualvalue_h3,
          actualvalue_h4,
          actualvalue_i1,
          actualvalue_i2,
          actualvalue_i3,
          actualvalue_i4,
          tech_name,
          tech_sign,
          jesse_name,
          jesse_sign,
        }
      );

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Submitted successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during checklist submission:", error);
      toast.error("Fields are Missing");
    }
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-8xl xl:mx-auto bg-white rounded shadow overflow-x-auto">
        {showForm ? (
          <div>
            <div className="flex flex-col justify-center px-8">
              <Details
                loco_no={loco_no}
                actualvalue_c4_1={actualvalue_c4_1}
                srno_e={srno_e}
                make_e={make_e}
                actualvalue_e4_1={actualvalue_e4_1}
                srno_f={srno_f}
                make_f={make_f}
                TMsr_no={TMsr_no}
                date_removed={date_removed}
                reason_removed={reason_removed}
                actualvalueI01={actualvalueI01}
                actualvalueI02={actualvalueI02}
                actualvalueI03={actualvalueI03}
                actualvalueI04={actualvalueI04}
                actualvalueI05={actualvalueI05}
                actualvalueI06={actualvalueI06}
                date_oh={date_oh}
                TMsr1_no={TMsr1_no}
                make_1={make_1}
                rotor_no={rotor_no}
                make_2={make_2}
                pinion_no={pinion_no}
                make_3={make_3}
                bearing_de={bearing_de}
                bearing_nde={bearing_nde}
                actualvalue_a1={actualvalue_a1}
                actualvalue_a2={actualvalue_a2}
                actualvalue_a3={actualvalue_a3}
                actualvalue_a4={actualvalue_a4}
                actualvalue_b1={actualvalue_b1}
                actualvalue_c1={actualvalue_c1}
                actualvalue_c2={actualvalue_c2}
                actualvalue_c3={actualvalue_c3}
                actualvalue_c4={actualvalue_c4}
                actualvalue_c5={actualvalue_c5}
                actualvalue_c6={actualvalue_c6}
                actualvalue_c7={actualvalue_c7}
                actualvalue_d1={actualvalue_d1}
                actualvalue_d2={actualvalue_d2}
                actualvalue_d3={actualvalue_d3}
                actualvalue_d4={actualvalue_d4}
                actualvalue_d5={actualvalue_d5}
                actualvalue_d6={actualvalue_d6}
                actualvalue_d7={actualvalue_d7}
                actualvalue_d8={actualvalue_d8}
                actualvalue_d9={actualvalue_d9}
                actualvalue_d10={actualvalue_d10}
                actualvalue_d11={actualvalue_d11}
                actualvalue_d12={actualvalue_d12}
                actualvalue_d13={actualvalue_d13}
                actualvalue_d14={actualvalue_d14}
                actualvalue_d15={actualvalue_d15}
                actualvalue_d16={actualvalue_d16}
                actualvalue_e1={actualvalue_e1}
                actualvalue_e2={actualvalue_e2}
                actualvalue_e3={actualvalue_e3}
                actualvalue_e4={actualvalue_e4}
                actualvalue_e5={actualvalue_e5}
                actualvalue_e6={actualvalue_e6}
                actualvalue_f1={actualvalue_f1}
                actualvalue_f2={actualvalue_f2}
                actualvalue_f3={actualvalue_f3}
                actualvalue_g1={actualvalue_g1}
                actualvalue_g2={actualvalue_g2}
                actualvalue_g3={actualvalue_g3}
                actualvalue_g4={actualvalue_g4}
                actualvalue_g5={actualvalue_g5}
                actualvalue_g6={actualvalue_g6}
                actualvalue_h1={actualvalue_h1}
                actualvalue_h2={actualvalue_h2}
                actualvalue_h3={actualvalue_h3}
                actualvalue_h4={actualvalue_h4}
                actualvalue_i1={actualvalue_i1}
                actualvalue_i2={actualvalue_i2}
                actualvalue_i3={actualvalue_i3}
                actualvalue_i4={actualvalue_i4}
                tech_name={tech_name}
                tech_sign={tech_sign}
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
            <head>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{ duration: 5500 }}
              />
              <meta charset="UTF-8"></meta>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              ></meta>
              <title>TM 6RA6068 overhauling checksheet</title>
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
              ></link>
              <link rel="stylesheet" href="TM 6RA6068.css"></link>
            </head>
            <body>
              <section className="container">
                <form>
                  <p>Electric Loco Shed (Bhusaval)</p>
                  <div className="header">
                    <div>
                      <h2>TM</h2>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="header-text-container">
                      <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
                    </div>
                  </div>
                  <br></br>
                  <div className="labels">
                    <label htmlFor="loco-no">LOCO NO. (REMOVED) :</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.loco_no}
                      onChange={(e) => {
                        setData({ ...data, loco_no: e.target.value });
                        setLoco_no(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="tm-sr-no">TM SR. NO. :</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.TMsr_no}
                      onChange={(e) => {
                        setData({ ...data, TMsr_no: e.target.value });
                        setTMsr_no(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="date-removed">DATE OF REMOVED :</label>
                    <input
                      type="date"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.date_removed}
                      onChange={(e) => {
                        setData({ ...data, date_removed: e.target.value });
                        setDate_removed(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="reason-removed">REASON OF REMOVAL :</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.reason_removed}
                      onChange={(e) => {
                        setData({ ...data, reason_removed: e.target.value });
                        setReason_removed(e.target.value);
                      }}
                    ></input>
                  </div>
                  <br></br>
                  <h4>
                    <b className="underline">Traction motor</b>
                  </h4>
                  <p1>
                    <b>[I]Before dismantle:</b>
                  </p1>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Check TM visually & note down defects & deficiency
                          </td>
                          <td>No defect</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalueI01}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalueI01: e.target.value,
                                });
                                setActualvalueI01(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Check IR value by 2.5KV megger for all three phase
                            (Refer: ABB Manual){" "}
                          </td>
                          <td>R greater=2.18M ohm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalueI02}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalueI02: e.target.value,
                                });
                                setActualvalueI02(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Measure inductance by LCR meter </td>
                          <td>Diff between phases 0.015 mH.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalueI03}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalueI03: e.target.value,
                                });
                                setActualvalueI03(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Do run test on VVVF test bench.</td>
                          <td>NO defect/noise</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalueI04}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalueI04: e.target.value,
                                });
                                setActualvalueI04(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            Check the difference in resistance between AB & CD
                            terminals of temperature sensor. Check shielding of
                            cable.
                          </td>
                          <td> 0.3 ohm </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalueI05}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalueI05: e.target.value,
                                });
                                setActualvalueI05(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            Remove the pinion by hydraulic pinion extractor.{" "}
                          </td>
                          <td>Maximum pressure of pinion removal-1800 bar</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalueI06}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalueI06: e.target.value,
                                });
                                setActualvalueI06(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <p>Electric Loco Shed (Bhusaval)</p>
                  <div className="header">
                    <div>
                      <h2>TM</h2>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="header-text-container">
                      <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
                    </div>
                  </div>
                  <br></br>
                  <div className="labels">
                    <label htmlFor="date-of-oh">DATE OF O/H :</label>
                    <input
                      type="date"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.date_oh}
                      onChange={(e) => {
                        setData({ ...data, date_oh: e.target.value });
                        setDate_oh(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="tm-sr-no">TM SR. NO. :</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.TMsr1_no}
                      onChange={(e) => {
                        setData({ ...data, TMsr1_no: e.target.value });
                        setTMsr1_no(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="make-tm">MAKE:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.make_1}
                      onChange={(e) => {
                        setData({ ...data, make_1: e.target.value });
                        setMake_1(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="rotor-no">ROTOR NO:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.rotor_no}
                      onChange={(e) => {
                        setData({ ...data, rotor_no: e.target.value });
                        setRotor_no(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="make-rotor">MAKE:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.make_2}
                      onChange={(e) => {
                        setData({ ...data, make_2: e.target.value });
                        setMake_2(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="pinion-no">PINION NO/:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.pinion_no}
                      onChange={(e) => {
                        setData({ ...data, pinion_no: e.target.value });
                        setPinion_no(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="make-pinion">MAKE:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.make_3}
                      onChange={(e) => {
                        setData({ ...data, make_3: e.target.value });
                        setMake_3(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="bearing-no-de">BEARING NO/MAKE DE :</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.bearing_de}
                      onChange={(e) => {
                        setData({ ...data, bearing_de: e.target.value });
                        setBearing_de(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <label htmlFor="bearing-no-nde">
                      BEARING NO/MAKE NDE :
                    </label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.bearing_nde}
                      onChange={(e) => {
                        setData({ ...data, bearing_nde: e.target.value });
                        setBearing_nde(e.target.value);
                      }}
                    ></input>
                  </div>
                  <br></br>
                  <h4>
                    <b className="underline">II] Motor Assembly:</b>
                  </h4>
                  <p1>
                    <b>(A) Stator:</b>
                  </p1>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Cleaning of Stator by compressed air at reduced
                            pressure 3Kg/cm2. Clean with cloth and petrol.
                          </td>
                          <td>Cleaned</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_a1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_a1: e.target.value,
                                });
                                setActualvalue_a1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Bake the stator at 120 Deg C for 8 hours in case of
                            wet cleaning.{" "}
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_a2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_a2: e.target.value,
                                });
                                setActualvalue_a2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Check the IR value of stator by 2.5kv megger (Refer:
                            - CLW WI-21, 4.11)
                          </td>
                          <td> less than 2.18Mohms</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_a3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_a3: e.target.value,
                                });
                                setActualvalue_a3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            Check the general condition of stator coils, slots,
                            overhangs, wedges, punching, cord loosening on
                            overhang, welding of tension plate, brazing of phase
                            rings & neutral ring & polyesters silk tape on
                            overhang portion.(Refer CLW Drg
                            No:-2TWD/096.083&1TWD.096.013)
                          </td>
                          <td>No abnormality.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_a4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_a4: e.target.value,
                                });
                                setActualvalue_a4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                </form>
                <b>(B) ROTOR:</b>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>CHECK/TEST</th>
                        <th>STANDARD VALUE</th>
                        <th>ACTUAL VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          Check the condition of balance weight, half ring
                          welding, resistance ring, shrink ring & copper bars,
                          end punching and mid punching
                          <b>(Refer CLW Drg. No: - 0TWD.096.002 Alt-1)</b>
                        </td>
                        <td>No abnormality</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actualvalue_b1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actualvalue_b1: e.target.value,
                              });
                              setActualvalue_b1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
                <b>(C) Pinion fitment</b>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>CHECK/TEST</th>
                        <th>STANDARD VALUE</th>
                        <th>ACTUAL VALUE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          Check base tangent length for pinion.<br></br>
                          Refer drawing nos:
                          <br></br>
                          (21 Teeth SKDP 3847)
                        </td>
                        <td>
                          21 Teeth Pinion New<br></br>
                          77.580-77.530mm over 4 teeth <br></br>
                          Cond. Value 77.115 mm (Limit)
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actualvalue_c1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actualvalue_c1: e.target.value,
                              });
                              setActualvalue_c1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          Clean the tapered portion by cloth & paper & thinner &
                          dry its hole by compressed air. Pinion must be free
                          from any grease.{" "}
                        </td>
                        <td>Cleaned</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actualvalue_c2}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actualvalue_c2: e.target.value,
                              });
                              setActualvalue_c2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Check MPT & UST of pinion</td>
                        <td>Crack/normal.</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actualvalue_c3}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actualvalue_c3: e.target.value,
                              });
                              setActualvalue_c3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          For insertion of pinion apply initial pressure. Allow
                          glycerin to spread on the complete inside surface for
                          proper fitment of pinion.{" "}
                        </td>
                        <td>1700 bar to max 2000 bar.</td>
                        <td>
                          <input
                            type="text"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actualvalue_c4}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actualvalue_c4: e.target.value,
                              });
                              setActualvalue_c4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
                <br></br>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <p>Electric Loco Shed (Bhusaval)</p>
                  <div className="header">
                    <div>
                      <h2>TM</h2>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="header-text-container">
                      <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
                    </div>
                  </div>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5</td>
                          <td>
                            Apply simultaneous pressure by pinion extraction
                            machine and pushing jack to insert the pinion. (Ref:
                            ABB Manual)
                          </td>
                          <td>
                            1700 bar to max 2000bar.
                            <br></br>200bar to max 400bar.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_c5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_c5: e.target.value,
                                });
                                setActualvalue_c5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            Check Gap between pinion and outer face of shaft.
                          </td>
                          <td>3-5 mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_c6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_c6: e.target.value,
                                });
                                setActualvalue_c6(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            Check advancement of Pinion during fitment. ( As per
                            ABB Manual)
                          </td>
                          <td>12mm + / _ 0.1mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_c7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_c7: e.target.value,
                                });
                                setActualvalue_c7(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            Check the general condition of stator coils, slots,
                            overhangs, wedges, punching, cord loosening on
                            overhang, welding of tension plate, brazing of phase
                            rings & neutral ring & polyesters silk tape on
                            overhang portion.(Refer CLW Drg
                            No:-2TWD/096.083&1TWD.096.013)
                          </td>
                          <td>No abnormality.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_c4_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_c4_1: e.target.value,
                                });
                                setActualvalue_c4_1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <b>(D) END SHIELD AND BEARING:</b>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Measure inner stopper seat (OD) on shaft<br></br>
                            (Refer CLW Drg.No:- 1TWD.096.009 Alt-1) RDSO/MS/415
                          </td>
                          <td>
                            DE -184.050-184.079 mm<br></br>
                            NDE-105.037-105.059 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d1: e.target.value,
                                });
                                setActualvalue_d1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Measure ID of inner stopper <br></br>
                            (Refer CLW Drg. No: 4TWD.096.043- Alt-6 DE
                            4TWD.096.042 Alt-6 NDE, RDSO/MS/415)
                          </td>
                          <td>
                            DE -184.000-184.040 mm<br></br>
                            NDE-105.000-105.025 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d2: e.target.value,
                                });
                                setActualvalue_d2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Measure racer seat dia on shaft (OD) <br></br>
                            (Refer CLW Drg. No: - 1TWD.096.009 Alt-1)
                            RDSO/MS/415
                          </td>
                          <td>
                            DE - 180.043-180.068 mm<br></br>
                            NDE- 100.023-100.045 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d3: e.target.value,
                                });
                                setActualvalue_d3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Inner Racer ID ( RDSO/MS/415)</td>
                          <td>
                            DE - 179.975- 180.00 mm <br></br>
                            NDE-99.985-100.00 mm SKF<br></br>
                            NDE- 99.980-100.00 mm FAG
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d4: e.target.value,
                                });
                                setActualvalue_d4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            Measure Outer labyrinth seat dia on shaft(OD)
                            <br></br>(Refer CLW Drg. No: - 1TWD.096.009 Alt-1)
                          </td>
                          <td>DE-179.843 -179.868 mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d5: e.target.value,
                                });
                                setActualvalue_d5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            Measure Outer labyrinth ID
                            <br></br>(Refer CLW Drg. No: 4TWD.096.029 Alt-6)
                          </td>
                          <td>DE- 179.748 - 179.783 mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d6: e.target.value,
                                });
                                setActualvalue_d6(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>
                            Measure bearing housing bore dia on end frame{" "}
                            <br></br>
                            (Refer CLW Drg No. 1TWD.096.005 Alt-6–DE) <br></br>
                            0TWD.096.003 Alt-9 NDE,RDSO/MS/415,Amd-3
                          </td>
                          <td>
                            DE -319. 950 - 319.990 mm<br></br>
                            NDE- 214.948-214.970 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d7}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d7: e.target.value,
                                });
                                setActualvalue_d7(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>
                            Measure Outer diameter of bearing (OD) (RDSO/MS/415)
                          </td>
                          <td>
                            DE- 319.960- 320.00 mm<br></br>
                            NDE-214.970-215.00mm,FAG<br></br>
                            NDE-214.980-215.00mm,SKF
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d8}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d8: e.target.value,
                                });
                                setActualvalue_d8(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td>
                            Measure inner labyrinth seat bore dia on end frame
                            (ID)<br></br> ( CLW Drg No-1TWD.096.005Alt-6 –DE)
                            <br></br>(0TWD.096.003 Alt-8–NDE) ( RDSO/MS/415)
                          </td>
                          <td>
                            DE - 305.025-305.050 mm<br></br>
                            NDE- 205.010-205.040 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d9}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d9: e.target.value,
                                });
                                setActualvalue_d9(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>
                            Measure Outer diameter of inner labyrinth (OD){" "}
                            <br> </br> Refer CLW Drg.No-4TWD.096.028Alt-5 –DE
                            <br> </br>4TWD.096.031 Alt-5 –NDE ( RDSO/MS/415)
                          </td>
                          <td>
                            DE - 305.060-305.080 mm<br></br>
                            NDE- 205.050-205.070 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d10}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d10: e.target.value,
                                });
                                setActualvalue_d10(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>11</td>
                          <td>
                            Radial clearance of bearing before fitment (FAG
                            Manual)
                          </td>
                          <td>
                            DE - 0.165-0.215 mm<br></br>
                            NDE - 0.105-0.140 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d11}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d11: e.target.value,
                                });
                                setActualvalue_d11(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>
                            Measure radial clearance of bearing after
                            fitment.(FAG Manual)
                          </td>
                          <td>
                            DE - 0.100-0.170 mm<br></br>
                            NDE - 0.060-0.100 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d12}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d12: e.target.value,
                                });
                                setActualvalue_d12(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>13</td>
                          <td>Measure quantity of grease added </td>
                          <td>
                            DE - 1.400 kg<br></br>
                            NDE - 400 gm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d13}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d13: e.target.value,
                                });
                                setActualvalue_d13(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>14</td>
                          <td>Axial play ( RDSO/SMI/278) and 1 & SMI 323</td>
                          <td>200 - 400 micron</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d14}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d14: e.target.value,
                                });
                                setActualvalue_d14(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>
                            Clearance between outer face of end shield & inner
                            face of bearing cap (NDE)
                            <br></br>(RDSO MS - 460 )
                          </td>
                          <td>0.5 ± 0.45 mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d15}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d15: e.target.value,
                                });
                                setActualvalue_d15(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>16</td>
                          <td>
                            Clearance between outer face of end shield & inner
                            face of outer bearing cap (DE)
                            <br></br>(RDSO MS - 466 )
                          </td>
                          <td>
                            0.5 + 0.45 mm<br></br>- 0.3 mm
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_d16}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_d16: e.target.value,
                                });
                                setActualvalue_d16(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <p>Electric Loco Shed (Bhusaval)</p>
                  <div className="header">
                    <div>
                      <h2>TM</h2>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="header-text-container">
                      <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
                    </div>
                  </div>
                  <p1>
                    <b>(E) TEMPERATURE SENSOR</b>
                  </p1>
                  <br></br>
                  <br></br>
                  <div className="labels">
                    <label htmlFor="Sr. no.">Sr. no.:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.srno_e}
                      onChange={(e) => {
                        setData({ ...data, srno_e: e.target.value });
                        setSrno_e(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="Make - ">Make - </label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.make_e}
                      onChange={(e) => {
                        setData({ ...data, make_e: e.target.value });
                        setMake_e(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Clean the temperature sensor hole in stator frame by
                            compressed air{" "}
                          </td>
                          <td>clean</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e1: e.target.value,
                                });
                                setActualvalue_e1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Check the depth of hole by depth gauge</td>
                          <td>103mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e2: e.target.value,
                                });
                                setActualvalue_e2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Put heat shrink sleeve & glass fiber sleeve on leads
                            & PT unit. Measure length of PTFE lead
                          </td>
                          <td>155 - 165mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e3: e.target.value,
                                });
                                setActualvalue_e3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Fix the probes with stator body frame </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e4: e.target.value,
                                });
                                setActualvalue_e4(e.target.value);
                              }}
                            ></input>
                            -
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e4_1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e4_1: e.target.value,
                                });
                                setActualvalue_e4_1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Fix the probes with stator body frame </td>
                          <td> 0.3 ohm </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e5: e.target.value,
                                });
                                setActualvalue_e5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            Check the condition of rubber gasket upper foam and
                            lower foam gasket below the probe housing.{" "}
                          </td>
                          <td>check</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_e6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_e6: e.target.value,
                                });
                                setActualvalue_e6(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <b>(F) SPEED SENSOR</b>
                  <div className="labels">
                    <label htmlFor="Sr. no.">Sr. no.:</label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.srno_f}
                      onChange={(e) => {
                        setData({ ...data, srno_f: e.target.value });
                        setSrno_f(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="Make - ">Make - </label>
                    <input
                      type="text"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.make_f}
                      onChange={(e) => {
                        setData({ ...data, make_f: e.target.value });
                        setMake_f(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Measure the resistance of connector blue and red
                            across AB terminals{" "}
                          </td>
                          <td>
                            102 ohm 125 ohm (Weigand)<br></br>
                            10.2 – 10.4 ohm (Hall effect)
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_f1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_f1a: e.target.value,
                                });
                                setActualvalue_f1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Measure the output of speed sensor for its amplitude
                            and frequency of output pulse if required. (
                            Ref;-RDSO/2008/EL/SMI/0252/Rev,”0”){" "}
                          </td>
                          <td>
                            Output pulse voltage <br></br>
                            or = 350mV for new <br></br>sensor or = 250mV for
                            old sensor<br></br>
                            Wide variation in pulse /<br></br>
                            No variation.{" "}
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_f2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_f2: e.target.value,
                                });
                                setActualvalue_f2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Check speed sensor cables are not chaffed or damaged
                            in any way.
                          </td>
                          <td>No damage</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_f3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_f3: e.target.value,
                                });
                                setActualvalue_f3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <b>(G) OTHERS</b>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Check the power cable fitted in junction box.</td>
                          <td>Good/bad</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_g1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_g1: e.target.value,
                                });
                                setActualvalue_g1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Check the condition of grommet, power cable
                            insulation, lug and SB. If required replace,
                          </td>
                          <td>Good /bad</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_g2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_g2: e.target.value,
                                });
                                setActualvalue_g2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Check the conditions of holes of bellow plate
                            already fitted{" "}
                          </td>
                          <td>No damaged.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_g3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_g3: e.target.value,
                                });
                                setActualvalue_g3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            Check the crack-ness of holder plate Lug by MPT test{" "}
                          </td>
                          <td>No crack</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_g4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_g4: e.target.value,
                                });
                                setActualvalue_g4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            Check the tightness of M30x160 bolt in holder plate
                            by 133 kg-mtr and its locking.
                          </td>
                          <td>Done</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_g5}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_g5: e.target.value,
                                });
                                setActualvalue_g5(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>
                            Check Gap Between Speed Sensor and PG Ring with the
                            help of Jig and adjust.
                          </td>
                          <td>0.5 - 1.000 mm</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_g6}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_g6: e.target.value,
                                });
                                setActualvalue_g6(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <p>Electric Loco Shed (Bhusaval)</p>
                  <div className="header">
                    <div>
                      <h2>TM</h2>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="header-text-container">
                      <h2>Check Sheet for TM Type 6FRA-6068 overhauling</h2>
                    </div>
                  </div>
                  <br></br>
                  <p1>
                    <b>(H) RUN TEST :</b>
                  </p1>
                  <br></br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>CHECK/TEST</th>
                          <th>STANDARD VALUE</th>
                          <th>ACTUAL VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            Run the motor for one hour. Test conducted on VVVF
                            drive.
                          </td>
                          <td>Normal.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_h1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_h1: e.target.value,
                                });
                                setActualvalue_h1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Note Temperature of TM at DE & NDE bearing. </td>
                          <td>
                            Ambient temperature (A)<br></br>
                            DE- A+30deg<br></br>
                            NDE-A+30deg.
                          </td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_h2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_h2: e.target.value,
                                });
                                setActualvalue_h2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>
                            Check the condition of M-16 tapped holes in end
                            frame for fitment of gear case.
                          </td>
                          <td>ok</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_h3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_h3: e.target.value,
                                });
                                setActualvalue_h3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Final inductance </td>
                          <td>Diff between phases 0.015mH.</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_h4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_h4: e.target.value,
                                });
                                setActualvalue_h4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br></br>
                  <b>(I) MUST CHANGE ITEM OF AOH/IOH :</b>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>Items</th>
                          <th>P. L. No.</th>
                          <th>Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Rubber ‘O’ Ring (AOH/IOH)</td>
                          <td>29250080</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_i1}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_i1: e.target.value,
                                });
                                setActualvalue_i1(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Pinion 21 Teeth (IOH)</td>
                          <td>29420052</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_i2}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_i2: e.target.value,
                                });
                                setActualvalue_i2(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Set of labyrinth- DE side (IOH)</td>
                          <td>29940096</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_i3}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_i3: e.target.value,
                                });
                                setActualvalue_i3(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Set of Labyrinth – NDE side (IOH)</td>
                          <td>29940102</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter"
                              aria-label=" "
                              value={data.actualvalue_i4}
                              onChange={(e) => {
                                setData({
                                  ...data,
                                  actualvalue_i4: e.target.value,
                                });
                                setActualvalue_i4(e.target.value);
                              }}
                            ></input>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="signature">
                    <label htmlFor="Name of tech:">Name of Tech :</label>
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
                    <br></br>
                    <label htmlFor="Sign of JE/SSE :">Sign of JE/SSE : </label>
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
                    <br></br>
                    <label htmlFor="Name of JE/SSE and sign: ">
                      Name of JE/SSE and sign :
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
                      value={data.uid}
                      onChange={(e) => {
                        setData({ ...data, uid: e.target.value });
                      }}
                    ></input>
                  </div>
                  <br></br>
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
                  <br></br>
                </form>
              </section>
              <div style="height: 25px;"></div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
            </body>
          </>
        )}
      </main>
    </>
  );
}

export default AppTM;
