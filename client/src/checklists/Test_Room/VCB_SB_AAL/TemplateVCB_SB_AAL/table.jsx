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
  loco_no2,
  date_2,
  change_aoh,
  notchange_aoh,
  remark_aoh,
  change_ioh,
  notchange_ioh,
  remark_ioh,
  remark,
  tech_sign,
  jesse_sign,
  tech_name,
  jesse_name,
}) {
  return (
    <>
      <section className="container">
        <form>
          <br> </br>
          <div className="table-responsive">
            <table>
              <tr>
                <th>Sr. No.</th>
                <th>Description of Test</th>
                <th>Standard Value</th>
                <th>Actual Value</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  I. R. Value. <br></br>
                  (1)Power ckt.<br></br>
                  (2) L.T. ckt{" "}
                </td>
                <td>
                  (1) Power ckt. 200 mega ohms by 1kv megger.<br></br>
                  (2) L.T. ckt. 10 mega ohms by 500 V megger
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value10}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value02}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  High Voltage Test<br></br>
                  (a) Fix Contact (HT) to Earth & Moving Contact (HT).
                  <br></br>
                  (b) Earth to Contacts (HT).<br></br>
                  (c) Earth & LT Terminals.
                </td>
                <td>
                  40 kV AC for 10 sec. withstand <br></br>
                  40 kV AC for 10 sec. withstand <br></br>2 kV AC for 1 min
                  withstand
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value03}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value04}
                  </div>
                </td>
                <td>
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
                <td> Check & Clean No crack</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value06}
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Leakage Test. - </td>
                <td> 10% at 6.5 Kg/cm2 in 10 minutes.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value07}
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Check resistance of holding coil. (1510+/-8%)</td>
                <td>1390 – 1630 Ω</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value08}
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Check pressure regulator setting.</td>
                <td>4.4 – 4.6 Kg/cm2</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value09}
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Pressure Switch Setting.<br></br>
                  (a)Cut In.<br></br>
                  (b) Cut Out.
                </td>
                <td>
                  {" "}
                  3.5 – 3.7 kg/cm²<br></br>
                  3.2 – 3.4 kg/cm²
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value10}
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
                <td> O/H Done</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value11}
                  </div>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Minimum Operating Voltage.</td>
                <td>≤ 77.0 V.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value12}
                  </div>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Check Q factor of coil.</td>
                <td>Check</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value13}
                  </div>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>Lubrication to be done.</td>
                <td>Done</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value14}
                  </div>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>Take speed travel record As per OEM</td>
                <td>Done</td>
                <td>
                  <div className="flex items-center justify-center">
                    {actual_value15}
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
          <div className="header-text">
            <h4>
              CENTRAL RAILWAY <br></br>ELECTRIC LOCO SHED, BHUSAWAL
            </h4>
          </div>
          <label htmlFor="loco-number">Loco No:</label>
          <div className="flex items-center justify-center">{loco_no2}</div>
          <label htmlFor="date">Date:</label>
          <div className="flex items-center justify-center">{date_2}</div>
          <br></br>
          <div>
            <label htmlFor="section">Section:</label>
            <span>Test Room</span>
          </div>
          <div>
            <label htmlFor="inspection">Inspection:</label>
            <span>
              AOH<input type="checkbox" aria-label=" "></input> IOH
              <input type="checkbox" aria-label=" "></input> TOH
              <input type="checkbox" aria-label=" "></input>
            </span>
          </div>
          <br></br>
          <p></p>
          <b></b>Must change Item of single bottle VCB<br></br>(Type- VCBA 25.10
          Tr) of M/s AAL<b></b>
          <p></p>
          <br></br>
          <div className="table-responsive">
            <table>
              <tr>
                <th>Sr. No.</th>
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
};
