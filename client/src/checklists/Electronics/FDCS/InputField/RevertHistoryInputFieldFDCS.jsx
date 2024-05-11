import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateFDCS/details";
import Table from "../TemplateFDCS/table";
import Footer from "../TemplateFDCS/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";
import logo from "../../../../assets/IRLogo.png";

function RevertHistoryInputFieldELEXFDCS() {
  const [showForm, setShowForm] = useState(false);
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [aoh, setAoh] = useState("");
  const [ioh, setIoh] = useState("");
  const [date, setDate] = useState("");
  const [actual, setActual] = useState("");
  const [actual_a1, setActual_a1] = useState("");
  const [actual_a2, setActual_a2] = useState("");
  const [actual_a3, setActual_a3] = useState("");
  const [actual_a4, setActual_a4] = useState("");
  const [actual_a5, setActual_a5] = useState("");
  const [actual_a6, setActual_a6] = useState("");
  const [actual_a7, setActual_a7] = useState("");
  const [actual_b1, setActual_b1] = useState("");
  const [actual_b2, setActual_b2] = useState("");
  const [actual_b3, setActual_b3] = useState("");
  const [actual_b4, setActual_b4] = useState("");
  const [actual_b5, setActual_b5] = useState("");
  const [actual_c1, setActual_c1] = useState("");
  const [actual_c2, setActual_c2] = useState("");
  const [actual_c3, setActual_c3] = useState("");
  const [actual_d1, setActual_d1] = useState("");
  const [actual_d2, setActual_d2] = useState("");
  const [actual_d3, setActual_d3] = useState("");
  const [actual_e1, setActual_e1] = useState("");
  const [actual_e2, setActual_e2] = useState("");
  const [actual_e3, setActual_e3] = useState("");
  const [actual_e4, setActual_e4] = useState("");
  const [actual_e5, setActual_e5] = useState("");
  const [actual_e6, setActual_e6] = useState("");
  const [remark, setRemark] = useState("");
  const [sign_staff, setSign_staff] = useState("");
  const [sign_supervisor, setSign_supervisor] = useState("");
  const [name_staff, setName_staff] = useState("");
  const [name_supervisor, setName_supervisor] = useState("");

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
    equipmentNumber: "",
    aoh: "",
    ioh: "",
    date: "",
    actual: "",
    actual_a1: "",
    actual_a2: "",
    actual_a3: "",
    actual_a4: "",
    actual_a5: "",
    actual_a6: "",
    actual_a7: "",
    actual_b1: "",
    actual_b2: "",
    actual_b3: "",
    actual_b4: "",
    actual_b5: "",
    actual_c1: "",
    actual_c2: "",
    actual_c3: "",
    actual_d1: "",
    actual_d2: "",
    actual_d3: "",
    actual_e1: "",
    actual_e2: "",
    actual_e3: "",
    actual_e4: "",
    actual_e5: "",
    actual_e6: "",
    remark: "",
    sign_staff: "",
    sign_supervisor: "",
    name_staff: "",
    name_supervisor: "",
  });
  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(`${BASE_URL}/api/revert/E-FDCS/${uid}`);
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        uid: fetchedData.uid,

        equipmentNumber: fetchedData.equipmentNumber,
        aoh: fetchedData.aoh,
        ioh: fetchedData.ioh,
        date: fetchedData.date,
        actual: fetchedData.actual,
        actual_a1: fetchedData.actual_a1,
        actual_a2: fetchedData.actual_a2,
        actual_a3: fetchedData.actual_a3,
        actual_a4: fetchedData.actual_a4,
        actual_a5: fetchedData.actual_a5,
        actual_a6: fetchedData.actual_a6,
        actual_a7: fetchedData.actual_a7,
        actual_b1: fetchedData.actual_b1,
        actual_b2: fetchedData.actual_b2,
        actual_b3: fetchedData.actual_b3,
        actual_b4: fetchedData.actual_b4,
        actual_b5: fetchedData.actual_b5,
        actual_c1: fetchedData.actual_c1,
        actual_c2: fetchedData.actual_c2,
        actual_c3: fetchedData.actual_c3,
        actual_d1: fetchedData.actual_d1,
        actual_d2: fetchedData.actual_d2,
        actual_d3: fetchedData.actual_d3,
        actual_e1: fetchedData.actual_e1,
        actual_e2: fetchedData.actual_e2,
        actual_e3: fetchedData.actual_e3,
        actual_e4: fetchedData.actual_e4,
        actual_e5: fetchedData.actual_e5,
        actual_e6: fetchedData.actual_e6,
        remark: fetchedData.remark,
        sign_staff: fetchedData.sign_staff,
        sign_supervisor: fetchedData.sign_supervisor,
        name_staff: fetchedData.name_staff,
        name_supervisor: fetchedData.name_supervisor,
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
      equipmentNumber,
      aoh,
      ioh,
      date,
      actual,
      actual_a1,
      actual_a2,
      actual_a3,
      actual_a4,
      actual_a5,
      actual_a6,
      actual_a7,
      actual_b1,
      actual_b2,
      actual_b3,
      actual_b4,
      actual_b5,
      actual_c1,
      actual_c2,
      actual_c3,
      actual_d1,
      actual_d2,
      actual_d3,
      actual_e1,
      actual_e2,
      actual_e3,
      actual_e4,
      actual_e5,
      actual_e6,
      remark,
      sign_staff,
      sign_supervisor,
      name_staff,
      name_supervisor,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/FDCS`, {
        sign: sign,
        uid,

        equipmentNumber,
        aoh,
        ioh,
        date,
        actual,
        actual_a1,
        actual_a2,
        actual_a3,
        actual_a4,
        actual_a5,
        actual_a6,
        actual_a7,
        actual_b1,
        actual_b2,
        actual_b3,
        actual_b4,
        actual_b5,
        actual_c1,
        actual_c2,
        actual_c3,
        actual_d1,
        actual_d2,
        actual_d3,
        actual_e1,
        actual_e2,
        actual_e3,
        actual_e4,
        actual_e5,
        actual_e6,
        remark,
        sign_staff,
        sign_supervisor,
        name_staff,
        name_supervisor,
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
                equipmentNumber={equipmentNumber}
                aoh={aoh}
                ioh={ioh}
                date={date}
              />

              <br></br>

              <Table
                actual={actual}
                actual_a1={actual_a1}
                actual_a2={actual_a2}
                actual_a3={actual_a3}
                actual_a4={actual_a4}
                actual_a5={actual_a5}
                actual_a6={actual_a6}
                actual_a7={actual_a7}
                actual_b1={actual_b1}
                actual_b2={actual_b2}
                actual_b3={actual_b3}
                actual_b4={actual_b4}
                actual_b5={actual_b5}
                actual_c1={actual_c1}
                actual_c2={actual_c2}
                actual_c3={actual_c3}
                actual_d1={actual_d1}
                actual_d2={actual_d2}
                actual_d3={actual_d3}
                actual_e1={actual_e1}
                actual_e2={actual_e2}
                actual_e3={actual_e3}
                actual_e4={actual_e4}
                actual_e5={actual_e5}
                actual_e6={actual_e6}
                remark={remark}
              />

              <Footer sign={sign} uid={uid} />

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
              <meta charset="UTF-8"></meta>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              ></meta>
              <title>ELEX FDCS</title>
              <link
                href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
                rel="stylesheet"
              ></link>
            </head>
            <body className="bg-gray-100">
              <section className="container mx-auto py-8">
                <form className="bg-white p-6 rounded-lg shadow-md">
                  <div className="container">
                    <div className="border border-gray-400 p-4 flex justify-between items-center">
                      <h1 className="text-xl font-bold flex-grow text-center">
                        Electric Loco Shed, Bhusawal<br></br>Check sheet for
                        FDCS Maintenance
                      </h1>
                      <img src={logo} alt="IR Logo" className="w-20 h-20" />
                    </div>
                    <br className="mt-5" />

                    <div className="flex mb-6">
                      <div className="mr-4">
                        <label
                          htmlFor="Loco No."
                          className="block text-sm font-medium text-gray-700"
                        >
                          Loco No.
                          <input
                            type="text"
                            className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                            placeholder="Enter"
                            aria-label="loco_no"
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
                      </div>

                      <div className="mr-4">
                        <label
                          htmlFor="Schedule – AOH/IOH"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Schedule – AOH
                          <input
                            type="checkbox"
                            className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                            placeholder="Enter"
                            aria-label="AOH "
                            value={data.aoh}
                            onChange={(e) => {
                              setData({
                                ...data,
                                aoh: e.target.value,
                              });
                              setAoh(e.target.value);
                            }}
                          ></input>
                          /IOH
                          <input
                            type="checkbox"
                            className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                            placeholder="Enter"
                            aria-label=" IOH"
                            value={data.ioh}
                            onChange={(e) => {
                              setData({
                                ...data,
                                ioh: e.target.value,
                              });
                              setIoh(e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>

                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date -
                          <input
                            type="date"
                            className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                            aria-label="date"
                            value={data.date}
                            onChange={(e) => {
                              setData({
                                ...data,
                                date: e.target.value,
                              });
                              setDate(e.target.value);
                            }}
                          ></input>
                        </label>
                      </div>
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
                              Points for checking{" "}
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
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Download fault data and record major loggings.
                              Check and record the fault logging history from
                              downloaded data and analyze.
                              <br />
                              1.
                              <br />
                              2.
                              <br />
                              3.
                              <br />
                              4.
                              <br />
                              5.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              There should be no fault message.
                              <br />
                              Issue booking if any fault is noticed
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="Actual "
                                value={data.actual}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual: e.target.value,
                                  });
                                  setActual(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              A
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Main Unit
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              {" "}
                              Check the proper tightness of mounting bolts of
                              the main control unit.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label=" actla1"
                                value={data.actual_a1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a1: e.target.value,
                                  });
                                  setActual_a1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper connectivity of the earthing
                              terminal of the main control unit and its
                              tightness.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actla2 "
                                value={data.actual_a2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a2: e.target.value,
                                  });
                                  setActual_a2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness/locking of Bayonet
                              connectors at control unit.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actla3 "
                                value={data.actual_a3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a3: e.target.value,
                                  });
                                  setActual_a3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness of all Facia fixing
                              thumbscrew of the cards.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actla4 "
                                value={data.actual_a4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a4: e.target.value,
                                  });
                                  setActual_a4(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check and ensure the dust free environment in the
                              control unit. Check the condition of the rubber
                              gasket.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Dust free
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actla5 "
                                value={data.actual_a5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a5: e.target.value,
                                  });
                                  setActual_a5(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Clean the Bayonet connectors using appropriate
                              connect cleaner.{" "}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Clean
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actla6 "
                                value={data.actual_a6}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a6: e.target.value,
                                  });
                                  setActual_a6(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Remove all cards and main unit cabinet to be clean
                              by vacuum cleaner.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Clean
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actla7"
                                value={data.actual_a7}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_a7: e.target.value,
                                  });
                                  setActual_a7(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              B
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Display Unit
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the physical condition of unit for any
                              breakage and condition of indication panel and
                              keypad
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              {" "}
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlb1 "
                                value={data.actual_b1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_b1: e.target.value,
                                  });
                                  setActual_b1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness of mounting bolts of
                              Display unit.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlb2 "
                                value={data.actual_b2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_b2: e.target.value,
                                  });
                                  setActual_b2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness/locking of bayonet
                              connectors at Display unit
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlb3 "
                                value={data.actual_b3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_b3: e.target.value,
                                  });
                                  setActual_b3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check display units in both cabs and its operation
                              through menu driven keys.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Checked
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlb4"
                                value={data.actual_b4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_b4: e.target.value,
                                  });
                                  setActual_b4(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check and set the proper date and time
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Set
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlb5 "
                                value={data.actual_b5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_b5: e.target.value,
                                  });
                                  setActual_b5(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              C
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Signal conditioning unit (SCU)
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness of mounting bolts of
                              SCU box.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlc1 "
                                value={data.actual_c1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_c1: e.target.value,
                                  });
                                  setActual_c1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check connection tightness.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="zctlc2 "
                                value={data.actual_c2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_c2: e.target.value,
                                  });
                                  setActual_c2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness/locking of Bayonet
                              connectors at signal conditioning unit.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actlc3"
                                value={data.actual_c3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_c3: e.target.value,
                                  });
                                  setActual_c3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              D
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Current sensing unit/ ISCU
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness of mounting bolts of
                              ISCU box.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actld1"
                                value={data.actual_d1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_d1: e.target.value,
                                  });
                                  setActual_d1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check all connection tightness.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actld2"
                                value={data.actual_d2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_d2: e.target.value,
                                  });
                                  setActual_d2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness/locking of bayonet
                              connectors at TM current sensing unit
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actld3"
                                value={data.actual_d3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_d3: e.target.value,
                                  });
                                  setActual_d3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              E
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              General
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the proper tightness of control cable
                              termination on BD Panel.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Tight
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actle1"
                                value={data.actual_e1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_e1: e.target.value,
                                  });
                                  setActual_e1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Before functional testing Check negative bonding
                              as per prescribed schedule of loco.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Checked
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actle2"
                                value={data.actual_e2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_e2: e.target.value,
                                  });
                                  setActual_e2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Before functional testing check all LED status on
                              cards for any abnormality.{" "}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Checked
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actle3"
                                value={data.actual_e3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_e3: e.target.value,
                                  });
                                  setActual_e3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Ensure all RDSO modifications are completed.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Ensure.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actle4"
                                value={data.actual_e4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_e4: e.target.value,
                                  });
                                  setActual_e4(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check that equipment earthing is intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Intact
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actle5"
                                value={data.actual_e5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_e5: e.target.value,
                                  });
                                  setActual_e5(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check proper Cleating of cables and provide
                              grommet if necessary.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              ssdZee34455
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="actle6"
                                value={data.actual_e6}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_e6: e.target.value,
                                  });
                                  setActual_e6(e.target.value);
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
                                type="text"
                                className="form-control text-center border border-gray-300 rounded-md p-2 custom-input placeholder-center"
                                placeholder="Enter"
                                aria-label="Remark"
                                value={data.remark}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    remark: e.target.value,
                                  });
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

export default RevertHistoryInputFieldELEXFDCS;
