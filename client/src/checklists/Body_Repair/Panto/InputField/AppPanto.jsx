import { useState } from "react";
import axios from "axios";
import Details from "../TemplatePanto/details";
import Table from "../TemplatePanto/table";
import Footer from "../TemplatePanto/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Panto.css";
import { BASE_URL } from "../../../../config";

function AppPanto() {
  const [showForm, setShowForm] = useState(false);
  const [remark1_1, setRemark1_1] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [loco_no, setLoco_no] = useState("");
  const [date, setDate] = useState("");
  const [photo1_srno, setPhoto1_srno] = useState("");
  const [make_photo1, setMake_photo1] = useState("");
  const [overhaul_photo1, setOverhaul_photo1] = useState("");
  const [servomotor1_srno, setServomotor1_srno] = useState("");
  const [make_servomotor1, setMake_servomotor1] = useState("");
  const [overhaul_servomotor1, setOverhaul_servomotor1] = useState("");
  const [photo2_srno, setPhoto2_srno] = useState("");
  const [make_photo2, setMake_photo2] = useState("");
  const [overhaul_photo2, setOverhaul_photo2] = useState("");
  const [servomotor2_srno, setServomotor2_srno] = useState("");
  const [make_servomotor2, setMake_servomotor2] = useState("");
  const [overhaul_servomotor2, setOverhaul_servomotor2] = useState("");
  const [remark3_1, setRemark3_1] = useState("");
  const [remark3_2, setRemark3_2] = useState("");
  const [remark3_3, setRemark3_3] = useState("");
  const [remark3_4, setRemark3_4] = useState("");
  const [remark3_5, setRemark3_5] = useState("");
  const [remark3_6, setRemark3_6] = useState("");
  const [remark3_7, setRemark3_7] = useState("");
  const [remark4, setRemark4] = useState("");
  const [remark4_1, setRemark4_1] = useState("");
  const [remark4_2, setRemark4_2] = useState("");
  const [remark5, setRemark5] = useState("");
  const [remark6_1, setRemark6_1] = useState("");
  const [remark6_2, setRemark6_2] = useState("");
  const [remark6_3, setRemark6_3] = useState("");
  const [remark6_4, setRemark6_4] = useState("");
  const [remark7_1, setRemark7_1] = useState("");
  const [remark7_2, setRemark7_2] = useState("");
  const [remark7_3, setRemark7_3] = useState("");
  const [remark8_1, setRemark8_1] = useState("");
  const [remark8_2, setRemark8_2] = useState("");
  const [remark8_3, setRemark8_3] = useState("");
  const [remark9_1, setRemark9_1] = useState("");
  const [remark9_2, setRemark9_2] = useState("");
  const [remark10, setRemark10] = useState("");
  const [remark11_1, setRemark11_1] = useState("");
  const [remark11_2, setRemark11_2] = useState("");
  const [remark11_3, setRemark11_3] = useState("");
  const [remark11_4, setRemark11_4] = useState("");
  const [remark12, setRemark12] = useState("");
  const [remark13, setRemark13] = useState("");
  const [remark14, setRemark14] = useState("");
  const [remark15, setRemark15] = useState("");
  const [remark16_1, setRemark16_1] = useState("");
  const [remark16_2, setRemark16_2] = useState("");
  const [remark16_3, setRemark16_3] = useState("");
  const [remark16_4, setRemark16_4] = useState("");
  const [remark16_5, setRemark16_5] = useState("");
  const [remark16_6, setRemark16_6] = useState("");
  const [remark17_1, setRemark17_1] = useState("");
  const [remark17_2, setRemark17_2] = useState("");
  const [remark18, setRemark18] = useState("");
  const [remark19, setRemark19] = useState("");
  const [remark20, setRemark20] = useState("");
  const [sign1_karmachari, setSign1_karmachari] = useState("");
  const [sign1_examinarsection, setSign1_examinarsection] = useState("");
  const [sign1_anurakshan, setSign1_anurakshan] = useState("");
  const [sign1_ppio, setSign1_ppio] = useState("");
  const [remark21, setRemark21] = useState("");
  const [remark34, setRemark34] = useState("");
  const [remark22, setRemark22] = useState("");
  const [remark23, setRemark23] = useState("");
  const [remark24, setRemark24] = useState("");
  const [remark25, setRemark25] = useState("");
  const [remark26, setRemark26] = useState("");
  const [remark27, setRemark27] = useState("");
  const [remark28, setRemark28] = useState("");
  const [remark29, setRemark29] = useState("");
  const [remark30, setRemark30] = useState("");
  const [remark31, setRemark31] = useState("");
  const [remark32, setRemark32] = useState("");
  const [remark33, setRemark33] = useState("");
  const [sign2_karmachari, setSign2_karmachari] = useState("");
  const [sign2_examinarsection, setSign2_examinarsection] = useState("");
  const [sign2_anurakshan, setSign2_anurakshan] = useState("");
  const [sign2_ppio, setSign2_ppio] = useState("");
  const [change_1, setChange_1] = useState("");
  const [make_1, setMake_1] = useState("");
  const [change_2, setChange_2] = useState("");
  const [make_2, setMake_2] = useState("");
  const [change_3, setChange_3] = useState("");
  const [make_3, setMake_3] = useState("");
  const [change_4, setChange_4] = useState("");
  const [make_4, setMake_4] = useState("");
  const [change_5, setChange_5] = useState("");
  const [make_5, setMake_5] = useState("");
  const [change_6, setChange_6] = useState("");
  const [make_6, setMake_6] = useState("");
  const [change_7, setChange_7] = useState("");
  const [make_7, setMake_7] = useState("");
  const [change_8, setChange_8] = useState("");
  const [make_8, setMake_8] = useState("");
  const [change_9, setChange_9] = useState("");
  const [make_9, setMake_9] = useState("");
  const [change_10, setChange_10] = useState("");
  const [make_10, setMake_10] = useState("");
  const [sign3_karmachari, setSign3_karmachari] = useState("");
  const [sign3_examinarsection, setSign3_examinarsection] = useState("");
  const [sign3_anurakshan, setSign3_anurakshan] = useState("");
  const [sign3_ppio, setSign3_ppio] = useState("");
  const [uid, setUID] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    equipmentNumber: "",
    loco_no: "",
    date: "",
    photo1_srno: "",
    make_photo1: "",
    overhaul_photo1: "",
    servomotor1_srno: "",
    make_servomotor1: "",
    overhaul_servomotor1: "",
    photo2_srno: "",
    make_photo2: "",
    overhaul_photo2: "",
    servomotor2_srno: "",
    make_servomotor2: "",
    overhaul_servomotor2: "",
    remark3_1: "",
    remark3_2: "",
    remark3_3: "",
    remark3_4: "",
    remark3_5: "",
    remark3_6: "",
    remark3_7: "",
    remark4: "",
    remark4_1: "",
    remark4_2: "",
    remark5: "",
    remark6_1: "",
    remark6_2: "",
    remark6_3: "",
    remark6_4: "",
    remark7_1: "",
    remark7_2: "",
    remark7_3: "",
    remark8_1: "",
    remark8_2: "",
    remark8_3: "",
    remark9_1: "",
    remark9_2: "",
    remark10: "",
    remark11_1: "",
    remark11_2: "",
    remark11_3: "",
    remark11_4: "",
    remark12: "",
    remark13: "",
    remark14: "",
    remark15: "",
    remark16_1: "",
    remark16_2: "",
    remark16_3: "",
    remark16_4: "",
    remark16_5: "",
    remark16_6: "",
    remark17_1: "",
    remark17_2: "",
    remark18: "",
    remark19: "",
    remark20: "",
    sign1_karmachari: "",
    sign1_examinarsection: "",
    sign1_anurakshan: "",
    sign1_ppio: "",
    remark21: "",
    remark22: "",
    remark23: "",
    remark24: "",
    remark25: "",
    remark26: "",
    remark27: "",
    remark28: "",
    remark29: "",
    remark30: "",
    remark31: "",
    remark32: "",
    remark33: "",
    sign2_karmachari: "",
    sign2_examinarsection: "",
    sign2_anurakshan: "",
    sign2_ppio: "",
    change_1: "",
    make_1: "",
    change_2: "",
    make_2: "",
    change_3: "",
    make_3: "",
    change_4: "",
    make_4: "",
    change_5: "",
    make_5: "",
    change_6: "",
    make_6: "",
    change_7: "",
    make_7: "",
    change_8: "",
    make_8: "",
    change_9: "",
    make_9: "",
    change_10: "",
    make_10: "",
    sign3_karmachari: "",
    sign3_examinarsection: "",
    sign3_anurakshan: "",
    sign3_ppio: "",
    remark34: "",
    uid,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      uid,
      equipmentNumber,
      loco_no,
      date,
      photo1_srno,
      make_photo1,
      overhaul_photo1,
      servomotor1_srno,
      make_servomotor1,
      overhaul_servomotor1,
      photo2_srno,
      make_photo2,
      overhaul_photo2,
      servomotor2_srno,
      make_servomotor2,
      overhaul_servomotor2,
      remark3_1,
      remark3_2,
      remark3_3,
      remark3_4,
      remark3_5,
      remark3_6,
      remark3_7,
      remark4,
      remark4_1,
      remark4_2,
      remark5,
      remark6_1,
      remark6_2,
      remark6_3,
      remark6_4,
      remark7_1,
      remark7_2,
      remark7_3,
      remark8_1,
      remark8_2,
      remark8_3,
      remark9_1,
      remark9_2,
      remark10,
      remark11_1,
      remark11_2,
      remark11_3,
      remark11_4,
      remark12,
      remark13,
      remark14,
      remark15,
      remark16_1,
      remark16_2,
      remark16_3,
      remark16_4,
      remark16_5,
      remark16_6,
      remark17_1,
      remark17_2,
      remark18,
      remark19,
      remark20,
      sign1_karmachari,
      sign1_examinarsection,
      sign1_anurakshan,
      sign1_ppio,
      remark21,
      remark22,
      remark23,
      remark24,
      remark25,
      remark26,
      remark27,
      remark28,
      remark29,
      remark30,
      remark31,
      remark32,
      remark33,
      remark34,
      sign2_karmachari,
      sign2_examinarsection,
      sign2_anurakshan,
      sign2_ppio,
      change_1,
      make_1,
      change_2,
      make_2,
      change_3,
      make_3,
      change_4,
      make_4,
      change_5,
      make_5,
      change_6,
      make_6,
      change_7,
      make_7,
      change_8,
      make_8,
      change_9,
      make_9,
      change_10,
      make_10,
      sign3_karmachari,
      sign3_examinarsection,
      sign3_anurakshan,
      sign3_ppio,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/submitForm/Panto`, {
        uid,
        equipmentNumber,
        loco_no,
        date,
        photo1_srno,
        make_photo1,
        overhaul_photo1,
        servomotor1_srno,
        make_servomotor1,
        overhaul_servomotor1,
        photo2_srno,
        make_photo2,
        overhaul_photo2,
        servomotor2_srno,
        make_servomotor2,
        overhaul_servomotor2,
        remark3_1,
        remark3_2,
        remark3_3,
        remark3_4,
        remark3_5,
        remark3_6,
        remark3_7,
        remark4,
        remark4_1,
        remark4_2,
        remark5,
        remark6_1,
        remark6_2,
        remark6_3,
        remark6_4,
        remark7_1,
        remark7_2,
        remark7_3,
        remark8_1,
        remark8_2,
        remark8_3,
        remark9_1,
        remark9_2,
        remark10,
        remark11_1,
        remark11_2,
        remark11_3,
        remark11_4,
        remark12,
        remark13,
        remark14,
        remark15,
        remark16_1,
        remark16_2,
        remark16_3,
        remark16_4,
        remark16_5,
        remark16_6,
        remark17_1,
        remark17_2,
        remark18,
        remark19,
        remark20,
        sign1_karmachari,
        sign1_examinarsection,
        sign1_anurakshan,
        sign1_ppio,
        remark21,
        remark22,
        remark23,
        remark24,
        remark25,
        remark26,
        remark27,
        remark28,
        remark29,
        remark30,
        remark31,
        remark32,
        remark33,
        sign2_karmachari,
        sign2_examinarsection,
        sign2_anurakshan,
        sign2_ppio,
        change_1,
        make_1,
        change_2,
        make_2,
        change_3,
        make_3,
        change_4,
        make_4,
        change_5,
        make_5,
        change_6,
        make_6,
        change_7,
        make_7,
        change_8,
        make_8,
        change_9,
        make_9,
        change_10,
        make_10,
        sign3_karmachari,
        sign3_examinarsection,
        sign3_anurakshan,
        sign3_ppio,
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
              <Details loco_no={loco_no} date={date} />

              <br></br>

              <Table
                photo1_srno={photo1_srno}
                make_photo1={make_photo1}
                overhaul_photo1={overhaul_photo1}
                servomotor1_srno={servomotor1_srno}
                make_servomotor1={make_servomotor1}
                overhaul_servomotor1={overhaul_servomotor1}
                photo2_srno={photo2_srno}
                make_photo2={make_photo2}
                overhaul_photo2={overhaul_photo2}
                servomotor2_srno={servomotor2_srno}
                make_servomotor2={make_servomotor2}
                overhaul_servomotor2={overhaul_servomotor2}
                remark3_1={remark3_1}
                remark3_2={remark3_2}
                remark3_3={remark3_3}
                remark3_4={remark3_4}
                remark3_5={remark3_5}
                remark3_6={remark3_6}
                remark3_7={remark3_7}
                remark4={remark4}
                remark4_1={remark4_1}
                remark4_2={remark4_2}
                remark5={remark5}
                remark6_1={remark6_1}
                remark6_2={remark6_2}
                remark6_3={remark6_3}
                remark6_4={remark6_4}
                remark7_1={remark7_1}
                remark7_2={remark7_2}
                remark7_3={remark7_3}
                remark8_1={remark8_1}
                remark8_2={remark8_2}
                remark8_3={remark8_3}
                remark9_1={remark9_1}
                remark9_2={remark9_2}
                remark10={remark10}
                remark11_1={remark11_1}
                remark11_2={remark11_2}
                remark11_3={remark11_3}
                remark11_4={remark11_4}
                remark12={remark12}
                remark13={remark13}
                remark14={remark14}
                remark15={remark15}
                remark16_1={remark16_1}
                remark16_2={remark16_2}
                remark16_3={remark16_3}
                remark16_4={remark16_4}
                remark16_5={remark16_5}
                remark16_6={remark16_6}
                remark17_1={remark17_1}
                remark17_2={remark17_2}
                remark18={remark18}
                remark19={remark19}
                remark20={remark20}
                sign1_karmachari={sign1_karmachari}
                sign1_examinarsection={sign1_examinarsection}
                sign1_anurakshan={sign1_anurakshan}
                sign1_ppio={sign1_ppio}
                remark21={remark21}
                remark22={remark22}
                remark23={remark23}
                remark24={remark24}
                remark25={remark25}
                remark26={remark26}
                remark27={remark27}
                remark28={remark28}
                remark29={remark29}
                remark30={remark30}
                remark31={remark31}
                remark32={remark32}
                remark33={remark33}
                sign2_karmachari={sign2_karmachari}
                sign2_examinarsection={sign2_examinarsection}
                sign2_anurakshan={sign2_anurakshan}
                sign2_ppio={sign2_ppio}
                change_1={change_1}
                make_1={make_1}
                change_2={change_2}
                make_2={make_2}
                change_3={change_3}
                make_3={make_3}
                change_4={change_4}
                make_4={make_4}
                change_5={change_5}
                make_5={make_5}
                change_6={change_6}
                make_6={make_6}
                change_7={change_7}
                make_7={make_7}
                change_8={change_8}
                make_8={make_8}
                change_9={change_9}
                make_9={make_9}
                change_10={change_10}
                make_10={make_10}
              />

              <Footer
                sign3_karmachari={sign3_karmachari}
                sign3_examinarsection={sign3_examinarsection}
                sign3_anurakshan={sign3_anurakshan}
                sign3_ppio={sign3_ppio}
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
            <div className="flex flex-col justify-center container overflow-x">
              <section className="container">
                <form>
                  <div className="header">
                    <h2>
                      विद्युत लोको शेड, मध्‍य रेल, भुसावल<br></br>पेंटोग्राफ और
                      रूफ उपकरण (सामग्री) की मेजर शिडयुल चेकशिट
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
                    <div className="flex-container">
                      <span className="loco-type">
                        लोको प्रकार :- WAP-4 / WAG-5/WAG-9{" "}
                      </span>
                      <span className="department">
                        विभाग: बॉडी रिपीयर (BR)
                      </span>
                    </div>
                  </div>
                  <br> </br>
                  <span className="inspection">
                    निरीक्षण :- AOH / TOH / IOH
                  </span>
                  <span className="label">
                    लोको सं.:
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="loco no."
                      aria-label=" "
                      value={data.loco_no}
                      onChange={(e) => {
                        setData({ ...data, loco_no: e.target.value });
                        setLoco_no(e.target.value);
                      }}
                    ></input>
                  </span>
                  <span className="label2">
                    दिनांक:{" "}
                    <input
                      type="date"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.date}
                      onChange={(e) => {
                        setData({ ...data, date: e.target.value });
                        setDate(e.target.value);
                      }}
                    ></input>
                  </span>
                  <br> </br>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>
                            पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                            गतिविधियॉं{" "}
                          </th>
                          <th>रिमार्क</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>१</td>
                          <td colSpan="3">
                            <table>
                              <tr>
                                <td>पेन्टोग्राफ नं. 1</td>
                                <td>
                                  Sr. No.
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.photo1_srno}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        photo1_srno: e.target.value,
                                      });
                                      setPhoto1_srno(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>
                                  Make:
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.make_photo1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        make_photo1: e.target.value,
                                      });
                                      setMake_photo1(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>MFG</td>
                                <td>
                                  Overhaul By
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.overhaul_photo1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        overhaul_photo1: e.target.value,
                                      });
                                      setOverhaul_photo1(e.target.value);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <td>सर्वोमोटर नं.1 </td>
                                <td>
                                  Sr. No.
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.servomotor1_srno}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        servomotor1_srno: e.target.value,
                                      });
                                      setServomotor1_srno(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>
                                  Make:
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.make_servomotor1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        make_servomotor1: e.target.value,
                                      });
                                      setMake_servomotor1(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>MFG</td>
                                <td>
                                  Overhaul By
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.overhaul_servomotor1}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        overhaul_servomotor1: e.target.value,
                                      });
                                      setOverhaul_servomotor1(e.target.value);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td colSpan="3">
                            <table>
                              <tr>
                                <td>पेन्टोग्राफ नं. 1</td>
                                <td>
                                  Sr. No.
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.photo2_srno}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        photo2_srno: e.target.value,
                                      });
                                      setPhoto2_srno(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>
                                  Make:
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.make_photo2}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        make_photo2: e.target.value,
                                      });
                                      setMake_photo2(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>MFG</td>
                                <td>
                                  Overhaul By
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.overhaul_photo2}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        overhaul_photo2: e.target.value,
                                      });
                                      setOverhaul_photo2(e.target.value);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <td>सर्वोमोटर नं.1 </td>
                                <td>
                                  Sr. No.
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.servomotor2_srno}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        servomotor2_srno: e.target.value,
                                      });
                                      setServomotor2_srno(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>
                                  Make:
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.make_servomotor2}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        make_servomotor2: e.target.value,
                                      });
                                      setMake_servomotor2(e.target.value);
                                    }}
                                  ></input>
                                </td>
                                <td>MFG</td>
                                <td>
                                  Overhaul By
                                  <input
                                    type="text"
                                    className="form-control custom-input"
                                    placeholder="Enter"
                                    aria-label=" "
                                    value={data.overhaul_servomotor2}
                                    onChange={(e) => {
                                      setData({
                                        ...data,
                                        overhaul_servomotor2: e.target.value,
                                      });
                                      setOverhaul_servomotor2(e.target.value);
                                    }}
                                  ></input>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                      <tr>
                        <td>
                          <b>3</b>
                        </td>
                        <td colSpan="2">
                          <b>3 पैन बो असेम्बली ( एस एम आइ नं 192 अनुसार )</b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          1.पैन बो असेम्बली का कोई पार्ट घिसा, टूटा तथा क्रैक की
                          जॉंच करें। साथ में कसावट की जॉंच करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_1}
                            onChange={(e) => {
                              setData({ ...data, remark3_1: e.target.value });
                              setRemark3_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          2.पैन हॉर्न बेंन्ड, टूटा तथा क्रैक हो तो तो बदली करे।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_2}
                            onChange={(e) => {
                              setData({ ...data, remark3_2: e.target.value });
                              setRemark3_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          3. कार्बन स्ट्रिप पर कोई ग्रुव्ह मार्क, चिपिंग एवं
                          स्ट्रिप में शार्प तेज धार की जॉंच करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_3}
                            onChange={(e) => {
                              setData({ ...data, remark3_3: e.target.value });
                              setRemark3_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          4.स्‍ट्रीप की थीकनेस जॉंच करें तथा उचित न होने पर बदली
                          करें । <br> </br>
                          High Reach Pantograph (नया कार्बन स्‍ट्रीप–39 मि.मी.
                          कन्‍डेम सीमा – 26 मि.मी.) <br></br>
                          Conventional Pantograph (नया कार्बन स्‍ट्रीप –25
                          मि.मी. कन्‍डेम सीमा –13.5 मि.मी.)
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_4}
                            onChange={(e) => {
                              setData({ ...data, remark3_4: e.target.value });
                              setRemark3_4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          5.पेन्‍टोग्राफ पैन का होरीजन्‍टली1.5 मीटर के उंचाई पर
                          स्पिरिट लेवल कि व्हिसुअली जॉंच करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_5}
                            onChange={(e) => {
                              setData({ ...data, remark3_5: e.target.value });
                              setRemark3_5(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          6. आर डी एस ओ एस एम आई नं. 64 के अनुसार पेन्‍टोग्राफ
                          स्टैटिक बॅलेंसिंग 7 कि.ग्रा. का वजन लगाकर 0.5, 1.0,
                          1.5, 1.75 और 2 मीटर पर स्टेप की जॉंच करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_6}
                            onChange={(e) => {
                              setData({ ...data, remark3_6: e.target.value });
                              setRemark3_6(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          7. आर डी एस ओ मोडीफिकेशन शिट नं. ELRS/MS/0333
                          Amendment No. 2 के निर्देशन अनुसार पैन्टोग्राफ के
                          पैंटो पॅन में Swivel Angle 7˚ ± 1˚ का होना सुनिश्चित
                          करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3_7}
                            onChange={(e) => {
                              setData({ ...data, remark3_7: e.target.value });
                              setRemark3_7(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>4</b>
                        </td>
                        <td colSpan="4">
                          <b>प्लनजर </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          1.आर डी एस ओ एस एम आई नं.292 के अनुसार पैन्टोग्राफ के
                          प्लंजर बॉक्स के स्प्रिंग्स नये एवं उचित टेन्शन वाले
                          स्प्रिंग्स का प्रावधान करें। प्लंजर का स्लाईडिंग फ्री
                          मुव्ह्मेंन्ट चेक करें। अगर जॅम है तो स्लिव्ह 7 टर्न
                          लूझ करें और लुब्रिकेंट करें। हर मेजर में प्लंजर बदली
                          करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark4_1}
                            onChange={(e) => {
                              setData({ ...data, remark4_1: e.target.value });
                              setRemark4_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          2.प्लंजर के स्प्रिंग में आर डी एस ओ मोडीफिकेशन शिट नं.
                          ELRS/MS/0333 (Rev.0) के निर्देशन पैन्टोग्राफ के प्लंजर
                          के सपोर्ट रॉड पर 10 किलोग्राम वजन का भार देने उपरान्त
                          पैंटो पॅन का झुकाव 25 मिमी से कम होना सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark4_2}
                            onChange={(e) => {
                              setData({ ...data, remark4_2: e.target.value });
                              setRemark4_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>5</b>
                        </td>
                        <td colSpan="4">
                          <b>कॉपर शन्ट </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          सभी कॉपर शन्ट के फिक्सिंग बोल्ट फिटिंग एवं कॉपर शन्ट
                          के स्ट्रैंड चेक करे, अगर 25 % से जादा शन्ट के स्ट्रैंड
                          टुटे होने एंव अस्तव्यस्त होने पर शंट बदली करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark5}
                            onChange={(e) => {
                              setData({ ...data, remark5: e.target.value });
                              setRemark5(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>6</b>
                        </td>
                        <td colSpan="4">
                          <b>मेन स्प्रिंग और टेन्शन बोल्ट </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          1.व्हिसुअली मेन स्प्रिंग टेंशन लेस, टूटा तथा क्रैक की
                          जॉंच करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark6_1}
                            onChange={(e) => {
                              setData({ ...data, remark6_1: e.target.value });
                              setRemark6_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          2.आर डी एस ओ मोडीफिकेशन शिट नं. WAM4/155 के निर्देशन
                          अनुसार पैन्टोग्राफ के राईझिंग स्प्रिंग टुट्ने से लोको
                          रूफ के संपर्क से बचने के लिये उचित साईज की M.S पट्टी
                          का बनाया हुआ कॅचर का प्रावधान करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark6_2}
                            onChange={(e) => {
                              setData({ ...data, remark6_2: e.target.value });
                              setRemark6_2(e.target.value);
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
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>
                            पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                            गतिविधियॉं{" "}
                          </th>
                          <th>रिमार्क</th>
                        </tr>
                      </thead>
                      <tr>
                        <td></td>
                        <td>
                          ३.आर डी एस ओ मोडीफिकेशन शिट नं. ELRS/MS/0389 (Rev.0)
                          पैन्टोग्राफ के लिये अतिरिक्त स्प्रिंग कॅचर लगाने की
                          व्यवस्था करें। जिससे मेन रायझिंग स्प्रिंग टुटने से
                          अर्थ फॉल्ट से बचा जा सकें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark6_3}
                            onChange={(e) => {
                              setData({ ...data, remark6_3: e.target.value });
                              setRemark6_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          4.आर डी एस ओ मोडीफिकेशन शिट नं. WAM4/150 के निर्देशन
                          अनुसार पैन्टोग्राफ कि 2 मीटर कि ऊंचाई के लिये नये
                          स्लॉटेड बार थ्रेडिंग के साथ रबर स्टॉपर का प्रावधान
                          करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark6_4}
                            onChange={(e) => {
                              setData({ ...data, remark6_4: e.target.value });
                              setRemark6_4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>7 </b>
                        </td>
                        <td colSpan="4">
                          <b>मेकॅनिकल पार्ट्स </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          1.पैन्टोग्राफ के सभी मेकॅनिकल ऑपरेशन की जॉंच करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark7_1}
                            onChange={(e) => {
                              setData({ ...data, remark7_1: e.target.value });
                              setRemark7_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          2.पैन्टोग्राफ के पुरे फ्रेम में बेंन्ड, क्रक और किसी
                          अन्य क्षति को व्हिसुअली जाँच करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark7_2}
                            onChange={(e) => {
                              setData({ ...data, remark7_2: e.target.value });
                              setRemark7_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          3.सभी नट और बोल्ट्स को जॉंच और वांछित स्पैनर से हिं
                          टाईट नेस सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark7_3}
                            onChange={(e) => {
                              setData({ ...data, remark7_3: e.target.value });
                              setRemark7_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>8</b>
                        </td>
                        <td colSpan="4">
                          <b>इंन्सुलेटर</b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          1.पैन्टोग्राफ के सभी बेस इंसुलेटर और रूफ बार के सभी
                          बेस इंसुलेटर जाँच करें और साफ करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark8_1}
                            onChange={(e) => {
                              setData({ ...data, remark8_1: e.target.value });
                              setRemark8_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          2.सभी बेस इंसुलेटर के डैमेज, क्रेक, फ्लैशिंग आदि की
                          जांच सुनिश्चित करें। यदि आवश्यक हो तो बदली करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark8_2}
                            onChange={(e) => {
                              setData({ ...data, remark8_2: e.target.value });
                              setRemark8_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          3. आर डी एस ओ एस एम आई नं. 274 के अनुसार सभी इंसुलेटर
                          पर सिलिकॉन ऑईल स्प्रे करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark8_3}
                            onChange={(e) => {
                              setData({ ...data, remark8_3: e.target.value });
                              setRemark8_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>9</b>
                        </td>
                        <td colSpan="4">
                          <b>पिन और बुशेज</b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          1.सभी स्प्लिट पिन बदली करना सुनिश्चित करें। कोइ भी
                          स्प्लिट पिन का पुन: उपयोग नहीं किया जाना चाहिए।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark9_1}
                            onChange={(e) => {
                              setData({ ...data, remark9_1: e.target.value });
                              setRemark9_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          2.सभी पिन और बुशेज की जांच की जानी है और सभी
                          मुव्हामेन्ट होने वाले भागों को लुब्रिकेट करना
                          सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark9_2}
                            onChange={(e) => {
                              setData({ ...data, remark9_2: e.target.value });
                              setRemark9_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>10</b>
                        </td>
                        <td colSpan="4">
                          <b>आयलेटस रॉड एवं मेकेनिकल असेम्बली </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          आयलेटस रॉड एवं मेकेनिकल असेम्बली की स्थिति की जाँच
                          करें करें। किसी भी तरह कि टूट-फूट, क्रेक, फ्लेशिंग,
                          फिटिंग में ढीलापन, स्प्लिट पिन, बुश की जांच सुनिश्चित
                          करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark10}
                            onChange={(e) => {
                              setData({ ...data, remark10: e.target.value });
                              setRemark10(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>11</b>
                        </td>
                        <td colSpan="4">
                          <b> रूफ बार और फिटिंग </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          1.सभी रूफ बार्स की स्थिति की जाँच करें। सभी रूफ बार की
                          उचित प्रकार से साफसफाई करें। किसी भी तरह कि बेंन्ड,
                          टूट-फूट, क्रेक, फ्लेशिंग, फिटिंग में ढीलापन की जांच
                          सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark11_1}
                            onChange={(e) => {
                              setData({ ...data, remark11_1: e.target.value });
                              setRemark11_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          2.रूफ बार फिटिंग्स में लगे हुवे नट, बोल्ट की कसावट
                          उचित प्रकार से जांच सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark11_2}
                            onChange={(e) => {
                              setData({ ...data, remark11_2: e.target.value });
                              setRemark11_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          3.सभी एच पी टी लिंक्स उचित प्रकार से साफसफाई एवं जांच
                          सुनिश्चित करें। एच पी टी लिंक्स कॉन्टॅक्ट पार्टस पर
                          ग्रेफाइट ग्रीस लगाना सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark11_3}
                            onChange={(e) => {
                              setData({ ...data, remark11_3: e.target.value });
                              setRemark11_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          4.फ्लैशिंग और पानी का प्रवेश से बचने के लिए प्रत्येक
                          रूफ बार के फेरुल जॉईन्ट कि कसावट होने के बाद आर टी वी
                          से सिलिंग सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark11_4}
                            onChange={(e) => {
                              setData({ ...data, remark11_4: e.target.value });
                              setRemark11_4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>12</b>
                        </td>
                        <td colSpan="4">
                          <b> रूफ बार और फिटिंग </b>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          आर डी एस ओ एस एम आई नं.198 के अनुसार सभी बियरिंग्स और
                          मूविंग पार्ट्स प्लंजर, पिंन्स, जॉइंट्स, थ्रस्ट रॉड आदि
                          को लुब्रिकेट करना सुनिश्चित करें।<br></br>
                          1.सभी ज्वाइंट, थ्रस्ट रॉड आदि की जाँच करना सुनिश्चित
                          करें।<br></br>
                          2.सभी बियरिंग की स्थिति की जाँच करना सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark12}
                            onChange={(e) => {
                              setData({ ...data, remark12: e.target.value });
                              setRemark12(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>13</b>
                        </td>
                        <td>
                          ओ ई एम मॅन्युअल नुसार पैन्टोग्राफ के Transverse
                          Rigidity Test (अनुप्रस्थ कठोरता परीक्षण) में 50
                          किलोग्राम वजन के साथ 1.5 मीटर की ऊंचाई पर में पैंटो
                          पॅन दोनों तरफ पैंटो पॅन का विचलन और विक्षेपण प्रत्येक
                          बाजू से 36 मिमी से अधिक नहीं होना चाहिए।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark13}
                            onChange={(e) => {
                              setData({ ...data, remark13: e.target.value });
                              setRemark13(e.target.value);
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
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>
                            पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                            गतिविधियॉं{" "}
                          </th>
                          <th>रिमार्क</th>
                        </tr>
                      </thead>
                      <tr>
                        <td>
                          <b>14</b>
                        </td>
                        <td>
                          आर डी एस ओ मोडीफिकेशन शिट नं. WAM4/129 /64 के निर्देशन
                          अनुसार पैन्टोग्राफ के पॅन के दोनो रबर स्टॉपर रह्ते थे
                          वह अप्पर आर्टिकुलेशन ट्युब के निचे लगे है। यह
                          सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark14}
                            onChange={(e) => {
                              setData({ ...data, remark14: e.target.value });
                              setRemark14(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>15</b>
                        </td>
                        <td>
                          आर डी एस ओ एस एम आई नं.292 के अनुसार हर शेड्यूल में
                          निम्नलिखित प्रमुख जगह पर एवं जॉईन्ट पर क्रॅक कि जाँच
                          डीपीटी (RDPT) द्वारा सुनिश्चित करें।<br> </br>
                          1.सपोर्ट रॉड (उपरी भाग)<br></br>
                          2.स्डेडी लिंक ब्रैकेट<br></br>
                          3.थ्रस्ट रॉड<br></br>
                          4.पॅडेस्टेल असेम्बली
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark15}
                            onChange={(e) => {
                              setData({ ...data, remark15: e.target.value });
                              setRemark15(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>16</b>
                        </td>
                        <td>
                          <b>
                            सर्वोमोटर कि ओव्हरहॉल कि प्रक्रिया ओ ई एम मॅन्युअल
                            नुसार
                          </b>{" "}
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td> 1. सर्वोमोटर डिसेम्बल करें। </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark16_1}
                            onChange={(e) => {
                              setData({ ...data, remark16_1: e.target.value });
                              setRemark16_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          2.यदि सर्वोमोटर में ओवेलिटि पाई जाये तो बदली करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark16_2}
                            onChange={(e) => {
                              setData({ ...data, remark16_2: e.target.value });
                              setRemark16_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          {" "}
                          3.पिस्टन पैकिंग गैस्केट रिंग की जाँच सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark16_3}
                            onChange={(e) => {
                              setData({ ...data, remark16_3: e.target.value });
                              setRemark16_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>4.स्प्रिंग की स्थिति जाँच सुनिश्चित करें।</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark16_4}
                            onChange={(e) => {
                              setData({ ...data, remark16_4: e.target.value });
                              setRemark16_4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>5.सर्वोमोटर के सभी पार्ट की ग्रीसिंग करें।</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark16_5}
                            onChange={(e) => {
                              setData({ ...data, remark16_5: e.target.value });
                              setRemark16_5(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          6.पिस्टन पैकिंग गैस्केट रिंग की मॅन्युफॅक्चरिंग कम्पनी
                          और मॅन्युफॅक्चरिंग ईयर रेकॉर्ड रजिस्टर में नोट करना
                          सुनिश्चित करें। सर्वोमोटर करने के बाद उसे लिकेज और
                          कार्य के लिये चेक करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark16_6}
                            onChange={(e) => {
                              setData({ ...data, remark16_6: e.target.value });
                              setRemark16_6(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>17</b>
                        </td>
                        <td>
                          <b>स्डेडी लिंक की पोजिशनिंग </b>{" "}
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          1.स्डेडी लिंक में कोई क्रेकिंग या बेन्ड की जाँच
                          सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark17_1}
                            onChange={(e) => {
                              setData({ ...data, remark17_1: e.target.value });
                              setRemark17_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          2.नो डिस्लोकेशन फॉर्म फिक्सिंग पिवोट्स की जाँच
                          सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark17_2}
                            onChange={(e) => {
                              setData({ ...data, remark17_2: e.target.value });
                              setRemark17_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>18</b>
                        </td>
                        <td>
                          रबर स्टॉप से पैन को ऊपर उठाने का बल कम से कम 15
                          किलोग्राम होना चाहिए यदि आवास बल निर्दिष्ट मान से कम
                          है, तो इससे पेंटोग्राफ का कंपन हो सकता है जो लॉक डाउन
                          स्थिति में काम नहीं कर रहा है की जाँच सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark18}
                            onChange={(e) => {
                              setData({ ...data, remark18: e.target.value });
                              setRemark18(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>19</b>
                        </td>
                        <td>
                          सेन्टर स्विंग लिंक पर लोंजिटूडीनल ट्यूब को फीटिंग करते
                          समय यह आवश्यक है कि बोल्टों को पूरी तरह से कसने के
                          बाद, सेंटर स्विंग लिंक के जॉ के बीच लगभग 2 मिमी का
                          अंतर सुनिश्चित किया जाए।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark19}
                            onChange={(e) => {
                              setData({ ...data, remark19: e.target.value });
                              setRemark19(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>20</b>
                        </td>
                        <td>
                          आर डी एस ओ मोडीफिकेशन शिट नं. <b>WAG-5/29</b> के
                          निर्देशन अनुसार लॉगिटुडीनल ट्युब के अंदर पानी के रिसाव
                          से बचने के लिये लॉगिटुडीनल ट्युब मे रबर बुश प्रावधान
                          करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark20}
                            onChange={(e) => {
                              setData({ ...data, remark20: e.target.value });
                              setRemark20(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="signature">
                    <label htmlFor="employee_signature">
                      कर्मचारी के हस्ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign1_karmachari}
                      onChange={(e) => {
                        setData({ ...data, sign1_karmachari: e.target.value });
                        setSign1_karmachari(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="section_supervisor_signature">
                      सेक्शन पर्यवेक्षक के हस्ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign1_examinarsection}
                      onChange={(e) => {
                        setData({
                          ...data,
                          sign1_examinarsection: e.target.value,
                        });
                        setSign1_examinarsection(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="section_supervisor_signature">
                      अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign1_anurakshan}
                      onChange={(e) => {
                        setData({ ...data, sign1_anurakshan: e.target.value });
                        setSign1_anurakshan(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="preservation_supervisor_signature">
                      पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign1_ppio}
                      onChange={(e) => {
                        setData({ ...data, sign1_ppio: e.target.value });
                        setSign1_ppio(e.target.value);
                      }}
                    ></input>
                  </div>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>अ.क्र</th>
                          <th>
                            पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                            गतिविधियॉं{" "}
                          </th>
                          <th>रिमार्क</th>
                        </tr>
                      </thead>
                      <tr>
                        <td>
                          <b>22</b>
                        </td>
                        <td>
                          {" "}
                          सर्ज अरेस्‍टर अन्‍तर की जॉंच करें, प-लैश मार्क हो तो
                          पॉलिश करें। ET-1 और ET-2 के ईलेक्ट्रोड के पॉईंट शार्प
                          सिरे और कसावट की जाँच सुनिश्चित करें। इनके इंसुलेटर के
                          डैमेज, क्रेक, फ्लैशिंग आदि की जांच सुनिश्चित करें।
                          ET-1 के ईलेक्ट्रोड मे गॅप = 210 मि.मी. और ET-2 के
                          ईलेक्ट्रोड मे गॅप = 90 मि.मी.{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark22}
                            onChange={(e) => {
                              setData({ ...data, remark22: e.target.value });
                              setRemark22(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>23</b>
                        </td>
                        <td>
                          लोकोमोटिव्ह के दोनो कॅब के हुड और सभी हुड जॉईंट चॅनल
                          की जाँच सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark23}
                            onChange={(e) => {
                              setData({ ...data, remark23: e.target.value });
                              setRemark23(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>24</b>
                        </td>
                        <td>
                          सभी हुड जॉईंट चॅनल उचित तरह से सिलिंग करें जिससे पानी
                          का रिसाव लोको के अंदर ना हो।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark24}
                            onChange={(e) => {
                              setData({ ...data, remark24: e.target.value });
                              setRemark24(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>25</b>
                        </td>
                        <td>
                          हुड पर लगे TFP के RPS के केनोपी और DBR के केनोपी की
                          जाँच सुनिश्चित करें। जिससे पानी का रिसाव लोको के अंदर
                          ना हो।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark25}
                            onChange={(e) => {
                              setData({ ...data, remark25: e.target.value });
                              setRemark25(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>26</b>
                        </td>
                        <td>
                          लोको के हुड पर लगे दोनों OCB टॉप साईड फिल्टर्स की जाँच
                          सुनिश्चित करें। सिलिंग करें जिससे पानी का रिसाव लोको
                          के अंदर ना हो।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark26}
                            onChange={(e) => {
                              setData({ ...data, remark26: e.target.value });
                              setRemark26(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>27</b>
                        </td>
                        <td>
                          लोको की छ्त पर कोइ फॉरेन मटेरियल एवं कन्डक्टिव्ह
                          मटेरियल का न होना सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark27}
                            onChange={(e) => {
                              setData({ ...data, remark27: e.target.value });
                              setRemark27(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>28</b>
                        </td>
                        <td>
                          {" "}
                          रूफलाईन कंडक्टर के इन्सुलेटर के जॉईंट की कसावट की जॉंच
                          करें। कोई अनियमितता पाये जाने पर बदली करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark28}
                            onChange={(e) => {
                              setData({ ...data, remark28: e.target.value });
                              setRemark28(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>29</b>
                        </td>
                        <td>
                          साधारण साबुन के पानी और सूखे कपड़े से इंसुलेटर को साफ
                          करें। सभी इंन्सुलेटर पर सिलिकॉन स्प्रे करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark29}
                            onChange={(e) => {
                              setData({ ...data, remark29: e.target.value });
                              setRemark29(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>30</b>
                        </td>
                        <td>
                          {" "}
                          सभी इंसुलेटर पर को साफ करें। सभी इंन्सुलेटर पर सिलिकॉन
                          स्प्रे से कोटिंग करें। लगभग कोटिंग 1.6 मी मी{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark30}
                            onChange={(e) => {
                              setData({ ...data, remark30: e.target.value });
                              setRemark30(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>31</b>
                        </td>
                        <td>
                          स्ट्रॅगर मार्किंग पैंटो पॅन सेंन्टर 200mm हरा रंग
                          300mm पिला रंग बाकी बचा हुवा लाल रंग हॉर्न के सीरे तक
                          होना सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark31}
                            onChange={(e) => {
                              setData({ ...data, remark31: e.target.value });
                              setRemark31(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>32</b>
                        </td>
                        <td>
                          सभी रूफ बार, एच पी टी लिंक जॉईन्ट, पेंटोग्राफ के सभी
                          मुव्हेबल जॉईन्ट पर GREASE GRAPHITE Grade II to IS
                          508/87 का उपयोग करना सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark32}
                            onChange={(e) => {
                              setData({ ...data, remark32: e.target.value });
                              setRemark32(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>33</b>
                        </td>
                        <td>
                          पेंटोग्राफ सर्वोमोटर ओव्हरहॉलिंग करते समय LIPLEX-2
                          (BAMEROL) or LANTHEX-EP2 Grease का उपयोग करना
                          सुनिश्चित करें।{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark33}
                            onChange={(e) => {
                              setData({ ...data, remark33: e.target.value });
                              setRemark33(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>34</b>
                        </td>
                        <td>
                          पेंटोग्राफ के प्लंजर और सभी बिअरिंग में MP3 (BAMEROL)
                          or MOBILUS-EP2 Grease का उपयोग करना सुनिश्चित करें।
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark34}
                            onChange={(e) => {
                              setData({ ...data, remark34: e.target.value });
                              setRemark3_4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="signature">
                    <label htmlFor="employee_signature">
                      कर्मचारी के हस्ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign2_karmachari}
                      onChange={(e) => {
                        setData({ ...data, sign2_karmachari: e.target.value });
                        setSign2_karmachari(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="section_supervisor_signature">
                      सेक्शन पर्यवेक्षक के हस्ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign2_examinarsection}
                      onChange={(e) => {
                        setData({
                          ...data,
                          sign2_examinarsection: e.target.value,
                        });
                        setSign2_examinarsection(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="section_supervisor_signature">
                      अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign2_anurakshan}
                      onChange={(e) => {
                        setData({ ...data, sign2_anurakshan: e.target.value });
                        setSign2_anurakshan(e.target.value);
                      }}
                    ></input>

                    <label htmlFor="preservation_supervisor_signature">
                      पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Enter"
                      aria-label=" "
                      value={data.sign2_ppio}
                      onChange={(e) => {
                        setData({ ...data, sign2_ppio: e.target.value });
                        setSign2_ppio(e.target.value);
                      }}
                    ></input>
                  </div>
                </form>
              </section>
              <div style="height: 25px;"></div>

              <section className="container">
                <form>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan="7">मस्ट चेंज आयटम</th>
                        </tr>
                        <tr>
                          <th>अ.क्र</th>
                          <th>मस्ट चेंज मद का पूरा विवरण </th>
                          <th>मेजर श्येड्यूल </th>
                          <th>TC, SMI, MOD, L/RAP, HQ INST.</th>
                          <th>लोकेशन </th>
                          <th>बदली नहीं^ किया / बदली किया </th>
                          <th>मेक और मॅन्युफॅक्चरिंग ईयर</th>
                        </tr>
                      </thead>
                      <tr>
                        <td>1</td>
                        <td>
                          CYLINDER SUPPORT ITEM REF. 17.6 TO M/S SIL ORD REF.
                          S000291 FOR UPPER ARTICULATION ASSLY FOR
                          PANTOGRAPHAM-12.
                        </td>
                        <td>IOH</td>
                        <td>TC - 29</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_1}
                            onChange={(e) => {
                              setData({ ...data, change_1: e.target.value });
                              setChange_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_1}
                            onChange={(e) => {
                              setData({ ...data, make_1: e.target.value });
                              setMake_1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          PISTON PACKING RING FOR PANTO SERVOMOTOR AS PER M/S
                          SIL PART NO.S0221129100 OR M/S - GSEC, PART
                          NO.GSEC/PANTO/094 OR M/S CONTRANSYS PART NO. C01870
                        </td>
                        <td>AOH/IOH</td>
                        <td>TC - 31 /TC - 29</td>
                        <td>
                          PT 1<br></br>
                          S/M 1<br></br>
                          PT 2<br></br>
                          S/M 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_2}
                            onChange={(e) => {
                              setData({ ...data, change_2: e.target.value });
                              setChange_2(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_2}
                            onChange={(e) => {
                              setData({ ...data, make_2: e.target.value });
                              setMake_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          SET OF CIRCLIPS TO IS:3075/1975 FOR PANTOGRAPH TYPE
                          AM-12 COMPRISING OF 04 ITEMS 12 NOS. AS PER SK.NO.
                          BSL/ELW/SK.NO.4000 ALT.1 OR SIMILAR.
                        </td>
                        <td>AOH/IOH</td>
                        <td>TC - 31 /TC - 29</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_3}
                            onChange={(e) => {
                              setData({ ...data, change_3: e.target.value });
                              setChange_3(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_3}
                            onChange={(e) => {
                              setData({ ...data, make_3: e.target.value });
                              setMake_3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          SET OF RUBBER ITEMS FOR PANTOGRAPH TYPE AM-12
                          COMPRISING OF 04 ITEMS 16 NOS. AS PER SKETCH NO.
                          BSL/ELW/SK.NO.4008.{" "}
                        </td>
                        <td>IOH</td>
                        <td>TC - 29</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_4}
                            onChange={(e) => {
                              setData({ ...data, change_4: e.target.value });
                              setChange_4(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_4}
                            onChange={(e) => {
                              setData({ ...data, make_4: e.target.value });
                              setMake_4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          SET OF RUBBER ITEMS & FLAT WASHERS FOR AM-92 PANTO OF
                          3 PHASAE LOCOMOTIVE
                        </td>
                        <td>IOH</td>
                        <td>TC 29</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_5}
                            onChange={(e) => {
                              setData({ ...data, change_5: e.target.value });
                              setChange_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        5
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_5}
                            onChange={(e) => {
                              setData({ ...data, make_5: e.target.value });
                              setMake_5(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          SET OF TOP MOUNTING ASSLY. FOR PANTOGRAH IOH 0094 PT 1
                          PT 2
                        </td>
                        <td>IOH</td>
                        <td>0094</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_6}
                            onChange={(e) => {
                              setData({ ...data, change_6: e.target.value });
                              setChange_6(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_6}
                            onChange={(e) => {
                              setData({ ...data, make_6: e.target.value });
                              setMake_6(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          SPRING FOR UPER ARTICULATION ASSLY. ITEM REF. 11.30 TO
                          SIL, ORD REF 5000301 OR SIMILAR AOH/IOH TC0094 PT 1 PT
                          2
                        </td>
                        <td>AOH/IOH</td>
                        <td>TC0094</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_7}
                            onChange={(e) => {
                              setData({ ...data, change_7: e.target.value });
                              setChange_7(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_7}
                            onChange={(e) => {
                              setData({ ...data, make_7: e.target.value });
                              setMake_7(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>END OF WEARING STRIP</td>
                        <td>IOH</td>
                        <td>TC0094</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_8}
                            onChange={(e) => {
                              setData({ ...data, change_8: e.target.value });
                              setChange_8(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_8}
                            onChange={(e) => {
                              setData({ ...data, make_8: e.target.value });
                              setMake_8(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          SET OF FLEXIBLE SHUNTS FOR PANTO GRAPH TYPE AM-12{" "}
                        </td>
                        <td>IOH</td>
                        <td>TC0094</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_9}
                            onChange={(e) => {
                              setData({ ...data, change_9: e.target.value });
                              setChange_9(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_9}
                            onChange={(e) => {
                              setData({ ...data, make_9: e.target.value });
                              setMake_9(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>SET OF PINS FOR PANTOGRAPH TYPE AM 12</td>
                        <td>IOH</td>
                        <td>TC0094</td>
                        <td>
                          PT 1<br></br>
                          PT 2
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.change_10}
                            onChange={(e) => {
                              setData({ ...data, change_10: e.target.value });
                              setChange_10(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.make_10}
                            onChange={(e) => {
                              setData({ ...data, make_10: e.target.value });
                              setMake_10(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="signature">
                    <label htmlFor="employee_signature">
                      कर्मचारी के हस्ताक्षर:
                    </label>
                    <td>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.sign3_karmachari}
                        onChange={(e) => {
                          setData({
                            ...data,
                            setSign3_karmachari: e.target.value,
                          });
                          setSign3_karmachari(e.target.value);
                        }}
                      ></input>
                    </td>

                    <label htmlFor="section_supervisor_signature">
                      सेक्शन पर्यवेक्षक के हस्ताक्षर:
                    </label>
                    <td>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.sign3_examinarsection}
                        onChange={(e) => {
                          setData({
                            ...data,
                            sign3_examinarsection: e.target.value,
                          });
                          setSign3_examinarsection(e.target.value);
                        }}
                      ></input>
                    </td>

                    <label htmlFor="section_supervisor_signature">
                      अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:
                    </label>
                    <td>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.sign3_anurakshan}
                        onChange={(e) => {
                          setData({
                            ...data,
                            sign3_anurakshan: e.target.value,
                          });
                          setSign3_anurakshan(e.target.value);
                        }}
                      ></input>
                    </td>

                    <label htmlFor="preservation_supervisor_signature">
                      पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:
                    </label>
                    <td>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.sign3_ppio}
                        onChange={(e) => {
                          setData({ ...data, sign3_ppio: e.target.value });
                          setSign3_ppio(e.target.value);
                        }}
                      ></input>
                    </td>
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
                </form>
              </section>
              <div style="height: 25px;"></div>

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
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default AppPanto;
