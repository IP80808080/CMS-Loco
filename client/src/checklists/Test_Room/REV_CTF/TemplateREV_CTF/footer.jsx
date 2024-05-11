import PropTypes from "prop-types";

export default function Footer({ remark,
    tech_name,
    jesse_name,
    jesse_sign, }) {
  return (
    <>
      <footer>
      <div class="signature">
                  <label for="Remark"><span style={{ whiteSpace: "pre" }}>Remark :-{remark}</span></label>
                  <br></br>
                  <label for="Name of Tech ">  <span style={{ whiteSpace: "pre" }} >Name of Tech {tech_name} </span> </label>
                  <label for="Name and sign.of JE/SSE ">
                  <span style={{ whiteSpace: "pre" }} >
                    Name and sign.of JE/SSE {jesse_name} {" "}</span>

                    <span style={{ whiteSpace: "pre" }} >{jesse_sign}</span>
                  </label>
                </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  sign: PropTypes.string.isRequired,
  remark: PropTypes.string.isRequired,
    tech_name: PropTypes.string.isRequired,
    jesse_name: PropTypes.string.isRequired,
    jesse_sign: PropTypes.string.isRequired,
};
