import { useState, useEffect } from "react";
import axios from "axios";
import Details from "../TemplateTREMC/details";
import Table from "../TemplateTREMC/table";
import Footer from "../TemplateTREMC/footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getUsername } from "../../../../helper/helper";
import { BASE_URL } from "../../../../config";
import logo from "../../../../assets/IRLogo.png";

function AppTREMC() {
  const [showForm, setShowForm] = useState(false);
  const [date_overhaul, setDate_overhaul] = useState("");
  const [make_contractor, setMake_contractor] = useState("");
  const [schedule, setSchedule] = useState("");
  const [removed_locono, setRemoved_locono] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState("");
  const [provided_loco, setProvided_loco] = useState("");
  const [srno_coil, setSrno_coil] = useState("");
  const [emc_contractor, setEmc_contractor] = useState("");
  const [measured_value1a, setMeasured_value1a] = useState("");
  const [measured_value1b, setMeasured_value1b] = useState("");
  const [measured_value2a, setMeasured_value2a] = useState("");
  const [measured_value2b, setMeasured_value2b] = useState("");
  const [measured_value3a1, setMeasured_value3a1] = useState("");
  const [measured_value3b1, setMeasured_value3b1] = useState("");
  const [measured_value3a2, setMeasured_value3a2] = useState("");
  const [measured_value3b2, setMeasured_value3b2] = useState("");
  const [measured_value4a, setMeasured_value4a] = useState("");
  const [measured_value4b, setMeasured_value4b] = useState("");
  const [measured_value5a, setMeasured_value5a] = useState("");
  const [measured_value5b, setMeasured_value5b] = useState("");
  const [measured_value6a, setMeasured_value6a] = useState("");
  const [measured_value6b, setMeasured_value6b] = useState("");
  const [measured_value7a, setMeasured_value7a] = useState("");
  const [measured_value7b, setMeasured_value7b] = useState("");
  const [measured_value8a, setMeasured_value8a] = useState("");
  const [measured_value8b, setMeasured_value8b] = useState("");
  const [measured_value9a, setMeasured_value9a] = useState("");
  const [measured_value9b, setMeasured_value9b] = useState("");
  const [measured_value10righta, setMeasured_value10righta] = useState("");
  const [measured_value10rightb, setMeasured_value10rightb] = useState("");
  const [measured_value10lefta, setMeasured_value10lefta] = useState("");
  const [measured_value10leftb, setMeasured_value10leftb] = useState("");
  const [measured_value11a, setMeasured_value11a] = useState("");
  const [measured_value11b, setMeasured_value11b] = useState("");
  const [measured_value12a, setMeasured_value12a] = useState("");
  const [measured_value12b, setMeasured_value12b] = useState("");
  const [measured_value13a, setMeasured_value13a] = useState("");
  const [measured_value13b, setMeasured_value13b] = useState("");
  const [measured_value14a, setMeasured_value14a] = useState("");
  const [measured_value14b, setMeasured_value14b] = useState("");
  const [measured_value15a, setMeasured_value15a] = useState("");
  const [measured_value15b, setMeasured_value15b] = useState("");
  const [measured_value16a, setMeasured_value16a] = useState("");
  const [measured_value16b, setMeasured_value16b] = useState("");
  const [measured_value17a, setMeasured_value17a] = useState("");
  const [measured_value17b, setMeasured_value17b] = useState("");
  const [measured_value18a, setMeasured_value18a] = useState("");
  const [measured_value18b, setMeasured_value18b] = useState("");
  const [change_1, setChange_1] = useState("");
  const [notchange_1, setNotchange_1] = useState("");
  const [make_1, setMake_1] = useState("");
  const [change_2, setChange_2] = useState("");
  const [notchange_2, setNotchange_2] = useState("");
  const [make_2, setMake_2] = useState("");
  const [remark, setRemark] = useState("");
  const [name_tech, setName_tech] = useState("");

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
    make_contractor: "",
    schedule: "",
    removed_locono: "",
    equipmentNumber: "",
    provided_loco: "",
    srno_coil: "",
    emc_contractor: "",
    measured_value1a: "",
    measured_value1b: "",
    measured_value2a: "",
    measured_value2b: "",
    measured_value3a1: "",
    measured_value3b1: "",
    measured_value3a2: "",
    measured_value3b2: "",
    measured_value4a: "",
    measured_value4b: "",
    measured_value5a: "",
    measured_value5b: "",
    measured_value6a: "",
    measured_value6b: "",
    measured_value7a: "",
    measured_value7b: "",
    measured_value8a: "",
    measured_value8b: "",
    measured_value9a: "",
    measured_value9b: "",
    measured_value10righta: "",
    measured_value10rightb: "",
    measured_value10lefta: "",
    measured_value10leftb: "",
    measured_value11a: "",
    measured_value11b: "",
    measured_value12a: "",
    measured_value12b: "",
    measured_value13a: "",
    measured_value13b: "",
    measured_value14a: "",
    measured_value14b: "",
    measured_value15a: "",
    measured_value15b: "",
    measured_value16a: "",
    measured_value16b: "",
    measured_value17a: "",
    measured_value17b: "",
    measured_value18a: "",
    measured_value18b: "",
    change_1: "",
    notchange_1: "",
    make_1: "",
    change_2: "",
    notchange_2: "",
    make_2: "",
    remark: "",
    name_tech: "",
  });
  const fetchData = async () => {
    try {
      const { uid } = await getUsername();
      const response = await axios.get(`${BASE_URL}/api/revert/TR-EMC/${uid}`);
      console.log(response);
      const fetchedData = response.data[0]; // Assuming response.data contains the fetched data
      setData({
        date_overhaul: fetchedData.date_overhaul,
        make_contractor: fetchedData.make_contractor,
        schedule: fetchedData.schedule,
        removed_locono: fetchedData.removed_locono,
        equipmentNumber: fetchedData.equipmentNumber,
        provided_loco: fetchedData.provided_loco,
        srno_coil: fetchedData.srno_coil,
        emc_contractor: fetchedData.emc_contractor,
        measured_value1a: fetchedData.measured_value1a,
        measured_value1b: fetchedData.measured_value1b,
        measured_value2a: fetchedData.measured_value2a,
        measured_value2b: fetchedData.measured_value2b,
        measured_value3a1: fetchedData.measured_value3a1,
        measured_value3b1: fetchedData.measured_value3b1,
        measured_value3a2: fetchedData.measured_value3a2,
        measured_value3b2: fetchedData.measured_value3b2,
        measured_value4a: fetchedData.measured_value4a,
        measured_value4b: fetchedData.measured_value4b,
        measured_value5a: fetchedData.measured_value5a,
        measured_value5b: fetchedData.measured_value5b,
        measured_value6a: fetchedData.measured_value6a,
        measured_value6b: fetchedData.measured_value6b,
        measured_value7a: fetchedData.measured_value7a,
        measured_value7b: fetchedData.measured_value7b,
        measured_value8a: fetchedData.measured_value8a,
        measured_value8b: fetchedData.measured_value8b,
        measured_value9a: fetchedData.measured_value9a,
        measured_value9b: fetchedData.measured_value9b,
        measured_value10righta: fetchedData.measured_value10righta,
        measured_value10rightb: fetchedData.measured_value10rightb,
        measured_value10lefta: fetchedData.measured_value10lefta,
        measured_value10leftb: fetchedData.measured_value10leftb,
        measured_value11a: fetchedData.measured_value11a,
        measured_value11b: fetchedData.measured_value11b,
        measured_value12a: fetchedData.measured_value12a,
        measured_value12b: fetchedData.measured_value12b,
        measured_value13a: fetchedData.measured_value13a,
        measured_value13b: fetchedData.measured_value13b,
        measured_value14a: fetchedData.measured_value14a,
        measured_value14b: fetchedData.measured_value14b,
        measured_value15a: fetchedData.measured_value15a,
        measured_value15b: fetchedData.measured_value15b,
        measured_value16a: fetchedData.measured_value16a,
        measured_value16b: fetchedData.measured_value16b,
        measured_value17a: fetchedData.measured_value17a,
        measured_value17b: fetchedData.measured_value17b,
        measured_value18a: fetchedData.measured_value18a,
        measured_value18b: fetchedData.measured_value18b,
        change_1: fetchedData.change_1,
        notchange_1: fetchedData.notchange_1,
        make_1: fetchedData.make_1,
        change_2: fetchedData.change_2,
        notchange_2: fetchedData.notchange_2,
        make_2: fetchedData.make_2,
        remark: fetchedData.remark,
        name_tech: fetchedData.name_tech,
        uid: fetchedData.uid,
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
      date_overhaul,
      make_contractor,
      schedule,
      removed_locono,
      equipmentNumber,
      provided_loco,
      srno_coil,
      emc_contractor,
      measured_value1a,
      measured_value1b,
      measured_value2a,
      measured_value2b,
      measured_value3a1,
      measured_value3b1,
      measured_value3a2,
      measured_value3b2,
      measured_value4a,
      measured_value4b,
      measured_value5a,
      measured_value5b,
      measured_value6a,
      measured_value6b,
      measured_value7a,
      measured_value7b,
      measured_value8a,
      measured_value8b,
      measured_value9a,
      measured_value9b,
      measured_value10righta,
      measured_value10rightb,
      measured_value10lefta,
      measured_value10leftb,
      measured_value11a,
      measured_value11b,
      measured_value12a,
      measured_value12b,
      measured_value13a,
      measured_value13b,
      measured_value14a,
      measured_value14b,
      measured_value15a,
      measured_value15b,
      measured_value16a,
      measured_value16b,
      measured_value17a,
      measured_value17b,
      measured_value18a,
      measured_value18b,
      change_1,
      notchange_1,
      make_1,
      change_2,
      notchange_2,
      make_2,
      remark,
      name_tech,
    } = data;
    try {
      const { data } = await axios.post(`${BASE_URL}/api/resubmit/EMC`, {
        sign: sign,
        uid,
        date_overhaul,
        make_contractor,
        schedule,
        removed_locono,
        equipmentNumber,
        provided_loco,
        srno_coil,
        emc_contractor,
        measured_value1a,
        measured_value1b,
        measured_value2a,
        measured_value2b,
        measured_value3a1,
        measured_value3b1,
        measured_value3a2,
        measured_value3b2,
        measured_value4a,
        measured_value4b,
        measured_value5a,
        measured_value5b,
        measured_value6a,
        measured_value6b,
        measured_value7a,
        measured_value7b,
        measured_value8a,
        measured_value8b,
        measured_value9a,
        measured_value9b,
        measured_value10righta,
        measured_value10rightb,
        measured_value10lefta,
        measured_value10leftb,
        measured_value11a,
        measured_value11b,
        measured_value12a,
        measured_value12b,
        measured_value13a,
        measured_value13b,
        measured_value14a,
        measured_value14b,
        measured_value15a,
        measured_value15b,
        measured_value16a,
        measured_value16b,
        measured_value17a,
        measured_value17b,
        measured_value18a,
        measured_value18b,
        change_1,
        notchange_1,
        make_1,
        change_2,
        notchange_2,
        make_2,
        remark,
        name_tech,
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
                make_contractor={make_contractor}
                schedule={schedule}
                removed_locono={removed_locono}
                equipmentNumber={equipmentNumber}
                provided_loco={provided_loco}
                srno_coil={srno_coil}
                emc_contractor={emc_contractor}
              />

              <br></br>

              <Table
                measured_value1a={measured_value1a}
                measured_value1b={measured_value1b}
                measured_value2a={measured_value2a}
                measured_value2b={measured_value2b}
                measured_value3a1={measured_value3a1}
                measured_value3b1={measured_value3b1}
                measured_value3a2={measured_value3a2}
                measured_value3b2={measured_value3b2}
                measured_value4a={measured_value4a}
                measured_value4b={measured_value4b}
                measured_value5a={measured_value5a}
                measured_value5b={measured_value5b}
                measured_value6a={measured_value6a}
                measured_value6b={measured_value6b}
                measured_value7a={measured_value7a}
                measured_value7b={measured_value7b}
                measured_value8a={measured_value8a}
                measured_value8b={measured_value8b}
                measured_value9a={measured_value9a}
                measured_value9b={measured_value9b}
                measured_value10righta={measured_value10righta}
                measured_value10rightb={measured_value10rightb}
                measured_value10lefta={measured_value10lefta}
                measured_value10leftb={measured_value10leftb}
                measured_value11a={measured_value11a}
                measured_value11b={measured_value11b}
                measured_value12a={measured_value12a}
                measured_value12b={measured_value12b}
                measured_value13a={measured_value13a}
                measured_value13b={measured_value13b}
                measured_value14a={measured_value14a}
                measured_value14b={measured_value14b}
                measured_value15a={measured_value15a}
                measured_value15b={measured_value15b}
                measured_value16a={measured_value16a}
                measured_value16b={measured_value16b}
                measured_value17a={measured_value17a}
                measured_value17b={measured_value17b}
                measured_value18a={measured_value18a}
                measured_value18b={measured_value18b}
                change_1={change_1}
                notchange_1={notchange_1}
                make_1={make_1}
                change_2={change_2}
                notchange_2={notchange_2}
                make_2={make_2}
              />

              <Footer remark={remark} name_tech={name_tech} />

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
              <title>TR EMC--WAG-5</title>
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
                    <p>(ELS Practice)</p>

                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white shadow-md border-collapse">
                        <tbody>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="date_of_overhauling"
                                className="font-bold"
                              >
                                Date of overhauling:
                              </label>
                              <input
                                id="date_overhaul"
                                type="date"
                                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
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
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="make_of_contactor"
                                className="font-bold"
                              >
                                Make of contactor:
                              </label>
                              <input
                                id="make_contractor"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.make_contractor}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    make_contractor: e.target.value,
                                  });
                                  setMake_contractor(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              <label htmlFor="schedule" className="font-bold">
                                Schedule:
                              </label>
                              <input
                                id="schedule"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
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
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="removed_from_loco"
                                className="font-bold"
                              >
                                Removed from loco:
                              </label>
                              <input
                                id="removed_from_loco"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
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
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="EMC_TR_sr_no"
                                className="font-bold"
                              >
                                EMC/ TR Sr. No.:
                              </label>
                              <input
                                id="EMC_TR_sr_no"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
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
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="provided_on_loco"
                                className="font-bold"
                              >
                                Provided on Loco:
                              </label>
                              <input
                                id="provided_on_loco"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.provided_loco}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    provided_loco: e.target.value,
                                  });
                                  setProvided_loco(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="sr_no_of_coil"
                                className="font-bold"
                              >
                                Sr. No. of coil:
                              </label>
                              <input
                                id="sr_no_of_coil"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.srno_coil}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    srno_coil: e.target.value,
                                  });
                                  setSrno_coil(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <label
                                htmlFor="used_as_EMC_contactor"
                                className="font-bold"
                              >
                                Used as EMC Contactor:
                              </label>
                              <input
                                id="used_as_EMC_contactor"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.emc_contractor}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    emc_contractor: e.target.value,
                                  });
                                  setEmc_contractor(e.target.value);
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
                              Sr. No.
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Description of Test
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Standard Value
                            </th>
                            <th
                              className="border border-gray-400 px-4 py-2"
                              colSpan="2"
                            >
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
                              Condition of EMC before dismantling (any defects
                              Notice)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              No defect
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value1a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value1a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value1a: e.target.value,
                                  });
                                  setMeasured_value1a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value1b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value1b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value1b: e.target.value,
                                  });
                                  setMeasured_value1b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              2
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Insulation resistance with 500V megger between
                              Magnet coil terminal and earth.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              10 Mega ohm (Min)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value2a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value2a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value2a: e.target.value,
                                  });
                                  setMeasured_value2a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value2b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value2b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value2b: e.target.value,
                                  });
                                  setMeasured_value2b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              3
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              `IR with 1000 Volts Megger of main contacts.
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Between phases
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              10 Mega ohm (Min)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value3a1"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value3a1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value3a1: e.target.value,
                                  });
                                  setMeasured_value3a1(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value3b1"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value3b1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value3b1: e.target.value,
                                  });
                                  setMeasured_value3b1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Between each phase & insulated shaft.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              10 Mega ohm (Min)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value3a2"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value3a2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value3a2: e.target.value,
                                  });
                                  setMeasured_value3a2(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value3b2"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value3b2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value3b2: e.target.value,
                                  });
                                  setMeasured_value3b2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              4
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Coil resistance at Room temp./R 20°C (SMI – 69)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              539 Ω – 632 Ω
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value4a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value4a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value4a: e.target.value,
                                  });
                                  setMeasured_value4a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value4b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value4b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value4b: e.target.value,
                                  });
                                  setMeasured_value4b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              5
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Pick up voltage (maintenance manual)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              60 – 70 V DC
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value5a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value5a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value5a: e.target.value,
                                  });
                                  setMeasured_value5a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value5b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value5b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value5b: e.target.value,
                                  });
                                  setMeasured_value5b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              6
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Drop out voltage (maintenance manual)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              10 – 20 V DC
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value6a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value6a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value6a: e.target.value,
                                  });
                                  setMeasured_value6a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value6b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value6b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value6b: e.target.value,
                                  });
                                  setMeasured_value6b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              7
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Main contact spring tension. Difference of contact
                              pressure between poles should not be more than 25
                              gms
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              850 -1100 gms.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value7a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value7a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value7a: e.target.value,
                                  });
                                  setMeasured_value7a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value7b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value7b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value7b: e.target.value,
                                  });
                                  setMeasured_value7b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              8
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Aux contact pressure N/O
                              <br />
                              (maintenance manual) N/C
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              80 – 120 gms
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value8a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value8a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value8a: e.target.value,
                                  });
                                  setMeasured_value8a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value8b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value8b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value8b: e.target.value,
                                  });
                                  setMeasured_value8b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              9
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Main contact gap (maintenance manual)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              7.5 – 9.5 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value9a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value9a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value9a: e.target.value,
                                  });
                                  setMeasured_value9a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value9b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value9b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value9b: e.target.value,
                                  });
                                  setMeasured_value9b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              10
                            </td>
                            <td className="border border-gray-400 px-4 py-2 font-bold">
                              Check play between Armature and Yoke.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              No defect
                            </td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2"></td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Right side
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value10righta"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value10righta}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value10righta: e.target.value,
                                  });
                                  setMeasured_value10righta(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value10rightb"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value10rightb}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value10rightb: e.target.value,
                                  });
                                  setMeasured_value10rightb(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2"></td>
                            <td className="border border-gray-400 px-4 py-2">
                              Left side
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value10lefta"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value10lefta}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value10lefta: e.target.value,
                                  });
                                  setMeasured_value10lefta(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value10leftb"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value10leftb}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value10leftb: e.target.value,
                                  });
                                  setMeasured_value10leftb(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              11
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Inter turn short circuit test of coils by Inter
                              turn short tester. (SMI – 59)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              No inter turn short{" "}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value11a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value11a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value11a: e.target.value,
                                  });
                                  setMeasured_value11a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value11b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value11b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value11b: e.target.value,
                                  });
                                  setMeasured_value11b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              12
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check distance between core and armature.
                              (maintenance manual)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              2 + 0 mm
                              <br />- 0.5 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value12a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value12a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value12a: e.target.value,
                                  });
                                  setMeasured_value12a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value12b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value12b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value12b: e.target.value,
                                  });
                                  setMeasured_value12b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              13
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check conditions of Arc chutes. (ELS Practice)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Good condition
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value13a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value13a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value13a: e.target.value,
                                  });
                                  setMeasured_value13a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value13b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value13b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value13b: e.target.value,
                                  });
                                  setMeasured_value13b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              14
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Crushing of main contacts. (CLW Routine Test)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              3.8 – 4.3 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value14a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value14a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value14a: e.target.value,
                                  });
                                  setMeasured_value14a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value14b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value14b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value14b: e.target.value,
                                  });
                                  setMeasured_value14b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              15
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Crushing of auxiliary contacts.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              1.5 + 1.7 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value15a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value15a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value15a: e.target.value,
                                  });
                                  setMeasured_value15a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value15b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value15b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value15b: e.target.value,
                                  });
                                  setMeasured_value15b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              16
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Air Gap of Aux. contacts.
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              3.8 – 4.2 mm
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value16a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value16a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value16a: e.target.value,
                                  });
                                  setMeasured_value16a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value16b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value16b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value16b: e.target.value,
                                  });
                                  setMeasured_value16b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              17
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check the condition of copper shunts (If stiff or
                              badly frayed) & more than 10% strands are out.
                              (ELS Practice)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Good condition
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value17a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value17a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value17a: e.target.value,
                                  });
                                  setMeasured_value17a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value17b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value17b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value17b: e.target.value,
                                  });
                                  setMeasured_value17b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              18
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Check tips contacts for simultaneous closing by
                              delay timer. (ELS Practice)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Checked
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value18a"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value18a}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value18a: e.target.value,
                                  });
                                  setMeasured_value18a(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="measured_value18b"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.measured_value18b}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    measured_value18b: e.target.value,
                                  });
                                  setMeasured_value18b(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <br className="mt-5" />
                    <tr>
                      <th
                        className="border border-gray-400 px-4 py-2"
                        colSpan="5"
                      >
                        <h2 className="font-bold text-lg">
                          Must change Item of EMC
                        </h2>
                      </th>
                    </tr>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white shadow-md border-collapse">
                        <thead>
                          <tr>
                            <th className="border border-gray-400 px-4 py-2">
                              Sr. No.
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Item Description
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Change
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Not Change
                            </th>
                            <th className="border border-gray-400 px-4 py-2">
                              Make
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              1
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Set of contact tips (Fix & Mobile) (AOH)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="change_1"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.change_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    change_1: e.target.value,
                                  });
                                  setChange_1(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="notchange_1"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.notchange_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    notchange_1: e.target.value,
                                  });
                                  setNotchange_1(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="make_1"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.make_1}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    make_1: e.target.value,
                                  });
                                  setMake_1(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-400 px-4 py-2">
                              2
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              Mobile contact with shunt. (IOH)
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="change_2"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.change_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    change_2: e.target.value,
                                  });
                                  setChange_2(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="notchange_2"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.notchange_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    notchange_2: e.target.value,
                                  });
                                  setNotchange_2(e.target.value);
                                }}
                              ></input>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                              <input
                                id="make_2"
                                type="text"
                                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                                placeholder="Enter"
                                value={data.make_2}
                                onChange={(e) => {
                                  setData({
                                    ...data,
                                    make_2: e.target.value,
                                  });
                                  setMake_2(e.target.value);
                                }}
                              ></input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <tr>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="5"
                      >
                        Remark: -
                        <input
                          id="Remark"
                          type="text"
                          className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                          placeholder="Enter"
                          value={data.remark}
                          onChange={(e) => {
                            setData({
                              ...data,
                              remark: e.target.value,
                            });
                            setRemark(e.target.value);
                          }}
                        ></input>{" "}
                      </td>
                    </tr>
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

export default AppTREMC;
