import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateFLASHER/details";
import Table from "../TemplateFLASHER/table";
import Footer from "../TemplateFLASHER/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../../config";
import logo from "../../../../assets/IRLogo.png";
import { getUsername } from "../../../../helper/helper";

function AppELEXFLASHER() {
  const [showForm, setShowForm] = useState(false);
  const [date_overhaul, setDate_overhaul] = useState("");
  const [make, setMake] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [removed_locono, setRemoved_locono] = useState("");
  const [fitted_locono, setFitted_locono] = useState("");
  const [schedule, setSchedule] = useState("");
  const [actual_1, setActual_1] = useState("");
  const [actual_2, setActual_2] = useState("");
  const [actual_3, setActual_3] = useState("");
  const [actual_4, setActual_4] = useState("");
  const [actual_5, setActual_5] = useState("");
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
    date_overhaul: "",
    make: "",
    equipmentNumber: "",
    removed_locono: "",
    fitted_locono: "",
    schedule: "",
    actual_1: "",
    actual_2: "",
    actual_3: "",
    actual_4: "",
    actual_5: "",
    remark: "",
    name_staff: "",
    name_supervisor: "",
    sign_supervisor: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      date_overhaul,
      make,
      equipmentNumber,
      removed_locono,
      fitted_locono,
      schedule,
      actual_1,
      actual_2,
      actual_3,
      actual_4,
      actual_5,
      remark,
      name_staff,
      name_supervisor,
      sign_supervisor,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/submitForm/flasher`, {
        sign: sign,
        uid,

        date_overhaul,
        make,
        equipmentNumber,
        removed_locono,
        fitted_locono,
        schedule,
        actual_1,
        actual_2,
        actual_3,
        actual_4,
        actual_5,
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
                date_overhaul={date_overhaul}
                make={make}
                equipmentNumber={equipmentNumber}
                removed_locono={removed_locono}
                fitted_locono={fitted_locono}
                schedule={schedule}
              />

              <br></br>

              <Table
                actual_1={actual_1}
                actual_2={actual_2}
                actual_3={actual_3}
                actual_4={actual_4}
                actual_5={actual_5}
                remark={remark}
              />

              <Footer uid={uid} sign={sign} />

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
              <title>Elex Flasher Light</title>
              <link
                href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
                rel="stylesheet"
              ></link>
            </head>
            <body className="bg-gray-100">
              <section className="container mx-auto py-8">
                <form className="bg-white p-6 rounded-lg shadow-md">
                  <div className="container">
                    <header className="text-center mb-6 border border-gray-400 rounded-lg p-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
                      <div className="mx-auto mb-4 lg:mb-0">
                        <h1 className="text-xl font-bold">
                          Electric Loco Shed , Bhusawal
                          <br />
                          Check-sheet for Flasher Light Control Box / LED
                        </h1>
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
                              Date of Overhaul
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="date"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                aria-label="date_overhaul"
                                value={data.date_overhaul}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    date_overhaul: e.target.value,
                                  });
                                  setDate_overhaul(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Make
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="Make"
                                value={data.make}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    make: e.target.value,
                                  });
                                  setMake(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Sr No of FL BOX / LED
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="srnoflbox"
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
                              Removed from Loco No
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="removed-loco"
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
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Fitted on Loco No
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="fitted_loco"
                                value={data.fitted_locono}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    fitted_locono: e.target.value,
                                  });
                                  setFitted_locono(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Schedule
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="schedule"
                                value={data.schedule}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    schedule: e.target.value,
                                  });
                                  setSchedule(e.target.value);
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
                              Cleaning PCB with anti static brush
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Cleaned
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="actual_1"
                                value={data.actual_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_1: e.target.value,
                                  });
                                  setActual_1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              2
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check connection tightness
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="actual_2"
                                value={data.actual_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_2: e.target.value,
                                  });
                                  setActual_2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              3
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check Flasher light flashing rate/minute
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              35 – 45 Flashes
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="acyual_3"
                                value={data.actual_3}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_3: e.target.value,
                                  });
                                  setActual_3(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              4
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check for endurance testing for 2 Hrs.{" "}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Done
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="actual_4"
                                value={data.actual_4}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_4: e.target.value,
                                  });
                                  setActual_4(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              5
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Apply RTV silicon to avoid ingress for dust.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Apply
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                                placeholder="Enter"
                                aria-label="actual_5"
                                value={data.actual_5}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    actual_5: e.target.value,
                                  });
                                  setActual_5(e.target.value);
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
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
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

export default AppELEXFLASHER;
