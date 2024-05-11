import PropTypes from "prop-types";
export default function Table({
  measured_value1a,
  measured_value1b,
  measured_value2a,
  measured_value2b,
  measured_value3a1,
  measured_value3b1,
  measured_value3a2,
  measured_value3b2,
  measured_value4a,
  measured_value4b,
  measured_value5a,
  measured_value5b,
  measured_value6a,
  measured_value6b,
  measured_value7a,
  measured_value7b,
  measured_value8a,
  measured_value8b,
  measured_value9a,
  measured_value9b,
  measured_value10righta,
  measured_value10rightb,
  measured_value10lefta,
  measured_value10leftb,
  measured_value11a,
  measured_value11b,
  measured_value12a,
  measured_value12b,
  measured_value13a,
  measured_value13b,
  measured_value14a,
  measured_value14b,
  measured_value15a,
  measured_value15b,
  measured_value16a,
  measured_value16b,
  measured_value17a,
  measured_value17b,
  measured_value18a,
  measured_value18b,
  change_1,
  notchange_1,
  make_1,
  change_2,
  notchange_2,
  make_2,
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
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2">
                          Sr. No.
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Description of Test
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Standard Value
                        </th>
                        <th
                          className="border border-gray-400 px-4 py-2"
                          colSpan="2"
                        >
                          Measured value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Condition of EMC before dismantling (any defects
                          Notice)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          No defect
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value1a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value1b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">2</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Insulation resistance with 500V megger between Magnet
                          coil terminal and earth.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          10 Mega ohm (Min)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value2a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value2b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">3</td>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          `IR with 1000 Volts Megger of main contacts.
                        </td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2">
                          Between phases
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          10 Mega ohm (Min)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value3a1}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value3b1}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2">
                          Between each phase & insulated shaft.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          10 Mega ohm (Min)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value3a2}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value3b2}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">4</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Coil resistance at Room temp./R 20°C (SMI – 69)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          539 Ω – 632 Ω
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value4a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value4b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">5</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Pick up voltage (maintenance manual)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          60 – 70 V DC
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value5a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value5b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">6</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Drop out voltage (maintenance manual)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          10 – 20 V DC
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value6a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value6b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">7</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Main contact spring tension. Difference of contact
                          pressure between poles should not be more than 25 gms
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          850 -1100 gms.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value7a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value7b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">8</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Aux contact pressure N/O
                          <br />
                          (maintenance manual) N/C
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          80 – 120 gms
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value8a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value8b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">9</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Main contact gap (maintenance manual)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          7.5 – 9.5 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value9a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value9b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">10</td>
                        <td className="border border-gray-400 px-4 py-2 font-bold">
                          Check play between Armature and Yoke.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          No defect
                        </td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2">
                          Right side
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value10righta}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value10rightb}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2">
                          Left side
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value10lefta}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value10leftb}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">11</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Inter turn short circuit test of coils by Inter turn
                          short tester. (SMI – 59)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          No inter turn short{" "}
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value11a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value11b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">12</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check distance between core and armature. (maintenance
                          manual)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          2 + 0 mm
                          <br />- 0.5 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value12a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value12b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">13</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check conditions of Arc chutes. (ELS Practice)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Good condition
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value13a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value13b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">14</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Crushing of main contacts. (CLW Routine Test)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          3.8 – 4.3 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value14a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value14b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">15</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Crushing of auxiliary contacts.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          1.5 + 1.7 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value15a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value15b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">16</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Air Gap of Aux. contacts.
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          3.8 – 4.2 mm
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value16a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value16b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">17</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check the condition of copper shunts (If stiff or
                          badly frayed) & more than 10% strands are out. (ELS
                          Practice)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Good condition
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value17a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value17b}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">18</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Check tips contacts for simultaneous closing by delay
                          timer. (ELS Practice)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          Checked
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value18a}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {measured_value18b}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br className="mt-5" />
                <tr>
                  <th className="border border-gray-400 px-4 py-2" colSpan="5">
                    <h2 className="font-bold text-lg">
                      Must change Item of EMC
                    </h2>
                  </th>
                </tr>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-400 px-4 py-2">
                          Sr. No.
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Item Description
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Change
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Not Change
                        </th>
                        <th className="border border-gray-400 px-4 py-2">
                          Make
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">1</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Set of contact tips (Fix & Mobile) (AOH)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {change_1}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {notchange_1}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {make_1}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2">2</td>
                        <td className="border border-gray-400 px-4 py-2">
                          Mobile contact with shunt. (IOH)
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {change_2}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {notchange_2}
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-2">
                          <div className="flex items-center justify-center">
                            {make_2}
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
    </>
  );
}

Table.propTypes = {
  u: PropTypes.string.isRequired,
  measured_value1a: PropTypes.string.isRequired,
  measured_value1b: PropTypes.string.isRequired,
  measured_value2a: PropTypes.string.isRequired,
  measured_value2b: PropTypes.string.isRequired,
  measured_value3a1: PropTypes.string.isRequired,
  measured_value3b1: PropTypes.string.isRequired,
  measured_value3a2: PropTypes.string.isRequired,
  measured_value3b2: PropTypes.string.isRequired,
  measured_value4a: PropTypes.string.isRequired,
  measured_value4b: PropTypes.string.isRequired,
  measured_value5a: PropTypes.string.isRequired,
  measured_value5b: PropTypes.string.isRequired,
  measured_value6a: PropTypes.string.isRequired,
  measured_value6b: PropTypes.string.isRequired,
  measured_value7a: PropTypes.string.isRequired,
  measured_value7b: PropTypes.string.isRequired,
  measured_value8a: PropTypes.string.isRequired,
  measured_value8b: PropTypes.string.isRequired,
  measured_value9a: PropTypes.string.isRequired,
  measured_value9b: PropTypes.string.isRequired,
  measured_value10righta: PropTypes.string.isRequired,
  measured_value10rightb: PropTypes.string.isRequired,
  measured_value10lefta: PropTypes.string.isRequired,
  measured_value10leftb: PropTypes.string.isRequired,
  measured_value11a: PropTypes.string.isRequired,
  measured_value11b: PropTypes.string.isRequired,
  measured_value12a: PropTypes.string.isRequired,
  measured_value12b: PropTypes.string.isRequired,
  measured_value13a: PropTypes.string.isRequired,
  measured_value13b: PropTypes.string.isRequired,
  measured_value14a: PropTypes.string.isRequired,
  measured_value14b: PropTypes.string.isRequired,
  measured_value15a: PropTypes.string.isRequired,
  measured_value15b: PropTypes.string.isRequired,
  measured_value16a: PropTypes.string.isRequired,
  measured_value16b: PropTypes.string.isRequired,
  measured_value17a: PropTypes.string.isRequired,
  measured_value17b: PropTypes.string.isRequired,
  measured_value18a: PropTypes.string.isRequired,
  measured_value18b: PropTypes.string.isRequired,
  change_1: PropTypes.string.isRequired,
  notchange_1: PropTypes.string.isRequired,
  make_1: PropTypes.string.isRequired,
  change_2: PropTypes.string.isRequired,
  notchange_2: PropTypes.string.isRequired,
  make_2: PropTypes.string.isRequired,
};
