import PropTypes from "prop-types";
export default function Table({
  removed_locono,
  provided_locono,
  make1,
  make_rsi1,
  make_rsi2,
  removed_date,
  rsisrno,
  rsisrno_rsi1,
  rsisrno_rsi2,
  provided_date,
  year,
  year_rsi1,
  year_rsi2,
  date_overhaul,
  type,
  type_rsi1,
  type_rsi2,
  actual1_1,
  actual1_2,
  actual2a_1,
  actual2a_2,
  actual2b_1,
  actual2b_2,
  actual3_1,
  actual3_2,
  actual4a_1,
  actual4a_2,
  actual4b_1,
  actual4b_2,
  actual5a_1,
  actual5a_2,
  actual5b_1,
  actual5b_2,
  actual6_1,
  actual6_2,
  actual7_1,
  actual7_2,
  actual8_1,
  actual8_2,
  actual9a_1,
  actual9a_2,
  actual9b_1,
  actual9b_2,
  actual9c_1,
  actual9c_2,
  actual10a_1,
  actual10a_2,
  actual10b_1,
  actual10b_2,
  actual10c_1,
  actual10c_2,
  actual11ip1_1,
  actual11ip1_2,
  actual11op1_1,
  actual11op1_2,
  actual11ip2_1,
  actual11ip2_2,
  actual11op2_1,
  actual11op2_2,
  other_remarks,
}) {
  return (
    <>
      <section className="container">
        <form>
          <div className="header">
            <h2>RSI Overhauling Check Sheet</h2>
          </div>
          <div className="loco-dept"></div>
          <div className="flex-container"></div>
          <br></br>
          <div className="table-responsive">
            <table>
              <tr>
                <td>
                  <label htmlFor="Removed Loco No.">Removed Loco No.</label>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {removed_locono}
                  </div>
                </td>
                <td></td>
                <td></td>
                <td>RSI-1</td>
                <td>RSI-2</td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Provided Loco No. ">Provided Loco No.</label>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {provided_locono}
                  </div>
                </td>
                <td>Make</td>
                <td>
                  <div className="flex items-center justify-center">
                    {make1}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {make_rsi1}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {make_rsi2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Removed Date">Removed Date</label>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {new Date(removed_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </td>
                <td>RSI Sr. No.</td>
                <td>
                  <div className="flex items-center justify-center">
                    {rsisrno}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {rsisrno_rsi1}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {rsisrno_rsi2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Provided Date">Provided Date</label>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {new Date(provided_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </td>
                <td>Mfg Year</td>
                <td>
                  <div className="flex items-center justify-center">{year}</div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {year_rsi1}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {year_rsi2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Date of Overhaul">Date of Overhaul</label>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {new Date(date_overhaul).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </td>
                <td>Type</td>
                <td>
                  <div className="flex items-center justify-center">{type}</div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {type_rsi1}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {type_rsi2}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <br></br>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Check Point</th>
                  <th>Standard</th>
                  <th colSpan="5">Actual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Check visually all components and frame for any damage and
                    deformation
                  </td>
                  <td>No Damage / No deformation / Rectified</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual1_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual1_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="3">2</td>
                  <td>
                    High voltage reverse current test of each diode (As per
                    SMI-67)
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    (a) 700 volts (for NGEF, AGE, CLW make and Ruttansha make
                    RSI)
                  </td>
                  <td>15 Milli Amp (Max.)</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual2a_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual2a_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>(b) 650 Volts ( for Hind make RSI)</td>
                  <td>30 Milli Amp (Max.)</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual2b_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual2b_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Tightening of all diodes with torque wrench at 1.5 Kgms
                  </td>
                  <td>Done</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual3_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual3_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="3">4</td>
                  <td>
                    Apply AC 225 + 5 Volt to input and measure equality of
                    distribution voltage across each diode
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>(a) Without load</td>
                  <td>150 - 180 Volts</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual4a_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual4a_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>(b) With load</td>
                  <td>95 - 100 Volts</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual4b_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual4b_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="3">5</td>
                  <td>
                    Check the resistance of power fuses by Milli Ohm meter
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>(a) 800 V - 500 A fuse</td>
                  <td>0.1 to 0.3 m Ω</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual5a_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual5a_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>(b) 1000 V - 1000 A fuse</td>
                  <td>0.0952 m Ω</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual5b_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual5b_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Check the operation of signal fuse and micro switch </td>
                  <td>Operating properly</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual6_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual6_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Check the working of MVSI and QVSI by keeping HVSI in all
                    positions
                  </td>
                  <td>Proper</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual7_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual7_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Fit the HVSI 1+2 switch in reverse position (Terminal
                    downward)
                  </td>
                  <td>Fitted</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual8_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual8_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="4">9</td>
                  <td>Measure and record insulation resistance</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    (a) AC & DC surge circuits together to each (frame) by 2.5
                    kV megger
                  </td>
                  <td>10 M Ω (Min.)</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual9a_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual9a_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    (b) 380 V AC circuit terminals meter breaker terminals to
                    frame by 1 kV megger
                  </td>
                  <td>10 M Ω (Min.)</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual9b_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual9b_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    (c) Control 110 V DC circuit terminal of air pressure relay
                    Pacco Switch micro switch to frame, by 1 kV megger
                  </td>
                  <td>10 M Ω (Min.)</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual9c_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual9c_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="4">10</td>
                  <td>HV Test to be done</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>(a) AC & DC surge circuits A & DC bus bars to frame</td>
                  <td>
                    5 KV for 1 Min.<br> </br>(withstand)
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual10a_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual10a_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    (b) 380 V AC circuit terminals Pacco switch terminal to
                    earth (frame)
                  </td>
                  <td>
                    3 KV for 1 Min.<br></br> (withstand)
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual10b_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual10b_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    (c) Control 110 V DC Ckt. terminal of Air pressure relay
                    Pacco switch micro switch to frame.
                  </td>
                  <td>
                    1.5 KV for 1 Min. <br></br>(withstand)
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual10c_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual10c_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td rowSpan="5">11</td>
                  <td>
                    Apply single phase AC supply at input terminal and output DC
                    voltage to be checked
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>(without load) IP</td>
                  <td>190 - 240 V AC</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11ip1_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11ip1_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>OP</td>
                  <td> 280 - 350 V D C</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11op1_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11op1_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>IP</td>
                  <td>190 - 240 V AC</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11ip2_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11ip2_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>OP</td>
                  <td>170 - 235 V DC</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11op2_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {actual11op2_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Any other remarks</td>
                  <td colSpan="5">
                    <div className="flex items-center justify-center">
                      {other_remarks}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
        </form>
      </section>
    </>
  );
}

Table.propTypes = {
  removed_locono: PropTypes.string.isRequired,
  provided_locono: PropTypes.string.isRequired,
  make1: PropTypes.string.isRequired,
  make_rsi1: PropTypes.string.isRequired,
  make_rsi2: PropTypes.string.isRequired,
  removed_date: PropTypes.string.isRequired,
  rsisrno: PropTypes.string.isRequired,
  rsisrno_rsi1: PropTypes.string.isRequired,
  rsisrno_rsi2: PropTypes.string.isRequired,
  provided_date: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  year_rsi1: PropTypes.string.isRequired,
  year_rsi2: PropTypes.string.isRequired,
  date_overhaul: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  type_rsi1: PropTypes.string.isRequired,
  type_rsi2: PropTypes.string.isRequired,
  actual1_1: PropTypes.string.isRequired,
  actual1_2: PropTypes.string.isRequired,
  actual2a_1: PropTypes.string.isRequired,
  actual2a_2: PropTypes.string.isRequired,
  actual2b_1: PropTypes.string.isRequired,
  actual2b_2: PropTypes.string.isRequired,
  actual3_1: PropTypes.string.isRequired,
  actual3_2: PropTypes.string.isRequired,
  actual4a_1: PropTypes.string.isRequired,
  actual4a_2: PropTypes.string.isRequired,
  actual4b_1: PropTypes.string.isRequired,
  actual4b_2: PropTypes.string.isRequired,
  actual5a_1: PropTypes.string.isRequired,
  actual5a_2: PropTypes.string.isRequired,
  actual5b_1: PropTypes.string.isRequired,
  actual5b_2: PropTypes.string.isRequired,
  actual6_1: PropTypes.string.isRequired,
  actual6_2: PropTypes.string.isRequired,
  actual7_1: PropTypes.string.isRequired,
  actual7_2: PropTypes.string.isRequired,
  actual8_1: PropTypes.string.isRequired,
  actual8_2: PropTypes.string.isRequired,
  actual9a_1: PropTypes.string.isRequired,
  actual9a_2: PropTypes.string.isRequired,
  actual9b_1: PropTypes.string.isRequired,
  actual9b_2: PropTypes.string.isRequired,
  actual9c_1: PropTypes.string.isRequired,
  actual9c_2: PropTypes.string.isRequired,
  actual10a_1: PropTypes.string.isRequired,
  actual10a_2: PropTypes.string.isRequired,
  actual10b_1: PropTypes.string.isRequired,
  actual10b_2: PropTypes.string.isRequired,
  actual10c_1: PropTypes.string.isRequired,
  actual10c_2: PropTypes.string.isRequired,
  actual11ip1_1: PropTypes.string.isRequired,
  actual11ip1_2: PropTypes.string.isRequired,
  actual11op1_1: PropTypes.string.isRequired,
  actual11op1_2: PropTypes.string.isRequired,
  actual11ip2_1: PropTypes.string.isRequired,
  actual11ip2_2: PropTypes.string.isRequired,
  actual11op2_1: PropTypes.string.isRequired,
  actual11op2_2: PropTypes.string.isRequired,
  other_remarks: PropTypes.string.isRequired,
};
