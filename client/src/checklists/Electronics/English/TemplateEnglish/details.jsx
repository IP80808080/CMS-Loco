import PropTypes from "prop-types";
export default function Details({
  date_removal,
  removed_locono,
  make,
  equipmentNumber,
  overhaul_date,
  mfg_relay,
  type_relay,
}) {
  return (
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
          <form className="bg-white   rounded-lg shadow-md">
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
                  src="IR Logo copy 2.png"
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
                        {new Date(date_removal).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Removed from Loco
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>
                          {removed_locono}
                        </span>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Make
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>{make}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Sr No of Relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>
                          {equipmentNumber}
                        </span>
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Last Overhaul Dt.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {new Date(overhaul_date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        })}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        MFG of Relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <span style={{ whiteSpace: "pre" }}>{mfg_relay}</span>
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
                        <span style={{ whiteSpace: "pre" }}>{type_relay}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br className="mt-5" />
            </div>
            <br className="mt-5" />
          </form>
        </section>
      </body>
    </>
  );
}
Details.propTypes = {
  equipmentNumber: PropTypes.string.isRequired,
  date_removal: PropTypes.string.isRequired,
  removed_locono: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,

  overhaul_date: PropTypes.string.isRequired,
  mfg_relay: PropTypes.string.isRequired,
  type_relay: PropTypes.string.isRequired,
};
