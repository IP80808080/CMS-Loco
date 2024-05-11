import { useState, useEffect } from "react";
import axios from "axios";
import Table from "../TemplateRSI/table";
import Footer from "../TemplateRSI/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./RSI.css";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";

function RevertHistoryInputFieldRSI() {
  const [showForm, setShowForm] = useState(false);
  const [removed_locono, setRemoved_loco] = useState("");
  const [provided_locono, setProvided_locono] = useState("");
  const [make1, setMake1] = useState("");
  const [make_rsi1, setMake_rsi1] = useState("");
  const [make_rsi2, setMake_rsi2] = useState("");
  const [removed_date, setRemoved_date] = useState("");
  const [rsisrno, setRsisrno] = useState("");
  const [rsisrno_rsi1, setRsisrno_rsi1] = useState("");
  const [rsisrno_rsi2, setRsisrno_rsi2] = useState("");
  const [provided_date, setProvided_date] = useState("");
  const [year, setYear] = useState("");
  const [year_rsi1, setYear_rsi1] = useState("");
  const [year_rsi2, setYear_rsi2] = useState("");
  const [date_overhaul, setDate_overhaul] = useState("");
  const [type, setType] = useState("");
  const [type_rsi1, setType_rsi1] = useState("");
  const [type_rsi2, setType_rsi2] = useState("");
  const [actual1_1, setActual1_1] = useState("");
  const [actual1_2, setActual1_2] = useState("");
  const [actual2a_1, setActual2a_1] = useState("");
  const [actual2a_2, setActual2a_2] = useState("");
  const [actual2b_1, setActual2b_1] = useState("");
  const [actual2b_2, setActual2b_2] = useState("");
  const [actual3_1, setActual3_1] = useState("");
  const [actual3_2, setActual3_2] = useState("");
  const [actual4a_1, setActual4a_1] = useState("");
  const [actual4a_2, setActual4a_2] = useState("");
  const [actual4b_1, setActual4b_1] = useState("");
  const [actual4b_2, setActual4b_2] = useState("");
  const [actual5a_1, setActual5a_1] = useState("");
  const [actual5a_2, setActual5a_2] = useState("");
  const [actual5b_1, setActual5b_1] = useState("");
  const [actual5b_2, setActual5b_2] = useState("");
  const [actual6_1, setActual6_1] = useState("");
  const [actual6_2, setActual6_2] = useState("");
  const [actual7_1, setActual7_1] = useState("");
  const [actual7_2, setActual7_2] = useState("");
  const [actual8_1, setActual8_1] = useState("");
  const [actual8_2, setActual8_2] = useState("");
  const [actual9a_1, setActual9a_1] = useState("");
  const [actual9a_2, setActual9a_2] = useState("");
  const [actual9b_1, setActual9b_1] = useState("");
  const [actual9b_2, setActual9b_2] = useState("");
  const [actual9c_1, setActual9c_1] = useState("");
  const [actual9c_2, setActual9c_2] = useState("");
  const [actual10a_1, setActual10a_1] = useState("");
  const [actual10a_2, setActual10a_2] = useState("");
  const [actual10b_1, setActual10b_1] = useState("");
  const [actual10b_2, setActual10b_2] = useState("");
  const [actual10c_1, setActual10c_1] = useState("");
  const [actual10c_2, setActual10c_2] = useState("");
  const [actual11ip1_1, setActual11ip1_1] = useState("");
  const [actual11ip1_2, setActual11ip1_2] = useState("");
  const [actual11op1_1, setActual11op1_1] = useState("");
  const [actual11op1_2, setActual11op1_2] = useState("");
  const [actual11ip2_1, setActual11ip2_1] = useState("");
  const [actual11ip2_2, setActual11ip2_2] = useState("");
  const [actual11op2_1, setActual11op2_1] = useState("");
  const [actual11op2_2, setActual11op2_2] = useState("");
  const [other_remarks, setOther_remarks] = useState("");
  const [name_staff, setName_staff] = useState("");
  const [sign_staff, setSign_staff] = useState("");
  const [name_supervisor, setName_supervisor] = useState("");
  const [sign_supervisor, setSign_supervisor] = useState("");

  const handlePrint = () => {
    window.print();
  };

  const navigate = useNavigate();
  const [data, setData] = useState({
    removed_locono: "",
    provided_locono: "",
    make1: "",
    make_rsi1: "",
    make_rsi2: "",
    removed_date: "",
    rsisrno: "",
    rsisrno_rsi1: "",
    rsisrno_rsi2: "",
    provided_date: "",
    year: "",
    year_rsi1: "",
    year_rsi2: "",
    date_overhaul: "",
    type: "",
    type_rsi1: "",
    type_rsi2: "",
    actual1_1: "",
    actual1_2: "",
    actual2a_1: "",
    actual2a_2: "",
    actual2b_1: "",
    actual2b_2: "",
    actual3_1: "",
    actual3_2: "",
    actual4a_1: "",
    actual4a_2: "",
    actual4b_1: "",
    actual4b_2: "",
    actual5a_1: "",
    actual5a_2: "",
    actual5b_1: "",
    actual5b_2: "",
    actual6_1: "",
    actual6_2: "",
    actual7_1: "",
    actual7_2: "",
    actual8_1: "",
    actual8_2: "",
    actual9a_1: "",
    actual9a_2: "",
    actual9b_1: "",
    actual9b_2: "",
    actual9c_1: "",
    actual9c_2: "",
    actual10a_1: "",
    actual10a_2: "",
    actual10b_1: "",
    actual10b_2: "",
    actual10c_1: "",
    actual10c_2: "",
    actual11ip1_1: "",
    actual11ip1_2: "",
    actual11op1_1: "",
    actual11op1_2: "",
    actual11ip2_1: "",
    actual11ip2_2: "",
    actual11op2_1: "",
    actual11op2_2: "",
    other_remarks: "",
    name_staff: "",
    sign_staff: "",
    name_supervisor: "",
    sign_supervisor: "",
  });

  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(`${BASE_URL}/api/revert/S-RSI/${uid}`);
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        removed_locono: fetchedData.removed_locono,
        provided_locono: fetchedData.provided_locono,
        make1: fetchedData.make1,
        make_rsi1: fetchedData.make_rsi1,
        make_rsi2: fetchedData.make_rsi2,
        removed_date: fetchedData.removed_date,
        rsisrno: fetchedData.rsisrno,
        rsisrno_rsi1: fetchedData.rsisrno_rsi1,
        rsisrno_rsi2: fetchedData.rsisrno_rsi2,
        provided_date: fetchedData.provided_date,
        year: fetchedData.year,
        year_rsi1: fetchedData.year_rsi1,
        year_rsi2: fetchedData.year_rsi2,
        date_overhaul: fetchedData.date_overhaul,
        type: fetchedData.type,
        type_rsi1: fetchedData.type_rsi1,
        type_rsi2: fetchedData.type_rsi2,
        actual1_1: fetchedData.actual1_1,
        actual1_2: fetchedData.actual1_2,
        actual2a_1: fetchedData.actual2a_1,
        actual2a_2: fetchedData.actual2a_2,
        actual2b_1: fetchedData.actual2b_1,
        actual2b_2: fetchedData.actual2b_2,
        actual3_1: fetchedData.actual3_2,
        actual3_2: fetchedData.actual3_2,
        actual4a_1: fetchedData.actual4a_1,
        actual4a_2: fetchedData.actual4a_2,
        actual4b_1: fetchedData.actual4b_2,
        actual4b_2: fetchedData.actual4b_2,
        actual5a_1: fetchedData.actual5a_1,
        actual5a_2: fetchedData.actual5a_2,
        actual5b_1: fetchedData.actual5b_1,
        actual5b_2: fetchedData.actual5b_2,
        actual6_1: fetchedData.actual6_1,
        actual6_2: fetchedData.actual6_2,
        actual7_1: fetchedData.actual7_1,
        actual7_2: fetchedData.actual7_2,
        actual8_1: fetchedData.actual8_1,
        actual8_2: fetchedData.actual8_2,
        actual9a_1: fetchedData.actual9a_1,
        actual9a_2: fetchedData.actual9a_2,
        actual9b_1: fetchedData.actual9b_1,
        actual9b_2: fetchedData.actual9b_2,
        actual9c_1: fetchedData.actual9c_1,
        actual9c_2: fetchedData.actual9c_2,
        actual10a_1: fetchedData.actual10a_1,
        actual10a_2: fetchedData.actual10a_2,
        actual10b_1: fetchedData.actual10b_1,
        actual10b_2: fetchedData.actual10b_2,
        actual10c_1: fetchedData.actual10c_1,
        actual10c_2: fetchedData.actual10c_2,
        actual11ip1_1: fetchedData.actual11ip1_1,
        actual11ip1_2: fetchedData.actual11ip1_2,
        actual11op1_1: fetchedData.actual11op1_1,
        actual11op1_2: fetchedData.actual11op1_2,
        actual11ip2_1: fetchedData.actual11ip2_1,
        actual11ip2_2: fetchedData.actual11ip2_2,
        actual11op2_1: fetchedData.actual11op2_1,
        actual11op2_2: fetchedData.actual11op2_2,
        other_remarks: fetchedData.other_remarks,
        name_staff: fetchedData.name_staff,
        sign_staff: fetchedData.sign_staff,
        name_supervisor: fetchedData.name_supervisor,
        sign_supervisor: fetchedData.sign_supervisor,
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
      removed_locono,
      provided_locono,
      make1,
      make_rsi1,
      make_rsi2,
      removed_date,
      rsisrno,
      rsisrno_rsi1,
      rsisrno_rsi2,
      provided_date,
      year,
      year_rsi1,
      year_rsi2,
      date_overhaul,
      type,
      type_rsi1,
      type_rsi2,
      actual1_1,
      actual1_2,
      actual2a_1,
      actual2a_2,
      actual2b_1,
      actual2b_2,
      actual3_1,
      actual3_2,
      actual4a_1,
      actual4a_2,
      actual4b_1,
      actual4b_2,
      actual5a_1,
      actual5a_2,
      actual5b_1,
      actual5b_2,
      actual6_1,
      actual6_2,
      actual7_1,
      actual7_2,
      actual8_1,
      actual8_2,
      actual9a_1,
      actual9a_2,
      actual9b_1,
      actual9b_2,
      actual9c_1,
      actual9c_2,
      actual10a_1,
      actual10a_2,
      actual10b_1,
      actual10b_2,
      actual10c_1,
      actual10c_2,
      actual11ip1_1,
      actual11ip1_2,
      actual11op1_1,
      actual11op1_2,
      actual11ip2_1,
      actual11ip2_2,
      actual11op2_1,
      actual11op2_2,
      other_remarks,
      name_staff,
      sign_staff,
      name_supervisor,
      sign_supervisor,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/RSI`, {
        removed_locono,
        provided_locono,
        make1,
        make_rsi1,
        make_rsi2,
        removed_date,
        rsisrno,
        rsisrno_rsi1,
        rsisrno_rsi2,
        provided_date,
        year,
        year_rsi1,
        year_rsi2,
        date_overhaul,
        type,
        type_rsi1,
        type_rsi2,
        actual1_1,
        actual1_2,
        actual2a_1,
        actual2a_2,
        actual2b_1,
        actual2b_2,
        actual3_1,
        actual3_2,
        actual4a_1,
        actual4a_2,
        actual4b_1,
        actual4b_2,
        actual5a_1,
        actual5a_2,
        actual5b_1,
        actual5b_2,
        actual6_1,
        actual6_2,
        actual7_1,
        actual7_2,
        actual8_1,
        actual8_2,
        actual9a_1,
        actual9a_2,
        actual9b_1,
        actual9b_2,
        actual9c_1,
        actual9c_2,
        actual10a_1,
        actual10a_2,
        actual10b_1,
        actual10b_2,
        actual10c_1,
        actual10c_2,
        actual11ip1_1,
        actual11ip1_2,
        actual11op1_1,
        actual11op1_2,
        actual11ip2_1,
        actual11ip2_2,
        actual11op2_1,
        actual11op2_2,
        other_remarks,
        name_staff,
        sign_staff,
        name_supervisor,
        sign_supervisor,
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
              <br></br>

              <Table
                removed_locono={removed_locono}
                provided_locono={provided_date}
                make1={make1}
                make_rsi1={make_rsi1}
                make_rsi2={make_rsi2}
                removed_date={removed_date}
                rsisrno={rsisrno}
                rsisrno_rsi1={rsisrno_rsi1}
                rsisrno_rsi2={rsisrno_rsi2}
                provided_date={provided_date}
                year={year_rsi1}
                year_rsi1={year_rsi1}
                year_rsi2={year_rsi2}
                date_overhaul={date_overhaul}
                type={type}
                type_rsi1={type_rsi1}
                type_rsi2={type_rsi2}
                actual1_1={actual1_1}
                actual1_2={actual1_2}
                actual2a_1={actual2a_1}
                actual2a_2={actual2a_2}
                actual2b_1={actual2b_1}
                actual2b_2={actual2b_2}
                actual3_1={actual3_1}
                actual3_2={actual3_2}
                actual4a_1={actual4a_1}
                actual4a_2={actual4a_2}
                actual4b_1={actual4b_1}
                actual4b_2={actual4b_2}
                actual5a_1={actual5a_1}
                actual5a_2={actual5a_2}
                actual5b_1={actual5b_1}
                actual5b_2={actual5b_2}
                actual6_1={actual6_1}
                actual6_2={actual6_2}
                actual7_1={actual7_1}
                actual7_2={actual7_2}
                actual8_1={actual8_1}
                actual8_2={actual8_1}
                actual9a_1={actual9a_1}
                actual9a_2={actual9a_2}
                actual9b_1={actual9b_1}
                actual9b_2={actual9b_2}
                actual9c_1={actual9c_1}
                actual9c_2={actual9c_2}
                actual10a_1={actual10a_1}
                actual10a_2={actual10a_2}
                actual10b_1={actual10b_1}
                actual10b_2={actual10b_2}
                actual10c_1={actual10c_1}
                actual10c_2={actual10c_2}
                actual11ip1_1={actual11ip1_1}
                actual11ip1_2={actual11ip1_2}
                actual11op1_1={actual11op1_1}
                actual11op1_2={actual11op1_2}
                actual11ip2_1={actual11ip2_1}
                actual11ip2_2={actual11ip2_2}
                actual11op2_1={actual11op2_1}
                actual11op2_2={actual11op2_2}
                other_remarks={other_remarks}
              />

              <Footer
                name_staff={name_staff}
                sign_staff={sign_staff}
                name_supervisor={name_supervisor}
                sign_supervisor={sign_supervisor}
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
                  <h2>RSI Overhauling Check Sheet</h2>
                </div>
                <div className="loco-dept"></div>
                <div className="flex-container"></div>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <tr>
                      <td>
                        <label htmlFor="Removed Loco No.">
                          Removed Loco No.
                        </label>
                      </td>
                      <td>
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
                            setRemoved_loco(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td></td>
                      <td></td>
                      <td>RSI-1</td>
                      <td>RSI-2</td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Provided Loco No. ">
                          Provided Loco No.
                        </label>
                      </td>
                      <td>
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
                      <td>Make</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make1}
                          onChange={(e) => {
                            setData({ ...data, make1: e.target.value });
                            setMake1(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make_rsi1}
                          onChange={(e) => {
                            setData({ ...data, make_rsi1: e.target.value });
                            setMake_rsi1(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.make_rsi2}
                          onChange={(e) => {
                            setData({ ...data, make_rsi2: e.target.value });
                            setMake_rsi2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Removed Date">Removed Date</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.removed_date}
                          onChange={(e) => {
                            setData({ ...data, removed_date: e.target.value });
                            setRemoved_date(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>RSI Sr. No.</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.rsisrno}
                          onChange={(e) => {
                            setData({ ...data, rsisrno: e.target.value });
                            setRsisrno(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.rsisrno_rsi1}
                          onChange={(e) => {
                            setData({ ...data, rsisrno_rsi1: e.target.value });
                            setRsisrno_rsi1(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.rsisrno_rsi2}
                          onChange={(e) => {
                            setData({ ...data, rsisrno_rsi2: e.target.value });
                            setRsisrno_rsi2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Provided Date">Provided Date</label>
                      </td>
                      <td>
                        <input
                          type="date"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.provided_date}
                          onChange={(e) => {
                            setData({ ...data, provided_date: e.target.value });
                            setProvided_date(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>Mfg Year</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.year}
                          onChange={(e) => {
                            setData({ ...data, year: e.target.value });
                            setYear(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.year_rsi1}
                          onChange={(e) => {
                            setData({ ...data, year_rsi1: e.target.value });
                            setYear_rsi1(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.year_rsi2}
                          onChange={(e) => {
                            setData({ ...data, year_rsi2: e.target.value });
                            setYear_rsi2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="Date of Overhaul">
                          Date of Overhaul
                        </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.date_overhaul}
                          onChange={(e) => {
                            setData({ ...data, date_overhaul: e.target.value });
                            setDate_overhaul(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>Type</td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.type}
                          onChange={(e) => {
                            setData({ ...data, type: e.target.value });
                            setType(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.type_rsi1}
                          onChange={(e) => {
                            setData({ ...data, type_rsi1: e.target.value });
                            setType_rsi1(e.target.value);
                          }}
                        ></input>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter"
                          aria-label=" "
                          value={data.type_rsi2}
                          onChange={(e) => {
                            setData({ ...data, type_rsi2: e.target.value });
                            setType_rsi2(e.target.value);
                          }}
                        ></input>
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Check Point</th>
                        <th>Standard</th>
                        <th colSpan="5">Actual</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          Check visually all components and frame for any damage
                          and deformation
                        </td>
                        <td>No Damage / No deformation / Rectified</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual1_1}
                            onChange={(e) => {
                              setData({ ...data, actual1_1: e.target.value });
                              setActual1_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual1_2}
                            onChange={(e) => {
                              setData({ ...data, actual1_2: e.target.value });
                              setActual1_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="3">2</td>
                        <td>
                          High voltage reverse current test of each diode (As
                          per SMI-67)
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          (a) 700 volts (for NGEF, AGE, CLW make and Ruttansha
                          make RSI)
                        </td>
                        <td>15 Milli Amp (Max.)</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual2a_1}
                            onChange={(e) => {
                              setData({ ...data, actual2a_1: e.target.value });
                              setActual2a_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual2a_2}
                            onChange={(e) => {
                              setData({ ...data, actual2a_2: e.target.value });
                              setActual2a_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>(b) 650 Volts ( for Hind make RSI)</td>
                        <td>30 Milli Amp (Max.)</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual2b_1}
                            onChange={(e) => {
                              setData({ ...data, actual2b_1: e.target.value });
                              setActual2b_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual2b_2}
                            onChange={(e) => {
                              setData({ ...data, actual2b_2: e.target.value });
                              setActual2b_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          Tightening of all diodes with torque wrench at 1.5
                          Kgms
                        </td>
                        <td>Done</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual3_1}
                            onChange={(e) => {
                              setData({ ...data, actual3_1: e.target.value });
                              setActual3_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual3_2}
                            onChange={(e) => {
                              setData({ ...data, actual3_2: e.target.value });
                              setActual3_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="3">4</td>
                        <td>
                          Apply AC 225 + 5 Volt to input and measure equality of
                          distribution voltage across each diode
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>(a) Without load</td>
                        <td>150 - 180 Volts</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual4a_1}
                            onChange={(e) => {
                              setData({ ...data, actual4a_1: e.target.value });
                              setActual4a_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual4a_2}
                            onChange={(e) => {
                              setData({ ...data, actual4a_2: e.target.value });
                              setActual4a_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>(b) With load</td>
                        <td>95 - 100 Volts</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual4b_1}
                            onChange={(e) => {
                              setData({ ...data, actual4b_1: e.target.value });
                              setActual4b_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual4b_2}
                            onChange={(e) => {
                              setData({ ...data, actual4b_2: e.target.value });
                              setActual4b_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="3">5</td>
                        <td>
                          Check the resistance of power fuses by Milli Ohm meter
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>(a) 800 V - 500 A fuse</td>
                        <td>0.1 to 0.3 m Ω</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual5a_1}
                            onChange={(e) => {
                              setData({ ...data, actual5a_1: e.target.value });
                              setActual5a_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual5a_2}
                            onChange={(e) => {
                              setData({ ...data, actual5a_2: e.target.value });
                              setActual5a_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>(b) 1000 V - 1000 A fuse</td>
                        <td>0.0952 m Ω</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual5b_1}
                            onChange={(e) => {
                              setData({ ...data, actual5b_1: e.target.value });
                              setActual5b_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual5b_2}
                            onChange={(e) => {
                              setData({ ...data, actual5b_2: e.target.value });
                              setActual5b_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          Check the operation of signal fuse and micro switch{" "}
                        </td>
                        <td>Operating properly</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual6_1}
                            onChange={(e) => {
                              setData({ ...data, actual6_1: e.target.value });
                              setActual6_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual6_2}
                            onChange={(e) => {
                              setData({ ...data, actual6_2: e.target.value });
                              setActual6_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          Check the working of MVSI and QVSI by keeping HVSI in
                          all positions
                        </td>
                        <td>Proper</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual7_1}
                            onChange={(e) => {
                              setData({ ...data, actual7_1: e.target.value });
                              setActual7_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual7_2}
                            onChange={(e) => {
                              setData({ ...data, actual7_2: e.target.value });
                              setActual7_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          Fit the HVSI 1+2 switch in reverse position (Terminal
                          downward)
                        </td>
                        <td>Fitted</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual8_1}
                            onChange={(e) => {
                              setData({ ...data, actual8_1: e.target.value });
                              setActual8_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual8_2}
                            onChange={(e) => {
                              setData({ ...data, actual8_2: e.target.value });
                              setActual8_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="4">9</td>
                        <td>Measure and record insulation resistance</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          (a) AC & DC surge circuits together to each (frame) by
                          2.5 kV megger
                        </td>
                        <td>10 M Ω (Min.)</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual9a_1}
                            onChange={(e) => {
                              setData({ ...data, actual9a_1: e.target.value });
                              setActual9a_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual9a_2}
                            onChange={(e) => {
                              setData({ ...data, actual9a_2: e.target.value });
                              setActual9a_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (b) 380 V AC circuit terminals meter breaker terminals
                          to frame by 1 kV megger
                        </td>
                        <td>10 M Ω (Min.)</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual9b_1}
                            onChange={(e) => {
                              setData({ ...data, actual9b_1: e.target.value });
                              setActual9b_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual9b_2}
                            onChange={(e) => {
                              setData({ ...data, actual9b_2: e.target.value });
                              setActual9b_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (c) Control 110 V DC circuit terminal of air pressure
                          relay Pacco Switch micro switch to frame, by 1 kV
                          megger
                        </td>
                        <td>10 M Ω (Min.)</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual9c_1}
                            onChange={(e) => {
                              setData({ ...data, actual9c_1: e.target.value });
                              setActual9c_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual9c_2}
                            onChange={(e) => {
                              setData({ ...data, actual9c_2: e.target.value });
                              setActual9c_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="4">10</td>
                        <td>HV Test to be done</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          (a) AC & DC surge circuits A & DC bus bars to frame
                        </td>
                        <td>
                          5 KV for 1 Min.<br> </br>(withstand)
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual10a_1}
                            onChange={(e) => {
                              setData({ ...data, actual10a_1: e.target.value });
                              setActual10a_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual10a_2}
                            onChange={(e) => {
                              setData({ ...data, actual10a_2: e.target.value });
                              setActual10a_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (b) 380 V AC circuit terminals Pacco switch terminal
                          to earth (frame)
                        </td>
                        <td>
                          3 KV for 1 Min.<br></br> (withstand)
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual10b_1}
                            onChange={(e) => {
                              setData({ ...data, actual10b_1: e.target.value });
                              setActual10b_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual10b_2}
                            onChange={(e) => {
                              setData({ ...data, actual10b_2: e.target.value });
                              setActual10b_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          (c) Control 110 V DC Ckt. terminal of Air pressure
                          relay Pacco switch micro switch to frame.
                        </td>
                        <td>
                          1.5 KV for 1 Min. <br></br>(withstand)
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual10c_1}
                            onChange={(e) => {
                              setData({ ...data, actual10c_1: e.target.value });
                              setActual10c_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual10c_2}
                            onChange={(e) => {
                              setData({ ...data, actual10c_2: e.target.value });
                              setActual10c_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan="5">11</td>
                        <td>
                          Apply single phase AC supply at input terminal and
                          output DC voltage to be checked
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>(without load) IP</td>
                        <td>190 - 240 V AC</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11ip1_1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11ip1_1: e.target.value,
                              });
                              setActual11ip1_2(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11ip1_2}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11ip1_2: e.target.value,
                              });
                              setActual11ip1_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>OP</td>
                        <td> 280 - 350 V D C</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11op1_1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11op1_1: e.target.value,
                              });
                              setActual11op1_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11op1_2}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11op1_2: e.target.value,
                              });
                              setActual11op1_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>IP</td>
                        <td>190 - 240 V AC</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11ip2_1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11ip2_1: e.target.value,
                              });
                              setActual11ip2_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11ip2_2}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11ip2_2: e.target.value,
                              });
                              setActual11ip2_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>OP</td>
                        <td>170 - 235 V DC</td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11op2_1}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11op2_1: e.target.value,
                              });
                              setActual11ip2_1(e.target.value);
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.actual11op2_2}
                            onChange={(e) => {
                              setData({
                                ...data,
                                actual11op2_2: e.target.value,
                              });
                              setActual11op2_2(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Any other remarks</td>
                        <td colSpan="5">
                          <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Enter"
                            aria-label=" "
                            value={data.other_remarks}
                            onChange={(e) => {
                              setData({
                                ...data,
                                other_remarks: e.target.value,
                              });
                              setOther_remarks(e.target.value);
                            }}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="signature">
                  <label htmlFor="Name & Sign of staff">
                    Name & Sign of staff{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.name_staff}
                    onChange={(e) => {
                      setData({ ...data, name_staff: e.target.value });
                      setName_staff(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.sign_staff}
                    onChange={(e) => {
                      setData({ ...data, sign_staff: e.target.value });
                      setSign_staff(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="Name & Sign of Supervisor">
                    Name & Sign of Supervisor
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.name_supervisor}
                    onChange={(e) => {
                      setData({ ...data, name_supervisor: e.target.value });
                      setName_supervisor(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter"
                    aria-label=" "
                    value={data.sign_supervisor}
                    onChange={(e) => {
                      setData({ ...data, sign_supervisor: e.target.value });
                      setSign_supervisor(e.target.value);
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
              </form>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default RevertHistoryInputFieldRSI;
