import PropTypes from "prop-types";
export default function Footer({
  sign3_karmachari,
  sign3_examinarsection,
  sign3_anurakshan,
  sign3_ppio,
}) {
  return (
    <>
      <footer>
        <div className="signature">
          <label htmlFor="employee_signature">
            <span style={{ whiteSpace: "pre" }}>
              कर्मचारी के हस्ताक्षर:{sign3_karmachari}
            </span>
          </label>

          <label htmlFor="section_supervisor_signature">
            <span style={{ whiteSpace: "pre" }}>
              सेक्शन पर्यवेक्षक के हस्ताक्षर:{sign3_examinarsection}
            </span>
          </label>

          <label htmlFor="section_supervisor_signature">
            <span style={{ whiteSpace: "pre" }}>
              अनुरक्षण पर्यवेक्षक के हस्‍ताक्षर:{sign3_anurakshan}
            </span>
          </label>

          <label htmlFor="preservation_supervisor_signature">
            <span style={{ whiteSpace: "pre" }}>
              पी.पी.आय.ओ पर्यवेक्षक के हस्ताक्षर:{sign3_ppio}
            </span>
          </label>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  sign3_karmachari: PropTypes.string.isRequired,
  sign3_examinarsection: PropTypes.string.isRequired,
  sign3_anurakshan: PropTypes.string.isRequired,
  sign3_ppio: PropTypes.string.isRequired,
};
