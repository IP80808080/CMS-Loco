import PropTypes from "prop-types";
export default function Details({ loco_no, date }) {
  return (
    <>
      <div className="header">
        <h2>
          विद्युत लोको शेड, मध्‍य रेल, भुसावल<br></br>पेंटोग्राफ और रूफ उपकरण
          (सामग्री) की मेजर शिडयुल चेकशिट
        </h2>
        <img
          src="IR Logo.png"
          alt="Logo"
          className="logo"
          height="70px"
          width="70px"
        ></img>
      </div>
      <div className="loco-dept">
        <div className="flex-container">
          <span className="loco-type">लोको प्रकार :- WAP-4 / WAG-5/WAG-9 </span>
          <span className="department">विभाग: बॉडी रिपीयर (BR)</span>
        </div>
      </div>
      <br> </br>
      <span className="inspection">निरीक्षण :- AOH / TOH / IOH</span>
      <span className="label" style={{ whiteSpace: "pre" }}>
        लोको सं.: {loco_no}
      </span>
      <span className="label2" style={{ whiteSpace: "pre" }}>
        दिनांक:{" "}
      </span>
      {new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })}

      <br> </br>
    </>
  );
}
Details.propTypes = {
  loco_no: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
