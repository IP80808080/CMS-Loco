import PropTypes from "prop-types";
export default function Table({
  actual_1,
  actual_2,
  actual_3,
  actual_4,
  actual_5,
  remark,
}) {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Elex Flasher Light</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-gray-100">
        <section className="container mx-auto py-8">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="container">
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
                        Actual Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Cleaning PCB with anti static brush
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Cleaned
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check connection tightness
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check Flasher light flashing rate/minute
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        35 – 45 Flashes
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check for endurance testing for 2 Hrs.{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">Done</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Apply RTV silicon to avoid ingress for dust.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Apply
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Remark: -
                        <div className="flex items-center justify-center">
                          {remark}
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

Table.propTypes = {
  actual_1: PropTypes.string.isRequired,
  actual_2: PropTypes.string.isRequired,
  actual_3: PropTypes.string.isRequired,
  actual_4: PropTypes.string.isRequired,
  actual_5: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
};
