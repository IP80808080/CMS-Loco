import PropTypes from "prop-types";
export default function Details({ equipmentNumber, aoh, ioh, date }) {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>ELEX FDCS</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-gray-100">
        <section className="container mx-auto py-8">
          <form className="bg-white   rounded-lg shadow-md">
            <div className="container">
              <div className="border border-gray-400 p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold flex-grow text-center">
                  Electric Loco Shed, Bhusawal<br></br>Check sheet for FDCS
                  Maintenance
                </h1>
                <img
                  src="IR Logo copy 2.png"
                  alt="IR Logo"
                  className="w-20 h-20"
                />
              </div>
              <br className="mt-5" />

              <div className="flex mb-6">
                <div className="mr-4">
                  <label
                    htmlFor="Loco No."
                    className="block text-sm font-medium text-gray-700"
                  >
                    Loco No.
                    <div className="flex items-center justify-center">
                      {equipmentNumber}
                    </div>
                  </label>
                </div>

                <div className="mr-4">
                  <label
                    htmlFor="Schedule – AOH/IOH"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Schedule – AOH
                    <div className="flex items-center justify-center">
                      {aoh}
                    </div>
                    /IOH
                    <div className="flex items-center justify-center">
                      {ioh}
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date -
                    <div className="flex items-center justify-center">
                      {new Date(date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </label>
                </div>
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
  aoh: PropTypes.string.isRequired,
  ioh: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
