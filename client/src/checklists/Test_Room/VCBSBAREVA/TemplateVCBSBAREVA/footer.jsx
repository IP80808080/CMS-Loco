import PropTypes from "prop-types";

export default function Footer({ remark }) {
  return (
    <>
      <footer>
        <div className="signature">
          <label htmlFor="Remark">
            <span style={{ whiteSpace: "pre" }}>Remark :- {remark}</span>
          </label>
          <br></br>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  remark: PropTypes.string.isRequired,
};
