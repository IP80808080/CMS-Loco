import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Modal from "react-modal";
import { BASE_URL } from "../../config";
import { getUsername } from "../../helper/helper";

Modal.setAppElement("#root");
export default function ModeratorSRAU() {
  const [EnglishForms, setEnglishForms] = useState([]);
  const [QDForms, setQDForms] = useState([]);
  const [FDCSForms, setFDCSForms] = useState([]);
  const [flasherForms, setflasherForms] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    form: "",
    uid: "",
    submittedDate: "",
    revertReason: "",
  });

  useEffect(() => {
    const fetchForms = async () => {
      try {
        //
        const flasherResponse = await axios.get(
          `${BASE_URL}/api/daily/flasher`
        );
        setflasherForms(flasherResponse.data);

        //
        const FDCSResponse = await axios.get(`${BASE_URL}/api/daily/FDCS`);
        setFDCSForms(FDCSResponse.data);
        //

        const QDResponse = await axios.get(`${BASE_URL}/api/daily/QD`);
        setQDForms(QDResponse.data);

        //
        const EnglishResponse = await axios.get(
          `${BASE_URL}/api/daily/English`
        );
        setEnglishForms(EnglishResponse.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    fetchForms();
  }, []);

  const acceptflasherForm = async (formId) => {
    try {
      const { username } = await getUsername();
      await axios.put(`${BASE_URL}/api/flasher/${formId}/accept`, {
        sign2: username,
      });
      // Reload OCB forms after accepting
      const response = await axios.get(`${BASE_URL}/api/daily/flasher`);
      setflasherForms(response.data);
      toast.success("flasher accepted");
    } catch (error) {
      console.error("Error accepting flasher form:", error);
      toast.error("Error Will accepting flasher");
    }
  };

  const acceptFDCSForm = async (formId) => {
    try {
      const { username } = await getUsername();
      await axios.put(`${BASE_URL}/api/FDCS/${formId}/accept`, {
        sign2: username,
      });
      // Reload FDCS forms after accepting
      const response = await axios.get(`${BASE_URL}/api/daily/FDCS`);
      setFDCSForms(response.data);
      toast.success("FDCS accepted");
    } catch (error) {
      console.error("Error accepting FDCS form:", error);
      toast.error("Error Will accepting FDCS");
    }
  };

  const acceptQDForm = async (formId) => {
    try {
      const { username } = await getUsername();
      await axios.put(`${BASE_URL}/api/QD/${formId}/accept`, {
        sign2: username,
      });
      // Reload OCB forms after accepting
      const response = await axios.get(`${BASE_URL}/api/daily/QD`);
      setQDForms(response.data);
      toast.success("QD accepted");
    } catch (error) {
      console.error("Error accepting QD form:", error);
      toast.error("Error Will accepting QD");
    }
  };

  const acceptEnglishForm = async (formId) => {
    try {
      const { username } = await getUsername();
      await axios.put(`${BASE_URL}/api/English/${formId}/accept`, {
        sign2: username,
      });
      // Reload English forms after accepting
      const response = await axios.get(`${BASE_URL}/api/daily/English`);
      setEnglishForms(response.data);
      toast.success("English accepted");
    } catch (error) {
      console.error("Error accepting English form:", error);
      toast.error("Error Will accepting English");
    }
  };

  const openModal = (form, uid, submittedDate) => {
    setIsOpen(true);
    setFormData({ form, uid, submittedDate, revertReason: "" });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setFormData({ ...formData, revertReason: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      closeModal();
      const { form, uid, submittedDate, revertReason } = formData;
      await axios.post(
        `${BASE_URL}/api/revert/${form}/${uid}/${submittedDate}`,
        {
          revertReason,
        }
      );
      toast.success("Form reverted successfully");

      const flasherResponse = await axios.get(`${BASE_URL}/api/daily/flasher`);
      setflasherForms(flasherResponse.data);
      const FDCSResponse = await axios.get(`${BASE_URL}/api/daily/FDCS`);
      setFDCSForms(FDCSResponse.data);
      const QDResponse = await axios.get(`${BASE_URL}/api/daily/QD`);
      setQDForms(QDResponse.data);
      const EnglishResponse = await axios.get(`${BASE_URL}/api/daily/English`);
      setEnglishForms(EnglishResponse.data);
    } catch (error) {
      console.error("Error reverting form:", error);
      toast.error("Error reverting form. Please try again later.");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5500 }}
      />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SID
            </th>
            <th scope="col" className="px-6 py-3">
              Equipment Number/Loco Number
            </th>
            <th scope="col" className="px-6 py-3">
              Checklist
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Render flasher forms */}
          {flasherForms.map((form) => (
            <tr
              key={form._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.uid}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.equipmentNumber}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                flasher
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/moderator-flasher-dashboard/${form.uid}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  View
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => acceptflasherForm(form._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Accept
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() =>
                    openModal("flasher", form.uid, form.submittedDate)
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Revert
                </button>
              </td>
            </tr>
          ))}

          {/* Render FDCS forms */}
          {FDCSForms.map((form) => (
            <tr
              key={form._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.uid}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.equipmentNumber}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                FDCS
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/moderator-FDCS-dashboard/${form.uid}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  View
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => acceptFDCSForm(form._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Accept
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() =>
                    openModal("FDCS", form.uid, form.submittedDate)
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Revert
                </button>
              </td>
            </tr>
          ))}

          {/* Render QD forms */}
          {QDForms.map((form) => (
            <tr
              key={form._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.uid}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.equipmentNumber}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                QD
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/moderator-QD-dashboard/${form.uid}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  View
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => acceptQDForm(form._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Accept
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => openModal("QD", form.uid, form.submittedDate)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Revert
                </button>
              </td>
            </tr>
          ))}

          {/* Render English forms */}
          {EnglishForms.map((form) => (
            <tr
              key={form._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.uid}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {form.equipmentNumber}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                English
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link
                  to={`/moderator-English-dashboard/${form.uid}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  View
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => acceptEnglishForm(form._id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Accept
                </button>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() =>
                    openModal("English", form.uid, form.submittedDate)
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                >
                  Revert
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Enter Revert Reason"
      >
        <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
          Close
        </button>
        <h2 className="text-xl font-bold mb-4">Enter Revert Reason</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md resize-none"
          value={message}
          rows={5}
          onChange={handleChange}
        />
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </Modal>
    </div>
  );
}
