import PropTypes from "prop-types";

export default function Footer({
  tech_sign,
  jesse_sign,
  tech_name,
  jesse_name,
}) {
  return (
    <>
      <footer>
        <div className="signature">
          <label htmlFor="Sign of Tech -">
            <span style={{ whiteSpace: "pre" }}>Sign of Tech -{tech_sign}</span>
          </label>

          <label htmlFor="Sign of JE/SSE -">
            <span style={{ whiteSpace: "pre" }}>
              Sign of JE/SSE -{jesse_sign}
            </span>
          </label>
          <br></br>
          <label htmlFor="Name of Tech -">
            <span style={{ whiteSpace: "pre" }}>Name of Tech -{tech_name}</span>
          </label>

          <label htmlFor="Name of JE/SSE -">
            <span style={{ whiteSpace: "pre" }}>
              Name of JE/SSE -{jesse_name}
            </span>
          </label>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  sign: PropTypes.string.isRequired,
  tech_sign: PropTypes.string.isRequired,
  jesse_sign: PropTypes.string.isRequired,
  tech_name: PropTypes.string.isRequired,
  jesse_name: PropTypes.string.isRequired,
};
