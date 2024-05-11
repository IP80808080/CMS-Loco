import PropTypes from "prop-types";

export default function Footer({
  name_staff,
  sign_staff,
  name_supervisor,
  sign_supervisor,
}) {
  return (
    <>
      <footer>
        <div className="signature">
          <label htmlFor="Name & Sign of staff">
            <span style={{ whiteSpace: "pre" }}>
              Name & Sign of staff {name_staff} {sign_staff}
            </span>
          </label>
          <label htmlFor="Name & Sign of Supervisor">
            <span style={{ whiteSpace: "pre" }}>
              Name & Sign of Supervisor {name_supervisor} {sign_supervisor}
            </span>
          </label>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  name_staff: PropTypes.string.isRequired,
  sign_staff: PropTypes.string.isRequired,
  name_supervisor: PropTypes.string.isRequired,
  sign_supervisor: PropTypes.string.isRequired,
};
