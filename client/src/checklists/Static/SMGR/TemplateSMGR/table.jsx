import PropTypes from "prop-types";
export default function Table({
  oh_date,
  se_no,
  smgr_srno,
  make,
  removed_locono,
  provided_locono,
  date_provided,
  paya1_1,
  paya1_2,
  paya1_3,
  paya1_4,
  paya2,
  paya3,
  paya4,
  paya5_ve1,
  paya5_ve2,
  paya6_ve1,
  paya6_ve2,
  paya7,
  paya8_ve1,
  paya8_ve2,
  paya9_ve1,
  paya9_ve2,
  paya10,
  paya11,
  paya12,
  paya13,
  paya14,
  paya15,
  paya16,
  paya17,
  paya18,
  paya19,
  paya20,
  done_336,
  notdone_336,
  done_358,
  notdone_358,
  remark1,
  remark2,
  remark3,
  remark4,
  remark5,
  remark6,
}) {
  return (
    <>
      <section className="container">
        <form>
          <br></br>
          <div className="loco-dept"> </div>
          <div className="flex-container"></div>
          <div className="table-responsive">
            <table>
              <tr>
                <td>
                  O/H Date :-
                  <div className="col-span-3 sm:col-span-1">
                    <span style={{ whiteSpace: "pre" }}></span>
                    {new Date(oh_date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </td>
                <td>
                  SE No:-
                  <div className="flex items-center justify-center">
                    {se_no}
                  </div>
                </td>
                <td>
                  SMGR Sr. No.: -{" "}
                  <div className="flex items-center justify-center">
                    {smgr_srno}
                  </div>
                  <br></br>Make:-
                  <div className="flex items-center justify-center">{make}</div>
                </td>
              </tr>
              <tr>
                <td>
                  Removed from Loco No:
                  <div className="flex items-center justify-center">
                    {removed_locono}
                  </div>
                </td>
                <td>
                  Provided in Loco No: -
                  <div className="flex items-center justify-center">
                    {provided_locono}
                  </div>
                </td>
                <td>
                  Provided Date: -
                  <div className="col-span-3 sm:col-span-1">
                    <span style={{ whiteSpace: "pre" }}></span>
                    {new Date(date_provided).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="table-responsive">
            <table>
              <tr>
                <th>अ.</th>
                <th>जांच का विवरण </th>
                <th>मानक </th>
                <th>पाया गया </th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  प्लंजर कंप्लीट A 5317(valve push rod) बोल्ट के हैड (A 5317.5)
                  और स्लीव (A 5317.6) के बीच गैप की जांच करें !
                </td>
                <td>0.4 to 0.7 mm</td>
                <td>
                  (1){" "}
                  <div className="flex items-center justify-center">
                    {paya1_1}
                  </div>
                  (2)
                  <div className="flex items-center justify-center">
                    {paya1_2}
                  </div>
                  <br> </br>
                  (3){" "}
                  <div className="flex items-center justify-center">
                    {paya1_3}
                  </div>
                  (4)
                  <div className="flex items-center justify-center">
                    {paya1_4}
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  कंट्रोल लीवर [A 4540] इंटरमीडिएट व्हील के गाइड सेगमेंट और
                  कंट्रोल लीवर के बीच गैप की जांच करें !
                </td>
                <td>0.4 to 0.7 mm</td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  कंट्रोल लीवर के toothed segment (A 4540.2) और फ्लायव्हील के
                  बीच गैप की जांच करें !
                </td>
                <td>0.7 mm से कम नहीं होना चाहिए </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya3}
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  फ्लायव्हील के ढीलेपन /वावलिंग(looseness / wobbling) की जांच
                  करें!
                </td>
                <td>कोई ढीलापन नहीं </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya4}
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  {" "}
                  3.5 kg/cm² पर वाल्व A 4150.3 (VE.1 & VE.2 valves) के सही
                  ऑपरेशन के लिए आवश्यक न्यूनतम वोल्टेज [कंट्रोल कोईल (VE.1 VE.2)
                  का पिक अप वोल्टेज] की जांच करें!
                </td>
                <td>53 V- 65 V</td>
                <td>
                  VE1{" "}
                  <div className="flex items-center justify-center">
                    {paya5_ve1}
                  </div>
                  <br></br>
                  VE2{" "}
                  <div className="flex items-center justify-center">
                    {paya5_ve2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>ड्रॉप-आउट वोल्टेज की जांच करें !</td>
                <td>11 V न्यूनतम </td>
                <td>
                  VE1{" "}
                  <div className="flex items-center justify-center">
                    {paya6_ve1}
                  </div>
                  <br></br>
                  VE2{" "}
                  <div className="flex items-center justify-center">
                    {paya6_ve2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>एयर लीकेज टेस्ट की जांच करें !</td>
                <td>10 मिनट में 10% से अधिक नहीं होनाचाहिए </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya7}
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>कॉईल के क्यू – फेक्टर की जांच करें !</td>
                <td>जांच किया </td>
                <td>
                  VE1{" "}
                  <div className="flex items-center justify-center">
                    {paya8_ve1}
                  </div>
                  <br></br>VE2
                  <div className="flex items-center justify-center">
                    {paya8_ve2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  R20C पर कंट्रोल कॉईल VE -1 and VE -2 के प्रतिरोध की जांच करें!
                </td>
                <td>313 Ω - 383 Ω</td>
                <td>
                  VE1{" "}
                  <div className="flex items-center justify-center">
                    {paya9_ve1}
                  </div>
                  <br></br>VE2
                  <div className="flex items-center justify-center">
                    {paya9_ve2}
                  </div>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>VE I & VE II के क्लियरेंस की जांच करें!</td>
                <td>0.5 mm</td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya10}
                  </div>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>
                  एयर मोटर का समय(0 -32 लगातार).प्रोग्रेसन का समय(9 to 13 sec.).
                  रिग्रेसन का समय(9 to 13 sec.).
                </td>
                <td>
                  9 to 13 sec. <br> </br>9 to 13 sec.
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya11}
                  </div>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>
                  फ्रीव्हीलिंग डायोड के ओपन /शॉर्ट न होने की जांच करें कंट्रोल
                  कॉईल VE – 1, VE – 2 के इंटरटर्न शॉर्ट न होने की जांच करें{" "}
                </td>
                <td>कोई इंटर-टर्न शॉर्ट नहीं पाया </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya12}
                  </div>
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  बिना पुश रोड के केम शाफ्ट का लीड एंगल 75 डिग्री पर समायोजित
                  करें !(SMI-48)
                </td>
                <td>जांच किया </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya13}
                  </div>
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>AOH/IOH kit बदली करें !</td>
                <td>बदल दिया </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya14}
                  </div>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>
                  केम सीक्वेंस (1 by 1, 35 Nos.) की जांच करें ऑक्सिलरी स्विच के
                  ड्रम पर सही कार्यप्रणाली की जांच करें !
                </td>
                <td>जांच किया सही पाया </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya15}
                  </div>
                </td>
              </tr>
              <tr>
                <td>16</td>
                <td>
                  ओवर शूटिंग से बचने के लिए 0 से 32 नोच पर Elect. / Mech.
                  Interlock की जांच करें{" "}
                </td>
                <td>जांच किया सही पाया</td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya16}
                  </div>
                </td>
              </tr>
              <tr>
                <td>17</td>
                <td>
                  SMI – 80,105 के अनुसार लुब्रिकेट करें (i)वेवेल गियर (A1924)
                  ,कंट्रोल सिलिन्डर,मेन सिलिंडर (40 Gm.) (ii)बियरिंग शैल
                  ,इंटरमीड़ियेटगियर सेगमेंट , कंट्रोल डिस्क ,क्रेंकशाफ्ट की
                  नोचिंग की पेरीफेरी , बियरिंग पिन ,प्लंजर की बियरिंग (A 5317.6
                  & A 5317.3) ,गाइड पिन |
                </td>
                <td>Bharat MP 2 BBC 909 ग्रेफ़ाईट ऑईल </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya17}
                  </div>
                </td>
              </tr>
              <tr>
                <td>18</td>
                <td>SMI – 145 के अनुसार क्रेंकशाफ्ट का DPT टेस्ट करें </td>
                <td>कोई क्रेक नहीं पाया </td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya18}
                  </div>
                </td>
              </tr>
              <tr>
                <td>19</td>
                <td>टेस्ट बेंच पर Endurance टेस्ट करें !</td>
                <td>200 operation</td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya19}
                  </div>
                </td>
              </tr>
              <tr>
                <td>20</td>
                <td>
                  ऑक्जिलरी स्विच की स्थिति की जांच करें ,यदि आवश्यक हो तो बदल दे
                  !
                </td>
                <td>जांच किया सही पाया</td>
                <td>
                  <div className="flex items-center justify-center">
                    {paya20}
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
          <p>
            Note: - Point 1 to 7 from OEM manual and SMI-143 & Point 9 to 12
            from OEM manual.
          </p>
          <div className="header-text">
            <h4>RDSO Modification:</h4>
          </div>
          <br></br>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Modification</th>
                  <th>Done</th>
                  <th>Not Done</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Modi – 336 </td>
                  <td>
                    Provision of auxiliary interlock 9 × 10 of SMGR in series
                    with existing interlock No 89 × 90 on QV 62 branch ( to
                    avoid RGR burning ) – Modified cam provided in all SMGR{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {done_336}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {notdone_336}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Modi – 358</td>
                  <td>
                    Provision of 16th notch regression in SMGR in electric loco
                    provided with roof mounted DBR – Cam 16 × 32 provided in all
                    roof mounted DBR locos{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {done_358}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {notdone_358}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div className="header-text">
            <h4>TOH / IOH मे अनिवार्य रूप से बदलने वाले सामान की सूची</h4>
          </div>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Description of items</th>
                  <th>PL No.</th>
                  <th>Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    AOH maintenance Kit (Sub kit AOH-1) consist 32+28 = 60
                    Common items (BTIL+AAL)
                  </td>
                  <td>23560897</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    AOH maintenance Kit (Sub kit AOH-2A) consist 07+02 = 09
                    Un-Common items (AAL)
                  </td>
                  <td>N/S</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    AOH maintenance Kit (Sub kit AOH-2B) consist 15+10 = 25
                    Un-Common items (BTIL)
                  </td>
                  <td>23560903</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    IOH maintenance Kit (Sub kit IOH-1) consist 66+47 = 113
                    Common items
                  </td>
                  <td>23560885</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    IOH maintenance Kit (Sub kit IOH-2A) consist 12 + 06 = 18
                    Un-Common items (AAL)
                  </td>
                  <td>N/S</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    IOH maintenance Kit (Sub kit IOH-2B) consist 22 + 17 = 39
                    Un-Common items (BTIL)
                  </td>
                  <td>N/S</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark6}
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
    </>
  );
}

Table.propTypes = {
  oh_date: PropTypes.string.isRequired,
  se_no: PropTypes.string.isRequired,
  smgr_srno: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  removed_locono: PropTypes.string.isRequired,
  provided_locono: PropTypes.string.isRequired,
  date_provided: PropTypes.string.isRequired,
  paya1_1: PropTypes.string.isRequired,
  paya1_2: PropTypes.string.isRequired,
  paya1_3: PropTypes.string.isRequired,
  paya1_4: PropTypes.string.isRequired,
  paya2: PropTypes.string.isRequired,
  paya3: PropTypes.string.isRequired,
  paya4: PropTypes.string.isRequired,
  paya5_ve1: PropTypes.string.isRequired,
  paya5_ve2: PropTypes.string.isRequired,
  paya6_ve1: PropTypes.string.isRequired,
  paya6_ve2: PropTypes.string.isRequired,
  paya7: PropTypes.string.isRequired,
  paya8_ve1: PropTypes.string.isRequired,
  paya8_ve2: PropTypes.string.isRequired,
  paya9_ve1: PropTypes.string.isRequired,
  paya9_ve2: PropTypes.string.isRequired,
  paya10: PropTypes.string.isRequired,
  paya11: PropTypes.string.isRequired,
  paya12: PropTypes.string.isRequired,
  paya13: PropTypes.string.isRequired,
  paya14: PropTypes.string.isRequired,
  paya15: PropTypes.string.isRequired,
  paya16: PropTypes.string.isRequired,
  paya17: PropTypes.string.isRequired,
  paya18: PropTypes.string.isRequired,
  paya19: PropTypes.string.isRequired,
  paya20: PropTypes.string.isRequired,
  done_336: PropTypes.string.isRequired,
  notdone_336: PropTypes.string.isRequired,
  done_358: PropTypes.string.isRequired,
  notdone_358: PropTypes.string.isRequired,
  remark1: PropTypes.string.isRequired,
  remark2: PropTypes.string.isRequired,
  remark3: PropTypes.string.isRequired,
  remark4: PropTypes.string.isRequired,
  remark5: PropTypes.string.isRequired,
  remark6: PropTypes.string.isRequired,
};
