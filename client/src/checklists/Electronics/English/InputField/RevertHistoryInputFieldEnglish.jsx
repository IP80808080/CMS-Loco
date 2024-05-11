import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateEnglish/details";
import Table from "../TemplateEnglish/table";
import Footer from "../TemplateEnglish/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";
import logo from "../../../../assets/IRLogo.png";

function RevertHistoryInputFieldElexEnglish() {
  const [showForm, setShowForm] = useState(false);
  const [date_removal, setDate_removal] = useState("");
  const [removed_locono, setRemoval_locono] = useState("");
  const [make, setMake] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [overhaul_date, setOverhaul_date] = useState("");
  const [mfg_relay, setMfg_relay] = useState("");
  const [type_relay, setType_relay] = useState("");
  const [std_value1, setStd_value1] = useState("");
  const [actual_value1, setActual_value1] = useState("");
  const [actual_value2, setActual_value2] = useState("");
  const [actual_value2_1, setActual_value2_1] = useState("");
  const [actual_value3, setActual_value3] = useState("");
  const [actual_value4, setActual_value4] = useState("");
  const [actual_value4_1, setActual_value4_1] = useState("");
  const [actual_value5, setActual_value5] = useState("");
  const [actual_value6, setActual_value6] = useState("");
  const [actual_value6_1, setActual_value6_1] = useState("");
  const [std_value7, setStd_value7] = useState("");
  const [actual_value7, setActual_value7] = useState("");
  const [remark, setRemark] = useState("");
  const [name_staff, setName_staff] = useState("");
  const [name_supervisor, setName_supervisor] = useState("");
  const [sign_supervisor, setSign_supervisor] = useState("");

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
    date_removal: "",
    removed_locono: "",
    make: "",
    equipmentNumber: "",
    overhaul_date: "",
    mfg_relay: "",
    type_relay: "",
    std_value1: "",
    actual_value1: "",
    actual_value2: "",
    actual_value2_1: "",
    actual_value3: "",
    actual_value4: "",
    actual_value4_1: "",
    actual_value5: "",
    actual_value6: "",
    actual_value6_1: "",
    std_value7: "",
    actual_value7: "",
    remark: "",
    name_staff: "",
    name_supervisor: "",
    sign_supervisor: "",
  });
  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(
        `${BASE_URL}/api/revert/E-English/${uid}`
      );
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        uid: fetchedData.uid,

        equipmentNumber: fetchedData.equipmentNumber,
        date_removal: fetchedData.date_removal,
        removed_locono: fetchedData.removed_locono,
        make: fetchedData.make,
        overhaul_date: fetchedData.overhaul_date,
        mfg_relay: fetchedData.mfg_relay,
        type_relay: fetchedData.type_relay,
        std_value1: fetchedData.std_value1,
        actual_value1: fetchedData.actual_value2_1,
        actual_value2: fetchedData.actual_value2,
        actual_value2_1: fetchedData.actual_value2_1,
        actual_value3: fetchedData.actual_value3,
        actual_value4: fetchedData.actual_value4,
        actual_value4_1: fetchedData.actual_value4_1,
        actual_value5: fetchedData.actual_value5,
        actual_value6: fetchedData.actual_value6,
        actual_value6_1: fetchedData.actual_value7,
        std_value7: fetchedData.std_value7,
        actual_value7: fetchedData.actual_value7,
        remark: fetchedData.remark,
        name_staff: fetchedData.name_staff,
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
      date_removal,
      removed_locono,
      make,
      equipmentNumber,
      overhaul_date,
      mfg_relay,
      type_relay,
      std_value1,
      actual_value1,
      actual_value2,
      actual_value2_1,
      actual_value3,
      actual_value4,
      actual_value4_1,
      actual_value5,
      actual_value6,
      actual_value6_1,
      std_value7,
      actual_value7,
      remark,
      name_staff,
      name_supervisor,
      sign_supervisor,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/English`, {
        sign: sign,
        uid,

        date_removal,
        removed_locono,
        make,
        equipmentNumber,
        overhaul_date,
        mfg_relay,
        type_relay,
        std_value1,
        actual_value1,
        actual_value2,
        actual_value2_1,
        actual_value3,
        actual_value4,
        actual_value4_1,
        actual_value5,
        actual_value6,
        actual_value6_1,
        std_value7,
        actual_value7,
        remark,
        name_staff,
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
              <Details
                date_removal={date_removal}
                removed_locono={removed_locono}
                make={make}
                equipmentNumber={equipmentNumber}
                overhaul_date={overhaul_date}
                mfg_relay={mfg_relay}
                type_relay={type_relay}
              />

              <br></br>

              <Table
                std_value1={std_value1}
                actual_value1={actual_value1}
                actual_value2={actual_value2}
                actual_value2_1={actual_value2_1}
                actual_value3={actual_value3}
                actual_value4={actual_value4}
                actual_value4_1={actual_value4_1}
                actual_value5={actual_value5}
                actual_value6={actual_value6}
                actual_value6_1={actual_value6_1}
                std_value7={std_value7}
                actual_value7={actual_value7}
                remark={remark}
              />

              <Footer
                name_staff={name_staff}
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
            <meta charset="UTF-8"></meta>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            ></meta>
            <title>Elex English Electric Relay</title>
            <link
              href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
              rel="stylesheet"
            ></link>
            <body className="bg-gray-100">
              <section className="container mx-auto py-8">
                <form className="bg-white p-6 rounded-lg shadow-md">
                  <div className="container">
                    <header className="text-center mb-6 border border-gray-400 rounded-lg p-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                      <div className="mx-auto mb-4 lg:mb-0">
                        <h1 className="text-xl font-bold">
                          Electric Loco Shed , Bhusawal
                        </h1>
                        <h2 className="text-lg font-semibold">
                          Check-sheet for English Electric Relay <br />
                          (Q51,QV60,QV61,QV62,QV63,QV64, QOLSOL)
                        </h2>
                      </div>
                      <img
                        src={logo}
                        alt="IR Logo"
                        className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
                      />
                    </header>

                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white shadow-md border-collapse">
                        <tbody>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Date of removal
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="date_removal"
                                type="date"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                aria-label=""
                                value={data.date_removal}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    date_removal: e.target.value,
                                  });
                                  setDate_removal(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Removed from Loco
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="removed_loco"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.removed_locono}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    removed_locono: e.target.value,
                                  });
                                  setRemoval_locono(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Make
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="Make"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.make}
                                onChange={(e) => {
                                  setData({ ...data, make: e.target.value });
                                  setMake(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Sr No of Relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="equipmentNumber"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.equipmentNumber}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    equipmentNumber: e.target.value,
                                  });
                                  setEquipmentNumber(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Last Overhaul Dt.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="overhaul_date"
                                type="date" //DATE
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                aria-label=""
                                value={data.overhaul_date}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    overhaul_date: e.target.value,
                                  });
                                  setOverhaul_date(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              MFG of Relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="mfg_relay"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.mfg_relay}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    mfg_relay: e.target.value,
                                  });
                                  setMfg_relay(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Type of Relay
                            </td>
                            <td
                              className="border border-gray-400 px-4 py-2"
                              colSpan="5"
                            >
                              <input
                                id="type_relay"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.type_relay}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    type_relay: e.target.value,
                                  });
                                  setType_relay(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <br className="mt-5" />

                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white shadow-md border-collapse">
                        <thead>
                          <tr>
                            <th className="border border-gray-400 px-4 py-2">
                              S. No{" "}
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Description{" "}
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Standard Value{" "}
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Actual Value
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              1
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Reason for removal of Loco :-
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="std_value1"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.std_value1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    std_value1: e.target.value,
                                  });
                                  setStd_value1(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value1"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value1: e.target.value,
                                  });
                                  setActual_value1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              2
                            </td>
                            <td
                              className="border border-gray-400 px-4 py-2 font-bold"
                              colSpan="4"
                            >
                              Coil resistance at 200C
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              For EE relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              990 – 1210 Ω
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              {" "}
                              <input
                                id="actual_value2"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value2: e.target.value,
                                  });
                                  setActual_value2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              For Woama relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              3.61 – 3.99 Ω
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value2_1"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value2_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value2_1: e.target.value,
                                  });
                                  setActual_value2_1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              3
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Min. pickup Voltage
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              62 – 68 VDC
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value3"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value3: e.target.value,
                                  });
                                  setActual_value3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              4
                            </td>
                            <td
                              className="border border-gray-400 px-4 py-2 font-bold"
                              colSpan="4"
                            >
                              Contact Gap
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              For EE relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              {" "}
                              1.7 – 2.0 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value4"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value4: e.target.value,
                                  });
                                  setActual_value4(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              For Woama relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1.8 – 2.2 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              {" "}
                              <input
                                id="actual_value4_1"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value4_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value4_1: e.target.value,
                                  });
                                  setActual_value4_1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              5
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Series Economy Resistance For EE relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1.235 – 1.365 K Ω
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value5"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value5: e.target.value,
                                  });
                                  setActual_value5(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              6
                            </td>
                            <td
                              className="border border-gray-400 px-4 py-2 font-bold"
                              colSpan="4"
                            >
                              Contact Pressure
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              For EE relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1.235 – 1.365 K Ω
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value6"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value6}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value6: e.target.value,
                                  });
                                  setActual_value6(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              For Woama relay
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              20 – 25 gms
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value6_1"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value6_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value6_1: e.target.value,
                                  });
                                  setActual_value6_1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              7
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Q Factor
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="std_value7"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.std_value7}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    std_value7: e.target.value,
                                  });
                                  setStd_value7(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="actual_value7"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.actual_value7}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_value7: e.target.value,
                                  });
                                  setActual_value7(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border border-gray-400 px-4 py-2 font-bold"
                              colSpan="4"
                            >
                              Remark: -
                              <input
                                id="Remark"
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label=""
                                value={data.remark}
                                onChange={(e) => {
                                  setData({ ...data, remark: e.target.value });
                                  setRemark(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <br className="mt-5" />
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
              </section>
            </body>
          </>
        )}
      </main>
    </>
  );
}

export default RevertHistoryInputFieldElexEnglish;
