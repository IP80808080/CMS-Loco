import PropTypes from "prop-types";
export default function Details({
    loco_no,
    TMsr_no,
    date_removed,
    reason_removed,
    actualvalueI01,
    actualvalueI02,
    actualvalueI03,
    actualvalueI04,
    actualvalueI05,
    actualvalueI06,
    date_oh,
    TMsr1_no,
    make_1,
    rotor_no,
    make_2,
    pinion_no,
    make_3,
    bearing_de,
    bearing_nde,
    actualvalue_a1,
    actualvalue_a2,
    actualvalue_a3,
    actualvalue_a4,
    actualvalue_b1,
    actualvalue_c1,
    actualvalue_c2,
    actualvalue_c3,
    actualvalue_c4,
    actualvalue_c4_1,
    actualvalue_c5,
    actualvalue_c6,
    actualvalue_c7,
    actualvalue_d1,
    actualvalue_d2,
    actualvalue_d3,
    actualvalue_d4,
    actualvalue_d5,
    actualvalue_d6,
    actualvalue_d7,
    actualvalue_d8,
    actualvalue_d9,
    actualvalue_d10,
    actualvalue_d11,
    actualvalue_d12,
    actualvalue_d13,
    actualvalue_d14,
    actualvalue_d15,
    actualvalue_d16,
    srno_e,
    make_e,
    actualvalue_e1,
    actualvalue_e2,
    actualvalue_e3,
    actualvalue_e4,
    actualvalue_e4_1,
    actualvalue_e5,
    actualvalue_e6,
    srno_f,
    make_f,
    actualvalue_f1,
    actualvalue_f2,
    actualvalue_f3,
    actualvalue_g1,
    actualvalue_g2,
    actualvalue_g3,
    actualvalue_g4,
    actualvalue_g5,
    actualvalue_g6,
    actualvalue_h1,
    actualvalue_h2,
    actualvalue_h3,
    actualvalue_h4,
    actualvalue_i1,
    actualvalue_i2,
    actualvalue_i3,
    actualvalue_i4,
    tech_name,
    tech_sign,
    jesse_name,
    jesse_sign,
}) {
  return (
    <>
    <head>
      <meta charset="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>TM 6RA6068 overhauling checksheet</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <link rel="stylesheet" href="TM 6RA6068.css"></link>
    </head>
    <body>
      <section class="container">
        <form>
          <p>Electric Loco Shed (Bhusaval)</p>
          <div class="header">
            <div>
              <h2>TM</h2>
            </div>
            <div class="vertical-line"></div>
            <div class="header-text-container">
              <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
            </div>
          </div>
          <br></br>
          <div class="labels">
            <label for="loco-no">LOCO NO. (REMOVED) :</label>
            <div className="flex items-center justify-center">
                  {loco_no}
                </div>
            <label for="tm-sr-no">TM SR. NO. :</label>
            <div className="flex items-center justify-center">
                  {TMsr_no}
                </div>
            <br></br>
            <label for="date-removed">DATE OF REMOVED :</label>
            <div className="flex items-center justify-center">
            {new Date(date_removed).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
                </div>
            <label for="reason-removed">REASON OF REMOVAL :</label>
            <div className="flex items-center justify-center">
                  {reason_removed}
                </div>
          </div>
          <br></br>
          <h4>
            <b class="underline">Traction motor</b>
          </h4>
          <p1>
            <b>[I]Before dismantle:</b>
          </p1>
          <br></br>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Check TM visually & note down defects & deficiency
                  </td>
                  <td>No defect</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalueI01}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Check IR value by 2.5KV megger for all three phase
                    (Refer: ABB Manual){" "}
                  </td>
                  <td>R greater=2.18M ohm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalueI02}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Measure inductance by LCR meter </td>
                  <td>Diff between phases 0.015 mH.</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalueI03}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Do run test on VVVF test bench.</td>
                  <td>NO defect/noise</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalueI04}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Check the difference in resistance between AB & CD
                    terminals of temperature sensor. Check shielding of
                    cable.
                  </td>
                  <td> 0.3 ohm </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalueI05}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Remove the pinion by hydraulic pinion extractor.{" "}
                  </td>
                  <td>Maximum pressure of pinion removal-1800 bar</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalueI06}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>

      <section class="container">
        <form>
          <p>Electric Loco Shed (Bhusaval)</p>
          <div class="header">
            <div>
              <h2>TM</h2>
            </div>
            <div class="vertical-line"></div>
            <div class="header-text-container">
              <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
            </div>
          </div>
          <br></br>
          <div class="labels">
            <label for="date-of-oh">DATE OF O/H :</label>
            <div className="flex items-center justify-center">
            {new Date(date_oh).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
                </div>
            <br></br>
            <label for="tm-sr-no">TM SR. NO. :</label>
            <div className="flex items-center justify-center">
                  {TMsr1_no}
                </div>
            <label for="make-tm">MAKE:</label>
            <div className="flex items-center justify-center">
                  {make_1}
                </div>
            <br></br>
            <label for="rotor-no">ROTOR NO:</label>
            <div className="flex items-center justify-center">
                  {rotor_no}
                </div>
            <label for="make-rotor">MAKE:</label>
            <div className="flex items-center justify-center">
                  {make_2}
                </div>
            <br></br>
            <label for="pinion-no">PINION NO/:</label>
            <div className="flex items-center justify-center">
                  {pinion_no}
                </div>
            <label for="make-pinion">MAKE:</label>
            <div className="flex items-center justify-center">
                  {make_3}
                </div>
            <br></br>
            <label for="bearing-no-de">BEARING NO/MAKE DE :</label>
            <div className="flex items-center justify-center">
                  {bearing_de}
                </div>
            <br></br>
            <label for="bearing-no-nde">BEARING NO/MAKE NDE :</label>
            <div className="flex items-center justify-center">
                  {bearing_nde}
                </div>
          </div>
          <br></br>
          <h4>
            <b class="underline">II] Motor Assembly:</b>
          </h4>
          <p1>
            <b>(A) Stator:</b>
          </p1>
          <br></br>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Cleaning of Stator by compressed air at reduced
                    pressure 3Kg/cm2. Clean with cloth and petrol.
                  </td>
                  <td>Cleaned</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_a1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Bake the stator at 120 Deg C for 8 hours in case of
                    wet cleaning.{" "}
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_a2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Check the IR value of stator by 2.5kv megger (Refer:
                    - CLW WI-21, 4.11)
                  </td>
                  <td> less than 2.18Mohms</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_a3}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Check the general condition of stator coils, slots,
                    overhangs, wedges, punching, cord loosening on
                    overhang, welding of tension plate, brazing of phase
                    rings & neutral ring & polyesters silk tape on
                    overhang portion.(Refer CLW Drg
                    No:-2TWD/096.083&1TWD.096.013)
                  </td>
                  <td>No abnormality.</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_a4}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
        </form>
        <b>(B) ROTOR:</b>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>CHECK/TEST</th>
                <th>STANDARD VALUE</th>
                <th>ACTUAL VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Check the condition of balance weight, half ring
                  welding, resistance ring, shrink ring & copper bars,
                  end punching and mid punching
                  <b>(Refer CLW Drg. No: - 0TWD.096.002 Alt-1)</b>
                </td>
                <td>No abnormality</td>
                <td>
                <div className="flex items-center justify-center">
                  {actualvalue_b1}
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <b>(C) Pinion fitment</b>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>CHECK/TEST</th>
                <th>STANDARD VALUE</th>
                <th>ACTUAL VALUE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Check base tangent length for pinion.<br></br>
                  Refer drawing nos:
                  <br></br>
                  (21 Teeth SKDP 3847)
                </td>
                <td>
                  21 Teeth Pinion New<br></br>
                  77.580-77.530mm over 4 teeth <br></br>
                  Cond. Value 77.115 mm (Limit)
                </td>
                <td>
                <div className="flex items-center justify-center">
                  {actualvalue_c1}
                </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Clean the tapered portion by cloth & paper & thinner &
                  dry its hole by compressed air. Pinion must be free
                  from any grease.{" "}
                </td>
                <td>Cleaned</td>
                <td>
                <div className="flex items-center justify-center">
                  {actualvalue_c2}
                </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Check MPT & UST of pinion</td>
                <td>Crack/normal.</td>
                <td>
                <div className="flex items-center justify-center">
                  {actualvalue_c3}
                </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  For insertion of pinion apply initial pressure. Allow
                  glycerin to spread on the complete inside surface for
                  proper fitment of pinion.{" "}
                </td>
                <td>1700 bar to max 2000 bar.</td>
                <td>
                <div className="flex items-center justify-center">
                  {actualvalue_c4}
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <br></br>
      </section>
      <div style="height: 25px;"></div>

      <section class="container">
        <form>
          <p>Electric Loco Shed (Bhusaval)</p>
          <div class="header">
            <div>
              <h2>TM</h2>
            </div>
            <div class="vertical-line"></div>
            <div class="header-text-container">
              <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
            </div>
          </div>
          <br></br>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                  <td>
                    Apply simultaneous pressure by pinion extraction
                    machine and pushing jack to insert the pinion. (Ref:
                    ABB Manual)
                  </td>
                  <td>
                    1700 bar to max 2000bar.
                    <br></br>200bar to max 400bar.
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_c5}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Check Gap between pinion and outer face of shaft.
                  </td>
                  <td>3-5 mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_c6}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Check advancement of Pinion during fitment. ( As per
                    ABB Manual)
                  </td>
                  <td>12mm + / _ 0.1mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_c7}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Check the general condition of stator coils, slots,
                    overhangs, wedges, punching, cord loosening on
                    overhang, welding of tension plate, brazing of phase
                    rings & neutral ring & polyesters silk tape on
                    overhang portion.(Refer CLW Drg
                    No:-2TWD/096.083&1TWD.096.013)
                  </td>
                  <td>No abnormality.</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_c4_1}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <b>(D) END SHIELD AND BEARING:</b>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Measure inner stopper seat (OD) on shaft<br></br>
                    (Refer CLW Drg.No:- 1TWD.096.009 Alt-1) RDSO/MS/415
                  </td>
                  <td>
                    DE -184.050-184.079 mm<br></br>
                    NDE-105.037-105.059 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Measure ID of inner stopper <br></br>
                    (Refer CLW Drg. No: 4TWD.096.043- Alt-6 DE
                    4TWD.096.042 Alt-6 NDE, RDSO/MS/415)
                  </td>
                  <td>
                    DE -184.000-184.040 mm<br></br>
                    NDE-105.000-105.025 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Measure racer seat dia on shaft (OD) <br></br>
                    (Refer CLW Drg. No: - 1TWD.096.009 Alt-1)
                    RDSO/MS/415
                  </td>
                  <td>
                    DE - 180.043-180.068 mm<br></br>
                    NDE- 100.023-100.045 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d3}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Inner Racer ID ( RDSO/MS/415)</td>
                  <td>
                    DE - 179.975- 180.00 mm <br></br>
                    NDE-99.985-100.00 mm SKF<br></br>
                    NDE- 99.980-100.00 mm FAG
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d4}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Measure Outer labyrinth seat dia on shaft(OD)
                    <br></br>(Refer CLW Drg. No: - 1TWD.096.009 Alt-1)
                  </td>
                  <td>DE-179.843 -179.868 mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d5}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Measure Outer labyrinth ID
                    <br></br>(Refer CLW Drg. No: 4TWD.096.029 Alt-6)
                  </td>
                  <td>DE- 179.748 - 179.783 mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d6}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Measure bearing housing bore dia on end frame{" "}
                    <br></br>
                    (Refer CLW Drg No. 1TWD.096.005 Alt-6–DE) <br></br>
                    0TWD.096.003 Alt-9 NDE,RDSO/MS/415,Amd-3
                  </td>
                  <td>
                    DE -319. 950 - 319.990 mm<br></br>
                    NDE- 214.948-214.970 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d7}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Measure Outer diameter of bearing (OD) (RDSO/MS/415)
                  </td>
                  <td>
                    DE- 319.960- 320.00 mm<br></br>
                    NDE-214.970-215.00mm,FAG<br></br>
                    NDE-214.980-215.00mm,SKF
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d8}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Measure inner labyrinth seat bore dia on end frame
                    (ID)<br></br> ( CLW Drg No-1TWD.096.005Alt-6 –DE)
                    <br></br>(0TWD.096.003 Alt-8–NDE) ( RDSO/MS/415)
                  </td>
                  <td>
                    DE - 305.025-305.050 mm<br></br>
                    NDE- 205.010-205.040 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d9}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    Measure Outer diameter of inner labyrinth (OD){" "}
                    <br> </br> Refer CLW Drg.No-4TWD.096.028Alt-5 –DE
                    <br> </br>4TWD.096.031 Alt-5 –NDE ( RDSO/MS/415)
                  </td>
                  <td>
                    DE - 305.060-305.080 mm<br></br>
                    NDE- 205.050-205.070 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d10}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    Radial clearance of bearing before fitment (FAG
                    Manual)
                  </td>
                  <td>
                    DE - 0.165-0.215 mm<br></br>
                    NDE - 0.105-0.140 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d11}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    Measure radial clearance of bearing after
                    fitment.(FAG Manual)
                  </td>
                  <td>
                    DE - 0.100-0.170 mm<br></br>
                    NDE - 0.060-0.100 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d12}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Measure quantity of grease added </td>
                  <td>
                    DE - 1.400 kg<br></br>
                    NDE - 400 gm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d13}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Axial play ( RDSO/SMI/278) and 1 & SMI 323</td>
                  <td>200 - 400 micron</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d14}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>
                    Clearance between outer face of end shield & inner
                    face of bearing cap (NDE)
                    <br></br>(RDSO MS - 460 )
                  </td>
                  <td>0.5 ± 0.45 mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d15}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>
                    Clearance between outer face of end shield & inner
                    face of outer bearing cap (DE)
                    <br></br>(RDSO MS - 466 )
                  </td>
                  <td>
                    0.5 + 0.45 mm<br></br>- 0.3 mm
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_d16}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>

      <section class="container">
        <form>
          <p>Electric Loco Shed (Bhusaval)</p>
          <div class="header">
            <div>
              <h2>TM</h2>
            </div>
            <div class="vertical-line"></div>
            <div class="header-text-container">
              <h2>Check Sheet for TM Type 6FRA-6068 overhauling </h2>
            </div>
          </div>
          <p1>
            <b>(E) TEMPERATURE SENSOR</b>
          </p1>
          <br></br>
          <br></br>
          <div class="labels">
            <label for="Sr. no.">Sr. no.:</label>
            <div className="flex items-center justify-center">
                  {srno_e}
                </div>
            <label for="Make - ">Make - </label>
            <div className="flex items-center justify-center">
                  {make_e}
                </div>
          </div>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Clean the temperature sensor hole in stator frame by
                    compressed air{" "}
                  </td>
                  <td>clean</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Check the depth of hole by depth gauge</td>
                  <td>103mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Put heat shrink sleeve & glass fiber sleeve on leads
                    & PT unit. Measure length of PTFE lead
                  </td>
                  <td>155 - 165mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e3}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Fix the probes with stator body frame </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e4}
                </div>
                    -
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e4_1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Fix the probes with stator body frame </td>
                  <td> 0.3 ohm </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e5}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Check the condition of rubber gasket upper foam and
                    lower foam gasket below the probe housing.{" "}
                  </td>
                  <td>check</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_e6}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <b>(F) SPEED SENSOR</b>
          <div class="labels">
            <label for="Sr. no.">Sr. no.:</label>
            <div className="flex items-center justify-center">
                  {srno_f}
                </div>
            <label for="Make - ">Make - </label>
            <div className="flex items-center justify-center">
                  {make_f}
                </div>
          </div>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Measure the resistance of connector blue and red
                    across AB terminals{" "}
                  </td>
                  <td>
                    102 ohm 125 ohm (Weigand)<br></br>
                    10.2 – 10.4 ohm (Hall effect)
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_f1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Measure the output of speed sensor for its amplitude
                    and frequency of output pulse if required. (
                    Ref;-RDSO/2008/EL/SMI/0252/Rev,”0”){" "}
                  </td>
                  <td>
                    Output pulse voltage <br></br>
                    or = 350mV for new <br></br>sensor or = 250mV for
                    old sensor<br></br>
                    Wide variation in pulse /<br></br>
                    No variation.{" "}
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_f2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Check speed sensor cables are not chaffed or damaged
                    in any way.
                  </td>
                  <td>No damage</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_f3}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <b>(G) OTHERS</b>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Check the power cable fitted in junction box.</td>
                  <td>Good/bad</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_g1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    Check the condition of grommet, power cable
                    insulation, lug and SB. If required replace,
                  </td>
                  <td>Good /bad</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_g2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Check the conditions of holes of bellow plate
                    already fitted{" "}
                  </td>
                  <td>No damaged.</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_g3}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Check the crack-ness of holder plate Lug by MPT test{" "}
                  </td>
                  <td>No crack</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_g4}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Check the tightness of M30x160 bolt in holder plate
                    by 133 kg-mtr and its locking.
                  </td>
                  <td>Done</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_g5}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Check Gap Between Speed Sensor and PG Ring with the
                    help of Jig and adjust.
                  </td>
                  <td>0.5 - 1.000 mm</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_g6}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>

      <section class="container">
        <form>
          <p>Electric Loco Shed (Bhusaval)</p>
          <div class="header">
            <div>
              <h2>TM</h2>
            </div>
            <div class="vertical-line"></div>
            <div class="header-text-container">
              <h2>Check Sheet for TM Type 6FRA-6068 overhauling</h2>
            </div>
          </div>
          <br></br>
          <p1>
            <b>(H) RUN TEST :</b>
          </p1>
          <br></br>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>CHECK/TEST</th>
                  <th>STANDARD VALUE</th>
                  <th>ACTUAL VALUE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Run the motor for one hour. Test conducted on VVVF
                    drive.
                  </td>
                  <td>Normal.</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_h1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Note Temperature of TM at DE & NDE bearing. </td>
                  <td>
                    Ambient temperature (A)<br></br>
                    DE- A+30deg<br></br>
                    NDE-A+30deg.
                  </td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_h2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    Check the condition of M-16 tapped holes in end
                    frame for fitment of gear case.
                  </td>
                  <td>ok</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_h3}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Final inductance </td>
                  <td>Diff between phases 0.015mH.</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_h4}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <b>(I) MUST CHANGE ITEM OF AOH/IOH :</b>
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Items</th>
                  <th>P. L. No.</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rubber ‘O’ Ring (AOH/IOH)</td>
                  <td>29250080</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_i1}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Pinion 21 Teeth (IOH)</td>
                  <td>29420052</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_i2}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Set of labyrinth- DE side (IOH)</td>
                  <td>29940096</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_i3}
                </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Set of Labyrinth – NDE side (IOH)</td>
                  <td>29940102</td>
                  <td>
                  <div className="flex items-center justify-center">
                  {actualvalue_i4}
                </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="signature">
            <label for="Name of tech:">Name of Tech :</label>
            <div className="flex items-center justify-center">
                  {tech_name}
                </div>
            <br></br>
            <label for="Sign of JE/SSE :">Sign of JE/SSE : </label>
            <div className="flex items-center justify-center">
                  {tech_sign}
                </div>
            <br></br>
            <label for="Name of JE/SSE and sign: ">
              Name of JE/SSE and sign :
            </label>
            <div className="flex items-center justify-center">
                  {jesse_name}
                </div>
                <div className="flex items-center justify-center">
                  {jesse_sign}
                </div>
          </div>
          <br></br>
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </body>
  </>
  );
}
Details.propTypes = {
  loco_no: PropTypes.string.isRequired,
  TMsr_no: PropTypes.string.isRequired,
  date_removed: PropTypes.string.isRequired,
  reason_removed: PropTypes.string.isRequired,
  actualvalueI01: PropTypes.string.isRequired,
  actualvalueI02: PropTypes.string.isRequired,
  actualvalueI03: PropTypes.string.isRequired,
  actualvalueI04: PropTypes.string.isRequired,
  actualvalueI05: PropTypes.string.isRequired,
  actualvalueI06: PropTypes.string.isRequired,
  date_oh: PropTypes.string.isRequired,
  TMsr1_no: PropTypes.string.isRequired,
  make_1: PropTypes.string.isRequired,
  rotor_no: PropTypes.string.isRequired,
  make_2: PropTypes.string.isRequired,
  pinion_no: PropTypes.string.isRequired,
  make_3: PropTypes.string.isRequired,
  bearing_de: PropTypes.string.isRequired,
  bearing_nde: PropTypes.string.isRequired,
  actualvalue_a1: PropTypes.string.isRequired,
  actualvalue_a2: PropTypes.string.isRequired,
  actualvalue_a3: PropTypes.string.isRequired,
  actualvalue_a4: PropTypes.string.isRequired,
  actualvalue_b1: PropTypes.string.isRequired,
  actualvalue_c1: PropTypes.string.isRequired,
  actualvalue_c2: PropTypes.string.isRequired,
  actualvalue_c3: PropTypes.string.isRequired,
  actualvalue_c4: PropTypes.string.isRequired,
  actualvalue_c4_1: PropTypes.string.isRequired,
  actualvalue_c5: PropTypes.string.isRequired,
  actualvalue_c6: PropTypes.string.isRequired,
  actualvalue_c7: PropTypes.string.isRequired,
  actualvalue_d1: PropTypes.string.isRequired,
  actualvalue_d2: PropTypes.string.isRequired,
  actualvalue_d3: PropTypes.string.isRequired,
  actualvalue_d4: PropTypes.string.isRequired,
  actualvalue_d5: PropTypes.string.isRequired,
  actualvalue_d6: PropTypes.string.isRequired,
  actualvalue_d7: PropTypes.string.isRequired,
  actualvalue_d8: PropTypes.string.isRequired,
  actualvalue_d9: PropTypes.string.isRequired,
  actualvalue_d10: PropTypes.string.isRequired,
  actualvalue_d11: PropTypes.string.isRequired,
  actualvalue_d12: PropTypes.string.isRequired,
  actualvalue_d13: PropTypes.string.isRequired,
  actualvalue_d14: PropTypes.string.isRequired,
  actualvalue_d15: PropTypes.string.isRequired,
  actualvalue_d16: PropTypes.string.isRequired,
  srno_e: PropTypes.string.isRequired,
  make_e: PropTypes.string.isRequired,
  actualvalue_e1: PropTypes.string.isRequired,
  actualvalue_e2: PropTypes.string.isRequired,
  actualvalue_e3: PropTypes.string.isRequired,
  actualvalue_e4: PropTypes.string.isRequired,
  actualvalue_e4_1: PropTypes.string.isRequired,
  actualvalue_e5: PropTypes.string.isRequired,
  actualvalue_e6: PropTypes.string.isRequired,
  srno_f: PropTypes.string.isRequired,
  make_f: PropTypes.string.isRequired,
  actualvalue_f1: PropTypes.string.isRequired,
  actualvalue_f2: PropTypes.string.isRequired,
  actualvalue_f3: PropTypes.string.isRequired,
  actualvalue_g1: PropTypes.string.isRequired,
  actualvalue_g2: PropTypes.string.isRequired,
  actualvalue_g3: PropTypes.string.isRequired,
  actualvalue_g4: PropTypes.string.isRequired,
  actualvalue_g5: PropTypes.string.isRequired,
  actualvalue_g6: PropTypes.string.isRequired,
  actualvalue_h1: PropTypes.string.isRequired,
  actualvalue_h2: PropTypes.string.isRequired,
  actualvalue_h3: PropTypes.string.isRequired,
  actualvalue_h4: PropTypes.string.isRequired,
  actualvalue_i1: PropTypes.string.isRequired,
  actualvalue_i2: PropTypes.string.isRequired,
  actualvalue_i3: PropTypes.string.isRequired,
  actualvalue_i4: PropTypes.string.isRequired,
  tech_name: PropTypes.string.isRequired,
  tech_sign: PropTypes.string.isRequired,
  jesse_name: PropTypes.string.isRequired,
  jesse_sign: PropTypes.string.isRequired,
};
