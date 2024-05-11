import PropTypes from "prop-types";
export default function Details({ locono1, date1 }) {
  return (
    <>
      <div className="header-text">
        <h4>
          मध्य रेल <br></br>
          विद्युत लोको शेड, भुसावल.
        </h4>
      </div>
      <div>
        <label htmlFor="loko_number">लोको सं. : </label>
        <span style={{ whiteSpace: "pre" }}>{locono1}</span>
        <label htmlFor="date">दिनांक:</label>
        <span style={{ whiteSpace: "pre" }}>
          {new Date(date1).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </span>
        <label htmlFor="inspection">निरीक्षण: TOH</label>
        <input type="checkbox"></input>
        <label htmlFor="inspection"> IOH</label>
        <input type="checkbox"></input>
        <label htmlFor="department">विभाग: स्टॅटिक इक्विपमेंट (S.E.)</label>
      </div>
      <br></br>
      <div className="header-text">
        <h4>TOH तथा IOH के दौरान SMGR ओवरहॉलिंग की चेकशीट</h4>
      </div>
    </>
  );
}
Details.propTypes = {
  locono1: PropTypes.string.isRequired,
  date1: PropTypes.string.isRequired,
};
