import PropTypes from "prop-types";

export default function Footer({
  remark,
  name_karmchari,
  sign_karmchari,
  sectionexaminar_name,
  sectionexaminar_sign,
}) {
  return (
    <>
      <footer>
        <div className="signature">
          <label htmlFor="Remark">Remark :-</label>
          <br></br>
          <span style={{ whiteSpace: "pre" }}>{remark}</span>
          <label htmlFor="Employee Name">कर्मचारी का नाम-</label>
          <span style={{ whiteSpace: "pre" }}>{name_karmchari}</span>
          <label htmlFor="Employee Signature-">कर्मचारी का हस्‍ताक्षर -</label>
          <br></br>
          <span style={{ whiteSpace: "pre" }}>{sign_karmchari}</span>
          <label htmlFor="Section Supervisor's Name and Signature">
            {" "}
            सेक्शनपर्यवेक्षक का नाम तथा हस्‍ताक्षर -
          </label>
          <span style={{ whiteSpace: "pre" }}>{sectionexaminar_name}</span>
          <span style={{ whiteSpace: "pre" }}>{sectionexaminar_sign}</span>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  remark: PropTypes.string.isRequired,
  name_karmchari: PropTypes.string.isRequired,
  sign_karmchari: PropTypes.string.isRequired,
  sectionexaminar_name: PropTypes.string.isRequired,
  sectionexaminar_sign: PropTypes.string.isRequired,
};
