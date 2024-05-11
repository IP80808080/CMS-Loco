import PropTypes from "prop-types";
export default function Table({
  photo1_srno,
  make_photo1,
  overhaul_photo1,
  servomotor1_srno,
  make_servomotor1,
  overhaul_servomotor1,
  photo2_srno,
  make_photo2,
  overhaul_photo2,
  servomotor2_srno,
  make_servomotor2,
  overhaul_servomotor2,
  remark3_1,
  remark3_2,
  remark3_3,
  remark3_4,
  remark3_5,
  remark3_6,
  remark3_7,
  remark4,
  remark4_1,
  remark4_2,
  remark5,
  remark6_1,
  remark6_2,
  remark6_3,
  remark6_4,
  remark7_1,
  remark7_2,
  remark7_3,
  remark8_1,
  remark8_2,
  remark8_3,
  remark9_1,
  remark9_2,
  remark10,
  remark11_1,
  remark11_2,
  remark11_3,
  remark11_4,
  remark12,
  remark13,
  remark14,
  remark15,
  remark16_1,
  remark16_2,
  remark16_3,
  remark16_4,
  remark16_5,
  remark16_6,
  remark17_1,
  remark17_2,
  remark18,
  remark19,
  remark20,
  sign1_karmachari,
  sign1_examinarsection,
  sign1_anurakshan,
  sign1_ppio,
  remark21,
  remark22,
  remark23,
  remark24,
  remark25,
  remark26,
  remark27,
  remark28,
  remark29,
  remark30,
  remark31,
  remark32,
  remark33,
  remark34, //MENTION CONST OF REMARK34
  sign2_karmachari,
  sign2_examinarsection,
  sign2_anurakshan,
  sign2_ppio,
  change_1,
  make_1,
  change_2,
  make_2,
  change_3,
  make_3,
  change_4,
  make_4,
  change_5,
  make_5,
  change_6,
  make_6,
  change_7,
  make_7,
  change_8,
  make_8,
  change_9,
  make_9,
  change_10,
  make_10,
  sign3_karmachari,
  sign3_examinarsection,
  sign3_anurakshan,
  sign3_ppio,
}) {
  return (
    <>
      <div className="flex flex-col justify-center container overflow-x">
        <section className="container">
          <form>
            <br> </br>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>अ.क्र</th>
                    <th>
                      पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                      गतिविधियॉं{" "}
                    </th>
                    <th>रिमार्क</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>१</td>
                    <td colSpan="3">
                      <table>
                        <tr>
                          <td>पेन्टोग्राफ नं. 1</td>
                          <td>
                            Sr. No.
                            <div className="flex items-center justify-center">
                              {photo1_srno}
                            </div>
                          </td>
                          <td>
                            Make:
                            <div className="flex items-center justify-center">
                              {make_photo1}
                            </div>
                          </td>
                          <td>MFG</td>
                          <td>
                            Overhaul By
                            <div className="flex items-center justify-center">
                              {overhaul_photo1}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>सर्वोमोटर नं.1 </td>
                          <td>
                            Sr. No.
                            <div className="flex items-center justify-center">
                              {servomotor1_srno}
                            </div>
                          </td>
                          <td>
                            Make:
                            <div className="flex items-center justify-center">
                              {make_servomotor1}
                            </div>
                          </td>
                          <td>MFG</td>
                          <td>
                            Overhaul By
                            <div className="flex items-center justify-center">
                              {overhaul_servomotor1}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td colSpan="3">
                      <table>
                        <tr>
                          <td>पेन्टोग्राफ नं. 1</td>
                          <td>
                            Sr. No.
                            <div className="flex items-center justify-center">
                              {photo2_srno}
                            </div>
                          </td>
                          <td>
                            Make:
                            <div className="flex items-center justify-center">
                              {make_photo2}
                            </div>
                          </td>
                          <td>MFG</td>
                          <td>
                            Overhaul By
                            <div className="flex items-center justify-center">
                              {overhaul_photo2}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>सर्वोमोटर नं.1 </td>
                          <td>
                            Sr. No.
                            <div className="flex items-center justify-center">
                              {servomotor2_srno}
                            </div>
                          </td>
                          <td>
                            Make:
                            <div className="flex items-center justify-center">
                              {make_servomotor2}
                            </div>
                          </td>
                          <td>MFG</td>
                          <td>
                            Overhaul By
                            <div className="flex items-center justify-center">
                              {overhaul_servomotor2}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
                <tr>
                  <td>
                    <b>3</b>
                  </td>
                  <td colSpan="2">
                    <b>3 पैन बो असेम्बली ( एस एम आइ नं 192 अनुसार )</b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1.पैन बो असेम्बली का कोई पार्ट घिसा, टूटा तथा क्रैक की जॉंच
                    करें। साथ में कसावट की जॉंच करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    2.पैन हॉर्न बेंन्ड, टूटा तथा क्रैक हो तो तो बदली करे।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    3. कार्बन स्ट्रिप पर कोई ग्रुव्ह मार्क, चिपिंग एवं स्ट्रिप
                    में शार्प तेज धार की जॉंच करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    4.स्‍ट्रीप की थीकनेस जॉंच करें तथा उचित न होने पर बदली करें
                    । <br> </br>
                    High Reach Pantograph (नया कार्बन स्‍ट्रीप–39 मि.मी. कन्‍डेम
                    सीमा – 26 मि.मी.) <br></br>
                    Conventional Pantograph (नया कार्बन स्‍ट्रीप –25 मि.मी.
                    कन्‍डेम सीमा –13.5 मि.मी.)
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    5.पेन्‍टोग्राफ पैन का होरीजन्‍टली1.5 मीटर के उंचाई पर
                    स्पिरिट लेवल कि व्हिसुअली जॉंच करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    6. आर डी एस ओ एस एम आई नं. 64 के अनुसार पेन्‍टोग्राफ स्टैटिक
                    बॅलेंसिंग 7 कि.ग्रा. का वजन लगाकर 0.5, 1.0, 1.5, 1.75 और 2
                    मीटर पर स्टेप की जॉंच करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_6}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    7. आर डी एस ओ मोडीफिकेशन शिट नं. ELRS/MS/0333 Amendment No.
                    2 के निर्देशन अनुसार पैन्टोग्राफ के पैंटो पॅन में Swivel
                    Angle 7˚ ± 1˚ का होना सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark3_7}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>4</b>
                  </td>
                  <td colSpan="4">
                    <b>प्लनजर </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1.आर डी एस ओ एस एम आई नं.292 के अनुसार पैन्टोग्राफ के प्लंजर
                    बॉक्स के स्प्रिंग्स नये एवं उचित टेन्शन वाले स्प्रिंग्स का
                    प्रावधान करें। प्लंजर का स्लाईडिंग फ्री मुव्ह्मेंन्ट चेक
                    करें। अगर जॅम है तो स्लिव्ह 7 टर्न लूझ करें और लुब्रिकेंट
                    करें। हर मेजर में प्लंजर बदली करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark4_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    2.प्लंजर के स्प्रिंग में आर डी एस ओ मोडीफिकेशन शिट नं.
                    ELRS/MS/0333 (Rev.0) के निर्देशन पैन्टोग्राफ के प्लंजर के
                    सपोर्ट रॉड पर 10 किलोग्राम वजन का भार देने उपरान्त पैंटो पॅन
                    का झुकाव 25 मिमी से कम होना सुनिश्चित करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark4_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>5</b>
                  </td>
                  <td colSpan="4">
                    <b>कॉपर शन्ट </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    सभी कॉपर शन्ट के फिक्सिंग बोल्ट फिटिंग एवं कॉपर शन्ट के
                    स्ट्रैंड चेक करे, अगर 25 % से जादा शन्ट के स्ट्रैंड टुटे
                    होने एंव अस्तव्यस्त होने पर शंट बदली करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>6</b>
                  </td>
                  <td colSpan="4">
                    <b>मेन स्प्रिंग और टेन्शन बोल्ट </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1.व्हिसुअली मेन स्प्रिंग टेंशन लेस, टूटा तथा क्रैक की जॉंच
                    करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark6_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    2.आर डी एस ओ मोडीफिकेशन शिट नं. WAM4/155 के निर्देशन अनुसार
                    पैन्टोग्राफ के राईझिंग स्प्रिंग टुट्ने से लोको रूफ के संपर्क
                    से बचने के लिये उचित साईज की M.S पट्टी का बनाया हुआ कॅचर का
                    प्रावधान करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark6_2}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </form>
        </section>
        <div style="height: 25px;"></div>

        <section className="container">
          <form>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>अ.क्र</th>
                    <th>
                      पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                      गतिविधियॉं{" "}
                    </th>
                    <th>रिमार्क</th>
                  </tr>
                </thead>
                <tr>
                  <td></td>
                  <td>
                    ३.आर डी एस ओ मोडीफिकेशन शिट नं. ELRS/MS/0389 (Rev.0)
                    पैन्टोग्राफ के लिये अतिरिक्त स्प्रिंग कॅचर लगाने की व्यवस्था
                    करें। जिससे मेन रायझिंग स्प्रिंग टुटने से अर्थ फॉल्ट से बचा
                    जा सकें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark6_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    4.आर डी एस ओ मोडीफिकेशन शिट नं. WAM4/150 के निर्देशन अनुसार
                    पैन्टोग्राफ कि 2 मीटर कि ऊंचाई के लिये नये स्लॉटेड बार
                    थ्रेडिंग के साथ रबर स्टॉपर का प्रावधान करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark6_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>7 </b>
                  </td>
                  <td colSpan="4">
                    <b>मेकॅनिकल पार्ट्स </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td> 1.पैन्टोग्राफ के सभी मेकॅनिकल ऑपरेशन की जॉंच करें। </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark7_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    2.पैन्टोग्राफ के पुरे फ्रेम में बेंन्ड, क्रक और किसी अन्य
                    क्षति को व्हिसुअली जाँच करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark7_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    3.सभी नट और बोल्ट्स को जॉंच और वांछित स्पैनर से हिं टाईट नेस
                    सुनिश्चित करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark7_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>8</b>
                  </td>
                  <td colSpan="4">
                    <b>इंन्सुलेटर</b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    1.पैन्टोग्राफ के सभी बेस इंसुलेटर और रूफ बार के सभी बेस
                    इंसुलेटर जाँच करें और साफ करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark8_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    2.सभी बेस इंसुलेटर के डैमेज, क्रेक, फ्लैशिंग आदि की जांच
                    सुनिश्चित करें। यदि आवश्यक हो तो बदली करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark8_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    3. आर डी एस ओ एस एम आई नं. 274 के अनुसार सभी इंसुलेटर पर
                    सिलिकॉन ऑईल स्प्रे करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark8_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>9</b>
                  </td>
                  <td colSpan="4">
                    <b>पिन और बुशेज</b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1.सभी स्प्लिट पिन बदली करना सुनिश्चित करें। कोइ भी स्प्लिट
                    पिन का पुन: उपयोग नहीं किया जाना चाहिए।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark9_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    2.सभी पिन और बुशेज की जांच की जानी है और सभी मुव्हामेन्ट
                    होने वाले भागों को लुब्रिकेट करना सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark9_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>10</b>
                  </td>
                  <td colSpan="4">
                    <b>आयलेटस रॉड एवं मेकेनिकल असेम्बली </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    आयलेटस रॉड एवं मेकेनिकल असेम्बली की स्थिति की जाँच करें
                    करें। किसी भी तरह कि टूट-फूट, क्रेक, फ्लेशिंग, फिटिंग में
                    ढीलापन, स्प्लिट पिन, बुश की जांच सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark10}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>11</b>
                  </td>
                  <td colSpan="4">
                    <b> रूफ बार और फिटिंग </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    1.सभी रूफ बार्स की स्थिति की जाँच करें। सभी रूफ बार की उचित
                    प्रकार से साफसफाई करें। किसी भी तरह कि बेंन्ड, टूट-फूट,
                    क्रेक, फ्लेशिंग, फिटिंग में ढीलापन की जांच सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark11_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    2.रूफ बार फिटिंग्स में लगे हुवे नट, बोल्ट की कसावट उचित
                    प्रकार से जांच सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark11_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    3.सभी एच पी टी लिंक्स उचित प्रकार से साफसफाई एवं जांच
                    सुनिश्चित करें। एच पी टी लिंक्स कॉन्टॅक्ट पार्टस पर ग्रेफाइट
                    ग्रीस लगाना सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark11_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    4.फ्लैशिंग और पानी का प्रवेश से बचने के लिए प्रत्येक रूफ बार
                    के फेरुल जॉईन्ट कि कसावट होने के बाद आर टी वी से सिलिंग
                    सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark11_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>12</b>
                  </td>
                  <td colSpan="4">
                    <b> रूफ बार और फिटिंग </b>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    आर डी एस ओ एस एम आई नं.198 के अनुसार सभी बियरिंग्स और मूविंग
                    पार्ट्स प्लंजर, पिंन्स, जॉइंट्स, थ्रस्ट रॉड आदि को लुब्रिकेट
                    करना सुनिश्चित करें।<br></br>
                    1.सभी ज्वाइंट, थ्रस्ट रॉड आदि की जाँच करना सुनिश्चित करें।
                    <br></br>
                    2.सभी बियरिंग की स्थिति की जाँच करना सुनिश्चित करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark12}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>13</b>
                  </td>
                  <td>
                    ओ ई एम मॅन्युअल नुसार पैन्टोग्राफ के Transverse Rigidity
                    Test (अनुप्रस्थ कठोरता परीक्षण) में 50 किलोग्राम वजन के साथ
                    1.5 मीटर की ऊंचाई पर में पैंटो पॅन दोनों तरफ पैंटो पॅन का
                    विचलन और विक्षेपण प्रत्येक बाजू से 36 मिमी से अधिक नहीं होना
                    चाहिए।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark13}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </form>
        </section>
        <div style="height: 25px;"></div>

        <section className="container">
          <form>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>अ.क्र</th>
                    <th>
                      पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                      गतिविधियॉं{" "}
                    </th>
                    <th>रिमार्क</th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    <b>14</b>
                  </td>
                  <td>
                    आर डी एस ओ मोडीफिकेशन शिट नं. WAM4/129 /64 के निर्देशन
                    अनुसार पैन्टोग्राफ के पॅन के दोनो रबर स्टॉपर रह्ते थे वह
                    अप्पर आर्टिकुलेशन ट्युब के निचे लगे है। यह सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark14}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>15</b>
                  </td>
                  <td>
                    आर डी एस ओ एस एम आई नं.292 के अनुसार हर शेड्यूल में
                    निम्नलिखित प्रमुख जगह पर एवं जॉईन्ट पर क्रॅक कि जाँच डीपीटी
                    (RDPT) द्वारा सुनिश्चित करें।<br> </br>
                    1.सपोर्ट रॉड (उपरी भाग)<br></br>
                    2.स्डेडी लिंक ब्रैकेट<br></br>
                    3.थ्रस्ट रॉड<br></br>
                    4.पॅडेस्टेल असेम्बली
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark15}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>16</b>
                  </td>
                  <td>
                    <b>
                      सर्वोमोटर कि ओव्हरहॉल कि प्रक्रिया ओ ई एम मॅन्युअल नुसार
                    </b>{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> 1. सर्वोमोटर डिसेम्बल करें। </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark16_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>2.यदि सर्वोमोटर में ओवेलिटि पाई जाये तो बदली करें।</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark16_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    3.पिस्टन पैकिंग गैस्केट रिंग की जाँच सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark16_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>4.स्प्रिंग की स्थिति जाँच सुनिश्चित करें।</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark16_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>5.सर्वोमोटर के सभी पार्ट की ग्रीसिंग करें।</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark16_5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    6.पिस्टन पैकिंग गैस्केट रिंग की मॅन्युफॅक्चरिंग कम्पनी और
                    मॅन्युफॅक्चरिंग ईयर रेकॉर्ड रजिस्टर में नोट करना सुनिश्चित
                    करें। सर्वोमोटर करने के बाद उसे लिकेज और कार्य के लिये चेक
                    करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark16_6}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>17</b>
                  </td>
                  <td>
                    <b>स्डेडी लिंक की पोजिशनिंग </b>{" "}
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    1.स्डेडी लिंक में कोई क्रेकिंग या बेन्ड की जाँच सुनिश्चित
                    करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark17_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    2.नो डिस्लोकेशन फॉर्म फिक्सिंग पिवोट्स की जाँच सुनिश्चित
                    करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark17_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>18</b>
                  </td>
                  <td>
                    रबर स्टॉप से पैन को ऊपर उठाने का बल कम से कम 15 किलोग्राम
                    होना चाहिए यदि आवास बल निर्दिष्ट मान से कम है, तो इससे
                    पेंटोग्राफ का कंपन हो सकता है जो लॉक डाउन स्थिति में काम
                    नहीं कर रहा है की जाँच सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark18}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>19</b>
                  </td>
                  <td>
                    सेन्टर स्विंग लिंक पर लोंजिटूडीनल ट्यूब को फीटिंग करते समय
                    यह आवश्यक है कि बोल्टों को पूरी तरह से कसने के बाद, सेंटर
                    स्विंग लिंक के जॉ के बीच लगभग 2 मिमी का अंतर सुनिश्चित किया
                    जाए।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark19}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>20</b>
                  </td>
                  <td>
                    आर डी एस ओ मोडीफिकेशन शिट नं. <b>WAG-5/29</b> के निर्देशन
                    अनुसार लॉगिटुडीनल ट्युब के अंदर पानी के रिसाव से बचने के
                    लिये लॉगिटुडीनल ट्युब मे रबर बुश प्रावधान करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark20}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="signature">
              <label htmlFor="employee_signature">कर्मचारी के हस्ताक्षर:</label>
              <div className="flex items-center justify-center">
                {sign1_karmachari}
              </div>

              <label htmlFor="section_supervisor_signature">
                सेक्शन पर्यवेक्षक के हस्ताक्षर:
              </label>
              <div className="flex items-center justify-center">
                {sign1_examinarsection}
              </div>

              <label htmlFor="section_supervisor_signature">
                अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:
              </label>
              <div className="flex items-center justify-center">
                {sign1_anurakshan}
              </div>

              <label htmlFor="preservation_supervisor_signature">
                पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:
              </label>
              <div className="flex items-center justify-center">
                {sign1_ppio}
              </div>
            </div>
          </form>
        </section>
        <div style="height: 25px;"></div>

        <section className="container">
          <form>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>अ.क्र</th>
                    <th>
                      पेंटोग्राफ और रूफ उपकरण (सामग्री) की मेजर शिडयुल
                      गतिविधियॉं{" "}
                    </th>
                    <th>रिमार्क</th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    <b>22</b>
                  </td>
                  <td>
                    {" "}
                    सर्ज अरेस्‍टर अन्‍तर की जॉंच करें, प-लैश मार्क हो तो पॉलिश
                    करें। ET-1 और ET-2 के ईलेक्ट्रोड के पॉईंट शार्प सिरे और
                    कसावट की जाँच सुनिश्चित करें। इनके इंसुलेटर के डैमेज, क्रेक,
                    फ्लैशिंग आदि की जांच सुनिश्चित करें। ET-1 के ईलेक्ट्रोड मे
                    गॅप = 210 मि.मी. और ET-2 के ईलेक्ट्रोड मे गॅप = 90 मि.मी.{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark22}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>23</b>
                  </td>
                  <td>
                    लोकोमोटिव्ह के दोनो कॅब के हुड और सभी हुड जॉईंट चॅनल की जाँच
                    सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark23}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>24</b>
                  </td>
                  <td>
                    सभी हुड जॉईंट चॅनल उचित तरह से सिलिंग करें जिससे पानी का
                    रिसाव लोको के अंदर ना हो।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark24}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>25</b>
                  </td>
                  <td>
                    हुड पर लगे TFP के RPS के केनोपी और DBR के केनोपी की जाँच
                    सुनिश्चित करें। जिससे पानी का रिसाव लोको के अंदर ना हो।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark25}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>26</b>
                  </td>
                  <td>
                    लोको के हुड पर लगे दोनों OCB टॉप साईड फिल्टर्स की जाँच
                    सुनिश्चित करें। सिलिंग करें जिससे पानी का रिसाव लोको के अंदर
                    ना हो।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark26}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>27</b>
                  </td>
                  <td>
                    लोको की छ्त पर कोइ फॉरेन मटेरियल एवं कन्डक्टिव्ह मटेरियल का
                    न होना सुनिश्चित करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark27}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>28</b>
                  </td>
                  <td>
                    {" "}
                    रूफलाईन कंडक्टर के इन्सुलेटर के जॉईंट की कसावट की जॉंच करें।
                    कोई अनियमितता पाये जाने पर बदली करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark28}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>29</b>
                  </td>
                  <td>
                    साधारण साबुन के पानी और सूखे कपड़े से इंसुलेटर को साफ करें।
                    सभी इंन्सुलेटर पर सिलिकॉन स्प्रे करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark29}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>30</b>
                  </td>
                  <td>
                    {" "}
                    सभी इंसुलेटर पर को साफ करें। सभी इंन्सुलेटर पर सिलिकॉन
                    स्प्रे से कोटिंग करें। लगभग कोटिंग 1.6 मी मी{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark30}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>31</b>
                  </td>
                  <td>
                    स्ट्रॅगर मार्किंग पैंटो पॅन सेंन्टर 200mm हरा रंग 300mm पिला
                    रंग बाकी बचा हुवा लाल रंग हॉर्न के सीरे तक होना सुनिश्चित
                    करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark31}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>32</b>
                  </td>
                  <td>
                    सभी रूफ बार, एच पी टी लिंक जॉईन्ट, पेंटोग्राफ के सभी
                    मुव्हेबल जॉईन्ट पर GREASE GRAPHITE Grade II to IS 508/87 का
                    उपयोग करना सुनिश्चित करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark32}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>33</b>
                  </td>
                  <td>
                    पेंटोग्राफ सर्वोमोटर ओव्हरहॉलिंग करते समय LIPLEX-2 (BAMEROL)
                    or LANTHEX-EP2 Grease का उपयोग करना सुनिश्चित करें।{" "}
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark33}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>34</b>
                  </td>
                  <td>
                    पेंटोग्राफ के प्लंजर और सभी बिअरिंग में MP3 (BAMEROL) or
                    MOBILUS-EP2 Grease का उपयोग करना सुनिश्चित करें।
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {remark34}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="signature">
              <label htmlFor="employee_signature">कर्मचारी के हस्ताक्षर:</label>
              <div className="flex items-center justify-center">
                {sign2_karmachari}
              </div>

              <label htmlFor="section_supervisor_signature">
                सेक्शन पर्यवेक्षक के हस्ताक्षर:
              </label>
              <div className="flex items-center justify-center">
                {sign2_examinarsection}
              </div>

              <label htmlFor="section_supervisor_signature">
                अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:
              </label>
              <div className="flex items-center justify-center">
                {sign2_anurakshan}
              </div>

              <label htmlFor="preservation_supervisor_signature">
                पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:
              </label>
              <div className="flex items-center justify-center">
                {sign2_ppio}
              </div>
            </div>
          </form>
        </section>
        <div style="height: 25px;"></div>

        <section className="container">
          <form>
            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th colSpan="7">मस्ट चेंज आयटम</th>
                  </tr>
                  <tr>
                    <th>अ.क्र</th>
                    <th>मस्ट चेंज मद का पूरा विवरण </th>
                    <th>मेजर श्येड्यूल </th>
                    <th>TC, SMI, MOD, L/RAP, HQ INST.</th>
                    <th>लोकेशन </th>
                    <th>बदली नहीं^ किया / बदली किया </th>
                    <th>मेक और मॅन्युफॅक्चरिंग ईयर</th>
                  </tr>
                </thead>
                <tr>
                  <td>1</td>
                  <td>
                    CYLINDER SUPPORT ITEM REF. 17.6 TO M/S SIL ORD REF. S000291
                    FOR UPPER ARTICULATION ASSLY FOR PANTOGRAPHAM-12.
                  </td>
                  <td>IOH</td>
                  <td>TC - 29</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_1}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_1}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    PISTON PACKING RING FOR PANTO SERVOMOTOR AS PER M/S SIL PART
                    NO.S0221129100 OR M/S - GSEC, PART NO.GSEC/PANTO/094 OR M/S
                    CONTRANSYS PART NO. C01870
                  </td>
                  <td>AOH/IOH</td>
                  <td>TC - 31 /TC - 29</td>
                  <td>
                    PT 1<br></br>
                    S/M 1<br></br>
                    PT 2<br></br>
                    S/M 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_2}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    SET OF CIRCLIPS TO IS:3075/1975 FOR PANTOGRAPH TYPE AM-12
                    COMPRISING OF 04 ITEMS 12 NOS. AS PER SK.NO.
                    BSL/ELW/SK.NO.4000 ALT.1 OR SIMILAR.
                  </td>
                  <td>AOH/IOH</td>
                  <td>TC - 31 /TC - 29</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_3}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    SET OF RUBBER ITEMS FOR PANTOGRAPH TYPE AM-12 COMPRISING OF
                    04 ITEMS 16 NOS. AS PER SKETCH NO. BSL/ELW/SK.NO.4008.{" "}
                  </td>
                  <td>IOH</td>
                  <td>TC - 29</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_4}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_4}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    SET OF RUBBER ITEMS & FLAT WASHERS FOR AM-92 PANTO OF 3
                    PHASAE LOCOMOTIVE
                  </td>
                  <td>IOH</td>
                  <td>TC 29</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_5}
                    </div>
                  </td>
                  5
                  <td>
                    <div className="flex items-center justify-center">
                      {make_5}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    SET OF TOP MOUNTING ASSLY. FOR PANTOGRAH IOH 0094 PT 1 PT 2
                  </td>
                  <td>IOH</td>
                  <td>0094</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_6}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_6}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    SPRING FOR UPER ARTICULATION ASSLY. ITEM REF. 11.30 TO SIL,
                    ORD REF 5000301 OR SIMILAR AOH/IOH TC0094 PT 1 PT 2
                  </td>
                  <td>AOH/IOH</td>
                  <td>TC0094</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_7}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_7}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>END OF WEARING STRIP</td>
                  <td>IOH</td>
                  <td>TC0094</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_8}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_8}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>SET OF FLEXIBLE SHUNTS FOR PANTO GRAPH TYPE AM-12 </td>
                  <td>IOH</td>
                  <td>TC0094</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_9}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_9}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>SET OF PINS FOR PANTOGRAPH TYPE AM 12</td>
                  <td>IOH</td>
                  <td>TC0094</td>
                  <td>
                    PT 1<br></br>
                    PT 2
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {change_10}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      {make_10}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="signature">
              <label htmlFor="employee_signature">कर्मचारी के हस्ताक्षर:</label>
              <td>
                <div className="flex items-center justify-center">
                  {sign3_karmachari}
                </div>
              </td>

              <label htmlFor="section_supervisor_signature">
                सेक्शन पर्यवेक्षक के हस्ताक्षर:
              </label>
              <td>
                <div className="flex items-center justify-center">
                  {sign3_examinarsection}
                </div>
              </td>

              <label htmlFor="section_supervisor_signature">
                अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:
              </label>
              <td>
                <div className="flex items-center justify-center">
                  {sign3_anurakshan}
                </div>
              </td>

              <label htmlFor="preservation_supervisor_signature">
                पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:
              </label>
              <td>
                <div className="flex items-center justify-center">
                  {sign3_ppio}
                </div>
              </td>
            </div>
          </form>
        </section>
        <div style="height: 25px;"></div>

        <br></br>
      </div>
    </>
  );
}

Table.propTypes = {
  u: PropTypes.string.isRequired,
  photo1_srno: PropTypes.string.isRequired,
  make_photo1: PropTypes.string.isRequired,
  overhaul_photo1: PropTypes.string.isRequired,
  servomotor1_srno: PropTypes.string.isRequired,
  make_servomotor1: PropTypes.string.isRequired,
  overhaul_servomotor1: PropTypes.string.isRequired,
  photo2_srno: PropTypes.string.isRequired,
  make_photo2: PropTypes.string.isRequired,
  overhaul_photo2: PropTypes.string.isRequired,
  servomotor2_srno: PropTypes.string.isRequired,
  make_servomotor2: PropTypes.string.isRequired,
  overhaul_servomotor2: PropTypes.string.isRequired,
  remark3_1: PropTypes.string.isRequired,
  remark3_2: PropTypes.string.isRequired,
  remark3_3: PropTypes.string.isRequired,
  remark3_4: PropTypes.string.isRequired,
  remark3_5: PropTypes.string.isRequired,
  remark3_6: PropTypes.string.isRequired,
  remark3_7: PropTypes.string.isRequired,
  remark4: PropTypes.string.isRequired,
  remark4_1: PropTypes.string.isRequired,
  remark4_2: PropTypes.string.isRequired,
  remark5: PropTypes.string.isRequired,
  remark6_1: PropTypes.string.isRequired,
  remark6_2: PropTypes.string.isRequired,
  remark6_3: PropTypes.string.isRequired,
  remark6_4: PropTypes.string.isRequired,
  remark7_1: PropTypes.string.isRequired,
  remark7_2: PropTypes.string.isRequired,
  remark7_3: PropTypes.string.isRequired,
  remark8_1: PropTypes.string.isRequired,
  remark8_2: PropTypes.string.isRequired,
  remark8_3: PropTypes.string.isRequired,
  remark9_1: PropTypes.string.isRequired,
  remark9_2: PropTypes.string.isRequired,
  remark10: PropTypes.string.isRequired,
  remark11_1: PropTypes.string.isRequired,
  remark11_2: PropTypes.string.isRequired,
  remark11_3: PropTypes.string.isRequired,
  remark11_4: PropTypes.string.isRequired,
  remark12: PropTypes.string.isRequired,
  remark13: PropTypes.string.isRequired,
  remark14: PropTypes.string.isRequired,
  remark15: PropTypes.string.isRequired,
  remark16_1: PropTypes.string.isRequired,
  remark16_2: PropTypes.string.isRequired,
  remark16_3: PropTypes.string.isRequired,
  remark16_4: PropTypes.string.isRequired,
  remark16_5: PropTypes.string.isRequired,
  remark16_6: PropTypes.string.isRequired,
  remark17_1: PropTypes.string.isRequired,
  remark17_2: PropTypes.string.isRequired,
  remark18: PropTypes.string.isRequired,
  remark19: PropTypes.string.isRequired,
  remark20: PropTypes.string.isRequired,
  sign1_karmachari: PropTypes.string.isRequired,
  sign1_examinarsection: PropTypes.string.isRequired,
  sign1_anurakshan: PropTypes.string.isRequired,
  sign1_ppio: PropTypes.string.isRequired,
  remark21: PropTypes.string.isRequired,
  remark22: PropTypes.string.isRequired,
  remark23: PropTypes.string.isRequired,
  remark24: PropTypes.string.isRequired,
  remark25: PropTypes.string.isRequired,
  remark26: PropTypes.string.isRequired,
  remark27: PropTypes.string.isRequired,
  remark28: PropTypes.string.isRequired,
  remark29: PropTypes.string.isRequired,
  remark30: PropTypes.string.isRequired,
  remark31: PropTypes.string.isRequired,
  remark32: PropTypes.string.isRequired,
  remark33: PropTypes.string.isRequired,
  remark34: PropTypes.string.isRequired,
  sign2_karmachari: PropTypes.string.isRequired,
  sign2_examinarsection: PropTypes.string.isRequired,
  sign2_anurakshan: PropTypes.string.isRequired,
  sign2_ppio: PropTypes.string.isRequired,
  change_1: PropTypes.string.isRequired,
  make_1: PropTypes.string.isRequired,
  change_2: PropTypes.string.isRequired,
  make_2: PropTypes.string.isRequired,
  change_3: PropTypes.string.isRequired,
  make_3: PropTypes.string.isRequired,
  change_4: PropTypes.string.isRequired,
  make_4: PropTypes.string.isRequired,
  change_5: PropTypes.string.isRequired,
  make_5: PropTypes.string.isRequired,
  change_6: PropTypes.string.isRequired,
  make_6: PropTypes.string.isRequired,
  change_7: PropTypes.string.isRequired,
  make_7: PropTypes.string.isRequired,
  change_8: PropTypes.string.isRequired,
  make_8: PropTypes.string.isRequired,
  change_9: PropTypes.string.isRequired,
  make_9: PropTypes.string.isRequired,
  change_10: PropTypes.string.isRequired,
  make_10: PropTypes.string.isRequired,
  sign3_karmachari: PropTypes.string.isRequired,
  sign3_examinarsection: PropTypes.string.isRequired,
  sign3_anurakshan: PropTypes.string.isRequired,
  sign3_ppio: PropTypes.string.isRequired,
};
