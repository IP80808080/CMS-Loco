import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUsername } from "../../helper/helper";
import { BASE_URL } from "../../config";

export default function RevertedE() {
  const [EnglishFormsHistory, setEnglishFormsHistory] = useState([]);
  const [QDFormsHistory, setQDFormsHistory] = useState([]);
  const [FDCSFormsHistory, setFDCSFormsHistory] = useState([]);
  const [flasherFormsHistory, setflasherFormsHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchForms = async () => {
      try {
        //
        const { uid } = await getUsername();

        const EnglishResponse = await axios.get(
          `${BASE_URL}/api/revert/E-English/${uid}`
        );
        setEnglishFormsHistory(EnglishResponse.data);

        //
        const QDResponse = await axios.get(
          `${BASE_URL}/api/revert/E-QD/${uid}`
        );
        setQDFormsHistory(QDResponse.data);
        //
        const FDCSResponse = await axios.get(
          `${BASE_URL}/api/revert/E-FDCS/${uid}`
        );
        setFDCSFormsHistory(FDCSResponse.data);

        //
        const flasherResponse = await axios.get(
          `${BASE_URL}/api/revert/E-flasher/${uid}`
        );
        setflasherFormsHistory(flasherResponse.data);
      } catch (error) {
        console.error("Error fetching forms:", error);
      }
    };

    fetchForms();
  }, []);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { role } = await getUsername();
        setRole(role);
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  let dashboardLink;
  switch (role) {
    case "Admin":
      dashboardLink = "/admin-dashboard";
      break;
    case "Supervisor":
      dashboardLink = "/moderator-dashboard";
      break;
    default:
      dashboardLink = "/dashboard";
      break;
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <br></br>
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center"></form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <Link
                to={dashboardLink}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Dashboard
              </Link>
              <input
                id="date"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)}
                className="rounded-full "
                type="date"
              />
            </div>
          </div>
          <br></br>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex justify-center">Submittion Date</div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex justify-center">EID</div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex justify-center">Form</div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex justify-center">Section</div>
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex justify-center">Re-submit</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(flasherFormsHistory) &&
                  flasherFormsHistory.map((form) => (
                    <tr
                      key={form._id}
                      className="border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex justify-center">
                          {new Date(form.submittedDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">{form.uid}</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">{form.form}</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          {form.section}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          <Link
                            to={`/view-revert-flasher-form/${form.submittedDate}/${form.uid}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded"
                          >
                            Re-submit
                          </Link>
                        </div>
                      </th>
                    </tr>
                  ))}

                {Array.isArray(FDCSFormsHistory) &&
                  FDCSFormsHistory.map((form) => (
                    <tr
                      key={form._id}
                      className="border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex justify-center">
                          {new Date(form.submittedDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">{form.uid}</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">FDCS</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          {form.section}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          <Link
                            to={`/view-revert-FDCS-form/${form.submittedDate}/${form.uid}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded"
                          >
                            Re-submit
                          </Link>
                        </div>
                      </th>
                    </tr>
                  ))}
                {Array.isArray(QDFormsHistory) &&
                  QDFormsHistory.map((form) => (
                    <tr
                      key={form._id}
                      className="border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex justify-center">
                          {new Date(form.submittedDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">{form.uid}</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">{form.form}</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          {form.section}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          <Link
                            to={`/view-revert-QD-form/${form.submittedDate}/${form.uid}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded"
                          >
                            Re-submit
                          </Link>
                        </div>
                      </th>
                    </tr>
                  ))}

                {Array.isArray(EnglishFormsHistory) &&
                  EnglishFormsHistory.map((form) => (
                    <tr
                      key={form._id}
                      className="border-b dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex justify-center">
                          {new Date(form.submittedDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">{form.uid}</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">English</div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          {form.section}
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex justify-center">
                          <Link
                            to={`/view-revert-English-form/${form.submittedDate}/${form.uid}`}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded"
                          >
                            Re-submit
                          </Link>
                        </div>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
