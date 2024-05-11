import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateQD/details";
import Table from "../TemplateQD/table";
import Footer from "../TemplateQD/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { BASE_URL } from "../../../../config";
import logo from "../../../../assets/IRLogo.png";
import { getUsername } from "../../../../helper/helper";

function AppELEXQD() {
  const [showForm, setShowForm] = useState(false);
  const [date_oh, setDate_oh] = useState("");
  const [make, setMake] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [removed_locono, setRemoved_locono] = useState("");
  const [fitted_locono, setFitted_locono] = useState("");
  const [schedule, setSchedule] = useState("");
  const [measured_value1, setMeasured_value1] = useState("");
  const [measured_value2, setMeasured_value2] = useState("");
  const [measured_value3, setMeasured_value3] = useState("");
  const [measured_value4, setMeasured_value4] = useState("");
  const [measured_value5, setMeasured_value5] = useState("");
  const [measured_value6, setMeasured_value6] = useState("");
  const [measured_value7, setMeasured_value7] = useState("");
  const [measured_value8, setMeasured_value8] = useState("");
  const [measured_value9, setMeasured_value9] = useState("");
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
    date_oh: "",
    make: "",
    equipmentNumber: "",
    removed_locono: "",
    fitted_locono: "",
    schedule: "",
    measured_value1: "",
    measured_value2: "",
    measured_value3: "",
    measured_value4: "",
    measured_value5: "",
    measured_value6: "",
    measured_value7: "",
    measured_value8: "",
    measured_value9: "",
    remark: "",
    name_staff: "",
    name_supervisor: "",
    sign_supervisor: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      date_oh,
      make,
      equipmentNumber,
      removed_locono,
      fitted_locono,
      schedule,
      measured_value1,
      measured_value2,
      measured_value3,
      measured_value4,
      measured_value5,
      measured_value6,
      measured_value7,
      measured_value8,
      measured_value9,
      remark,
      name_staff,
      name_supervisor,
      sign_supervisor,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/submitForm/QD`, {
        sign: sign,
        uid,

        date_oh,
        make,
        equipmentNumber,
        removed_locono,
        fitted_locono,
        schedule,
        measured_value1,
        measured_value2,
        measured_value3,
        measured_value4,
        measured_value5,
        measured_value6,
        measured_value7,
        measured_value8,
        measured_value9,
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
                date_oh={date_oh}
                make={make}
                equipmentNumber={equipmentNumber}
                removed_locono={removed_locono}
                fitted_locono={fitted_locono}
                schedule={schedule}
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
              <title>Elex QD</title>
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
                          Check sheet for QD Relay
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
                              Date of O/H:-
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="date"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                aria-label="date_oh"
                                value={data.date_oh}
                                onChange={(e) => {
                                  setData({ ...data, date_oh: e.target.value });
                                  setDate_oh(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Make: -
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="Make"
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
                              Sr No of Relay:-
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="srno"
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
                              Removed from loco: -
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="removed_loco"
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
                              Fitted on Loco:-
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="fitted_loco"
                                value={data.setFitted_locono}
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
                              Schedule:-
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
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
                              Measured value
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              1
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check IR value with 1 KV Megger
                              <br />
                              (a)Coil terminal to Fix arm
                              <br />
                              (b)Contacts to Fix Arm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Above
                              <br />
                              10 M ohm
                              <br />
                              10 M ohm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value1"
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
                            <td className="border border-gray-400 px-4 py-2">
                              2
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Pick up value <br />
                              WAP4
                              <br />
                              WAG5{" "}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <br />
                              148 – 152 Amp
                              <br />
                              158 – 162 Amp
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value2"
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
                            <td className="border border-gray-400 px-4 py-2">
                              3
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Drop out value <br />
                              WAP4
                              <br />
                              WAG5
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <br />
                              80-105 Amp
                              <br />
                              120 – 132 Amp
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value3"
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
                            <td className="border border-gray-400 px-4 py-2">
                              4
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the condition of contact and clean{" "}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Good and clean
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value4"
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
                            <td className="border border-gray-400 px-4 py-2">
                              5
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the Aux. Contact continuity after pick up
                              the relay.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Continuity ok
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value5"
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
                            <td className="border border-gray-400 px-4 py-2">
                              6
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the contact gap.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              0.5 – 3.5 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value6"
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
                            <td className="border border-gray-400 px-4 py-2">
                              7
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the contact pressure.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              {" "}
                              50 – 150 grams.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value7"
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
                            <td className="border border-gray-400 px-4 py-2">
                              8
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the terminal plate and terminal separator
                              for any crack/ damage.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              No Crack. / Damage
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value8"
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
                            <td className="border border-gray-400 px-4 py-2">
                              9
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Replace if codal life completed
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Replace or not replace.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="measured_value9"
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
                            <td
                              className="border border-gray-400 px-4 py-2 font-bold"
                              colSpan="4"
                            >
                              Remark: -
                              <input
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                aria-label="Remark"
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

export default AppELEXQD;
