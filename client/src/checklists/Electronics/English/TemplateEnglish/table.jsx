import PropTypes from "prop-types";
export default function Table({
  std_value1,
  actual_value1,
  actual_value2,
  actual_value2_1,
  actual_value3,
  actual_value4,
  actual_value4_1,
  actual_value5,
  actual_value6,
  actual_value6_1,
  std_value7,
  actual_value7,
  remark,
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
              <br className="mt-5" />
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
                        Reason for removal of Loco :-
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {std_value1}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Coil resistance at 200C
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        990 – 1210 Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        <div className="flex items-center justify-center">
                          {actual_value2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For Woama relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        3.61 – 3.99 Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value2_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Min. pickup Voltage
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        62 – 68 VDC
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Contact Gap
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        1.7 – 2.0 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For Woama relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.8 – 2.2 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        <div className="flex items-center justify-center">
                          {actual_value4_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Series Economy Resistance For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.235 – 1.365 K Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">6</td>
                      <td
                        className="border border-gray-400 px-4 py-2 font-bold"
                        colSpan="4"
                      >
                        Contact Pressure
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For EE relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        1.235 – 1.365 K Ω
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value6}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        For Woama relay
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        20 – 25 gms
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value6_1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">7</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Q Factor
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {std_value7}
                        </div>
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_value7}
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
            <br className="mt-5" />
          </form>
        </section>
      </body>
    </>
  );
}

Table.propTypes = {
  u: PropTypes.string.isRequired,
  std_value1: PropTypes.string.isRequired,
  actual_value1: PropTypes.string.isRequired,
  actual_value2: PropTypes.string.isRequired,
  actual_value2_1: PropTypes.string.isRequired,
  actual_value3: PropTypes.string.isRequired,
  actual_value4: PropTypes.string.isRequired,
  actual_value4_1: PropTypes.string.isRequired,
  actual_value5: PropTypes.string.isRequired,
  actual_value6: PropTypes.string.isRequired,
  actual_value6_1: PropTypes.string.isRequired,
  std_value7: PropTypes.string.isRequired,
  actual_value: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
  actual_value7: PropTypes.string.isRequired,
};
