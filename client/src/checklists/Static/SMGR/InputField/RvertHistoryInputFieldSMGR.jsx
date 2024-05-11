import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateSMGR/details";
import Table from "../TemplateSMGR/table";
import Footer from "../TemplateSMGR/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./SMGR.css";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";

function AppSMGR() {
  const [showForm, setShowForm] = useState(false);
  const [locono1, setLocono1] = useState("");
  const [date1, setDate1] = useState("");
  const [oh_date, setOh_date] = useState("");
  const [se_no, setSeNo] = useState("");
  const [smgr_srno, setSmgr_srno] = useState("");
  const [make, setMake] = useState("");
  const [removed_locono, setRemoved_locono] = useState("");
  const [provided_locono, setProvided_locono] = useState("");
  const [date_provided, setDate_provided] = useState("");
  const [paya1_1, setPaya1_1] = useState("");
  const [paya1_2, setPaya1_2] = useState("");
  const [paya1_3, setPaya1_3] = useState("");
  const [paya1_4, setPaya1_4] = useState("");
  const [paya2, setPaya2] = useState("");
  const [paya3, setPaya3] = useState("");
  const [paya4, setPaya4] = useState("");
  const [paya5_ve1, setPaya5_ve1] = useState("");
  const [paya5_ve2, setPaya5_ve2] = useState("");
  const [paya6_ve1, setPaya6_ve1] = useState("");
  const [paya6_ve2, setPaya6_ve2] = useState("");
  const [paya7, setPaya7] = useState("");
  const [paya8_ve1, setPaya8_ve1] = useState("");
  const [paya8_ve2, setPaya8_ve2] = useState("");
  const [paya9_ve1, setPaya9_ve1] = useState("");
  const [paya9_ve2, setPaya9_ve2] = useState("");
  const [paya10, setPaya10] = useState("");
  const [paya11, setPaya11] = useState("");
  const [paya12, setPaya12] = useState("");
  const [paya13, setPaya13] = useState("");
  const [paya14, setPaya14] = useState("");
  const [paya15, setPaya15] = useState("");
  const [paya16, setPaya16] = useState("");
  const [paya17, setPaya17] = useState("");
  const [paya18, setPaya18] = useState("");
  const [paya19, setPaya19] = useState("");
  const [paya20, setPaya20] = useState("");
  const [done_336, setDone_336] = useState("");
  const [notdone_336, setNotdone_336] = useState("");
  const [done_358, setDone_358] = useState("");
  const [notdone_358, setNotdone_358] = useState("");
  const [remark1, setRemark1] = useState("");
  const [remark2, setRemark2] = useState("");
  const [remark3, setRemark3] = useState("");
  const [remark4, setRemark4] = useState("");
  const [remark5, setRemark5] = useState("");
  const [remark6, setRemark6] = useState("");
  const [remark, setRemark] = useState("");
  const [name_karmchari, setName_karmchari] = useState("");
  const [sign_karmchari, setSign_karmchari] = useState("");
  const [sectionexaminar_name, setSectionexaminar_name] = useState("");
  const [sectionexaminar_sign, setSectionexaminar_sign] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    locono1: "",
    date1: "",
    oh_date: "",
    se_no: "",
    smgr_srno: "",
    make: "",
    removed_locono: "",
    provided_locono: "",
    date_provided: "",
    paya1_1: "",
    paya1_2: "",
    paya1_3: "",
    paya1_4: "",
    paya2: "",
    paya3: "",
    paya4: "",
    paya5_ve1: "",
    paya5_ve2: "",
    paya6_ve1: "",
    paya6_ve2: "",
    paya7: "",
    paya8_ve1: "",
    paya8_ve2: "",
    paya9_ve1: "",
    paya9_ve2: "",
    paya10: "",
    paya11: "",
    paya12: "",
    paya13: "",
    paya14: "",
    paya15: "",
    paya16: "",
    paya17: "",
    paya18: "",
    paya19: "",
    paya20: "",
    done_336: "",
    notdone_336: "",
    done_358: "",
    notdone_358: "",
    remark1: "",
    remark2: "",
    remark3: "",
    remark4: "",
    remark5: "",
    remark6: "",
    remark: "",
    name_karmchari: "",
    sign_karmchari: "",
    sectionexaminar_name: "",
    sectionexaminar_sign: "",
  });

  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(`${BASE_URL}/api/revert/S-SMGR/${uid}`);
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        locono1: fetchedData.locono1,
        date1: fetchedData.date1,
        oh_date: fetchedData.oh_date,
        se_no: fetchedData.se_no,
        smgr_srno: fetchedData.smgr_srno,
        make: fetchedData.make,
        removed_locono: fetchedData.removed_locono,
        provided_locono: fetchedData.provided_locono,
        date_provided: fetchedData.date_provided,
        paya1_1: fetchedData.paya1_1,
        paya1_2: fetchedData.paya1_2,
        paya1_3: fetchedData.paya1_3,
        paya1_4: fetchedData.paya1_4,
        paya2: fetchedData.paya2,
        paya3: fetchedData.paya3,
        paya4: fetchedData.paya4,
        paya5_ve1: fetchedData.paya5_ve1,
        paya5_ve2: fetchedData.paya5_ve2,
        paya6_ve1: fetchedData.paya6_ve1,
        paya6_ve2: fetchedData.paya6_ve2,
        paya7: fetchedData.paya7,
        paya8_ve1: fetchedData.paya8_ve1,
        paya8_ve2: fetchedData.paya8_ve2,
        paya9_ve1: fetchedData.paya9_ve1,
        paya9_ve2: fetchedData.paya9_ve2,
        paya10: fetchedData.paya10,
        paya11: fetchedData.paya11,
        paya12: fetchedData.paya12,
        paya13: fetchedData.paya13,
        paya14: fetchedData.paya14,
        paya15: fetchedData.paya15,
        paya16: fetchedData.paya16,
        paya17: fetchedData.paya17,
        paya18: fetchedData.paya18,
        paya19: fetchedData.paya19,
        paya20: fetchedData.paya20,
        done_336: fetchedData.done_336,
        notdone_336: fetchedData.notdone_336,
        done_358: fetchedData.done_358,
        notdone_358: fetchedData.notdone_358,
        remark1: fetchedData.remark1,
        remark2: fetchedData.remark2,
        remark3: fetchedData.remark3,
        remark4: fetchedData.remark4,
        remark5: fetchedData.remark5,
        remark6: fetchedData.remark6,
        remark: fetchedData.remark,
        name_karmchari: fetchedData.name_karmchari,
        sign_karmchari: fetchedData.sign_karmchari,
        sectionexaminar_name: fetchedData.sectionexaminar_name,
        sectionexaminar_sign: fetchedData.sectionexaminar_sign,
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
      locono1,
      date1,
      oh_date,
      se_no,
      smgr_srno,
      make,
      removed_locono,
      provided_locono,
      date_provided,
      paya1_1,
      paya1_2,
      paya1_3,
      paya1_4,
      paya2,
      paya3,
      paya4,
      paya5_ve1,
      paya5_ve2,
      paya6_ve1,
      paya6_ve2,
      paya7,
      paya8_ve1,
      paya8_ve2,
      paya9_ve1,
      paya9_ve2,
      paya10,
      paya11,
      paya12,
      paya13,
      paya14,
      paya15,
      paya16,
      paya17,
      paya18,
      paya19,
      paya20,
      done_336,
      notdone_336,
      done_358,
      notdone_358,
      remark1,
      remark2,
      remark3,
      remark4,
      remark5,
      remark6,
      remark,
      name_karmchari,
      sign_karmchari,
      sectionexaminar_name,
      sectionexaminar_sign,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/SMGR`, {
        locono1,
        date1,
        oh_date,
        se_no,
        smgr_srno,
        make,
        removed_locono,
        provided_locono,
        date_provided,
        paya1_1,
        paya1_2,
        paya1_3,
        paya1_4,
        paya2,
        paya3,
        paya4,
        paya5_ve1,
        paya5_ve2,
        paya6_ve1,
        paya6_ve2,
        paya7,
        paya8_ve1,
        paya8_ve2,
        paya9_ve1,
        paya9_ve2,
        paya10,
        paya11,
        paya12,
        paya13,
        paya14,
        paya15,
        paya16,
        paya17,
        paya18,
        paya19,
        paya20,
        done_336,
        notdone_336,
        done_358,
        notdone_358,
        remark1,
        remark2,
        remark3,
        remark4,
        remark5,
        remark6,
        remark,
        name_karmchari,
        sign_karmchari,
        sectionexaminar_name,
        sectionexaminar_sign,
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
              <Details locono1={locono1} date1={date1} />

              <br></br>

              <Table
                oh_date={oh_date}
                se_no={se_no}
                smgr_srno={smgr_srno}
                make={make}
                removed_locono={removed_locono}
                provided_locono={provided_locono}
                date_provided={date_provided}
                paya1_1={paya1_1}
                paya1_2={paya1_2}
                paya1_3={paya1_3}
                paya2={paya2}
                paya1_4={paya1_4}
                paya3={paya3}
                paya4={paya4}
                paya5_ve1={paya5_ve1}
                paya5_ve2={paya5_ve2}
                paya6_ve1={paya6_ve1}
                paya6_ve2={paya6_ve2}
                paya7={paya7}
                paya8_ve1={paya8_ve1}
                paya8_ve2={paya8_ve2}
                paya9_ve1={paya9_ve1}
                paya9_ve2={paya9_ve2}
                paya10={paya10}
                paya11={paya11}
                paya12={paya12}
                paya13={paya13}
                paya14={paya14}
                paya15={paya15}
                paya16={paya16}
                paya17={paya17}
                paya18={paya18}
                paya19={paya19}
                paya20={paya20}
                done_336={done_336}
                notdone_336={notdone_336}
                done_358={done_358}
                notdone_358={notdone_358}
                remark1={remark1}
                remark2={remark2}
                remark3={remark3}
                remark4={remark4}
                remark5={remark5}
                remark6={remark6}
              />

              <Footer
                remark={remark}
                name_karmchari={name_karmchari}
                sign_karmchari={sign_karmchari}
                sectionexaminar_name={sectionexaminar_name}
                sectionexaminar_sign={sectionexaminar_sign}
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
                    मध्य रेल <br></br>
                    विद्युत लोको शेड, भुसावल.
                  </h4>
                </div>
                <div>
                  <label htmlFor="loko_number">लोको सं. : </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.locono1}
                    onChange={(e) => {
                      setData({ ...data, locono1: e.target.value });
                      setLocono1(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="date">दिनांक:</label>
                  <input
                    type="date"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.date1}
                    onChange={(e) => {
                      setData({ ...data, date1: e.target.value });
                      setDate1(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="inspection">निरीक्षण: TOH</label>
                  <input type="checkbox"></input>
                  <label htmlFor="inspection"> IOH</label>
                  <input type="checkbox"></input>
                  <label htmlFor="department">
                    विभाग: स्टॅटिक इक्विपमेंट (S.E.)
                  </label>
                </div>
                <br></br>
                <div className="header-text">
                  <h4>TOH तथा IOH के दौरान SMGR ओवरहॉलिंग की चेकशीट</h4>
                </div>
                <div className="loco-dept"> </div>
                <div className="flex-container"></div>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <td>
                        O/H Date :-
                        <input
                          type="date"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.oh_date}
                          onChange={(e) => {
                            setData({ ...data, oh_date: e.target.value });
                            setOh_date(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        SE No:-
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.se_no}
                          onChange={(e) => {
                            setData({ ...data, se_no: e.target.value });
                            setSeNo(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        SMGR Sr. No.: -{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.smgr_srno}
                          onChange={(e) => {
                            setData({ ...data, smgr_srno: e.target.value });
                            setSmgr_srno(e.target.value);
                          }}
                        ></input>
                        <br></br>Make:-
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make}
                          onChange={(e) => {
                            setData({ ...data, make: e.target.value });
                            setMake(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Removed from Loco No:
                        <input
                          type="text"
                          className="form-control custom-input"
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
                      </td>
                      <td>
                        Provided in Loco No: -
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.provided_locono}
                          onChange={(e) => {
                            setData({
                              ...data,
                              provided_locono: e.target.value,
                            });
                            setProvided_locono(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        Provided Date: -
                        <input
                          type="date"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.date_provided}
                          onChange={(e) => {
                            setData({ ...data, date_provided: e.target.value });
                            setDate_provided(e.target.value);
                          }}
                        ></input>{" "}
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <th>अ.</th>
                      <th>जांच का विवरण </th>
                      <th>मानक </th>
                      <th>पाया गया </th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        प्लंजर कंप्लीट A 5317(valve push rod) बोल्ट के हैड (A
                        5317.5) और स्लीव (A 5317.6) के बीच गैप की जांच करें !
                      </td>
                      <td>0.4 to 0.7 mm</td>
                      <td>
                        (1){" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya1_1}
                          onChange={(e) => {
                            setData({ ...data, paya1_1: e.target.value });
                            setPaya1_1(e.target.value);
                          }}
                        ></input>{" "}
                        (2)
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya1_2}
                          onChange={(e) => {
                            setData({ ...data, paya1_2: e.target.value });
                            setPaya1_2(e.target.value);
                          }}
                        ></input>{" "}
                        <br> </br>
                        (3){" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya1_3}
                          onChange={(e) => {
                            setData({ ...data, paya1_3: e.target.value });
                            setPaya1_3(e.target.value);
                          }}
                        ></input>{" "}
                        (4)
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya1_4}
                          onChange={(e) => {
                            setData({ ...data, paya1_4: e.target.value });
                            setPaya1_4(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        कंट्रोल लीवर [A 4540] इंटरमीडिएट व्हील के गाइड सेगमेंट
                        और कंट्रोल लीवर के बीच गैप की जांच करें !
                      </td>
                      <td>0.4 to 0.7 mm</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya2}
                          onChange={(e) => {
                            setData({ ...data, paya2: e.target.value });
                            setPaya2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        कंट्रोल लीवर के toothed segment (A 4540.2) और फ्लायव्हील
                        के बीच गैप की जांच करें !
                      </td>
                      <td>0.7 mm से कम नहीं होना चाहिए </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya3}
                          onChange={(e) => {
                            setData({ ...data, paya3: e.target.value });
                            setPaya3(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        फ्लायव्हील के ढीलेपन /वावलिंग(looseness / wobbling) की
                        जांच करें!
                      </td>
                      <td>कोई ढीलापन नहीं </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya4}
                          onChange={(e) => {
                            setData({ ...data, paya4: e.target.value });
                            setPaya4(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        {" "}
                        3.5 kg/cm² पर वाल्व A 4150.3 (VE.1 & VE.2 valves) के सही
                        ऑपरेशन के लिए आवश्यक न्यूनतम वोल्टेज [कंट्रोल कोईल (VE.1
                        VE.2) का पिक अप वोल्टेज] की जांच करें!
                      </td>
                      <td>53 V- 65 V</td>
                      <td>
                        VE1{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya5_ve1}
                          onChange={(e) => {
                            setData({ ...data, paya5_ve1: e.target.value });
                            setPaya5_ve1(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        VE2{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya5_ve2}
                          onChange={(e) => {
                            setData({ ...data, paya5_ve2: e.target.value });
                            setPaya5_ve2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>ड्रॉप-आउट वोल्टेज की जांच करें !</td>
                      <td>11 V न्यूनतम </td>
                      <td>
                        VE1{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya6_ve1}
                          onChange={(e) => {
                            setData({ ...data, paya6_ve1: e.target.value });
                            setPaya6_ve1(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        VE2{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya6_ve2}
                          onChange={(e) => {
                            setData({ ...data, paya6_ve2: e.target.value });
                            setPaya6_ve2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>एयर लीकेज टेस्ट की जांच करें !</td>
                      <td>10 मिनट में 10% से अधिक नहीं होनाचाहिए </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya7}
                          onChange={(e) => {
                            setData({ ...data, paya7: e.target.value });
                            setPaya7(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>कॉईल के क्यू – फेक्टर की जांच करें !</td>
                      <td>जांच किया </td>
                      <td>
                        VE1{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya8_ve1}
                          onChange={(e) => {
                            setData({ ...data, paya8_ve1: e.target.value });
                            setPaya8_ve1(e.target.value);
                          }}
                        ></input>
                        <br></br>VE2
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya8_ve2}
                          onChange={(e) => {
                            setData({ ...data, paya8_ve2: e.target.value });
                            setPaya8_ve2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>
                        R20C पर कंट्रोल कॉईल VE -1 and VE -2 के प्रतिरोध की जांच
                        करें!
                      </td>
                      <td>313 Ω - 383 Ω</td>
                      <td>
                        VE1{" "}
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya9_ve1}
                          onChange={(e) => {
                            setData({ ...data, paya9_ve1: e.target.value });
                            setPaya9_ve1(e.target.value);
                          }}
                        ></input>
                        <br></br>VE2
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya9_ve2}
                          onChange={(e) => {
                            setData({ ...data, paya9_ve2: e.target.value });
                            setPaya9_ve2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>VE I & VE II के क्लियरेंस की जांच करें!</td>
                      <td>0.5 mm</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya10}
                          onChange={(e) => {
                            setData({ ...data, paya10: e.target.value });
                            setPaya10(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>
                        एयर मोटर का समय(0 -32 लगातार).प्रोग्रेसन का समय(9 to 13
                        sec.). रिग्रेसन का समय(9 to 13 sec.).
                      </td>
                      <td>
                        9 to 13 sec. <br> </br>9 to 13 sec.
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya11}
                          onChange={(e) => {
                            setData({ ...data, paya11: e.target.value });
                            setPaya11(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>
                        फ्रीव्हीलिंग डायोड के ओपन /शॉर्ट न होने की जांच करें
                        कंट्रोल कॉईल VE – 1, VE – 2 के इंटरटर्न शॉर्ट न होने की
                        जांच करें{" "}
                      </td>
                      <td>कोई इंटर-टर्न शॉर्ट नहीं पाया </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya12}
                          onChange={(e) => {
                            setData({ ...data, paya12: e.target.value });
                            setPaya12(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>
                        बिना पुश रोड के केम शाफ्ट का लीड एंगल 75 डिग्री पर
                        समायोजित करें !(SMI-48)
                      </td>
                      <td>जांच किया </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya13}
                          onChange={(e) => {
                            setData({ ...data, paya13: e.target.value });
                            setPaya13(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>AOH/IOH kit बदली करें !</td>
                      <td>बदल दिया </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya14}
                          onChange={(e) => {
                            setData({ ...data, paya14: e.target.value });
                            setPaya14(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>
                        केम सीक्वेंस (1 by 1, 35 Nos.) की जांच करें ऑक्सिलरी
                        स्विच के ड्रम पर सही कार्यप्रणाली की जांच करें !
                      </td>
                      <td>जांच किया सही पाया </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya15}
                          onChange={(e) => {
                            setData({ ...data, paya15: e.target.value });
                            setPaya15(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>
                        ओवर शूटिंग से बचने के लिए 0 से 32 नोच पर Elect. / Mech.
                        Interlock की जांच करें{" "}
                      </td>
                      <td>जांच किया सही पाया</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya16}
                          onChange={(e) => {
                            setData({ ...data, paya16: e.target.value });
                            setPaya16(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>
                        SMI – 80,105 के अनुसार लुब्रिकेट करें (i)वेवेल गियर
                        (A1924) ,कंट्रोल सिलिन्डर,मेन सिलिंडर (40 Gm.)
                        (ii)बियरिंग शैल ,इंटरमीड़ियेटगियर सेगमेंट , कंट्रोल डिस्क
                        ,क्रेंकशाफ्ट की नोचिंग की पेरीफेरी , बियरिंग पिन ,प्लंजर
                        की बियरिंग (A 5317.6 & A 5317.3) ,गाइड पिन |
                      </td>
                      <td>Bharat MP 2 BBC 909 ग्रेफ़ाईट ऑईल </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya17}
                          onChange={(e) => {
                            setData({ ...data, paya17: e.target.value });
                            setPaya17(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>
                        SMI – 145 के अनुसार क्रेंकशाफ्ट का DPT टेस्ट करें{" "}
                      </td>
                      <td>कोई क्रेक नहीं पाया </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya18}
                          onChange={(e) => {
                            setData({ ...data, paya18: e.target.value });
                            setPaya18(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>टेस्ट बेंच पर Endurance टेस्ट करें !</td>
                      <td>200 operation</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya19}
                          onChange={(e) => {
                            setData({ ...data, paya19: e.target.value });
                            setPaya19(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>
                        ऑक्जिलरी स्विच की स्थिति की जांच करें ,यदि आवश्यक हो तो
                        बदल दे !
                      </td>
                      <td>जांच किया सही पाया</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.paya20}
                          onChange={(e) => {
                            setData({ ...data, paya20: e.target.value });
                            setPaya20(e.target.value);
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
                <p>
                  Note: - Point 1 to 7 from OEM manual and SMI-143 & Point 9 to
                  12 from OEM manual.
                </p>
                <div className="header-text">
                  <h4>RDSO Modification:</h4>
                </div>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Modification</th>
                        <th>Done</th>
                        <th>Not Done</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Modi – 336 </td>
                        <td>
                          Provision of auxiliary interlock 9 × 10 of SMGR in
                          series with existing interlock No 89 × 90 on QV 62
                          branch ( to avoid RGR burning ) – Modified cam
                          provided in all SMGR{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.done_336}
                            onChange={(e) => {
                              setData({ ...data, done_336: e.target.value });
                              setDone_336(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.notdone_336}
                            onChange={(e) => {
                              setData({ ...data, notdone_336: e.target.value });
                              setNotdone_336(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>Modi – 358</td>
                        <td>
                          Provision of 16th notch regression in SMGR in electric
                          loco provided with roof mounted DBR – Cam 16 × 32
                          provided in all roof mounted DBR locos{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.done_358}
                            onChange={(e) => {
                              setData({ ...data, done_358: e.target.value });
                              setDone_358(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.notdone_358}
                            onChange={(e) => {
                              setData({ ...data, notdone_358: e.target.value });
                              setNotdone_358(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br></br>
                <div className="header-text">
                  <h4>TOH / IOH मे अनिवार्य रूप से बदलने वाले सामान की सूची</h4>
                </div>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Description of items</th>
                        <th>PL No.</th>
                        <th>Remark</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          AOH maintenance Kit (Sub kit AOH-1) consist 32+28 = 60
                          Common items (BTIL+AAL)
                        </td>
                        <td>23560897</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark1}
                            onChange={(e) => {
                              setData({ ...data, remark1: e.target.value });
                              setRemark1(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          AOH maintenance Kit (Sub kit AOH-2A) consist 07+02 =
                          09 Un-Common items (AAL)
                        </td>
                        <td>N/S</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark2}
                            onChange={(e) => {
                              setData({ ...data, remark2: e.target.value });
                              setRemark2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          AOH maintenance Kit (Sub kit AOH-2B) consist 15+10 =
                          25 Un-Common items (BTIL)
                        </td>
                        <td>23560903</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark3}
                            onChange={(e) => {
                              setData({ ...data, remark3: e.target.value });
                              setRemark3(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          IOH maintenance Kit (Sub kit IOH-1) consist 66+47 =
                          113 Common items
                        </td>
                        <td>23560885</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark4}
                            onChange={(e) => {
                              setData({ ...data, remark4: e.target.value });
                              setRemark4(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          IOH maintenance Kit (Sub kit IOH-2A) consist 12 + 06 =
                          18 Un-Common items (AAL)
                        </td>
                        <td>N/S</td>
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
                          IOH maintenance Kit (Sub kit IOH-2B) consist 22 + 17 =
                          39 Un-Common items (BTIL)
                        </td>
                        <td>N/S</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.remark6}
                            onChange={(e) => {
                              setData({ ...data, remark6: e.target.value });
                              setRemark6(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="signature">
                  <label htmlFor="Remark">Remark :-</label>
                  <br></br>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.remark}
                    onChange={(e) => {
                      setData({ ...data, remark: e.target.value });
                      setRemark(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="Employee Name">कर्मचारी का नाम-</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.name_karmchari}
                    onChange={(e) => {
                      setData({ ...data, name_karmchari: e.target.value });
                      setName_karmchari(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="Employee Signature-">
                    कर्मचारी का हस्‍ताक्षर -
                  </label>
                  <br></br>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.sign_karmchari}
                    onChange={(e) => {
                      setData({ ...data, sign_karmchari: e.target.value });
                      setSign_karmchari(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="Section Supervisor's Name and Signature">
                    {" "}
                    सेक्शनपर्यवेक्षक का नाम तथा हस्‍ताक्षर -
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.sectionexaminar_name}
                    onChange={(e) => {
                      setData({
                        ...data,
                        sectionexaminar_name: e.target.value,
                      });
                      setSectionexaminar_name(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.sectionexaminar_sign}
                    onChange={(e) => {
                      setData({
                        ...data,
                        sectionexaminar_sign: e.target.value,
                      });
                      setSectionexaminar_sign(e.target.value);
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
                <br></br>
                <br></br>
              </form>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default AppSMGR;
