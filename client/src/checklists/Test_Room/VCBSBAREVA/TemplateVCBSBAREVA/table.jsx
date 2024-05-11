import PropTypes from "prop-types";
export default function Table({
  actual_value01,
  actual_value02,
  actual_value03,
  actual_value04,
  actual_value05,
  actual_value06,
  actual_value07,
  actual_value08,
  actual_value09,
  actual_value10,
  actual_value11,
  actual_value12,
  actual_value13,
  actual_value14,
  actual_value15,
  actual_value16,
  actual_value17,
  actual_value18,
  actual_value19,
  actual_value20,
  change_aoh,
  notchange_aoh,
  remark_aoh,
  change_ioh,
  notchange_ioh,
  remark_ioh,
}) {
  return (
    <>
      <section className="container">
        <form>
          <br></br>
          <div className="table-responsive">
            <table>
              <tr>
                <th>Sr. No</th>
                <th>Description of Test</th>
                <th>Specified Value</th>
                <th>Observed Value</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Surge suppressor current at 110 V AC. </td>
                <td>14 - 19.5 mA </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value01}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pressure regulator setting </td>
                <td>5.2 -5.4 kg/cm²</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value02}
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Record QPDJ setting<br></br>
                  Cut in <br></br>Cut Out
                </td>
                <td>
                  <br></br>4.6 - 4.75 kg/cm² <br></br>3.85 -.4.0 kg/cm²
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value03}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value04}
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Pickup voltage </td>
                <td>55- 70 V DC </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value05}
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>VCB contact travel test. </td>
                <td>Must be taken.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value06}
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Mag. valve resistance at R20C </td>
                <td>798 Ω – 882 Ω</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value07}
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Magnet valve clearance.<br></br>
                  (a)Between armature & armature plate.<br></br>
                  (b) Slight clearance must be available between top fluted
                  valve & stem.
                </td>
                <td>
                  (a) 0.51mm -0.61mm<br></br>
                  (b) Must be available
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value08}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value09}
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Gap between 21 mm setting gauge & operating rod. </td>
                <td>0.25 mm feeler gauge.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value10}
                  </div>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  H.V. Testing. VCB close- power terminal to earth. VCB open -{" "}
                  <br></br>
                  (a) Between I/C terminal to O/G terminal.<br></br>
                  (b) Between I/C terminal to earth terminal.<br></br>
                  (c) Between O/G terminal to earth terminal
                </td>
                <td>
                  40 kV for one minute.
                  <br></br>
                  40 kV for one minute.
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value11}
                  </div>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  I. R. Value. <br></br>
                  (1)Power ckt<br></br>(2)L.T. ckt.{" "}
                </td>
                <td>
                  (1) Power ckt. 200 MΩ by 1 kv megger.<br></br>
                  (2) L.T. ckt. 10 MΩ by by 500V megger
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value12}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value13}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>

      <section className="container">
        <form>
          <div className="table-responsive">
            <table>
              <tr>
                <th>Sr. No</th>
                <th>Description of Test</th>
                <th>Specified Value</th>
                <th>Observed Value</th>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  Air leakage test: -<br></br>
                  (1)VCB OFF position: - After applying air pressure at 6.5
                  Kg/cm2 to the breaker with the control magnet valve
                  de-energized, seal the air entry to the circuit breaker &
                  check the air pressure after 10 minute.<br></br>
                  (2)VCB ON position: - After applying air pressure at 6.5
                  Kg/cm2 to the breaker with the control magnet valve energized,
                  seal the air entry to the circuit breaker & check the air
                  pressure after 10 minute
                </td>
                <td>
                  The drop in pressure must not exceed 10 % of the initial
                  pressure.
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value14}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value15}
                  </div>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Q factor of coil (As per Instructions)</td>
                <td>Checked</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value16}
                  </div>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  Endurance test: - 200 operations to be taken on test bench &
                  see any abnormality.{" "}
                </td>
                <td>
                  <br></br>Must be taken.
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value17}
                  </div>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>Check auxiliary switch and clean the contact . </td>
                <td>Check and clean</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value18}
                  </div>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  Overhaul (a) Magnet valve (b) Air filter (c) Pressure switch
                  (d) Pressure regulator.{" "}
                </td>
                <td>Overhaul done.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value19}
                  </div>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>Take Mili volt Drop of VST ( As per OEM manual)</td>
                <td>46.7 mV</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value20}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <p1>Note:- (1) Point no 1 to 11& 13 to 16 from OEM manual.</p1>
          <br></br>
          <br></br>
          <p></p>
          <b></b>Must change Item of VCB 22 CB <b></b>
          <p></p>
          <br></br>
          <div className="table-responsive">
            <table>
              <tr>
                <th>Sr. No</th>
                <th>Item Description </th>
                <th>Change</th>
                <th>Not Change</th>
                <th>Remark</th>
              </tr>
              <tr>
                <td>1</td>
                <td>AOH Replacement Kit </td>
                <td>
                  <div className="flex items-center justify-center">
                    {change_aoh}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {notchange_aoh}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {remark_aoh}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>IOH Replacement Kit</td>
                <td>
                  <div className="flex items-center justify-center">
                    {change_ioh}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {notchange_ioh}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {remark_ioh}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </section>
    </>
  );
}

Table.propTypes = {
  actual_value01: PropTypes.string.isRequired,
  actual_value02: PropTypes.string.isRequired,
  actual_value03: PropTypes.string.isRequired,
  actual_value04: PropTypes.string.isRequired,
  actual_value05: PropTypes.string.isRequired,
  actual_value06: PropTypes.string.isRequired,
  actual_value07: PropTypes.string.isRequired,
  actual_value08: PropTypes.string.isRequired,
  actual_value09: PropTypes.string.isRequired,
  actual_value10: PropTypes.string.isRequired,
  actual_value11: PropTypes.string.isRequired,
  actual_value12: PropTypes.string.isRequired,
  actual_value13: PropTypes.string.isRequired,
  actual_value14: PropTypes.string.isRequired,
  actual_value15: PropTypes.string.isRequired,
  actual_value16: PropTypes.string.isRequired,
  actual_value17: PropTypes.string.isRequired,
  actual_value18: PropTypes.string.isRequired,
  actual_value19: PropTypes.string.isRequired,
  actual_value20: PropTypes.string.isRequired,
  change_aoh: PropTypes.string.isRequired,
  notchange_aoh: PropTypes.string.isRequired,
  remark_aoh: PropTypes.string.isRequired,
  change_ioh: PropTypes.string.isRequired,
  notchange_ioh: PropTypes.string.isRequired,
  remark_ioh: PropTypes.string.isRequired,
};
