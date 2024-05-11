import PropTypes from "prop-types";
export default function Details({
  date_overhaul,
  make_contractor,
  schedule,
  removed_locono,
  equipmentNumber,
  provided_loco,
  srno_coil,
  emc_contractor,
}) {
  return (
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
          <form className="bg-white  rounded-lg shadow-md">
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
                  src="IR Logo.png"
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
                        <div className="col-span-3 sm:col-span-1">
                          {new Date(date_overhaul).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="make_of_contactor"
                          className="font-bold"
                        >
                          Make of contactor:
                        </label>
                        <div className="flex items-center justify-center">
                          {make_contractor}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="schedule" className="font-bold">
                          Schedule:
                        </label>
                        <div className="flex items-center justify-center">
                          {schedule}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="removed_from_loco"
                          className="font-bold"
                        >
                          Removed from loco:
                        </label>
                        <div className="flex items-center justify-center">
                          {removed_locono}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="EMC_TR_sr_no" className="font-bold">
                          EMC/ TR Sr. No.:
                        </label>
                        <div className="flex items-center justify-center">
                          {equipmentNumber}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="provided_on_loco" className="font-bold">
                          Provided on Loco:
                        </label>
                        <div className="flex items-center justify-center">
                          {provided_loco}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">
                        <label htmlFor="sr_no_of_coil" className="font-bold">
                          Sr. No. of coil:
                        </label>
                        <div className="flex items-center justify-center">
                          {srno_coil}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <label
                          htmlFor="used_as_EMC_contactor"
                          className="font-bold"
                        >
                          Used as EMC Contactor:
                        </label>
                        <div className="flex items-center justify-center">
                          {emc_contractor}
                        </div>
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
  );
}
Details.propTypes = {
  equipmentNumber: PropTypes.string.isRequired,
  date_overhaul: PropTypes.string.isRequired,
  make_contractor: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  removed_locono: PropTypes.string.isRequired,
  provided_loco: PropTypes.string.isRequired,
  srno_coil: PropTypes.string.isRequired,
  emc_contractor: PropTypes.string.isRequired,
};
