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
  measured_value10,
  measured_value11,
  measured_value12,
  measured_value13,
  measured_value14,
  measured_value15,
  measured_value16,
  measured_value17,
  measured_value18,
  measured_value19,
  measured_value20,
  change_cup,
  notchange_cup,
  make_cup,
  change_servomotor,
  notchange_servomotor,
  make_servomotor,
  change_ring,
  notchange_ring,
  make_ring,
}) {
  return (
    <>
      <section class="container">
        <form>
          <br></br>
          <div class="table-responsive">
            <table>
              <tr>
                <th>Sr. No.</th>
                <th>Description of Test</th>
                <th>Standard Value</th>
                <th>Measured Value</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  Check complete Drum contacts & Frame for any Damage/defect.
                  (As per Description of Testing). (MMCLW)
                </td>
                <td>No Damages</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value1}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Varnishing of Drum to be done. (MMCLW)</td>
                <td>Done</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value2}
                  </div>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Check thickness of finger contact. (MMCLW) 2 mm (min)</td>
                <td>2 mm (min)</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value3}
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Check the bedding of main contact. (MMCLW)</td>
                <td>80% approx</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value4}
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Checks dip clearance between finger contact and contact holder
                  of main finger contact. (SMI-234)
                </td>
                <td>1.5 – 2.5 mm</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value5}
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  Check Main contact Pressure (SMI-234)<br></br>
                  1000 Amp.<br></br>
                  1500 Amp.
                </td>
                <td>
                  09 – 11 kg/cm2<br></br>
                  11 – 13 kg/cm2
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value6}
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Check Aux. Switch Contact pressure. (SMI-234) 1000 Amp.
                  <br></br>
                  1500 Amp.{" "}
                </td>
                <td>
                  180 – 220 gms.<br></br>
                  160 – 250 gms.
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value7}
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Check Aux. Switch contact gap. (MMCLW)</td>
                <td>4 – 6 mm</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value8}
                  </div>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  Check for proper opening and closing of aux. contact. (MMCLW).
                </td>
                <td>Checked</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value9}
                  </div>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  Check IR with 1000 Volts Megger between<br></br>
                  (a) Forward coil Terminal & frame.<br></br>
                  (b) Reverse coil Terminal & frame (MMCLW)
                </td>
                <td>
                  1 M ohm ( Min)<br></br>1 M ohm ( Min)
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value10}
                  </div>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  Check Air leakage of both EP valves in Energize & De-Energize
                  condition. (MMCLW)
                </td>
                <td>No leakage</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value11}
                  </div>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  Check Air leakage of Servomotor in forward and reverse
                  direction. (MMCLW)
                </td>
                <td>No leakage</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value12}
                  </div>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  Provision of double check nuts at all possible positions.
                  (MMCLW)
                </td>
                <td>Provided</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value13}
                  </div>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>Provision of double Dowell pins at all Places. (MMCLW)</td>
                <td>Provided</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value14}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </section>
      <div style="height: 25px;"></div>

      <section class="container">
        <form>
          <div class="table-responsive">
            <table>
              <tr>
                <th>Sr. No.</th>
                <th>Description of Test</th>
                <th>Standard Value</th>
                <th>Measured Value</th>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  Minimum operating. Air pressure. (CLW Spec.)<br></br>
                  1000 Amp.<br></br>
                  1500 Amp
                </td>
                <td>
                  {" "}
                  2.5 Kg/cm²<br></br>
                  4.00 Kg/cm²
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value15}
                  </div>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  Check 20 times the operation of J/CTF at air pressure 8.5
                  Kg/Cm2 by giving DC Volts (SMI-234).<br></br>
                  70 V<br></br>
                  80 V<br></br>
                  90 V<br></br>
                  110 V{" "}
                </td>
                <td>Checked</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value16}
                  </div>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  MV drop Description of Test of J/CTF at 3 points in cold
                  condition. (SMI-234)<br></br>
                  (a)Connection to connection<br></br>
                  (b)Connection to half contact<br></br>
                  (c)Contact to contact
                </td>
                <td>
                  Done<br></br>
                  60 mv<br></br>
                  30 mv<br></br>
                  10 mv
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value17}
                  </div>
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td>Lock marking at all Nuts & bolts. (MMCLW)</td>
                <td>Marking done</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value18}
                  </div>
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td>Provision of Petroleum jelly on drums. (MMCLW)</td>
                <td>Provided</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value19}
                  </div>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  Replacement of old / Defective Forks to be change during O/H
                  .(MMCLW)
                </td>
                <td>Change / Not change</td>
                <td>
                  <div className="flex items-center justify-center">
                    {measured_value20}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <p></p>
          <b></b>Must change Item of Reverser/CTF<b></b>
          <p></p>
          <br></br>
          <div class="table-responsive">
            <table>
              <tr>
                <th>Sr. No.</th>
                <th>Item Description </th>
                <th>Change</th>
                <th>Not Change</th>
                <th>Make</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Piston cup</td>
                <td>
                  <div className="flex items-center justify-center">
                    {change_cup}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {notchange_cup}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {make_cup}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Servo Motor gasket</td>
                <td>
                  <div className="flex items-center justify-center">
                    {change_servomotor}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {notchange_servomotor}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {make_servomotor}
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Felt ring </td>
                <td>
                  <div className="flex items-center justify-center">
                    {change_ring}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {notchange_ring}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {make_ring}
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
  u: PropTypes.string.isRequired,
  measured_value1: PropTypes.string.isRequired,
  measured_value2: PropTypes.string.isRequired,
  measured_value3: PropTypes.string.isRequired,
  measured_value4: PropTypes.string.isRequired,
  measured_value5: PropTypes.string.isRequired,
  measured_value6: PropTypes.string.isRequired,
  measured_value7: PropTypes.string.isRequired,
  measured_value8: PropTypes.string.isRequired,
  measured_value9: PropTypes.string.isRequired,
  measured_value10: PropTypes.string.isRequired,
  measured_value11: PropTypes.string.isRequired,
  measured_value12: PropTypes.string.isRequired,
  measured_value13: PropTypes.string.isRequired,
  measured_value14: PropTypes.string.isRequired,
  measured_value15: PropTypes.string.isRequired,
  measured_value16: PropTypes.string.isRequired,
  measured_value17: PropTypes.string.isRequired,
  measured_value18: PropTypes.string.isRequired,
  measured_value19: PropTypes.string.isRequired,
  measured_value20: PropTypes.string.isRequired,
  change_cup: PropTypes.string.isRequired,
  notchange_cup: PropTypes.string.isRequired,
  make_cup: PropTypes.string.isRequired,
  change_servomotor: PropTypes.string.isRequired,
  notchange_servomotor: PropTypes.string.isRequired,
  make_servomotor: PropTypes.string.isRequired,
  change_ring: PropTypes.string.isRequired,
  notchange_ring: PropTypes.string.isRequired,
  make_ring: PropTypes.string.isRequired,
};
