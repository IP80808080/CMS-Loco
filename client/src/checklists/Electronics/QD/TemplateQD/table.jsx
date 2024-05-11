import PropTypes from "prop-types";
export default function Table({
  measured_value1,
  measured_value2,
  measured_value3,
  measured_value4,
  measured_value5,
  measured_value6,
  measured_value7,
  measured_value8,
  measured_value9,
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
                        Measured value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">1</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check IR value with 1 KV Megger
                        <br />
                        (a)Coil terminal to Fix arm
                        <br />
                        (b)Contacts to Fix Arm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Above
                        <br />
                        10 M ohm
                        <br />
                        10 M ohm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">2</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Pick up value <br />
                        WAP4
                        <br />
                        WAG5{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <br />
                        148 – 152 Amp
                        <br />
                        158 – 162 Amp
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">3</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Drop out value <br />
                        WAP4
                        <br />
                        WAG5
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <br />
                        80-105 Amp
                        <br />
                        120 – 132 Amp
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">4</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the condition of contact and clean{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Good and clean
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">5</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the Aux. Contact continuity after pick up the
                        relay.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                         Continuity ok
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">6</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the contact gap.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        0.5 – 3.5 mm
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value6}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">7</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the contact pressure.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        50 – 150 grams.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value7}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">8</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the terminal plate and terminal separator for any
                        crack/ damage.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        No Crack. / Damage
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value8}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2">9</td>
                      <td className="border border-gray-400 px-4 py-2">
                        Replace if codal life completed
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Replace or not replace.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {measured_value9}
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
  measured_value1: PropTypes.string.isRequired,
  measured_value2: PropTypes.string.isRequired,
  measured_value3: PropTypes.string.isRequired,
  measured_value4: PropTypes.string.isRequired,
  measured_value5: PropTypes.string.isRequired,
  measured_value6: PropTypes.string.isRequired,
  measured_value7: PropTypes.string.isRequired,
  measured_value8: PropTypes.string.isRequired,
  measured_value9: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
};
