import PropTypes from "prop-types";
export default function Details({
  date_oh,
  make,
  equipmentNumber,
  removed_locono,
  fitted_locono,
  schedule,
}) {
  return (
    <>
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
                    src="IR Logo copy.png"
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
                          <div className="col-span-3 sm:col-span-1">
                            {new Date(date_oh).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          Make: -
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <span style={{ whiteSpace: "pre" }}>{make}</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          Sr No of Relay:-
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <span style={{ whiteSpace: "pre" }}>
                            {equipmentNumber}
                          </span>
                        </td>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          Removed from loco: -
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <span style={{ whiteSpace: "pre" }}>
                            {removed_locono}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          Fitted on Loco:-
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <span style={{ whiteSpace: "pre" }}>
                            {fitted_locono}
                          </span>
                        </td>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          Schedule:-
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <span style={{ whiteSpace: "pre" }}>{schedule}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </section>
        </body>
      </>
    </>
  );
}
Details.propTypes = {
  date_oh: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  equipmentNumber: PropTypes.string.isRequired,
  removed_locono: PropTypes.string.isRequired,
  fitted_locono: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
};
