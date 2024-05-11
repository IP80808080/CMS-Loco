import { Link } from "react-router-dom";
import { handlePrint } from "./handlePrint";
// import { BASE_URL } from "../config";

const TablesDashboard = ({ section }) => {
  const sectionData = {
    Pneumatic: [
      // {
      //   checklistName: "A9",
      //   items: [{ id: "001", equipment: "A9", uid: "Technician", key: 1 }],
      // },
      // {
      //   checklistName: "AFMV",
      //   items: [{ id: "002", equipment: "AFMV", uid: "Technician", key: 2 }],
      // },
      {
        checklistName: "C2",
        items: [{ id: "003", equipment: "C2", uid: "Technician", key: 3 }],
      },
    ],
    Test_Room: [
      // {
      //   checklistName: "REV_CTF",
      //   items: [{ id: "004", equipment: "REV_CTF", uid: "kk86568", key: 4 }],
      // },
      // {
      //   checklistName: "VCB_SB_AAL",
      //   items: [{ id: "005", equipment: "VCB_SB_AAL", uid: "kk86568", key: 5 }],
      // },

      // {
      //   checklistName: "VCB_SB_BT",
      //   items: [{ id: "006", equipment: "VCB_SB_BT", uid: "kk86568", key: 6 }],
      // },
      {
        checklistName: "VCBSBAREVA",
        items: [
          { id: "007", equipment: "VCBSBAREVA", uid: "Technician", key: 7 },
        ],
      },
      {
        checklistName: "EMC",
        items: [{ id: "008", equipment: "EMC", uid: "Technician", key: 8 }],
      },
    ],
    Electronics: [
      // {
      //   checklistName: "CHBA",
      //   items: [{ id: "009", equipment: "CHBA", uid: "Technician", key: 9 }],
      // },
      // {
      //   checklistName: "SPM",
      //   items: [{ id: "010", equipment: "SPM", uid: "Technician", key: 10 }],
      // },
      {
        checklistName: "English",
        items: [
          { id: "011", equipment: "English", uid: "Technician", key: 11 },
        ],
      },
      {
        checklistName: "FDCS",
        items: [{ id: "012", equipment: "FDCS", uid: "Technician", key: 12 }],
      },
      {
        checklistName: "flasher",
        items: [
          { id: "013", equipment: "flasher", uid: "Technician", key: 13 },
        ],
      },
      {
        checklistName: "QD",
        items: [{ id: "014", equipment: "QD", uid: "Technician", key: 14 }],
      },
    ],
    Traction_Motor: [
      // {
      //   checklistName: "HS_15250A",
      //   items: [{ id: "015", equipment: "HS_15250A", uid: "kk86568", key: 15 }],
      // },
      {
        checklistName: "TAO_659",
        items: [{ id: "016", equipment: "TAO_659", uid: "kk86568", key: 16 }],
      },
      {
        checklistName: "TM_6RA6068",
        items: [
          { id: "017", equipment: "TM_6RA6068", uid: "kk86568", key: 17 },
        ],
      },
    ],
    Static: [
      {
        checklistName: "RSI",
        items: [{ id: "018", equipment: "RSI", uid: "Technician", key: 18 }],
      },
      {
        checklistName: "SMGR",
        items: [{ id: "019", equipment: "SMGR", uid: "Technician", key: 19 }],
      },
    ],
    Auxiliary: [
      {
        checklistName: "MRB",
        items: [{ id: "020", equipment: "MRB", uid: "Technician", key: 20 }],
      },
      {
        checklistName: "OCB",
        items: [{ id: "021", equipment: "OCB", uid: "Technician", key: 21 }],
      },
    ],
    Body_Repair: [
      // {
      //   checklistName: "Mechanical",
      //   items: [
      //     { id: "022", equipment: "Mechanical", uid: "kk86568", key: 22 },
      //   ],
      // },
      {
        checklistName: "Panto",
        items: [{ id: "023", equipment: "Panto", uid: "kk86568", key: 23 }],
      },
    ],
    Heavy_Repair: [
      {
        checklistName: "WAG-5",
        items: [{ id: "024", equipment: "WAG-5", uid: "kk86568", key: 24 }],
      },
      {
        checklistName: "WAP-4",
        items: [{ id: "025", equipment: "WAP-4", uid: "kk86568", key: 25 }],
      },
      {
        checklistName: "AOH",
        items: [{ id: "026", equipment: "AOH", uid: "kk86568", key: 26 }],
      },
      {
        checklistName: "IOH",
        items: [{ id: "027", equipment: "IOH", uid: "kk86568", key: 27 }],
      },
    ],
  };
  const currentSectionData = sectionData[section] || [];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-center">User</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-center">Checklist</div>
            </th>
            <th>
              <div className="flex justify-center">View</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentSectionData.map((checklist) => (
            <tr
              key={checklist.checklistName}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex justify-center">
                  {checklist.items[0].uid}
                </div>
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex justify-center">
                  {checklist.items[0].equipment}
                </div>
              </td>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex justify-center">
                  <Link
                    to={`/dashboard/${section}/${checklist.checklistName}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Open
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablesDashboard;
