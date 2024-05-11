import PropTypes from "prop-types";
export default function Table({
    manak_01_1,
    vastavik1,
    vastavik2,
    vastavik3_mm,
    vastavik3_microm1,
    vastavik3_microm2,
    vastavik4,
    vastavik5,
    vastavik6,
    vastavik7_make1,
    vastavik7_no1,
    vastavik7_year1,
    vastavik7_clearance1,
    vastavik7_make2,
    vastavik7_no2,
    vastavik7_year2,
    vastavik7_clearance2,
    overhall_01name,
    date_01_1,
    overhall_02name,
    vastavik01,
    vastavik02,
    vastavik03,
    vastavik04,
    vastavik05,
    vastavik06,
    vastavik07,
    vastavik08,
    vastavik09,
    vastavik_1a,
    vastavik_1b,
    vastavik_1c,
    vastavik_2mp1,
    vastavik_2ip1,
    vastavik_2mainlead1,
    vastavik_3mp2,
    vastavik_3ip2,
    vastavik_3mainlead2,
    vastavik_4,
    vastavik_5,
    overhall_1name,
    date_1,
    overhall_2name,
    date_2,
    vastvik_1,
    vastvik_2,
    vastvik_3,
    vastvik_4,
    vastvik_5,
    vastvik_6,
    vastvik_7,
    vastvik_8,
    vastvik_9,
    vastvik_10,
    vastvik_11,
    vastvik_11a,
    vastvik_11b,
    vastvik_11c,
    vastvik_11d,
    vastvik_11e,
    vastvik_12,
    vastvik_13,
    vastvik_14,
    vastvik_15,
    vastvik_16,
    vastvik_17,
    manak_18make01,
    manak_18no01,
    manak_18year01,
    manak_18make02,
    manak_18no02,
    manak_18year02,
    vastvik_18,
    vastvik_19a,
    vastvik_19b,
    vastvik_20,
    vastvik_21a,
    bhrr1_no,
    date_01,
    overhall1_name,
    certified_name,
    vastvik_01,
    vastvik_02,
    vastvik_03,
    vastvik_04,
    vastvik_05,
    vastvik_06,
    brush1_no,
    brush2_no,
    brush3_no,
    brush4_no,
    brush5_no,
    brush6_no,
    brush1_grade,
    brush2_grade,
    brush3_grade,
    brush4_grade,
    brush5_grade,
    brush6_grade,
    brush1_gap,
    brush2_gap,
    brush3_gap,
    brush4_gap,
    brush5_gap,
    brush6_gap,
    brush1_razorgap,
    brush2_razorgap,
    brush3_razorgap,
    brush4_razorgap,
    brush5_razorgap,
    brush6_razorgap,
    brush1_tension_r,
    brush2_tension_r,
    brush3_tension_r,
    brush4_tension_r,
    brush5_tension_r,
    brush6_tension_r,
    brush1_tension_m,
    brush2_tension_m,
    brush3_tension_m,
    brush4_tension_m,
    brush5_tension_m,
    brush6_tension_m,
    brush1_tension_v,
    brush2_tension_v,
    brush3_tension_v,
    brush4_tension_v,
    brush5_tension_v,
    brush6_tension_v,
    stator1_no,
    date1,
    armature_no1,
    bhrr_no1,
    assembly_name,
    certified_1name,
    vastveek_1,
    vastveek_2a,
    vastveek_2b,
    vastveek_2c,
    vastveek_2d,
    vastveek_3,
    vastveek_4mm,
    vastveek_4mbtb,
    vastveek_4tir,
    vastveek_5pi,
    vastveek_5si,
    pinion_name,
    pinion_date,
    certified_2name,
    manak_01,
    vastveek_01,
    vastveek_02,
    vastveek_03,
    vastveek_04,
    vastveek_05,
    vastveek_06a,
    vastveek_06b,
    vastveek_06c,
    change_01,
    change_02,
    change_03,
    change_04,
    change_05,
    change_06,
    change_07,
    change_08,
}) {
  return (
    <>
      <div className="max-w-full overflow-x-auto">
        <table id="id1" className="table border-collapse">
          <thead>
            <tr>
              <th className="border" scope="col">
                अ.क्र
              </th>
              <th className="border" scope="col">
                मानक परीक्षण/ गतिविधि
              </th>
              <th className="border" scope="col">
                मानक STANDARDS
              </th>
              <th className="border" scope="col">
                वास्तविक
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <label
                  htmlFor="पुर्व-परिक्षण"
                  className="form-label custom-label"
                ></label>
                पुर्व परिक्षण a) IR व्हैल्यु 500 V मेगरसे
              </td>
              <td>
                <div className="flex items-center justify-center">
                  10 मेगा ओह्म(कम से कम)
                </div>
              </td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        U: {u}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        V: {v}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        W: {w}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <label
                  htmlFor="सफाई "
                  className="form-label custom-label"
                ></label>
                सफाई,बेकींग,वार्निशिंग,बेकींग (एस.एम.आई.86 अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">किया</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik2}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <label
                  htmlFor="वाईंडींग "
                  className="form-label custom-label"
                ></label>
                वाईंडींग रेजिस्टन्स (UV-VW-WU)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik3}
                </div>
              </td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        {uv3}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        {vw3}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        {wu3}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                <label
                  htmlFor="सर्ज"
                  className="form-label custom-label"
                ></label>
                सर्ज कम्पॅरिजन टेस्ट 3 के.वी. पर (एस.एम.आई.149)
              </td>
              <td>
                <div className="flex items-center justify-center">नार्मल</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik4}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                <label htmlFor="" className="form-label custom-label"></label>
                इंडक्टंस माप करें
              </td>
              <td>
                <div className="flex items-center justify-center">
                  फेज से फेज के बीच अंतर 10% से ज्यादा नही
                </div>
              </td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="वाईंडींग-UV"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>UV: </span>
                        </label>
                        {uv5}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="वाईंडींग-VW"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>VW: </span>
                        </label>
                        {vw5}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="वाईंडींग-WU"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>WU: </span>
                        </label>
                        {wu5}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>
                <label
                  htmlFor="रोटर"
                  className="form-label custom-label"
                ></label>
                रोटर का ग्रोव्हलर टेस्ट (एस.एम.आई.163)
              </td>
              <td>
                <div className="flex items-center justify-center">नार्मल</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik6}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>
                <label
                  htmlFor="DPT"
                  className="form-label custom-label"
                ></label>
                इम्पीलर की डीपीटी
              </td>
              <td>
                <div className="flex items-center justify-center">
                  कोई क्रॅक नही
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik7}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>
                <label
                  htmlFor="स्टेटर-8"
                  className="form-label custom-label"
                ></label>
                डायनॅमिक बॅलन्सींग रोटर इमपेलर सेट (एस.एम.आई.199 अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  Max residual mass Impeller side -2.2gm Rotor side- 3.5gm
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik8}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>
                <label
                  htmlFor="बिअरिंग"
                  className="form-label custom-label"
                ></label>
                स्टेटर बॉडी मे एंड शील्ड के थ्रेड कंडीशन
              </td>
              <td>
                <div className="flex items-center justify-center">सामान्य</div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik9}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>
                <label
                  htmlFor="बिअरिंग10"
                  className="form-label custom-label"
                ></label>
                बिअरिंग सीट डाया, ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  60.002 से 60.015 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik10}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>
                <div className="row-sm-2">
                  <label
                    htmlFor="कव्हर्सa"
                    className="form-label custom-label"
                  ></label>
                  बिअरिंग सीट डाया, नॉन ड्राईव्हींग एंड(NDE) (एस.एम.आई.16अनुसार){" "}
                  <br></br>(for Other make Except CGL)
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  60.002 से 60.015 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik11}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>
                <label
                  htmlFor="एंड"
                  className="form-label custom-label"
                ></label>
                एंड कव्हर्स बोअर डाया ड्राईव्हींग एंड (DE) (एस.एम.आई.16अनुसार)
              </td>
              <td>
                <div className="flex items-center justify-center">
                  129.993 से 130.018 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik12}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>
                <label htmlFor="लीड" className="form-label custom-label">
                  एंड कव्हर्स बोअर डाया नॉन ड्राईव्हींग एंड (NDE)
                  (एस.एम.आई.16अनुसार)
                </label>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  129.993 से 130.018 मी.मी.
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik13}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>
                <label htmlFor="एसेम्बली" className="form-label custom-label">
                  लीड,लग,टर्मीनल ब्लॉक पर कोई कार्य किया
                </label>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  कोई कार्य किया तो लिखे
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik14}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <br></br>15
              </th>
              <td>
                <div className="row-sm-2">
                  <label htmlFor="करंटa" className="form-label custom-label">
                    एसेम्बली के बाद IR व्हॅल्यु
                  </label>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  कम से कम 10 MΩ
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik15}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>
                <div className="row-sm-2">
                  <label htmlFor="SPMa" className="form-label custom-label">
                    करंट (U-V-W)लाइट रन टेस्ट
                  </label>
                  <br></br>
                  <br></br>
                  <label
                    htmlFor="SPMb"
                    className="form-label custom-label"
                  ></label>
                  करंट (U-V-W)लोड रन टेस्ट
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  18 Amp Max
                </div>
                <br></br>
                <br></br>
                <div className="flex items-center justify-center">
                  42 Amp Max
                </div>
              </td>
              <td>
                <div className="grid items-center justify-center">
                  <div className="grid grid-row-2 gap-4 ml-5">
                    <div className="flex items-center space-x-4">
                      <div className="row-span-1">
                        <label
                          htmlFor="करंटa-U"
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            U
                          </div>
                        </label>
                        {u16}
                      </div>

                      <div className="row-span-1">
                        <label
                          htmlFor="करंटa-V"
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            V
                          </div>
                        </label>
                        {v16}
                      </div>

                      <div className="row-span-1">
                        <label
                          htmlFor="करंटa-W"
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            W
                          </div>
                        </label>
                        {w16}
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <div className="grid grid-row-2 gap-4 ml-5">
                    <div className="flex items-center space-x-4">
                      <div className="row-span-2">
                        <label
                          htmlFor="करंटa-U"
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            U
                          </div>
                        </label>
                        {u16_1}
                      </div>

                      <div className="row-span-2">
                        <label
                          htmlFor="करंटa-V"
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            V
                          </div>
                        </label>
                        {v162}
                      </div>

                      <div className="row-span-2">
                        <label
                          htmlFor="करंटa-W"
                          className="block col-form-label custom-label"
                        >
                          <div className="flex items-center justify-center">
                            W
                          </div>
                        </label>
                        {w163}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>
                <div className="row-sm-2">
                  <label
                    htmlFor="रन"
                    className="form-label custom-label"
                  ></label>
                  SPM वाईब्रेशन मीटर रिडींग (एस.एम.आई.58 अनुसार)
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  हरा झोन 3.5 mm/sec (Max)
                </div>
              </td>
              <td>
                <br></br>
                <div className="row-sm-2">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="SPMa"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>DE: </span>
                        </label>
                        {de17}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="SPMb"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>NDE: </span>
                        </label>
                        {nde17}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>
                <label
                  htmlFor="नये"
                  className="form-label custom-label"
                ></label>
                रन टेस्ट, तापमान बढना DE/NDE.BODY 30 Min
              </td>
              <td>
                <div className="flex items-center justify-center">
                  वातावरण से 35°C ज्यादा अधिकतम
                </div>
              </td>
              <td>
                <div className="row-sm-3">
                  <div className="d-flex flex-row align-items-center">
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="रन-DE"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>DE: </span>
                        </label>
                        {de18}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="रन-Body"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>BODY: </span>
                        </label>
                        {body18}
                      </div>
                    </div>
                    <span className="whitespace-pre"> </span>
                    <div className="row-sm-2">
                      <div className="flex items-center justify-center">
                        <label
                          htmlFor="रन-NDE"
                          className="col-form-label custom-label"
                        >
                          <span style={{ whiteSpace: "pre" }}>NDE: </span>
                        </label>
                        {nde18}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th rowSpan="5">19</th>
              <td>
                <label htmlFor="" className="col-form-label custom-label">
                  <span className="whitespace-pre"> </span>
                  <u>मस्ट चेंज आईटम</u>
                </label>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>a) DE Side बिअरिंग 6312/C3- (PL 29030109)</td>
              <td>
                <div className="flex items-center justify-center">
                  बदली किया
                </div>{" "}
              </td>
              <td>
                <div className="d-flex flex-row align-items-center">
                  <div className="row-sm-2">
                    <span style={{ whiteSpace: "pre" }}> </span>
                    <label
                      htmlFor="18a1"
                      className="col-form-label custom-label"
                    >
                      <span className="whitespace-pre">तारीख: </span>
                      {new Date(tarik19).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}{" "}
                    </label>

                    <span style={{ whiteSpace: "pre" }}> </span>
                    <label
                      htmlFor="18a2"
                      className="col-form-label custom-label"
                    >
                      <span className="whitespace-pre">Make: </span>
                      {mek19}{" "}
                    </label>
                  </div>

                  <span className="whitespace-pre"> </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>b) NDE Side बिअरिंग 6312/C3- (PL. 29030109)</td>
              <td>
                <div className="flex items-center justify-center">
                  बदली किया{" "}
                </div>
              </td>
              <td>
                <div className="d-flex flex-row align-items-center">
                  <div className="row-sm-2">
                    <span style={{ whiteSpace: "pre" }}> </span>
                    <label
                      htmlFor="18b1"
                      className="col-form-label custom-label"
                    >
                      <span className="whitespace-pre">तारीख: </span>
                      {new Date(tarik19_1).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}{" "}
                    </label>

                    <span style={{ whiteSpace: "pre" }}> </span>
                    <label
                      htmlFor="18b2"
                      className="col-form-label custom-label"
                    >
                      <span className="whitespace-pre">Make: </span>
                      {mek19_1}{" "}
                    </label>
                  </div>

                  <span className="whitespace-pre"> </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>c) लीड पर ट्रांसपरेंट स्लीव लगाना</td>
              <td>
                <div className="flex items-center justify-center">
                  लोकल आर ए पी
                </div>{" "}
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik19_1}
                </div>
              </td>
            </tr>
            <tr>
              <td>d) रबर ग्रोमेट</td>
              <td>
                <div className="flex items-center justify-center">
                  बदला / नही बदला
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik19_2}
                </div>{" "}
              </td>
            </tr>

            <tr>
              <th scope="row">20</th>
              <td>
                <label htmlFor="लीड" className="form-label custom-label">
                  नये पुर्जे एवं मटेरियल
                </label>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  यदि कोई हो
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik20}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">21</th>
              <td>
                <label
                  htmlFor="इम्पेलर"
                  className="form-label custom-label"
                ></label>
                इम्पेलर का मेक एवं निर्मिती तिथी
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik21}
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center">
                  {vastvik21_1}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

Table.propTypes = {
  u: PropTypes.string.isRequired,
  manak_01_1: PropTypes.string.isRequired,
  vastavik1: PropTypes.string.isRequired,
  vastavik2: PropTypes.string.isRequired,
  vastavik3_mm: PropTypes.string.isRequired,
  vastavik3_microm1: PropTypes.string.isRequired,
  vastavik3_microm2: PropTypes.string.isRequired,
  vastavik4: PropTypes.string.isRequired,
  vastavik5: PropTypes.string.isRequired,
  vastavik6: PropTypes.string.isRequired,
  vastavik7_make1: PropTypes.string.isRequired,
  vastavik7_no1: PropTypes.string.isRequired,
  vastavik7_year1: PropTypes.string.isRequired,
  vastavik7_clearance1: PropTypes.string.isRequired,
  vastavik7_make2: PropTypes.string.isRequired,
  vastavik7_no2: PropTypes.string.isRequired,
  vastavik7_year2: PropTypes.string.isRequired,
  vastavik7_clearance2: PropTypes.string.isRequired,
  overhall_01name: PropTypes.string.isRequired,
  date_01_1: PropTypes.string.isRequired,
  overhall_02name: PropTypes.string.isRequired,
  vastavik01: PropTypes.string.isRequired,
  vastavik02: PropTypes.string.isRequired,
  vastavik03: PropTypes.string.isRequired,
  vastavik04: PropTypes.string.isRequired,
  vastavik05: PropTypes.string.isRequired,
  vastavik06: PropTypes.string.isRequired,
  vastavik07: PropTypes.string.isRequired,
  vastavik08: PropTypes.string.isRequired,
  vastavik09: PropTypes.string.isRequired,
  vastavik_1a: PropTypes.string.isRequired,
  vastavik_1b: PropTypes.string.isRequired,
  vastavik_1c: PropTypes.string.isRequired,
  vastavik_2mp1: PropTypes.string.isRequired,
  vastavik_2ip1: PropTypes.string.isRequired,
  vastavik_2mainlead1: PropTypes.string.isRequired,
  vastavik_3mp2: PropTypes.string.isRequired,
  vastavik_3ip2: PropTypes.string.isRequired,
  vastavik_3mainlead2: PropTypes.string.isRequired,
  vastavik_4: PropTypes.string.isRequired,
  vastavik_5: PropTypes.string.isRequired,
  overhall_1name: PropTypes.string.isRequired,
  date_1: PropTypes.string.isRequired,
  overhall_2name: PropTypes.string.isRequired,
  date_2: PropTypes.string.isRequired,
  vastvik_1: PropTypes.string.isRequired,
  vastvik_2: PropTypes.string.isRequired,
  vastvik_3: PropTypes.string.isRequired,
  vastvik_4: PropTypes.string.isRequired,
  vastvik_5: PropTypes.string.isRequired,
  vastvik_6: PropTypes.string.isRequired,
  vastvik_7: PropTypes.string.isRequired,
  vastvik_8: PropTypes.string.isRequired,
  vastvik_9: PropTypes.string.isRequired,
  vastvik_10: PropTypes.string.isRequired,
  vastvik_11: PropTypes.string.isRequired,
  vastvik_11a: PropTypes.string.isRequired,
  vastvik_11b: PropTypes.string.isRequired,
  vastvik_11c: PropTypes.string.isRequired,
  vastvik_11d: PropTypes.string.isRequired,
  vastvik_11e: PropTypes.string.isRequired,
  vastvik_12: PropTypes.string.isRequired,
  vastvik_13: PropTypes.string.isRequired,
  vastvik_14: PropTypes.string.isRequired,
  vastvik_15: PropTypes.string.isRequired,
  vastvik_16: PropTypes.string.isRequired,
  vastvik_17: PropTypes.string.isRequired,
  manak_18make01: PropTypes.string.isRequired,
  manak_18no01: PropTypes.string.isRequired,
  manak_18year01: PropTypes.string.isRequired,
  manak_18make02: PropTypes.string.isRequired,
  manak_18no02: PropTypes.string.isRequired,
  manak_18year02: PropTypes.string.isRequired,
  vastvik_18: PropTypes.string.isRequired,
  vastvik_19a: PropTypes.string.isRequired,
  vastvik_19b: PropTypes.string.isRequired,
  vastvik_20: PropTypes.string.isRequired,
  vastvik_21a: PropTypes.string.isRequired,
  bhrr1_no: PropTypes.string.isRequired,
  date_01: PropTypes.string.isRequired,
  overhall1_name: PropTypes.string.isRequired,
  certified_name: PropTypes.string.isRequired,
  vastvik_01: PropTypes.string.isRequired,
  vastvik_02: PropTypes.string.isRequired,
  vastvik_03: PropTypes.string.isRequired,
  vastvik_04: PropTypes.string.isRequired,
  vastvik_05: PropTypes.string.isRequired,
  vastvik_06: PropTypes.string.isRequired,
  brush1_no: PropTypes.string.isRequired,
  brush2_no: PropTypes.string.isRequired,
  brush3_no: PropTypes.string.isRequired,
  brush4_no: PropTypes.string.isRequired,
  brush5_no: PropTypes.string.isRequired,
  brush6_no: PropTypes.string.isRequired,
  brush1_grade: PropTypes.string.isRequired,
  brush2_grade: PropTypes.string.isRequired,
  brush3_grade: PropTypes.string.isRequired,
  brush4_grade: PropTypes.string.isRequired,
  brush5_grade: PropTypes.string.isRequired,
  brush6_grade: PropTypes.string.isRequired,
  brush1_gap: PropTypes.string.isRequired,
  brush2_gap: PropTypes.string.isRequired,
  brush3_gap: PropTypes.string.isRequired,
  brush4_gap: PropTypes.string.isRequired,
  brush5_gap: PropTypes.string.isRequired,
  brush6_gap: PropTypes.string.isRequired,
  brush1_razorgap: PropTypes.string.isRequired,
  brush2_razorgap: PropTypes.string.isRequired,
  brush3_razorgap: PropTypes.string.isRequired,
  brush4_razorgap: PropTypes.string.isRequired,
  brush5_razorgap: PropTypes.string.isRequired,
  brush6_razorgap: PropTypes.string.isRequired,
  brush1_tension_r: PropTypes.string.isRequired,
  brush2_tension_r: PropTypes.string.isRequired,
  brush3_tension_r: PropTypes.string.isRequired,
  brush4_tension_r: PropTypes.string.isRequired,
  brush5_tension_r: PropTypes.string.isRequired,
  brush6_tension_r: PropTypes.string.isRequired,
  brush1_tension_m: PropTypes.string.isRequired,
  brush2_tension_m: PropTypes.string.isRequired,
  brush3_tension_m: PropTypes.string.isRequired,
  brush4_tension_m: PropTypes.string.isRequired,
  brush5_tension_m: PropTypes.string.isRequired,
  brush6_tension_m: PropTypes.string.isRequired,
  brush1_tension_v: PropTypes.string.isRequired,
  brush2_tension_v: PropTypes.string.isRequired,
  brush3_tension_v: PropTypes.string.isRequired,
  brush4_tension_v: PropTypes.string.isRequired,
  brush5_tension_v: PropTypes.string.isRequired,
  brush6_tension_v: PropTypes.string.isRequired,
  stator1_no: PropTypes.string.isRequired,
  date1: PropTypes.string.isRequired,
  armature_no1: PropTypes.string.isRequired,
  bhrr_no1: PropTypes.string.isRequired,
  assembly_name: PropTypes.string.isRequired,
  certified_1name: PropTypes.string.isRequired,
  vastveek_1: PropTypes.string.isRequired,
  vastveek_2a: PropTypes.string.isRequired,
  vastveek_2b: PropTypes.string.isRequired,
  vastveek_2c: PropTypes.string.isRequired,
  vastveek_2d: PropTypes.string.isRequired,
  vastveek_3: PropTypes.string.isRequired,
  vastveek_4mm: PropTypes.string.isRequired,
  vastveek_4mbtb: PropTypes.string.isRequired,
  vastveek_4tir: PropTypes.string.isRequired,
  vastveek_5pi: PropTypes.string.isRequired,
  vastveek_5si: PropTypes.string.isRequired,
  pinion_name: PropTypes.string.isRequired,
  pinion_date: PropTypes.string.isRequired,
  certified_2name: PropTypes.string.isRequired,
  manak_01: PropTypes.string.isRequired,
  vastveek_01: PropTypes.string.isRequired,
  vastveek_02: PropTypes.string.isRequired,
  vastveek_03: PropTypes.string.isRequired,
  vastveek_04: PropTypes.string.isRequired,
  vastveek_05: PropTypes.string.isRequired,
  vastveek_06a: PropTypes.string.isRequired,
  vastveek_06b: PropTypes.string.isRequired,
  vastveek_06c: PropTypes.string.isRequired,
  change_01: PropTypes.string.isRequired,
  change_02: PropTypes.string.isRequired,
  change_03: PropTypes.string.isRequired,
  change_04: PropTypes.string.isRequired,
  change_05: PropTypes.string.isRequired,
  change_06: PropTypes.string.isRequired,
  change_07: PropTypes.string.isRequired,
  change_08: PropTypes.string.isRequired,
};
