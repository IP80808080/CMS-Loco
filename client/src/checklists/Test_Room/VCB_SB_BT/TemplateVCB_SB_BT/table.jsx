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
  actual_value14,
  actual_value15,
  actual_value16,
  actual_value17,
  actual_value18,
  actual_value19,
  actual_value20,
  std_value13,
  actual_value13,
  change_aoh,
  notchange_aoh,
  remark_aoh,
  change_ioh,
  notchange_ioh,
  remark_ioh,
  tech_sign,
  jesse_sign,
  tech_name,
  jesse_name,
}) {
  return (
    <>
      <section className="container">
        <form>
          <div className="loco-dept">
            <div className="flex-container"></div>
            <br> </br>
            <div className="table-responsive">
              <table>
                <tr>
                  <td>
                    <label htmlFor="O/H Date">
                      O/H Date
                      <input
                        type="date"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.oh_date}
                        onChange={(e) => {
                          setData({ ...data, oh_date: e.target.value });
                          setOh_date(e.target.value);
                        }}
                      ></input>
                    </label>
                  </td>
                  <td>
                    <label htmlFor="Schedule -">
                      Schedule -
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.schedule}
                        onChange={(e) => {
                          setData({ ...data, schedule: e.target.value });
                          setSchedule(e.target.value);
                        }}
                      ></input>
                    </label>
                  </td>
                  <td>
                    <label htmlFor="VCB Sr. No -">
                      VCB Sr. No -
                      <input
                        type="text"
                        placeholder="Enter"
                        aria-label=" "
                        value={data.vcb_srno}
                        onChange={(e) => {
                          setData({ ...data, vcb_srno: e.target.value });
                          setVcb_srno(e.target.value);
                        }}
                      ></input>
                    </label>
                  </td>
                </tr>
                <tr></tr>
              </table>
            </div>
          </div>
          <br></br>
          <div className="table-responsive">
            <table>
              <tr>
                <th>Sr. No</th>
                <th>Description of Test</th>
                <th>Standard Value</th>
                <th>Actual Value</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  I. R. Value. <br></br>
                  (1)Power ckt. <br> </br>
                  (2) L.T. ckt.{" "}
                </td>
                <td>
                  (1) Power ckt. 200 mega ohms by 1kv megger.<br></br>
                  (2) L.T. ckt. 10 mega ohms by 500 V megger
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value01}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value2}
                  </div>
                  <br></br>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  High Voltage Test<br></br>
                  (a) Main circuit (Close to Earth)<br></br>
                  (b) Between input and output of main contact (Open)
                  <br></br>
                  (c) To aux circuit{" "}
                </td>
                <td>
                  40 kV AC for 10 Sec. with stood. <br></br>
                  40 kV AC for 10 Sec. with stood. <br></br>
                  2kV AC for 1 min with stood.
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value03}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value04}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value05}
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Aux switch <br></br>
                  (i)Contact check and clean.<br></br>
                  (ii)Check lever assembly for any crackness.
                </td>
                <td>
                  Check & Clean<br></br>
                  No crack
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value06}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    [actual_value07]
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Leakage Test. - </td>
                <td> 10% at 6.5 Kg/cm2 in 10 minutes.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value08}
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  (i) Check resistance of EV Coil at R20º<br></br>
                  (ii) Check resistance of Holding coil at R20º
                </td>
                <td>
                  275 – 321 Ω<br></br>
                  690 – 810 Ω
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value09}
                  </div>
                  <br></br>
                  <div className="flex items-center justify-center">
                    {actual_value10}
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Check pressure regulator setting.</td>
                <td>4.4 – 4.6 Kg/cm2</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value11}
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Pressure Switch Setting.<br></br>
                  a.Cut In <br></br>
                  b.Cut Out.
                </td>
                <td>
                  3.5 – 3.7 kg/cm²<br></br>
                  3.2 – 3.4 kg/cm²
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
              <tr>
                <td>8</td>
                <td>
                  Overhaul<br></br>
                  (a)EV valve assembly<br></br>
                  (b)Pressure Regulator
                </td>
                <td> O/H Done </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value14}
                  </div>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Check the timing of CMDE unit</td>
                <td>600 m.sec.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value15}
                  </div>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Lubrication to be done.</td>
                <td>Done</td>
                <td>
                  <div className="flex items-center justify-center">
                    [actual_value16]
                  </div>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Minimum Operating Voltage.</td>
                <td>≤ 77.0 V.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value17}
                  </div>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Check Q factor of coil.</td>
                <td>Check.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value18}
                  </div>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>Take speed travel record (OEM manual)</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value19}
                  </div>
                </td>{" "}
                <br></br>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value20}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <p1>NOTE:- All points from OEM</p1>
          <br></br>
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>

      <section className="container">
        <form>
          <br></br>
          <p>
            <b>Must change Item of single bottle</b>
          </p>{" "}
          <br></br>
          VCB (Type-BVAC 25.10 M07) of M/s BT<b></b>
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
  u: PropTypes.string.isRequired,
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
  actual_value14: PropTypes.string.isRequired,
  actual_value15: PropTypes.string.isRequired,
  actual_value16: PropTypes.string.isRequired,
  actual_value17: PropTypes.string.isRequired,
  actual_value18: PropTypes.string.isRequired,
  actual_value19: PropTypes.string.isRequired,
  actual_value20: PropTypes.string.isRequired,
  std_value13: PropTypes.string.isRequired,
  actual_value13: PropTypes.string.isRequired,
  change_aoh: PropTypes.string.isRequired,
  notchange_aoh: PropTypes.string.isRequired,
  remark_aoh: PropTypes.string.isRequired,
  change_ioh: PropTypes.string.isRequired,
  notchange_ioh: PropTypes.string.isRequired,
  remark_ioh: PropTypes.string.isRequired,
};
