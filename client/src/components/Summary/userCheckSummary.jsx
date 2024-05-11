import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsername } from "../../helper/helper";
import Navbar from "../Navbar/NavBar";
import axios from "axios";

export default function userCheckSummary() {
  const [ocbFormsHistory, setOcbFormsHistory] = useState([]);
  const [mrbFormsHistory, setMrbFormsHistory] = useState([]);
  const [role, setRole] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handlePrint = () => {
    const printContents =
      document.getElementById("summary-container").innerHTML;
    const originalContents = document.body.innerHTML;

    setSearchValue(""); // Clear the search value

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  };

  //
  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/ocb/getAcceptedFormsHistory`
        );
        setOcbFormsHistory(response.data);
      } catch (error) {
        console.error("Error fetching form history data:", error);
      }
    };

    fetchHistoryData();
  }, []);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/mrb/getAcceptedFormsHistory`
        );
        setMrbFormsHistory(response.data);
      } catch (error) {
        console.error("Error fetching form history data:", error);
      }
    };

    fetchHistoryData();
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
              <form
                className="flex items-center"
                onChange={(e) => setSearch(e.target.value)}
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search by EID / Equipment Number / Loco Number / Form / Section"
                    required=""
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button
                onClick={handlePrint}
                className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Print
              </button>
              <Link
                to={dashboardLink}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Dashboard
              </Link>
              <div className="space-y-2">
                <input
                  id="date"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="rounded-full "
                  type="date"
                />
                <span className="whitespace-normal"> </span>
                <input
                  id="date"
                  value={selectedDate}
                  onChange={(e) => handleDateChange(e.target.value)}
                  className="rounded-full "
                  type="date"
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto p-8" id="summary-container">
            <div className="mb-4">
              <Navbar />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex justify-center">Submittion Date</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex justify-center">EID</div>
                    </th>
                    <th scope="col" className="px-1 py-3">
                      <div className="flex justify-center">
                        Equipment Number / Loco Number
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex justify-center">Form</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <div className="flex justify-center">Section</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(ocbFormsHistory).flatMap((forms) =>
                    forms
                      .filter((form) => {
                        const formDate = new Date(form.submittedDate).setHours(
                          0,
                          0,
                          0,
                          0
                        );
                        const selectedDateFormatted = selectedDate
                          ? new Date(selectedDate).setHours(0, 0, 0, 0)
                          : null;
                        return (
                          (!selectedDateFormatted ||
                            formDate === selectedDateFormatted) &&
                          (form.uid
                            .toString()
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                            form.form
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            form.section
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            (form.equipmentNumber &&
                              form.equipmentNumber
                                .toLowerCase()
                                .includes(search.toLowerCase())))
                        );
                      })
                      .map((form) => (
                        <tr
                          key={form._id}
                          className="border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="flex justify-center">
                              {new Date(form.submittedDate).toLocaleDateString(
                                "en-GB"
                              )}
                            </div>
                          </th>
                          <th className="px-6 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.uid}
                            </div>
                          </th>
                          <th className="px-1 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.equipmentNumber}
                            </div>
                          </th>
                          <th className="px-6 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.form}
                            </div>
                          </th>
                          <th className="px-6 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.section}
                            </div>
                          </th>
                        </tr>
                      ))
                  )}

                  {Object.values(mrbFormsHistory).flatMap((forms) =>
                    forms
                      .filter((form) => {
                        const formDate = new Date(form.submittedDate).setHours(
                          0,
                          0,
                          0,
                          0
                        );
                        const selectedDateFormatted = selectedDate
                          ? new Date(selectedDate).setHours(0, 0, 0, 0)
                          : null;
                        return (
                          (!selectedDateFormatted ||
                            formDate === selectedDateFormatted) &&
                          (form.uid
                            .toString()
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                            form.form
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            form.section
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            (form.equipmentNumber &&
                              form.equipmentNumber
                                .toLowerCase()
                                .includes(search.toLowerCase())))
                        );
                      })
                      .map((form) => (
                        <tr
                          key={form._id}
                          className="border-b dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div className="flex justify-center">
                              {new Date(form.submittedDate).toLocaleDateString(
                                "en-GB"
                              )}
                            </div>
                          </th>
                          <th className="px-6 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.uid}
                            </div>
                          </th>
                          <th className="px-1 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.equipmentNumber}
                            </div>
                          </th>
                          <th className="px-6 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">MRB</div>
                          </th>
                          <th className="px-6 py-3 font-medium text-gray-900">
                            <div className="flex justify-center">
                              {form.section}
                            </div>
                          </th>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <div className="mb-4 px-3">
              <div className="flex justify-between">
                <div className="text-center">
                  <p>तकनिशियन का नाम एवं हस्ताक्षर:</p>
                </div>
                <div className="text-center">
                  <p>सुपरवाईजर का नाम एवं हस्ताक्षर:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
