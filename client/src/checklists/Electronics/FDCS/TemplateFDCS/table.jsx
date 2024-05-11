import PropTypes from "prop-types";
export default function Table({
  actual,
  actual_a1,
  actual_a2,
  actual_a3,
  actual_a4,
  actual_a5,
  actual_a6,
  actual_a7,
  actual_b1,
  actual_b2,
  actual_b3,
  actual_b4,
  actual_b5,
  actual_c1,
  actual_c2,
  actual_c3,
  actual_d1,
  actual_d2,
  actual_d3,
  actual_e1,
  actual_e2,
  actual_e3,
  actual_e4,
  actual_e5,
  actual_e6,
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
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-gray-400 px-4 py-2">
                        S. No{" "}
                      </th>
                      <th className="border border-gray-400 px-4 py-2">
                        Points for checking{" "}
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
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Download fault data and record major loggings. Check and
                        record the fault logging history from downloaded data
                        and analyze.
                        <br />
                        1.
                        <br />
                        2.
                        <br />
                        3.
                        <br />
                        4.
                        <br />
                        5.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        There should be no fault message.
                        <br />
                        Issue booking if any fault is noticed
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        A
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Main Unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        Check the proper tightness of mounting bolts of the main
                        control unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper connectivity of the earthing terminal
                        of the main control unit and its tightness.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of Bayonet connectors
                        at control unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of all Facia fixing
                        thumbscrew of the cards.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check and ensure the dust free environment in the
                        control unit. Check the condition of the rubber gasket.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Dust free
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Clean the Bayonet connectors using appropriate connect
                        cleaner.{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Clean
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a6}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Remove all cards and main unit cabinet to be clean by
                        vacuum cleaner.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Clean
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_a7}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        B
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Display Unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the physical condition of unit for any breakage
                        and condition of indication panel and keypad
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {" "}
                        <div className="flex items-center justify-center">
                          {actual_b1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of mounting bolts of Display
                        unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_b2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of bayonet connectors
                        at Display unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_b3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check display units in both cabs and its operation
                        through menu driven keys.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_b4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check and set the proper date and time
                      </td>
                      <td className="border border-gray-400 px-4 py-2">Set</td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_b5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        C
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Signal conditioning unit (SCU)
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of mounting bolts of SCU box.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_c1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check connection tightness.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_c2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of Bayonet connectors
                        at signal conditioning unit.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_c3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        D
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        Current sensing unit/ ISCU
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of mounting bolts of ISCU
                        box.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_d1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check all connection tightness.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_d2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness/locking of bayonet connectors
                        at TM current sensing unit
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_d3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        E
                      </td>
                      <td className="border border-gray-400 px-4 py-2 font-bold">
                        General
                      </td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check the proper tightness of control cable termination
                        on BD Panel.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Tight
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_e1}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Before functional testing Check negative bonding as per
                        prescribed schedule of loco.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_e2}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Before functional testing check all LED status on cards
                        for any abnormality.{" "}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Checked
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_e3}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Ensure all RDSO modifications are completed.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Ensure.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_e4}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check that equipment earthing is intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        Intact
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_e5}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-2"></td>
                      <td className="border border-gray-400 px-4 py-2">
                        Check proper Cleating of cables and provide grommet if
                        necessary.
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        ssdZee34455
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        <div className="flex items-center justify-center">
                          {actual_e6}
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
  actual: PropTypes.string.isRequired,
  actual_a1: PropTypes.string.isRequired,
  actual_a2: PropTypes.string.isRequired,
  actual_a3: PropTypes.string.isRequired,
  actual_a4: PropTypes.string.isRequired,
  actual_a5: PropTypes.string.isRequired,
  actual_a6: PropTypes.string.isRequired,
  actual_a7: PropTypes.string.isRequired,
  actual_b1: PropTypes.string.isRequired,
  actual_b2: PropTypes.string.isRequired,
  actual_b3: PropTypes.string.isRequired,
  actual_b4: PropTypes.string.isRequired,
  actual_b5: PropTypes.string.isRequired,
  actual_c1: PropTypes.string.isRequired,
  actual_c2: PropTypes.string.isRequired,
  actual_c3: PropTypes.string.isRequired,
  actual_d1: PropTypes.string.isRequired,
  actual_d2: PropTypes.string.isRequired,
  actual_d3: PropTypes.string.isRequired,
  actual_e1: PropTypes.string.isRequired,
  actual_e2: PropTypes.string.isRequired,
  actual_e3: PropTypes.string.isRequired,
  actual_e4: PropTypes.string.isRequired,
  actual_e5: PropTypes.string.isRequired,
  actual_e6: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
};
