import PropTypes from "prop-types";
export default function Details({
  oh_date,
  schedule,
  vcb_srno,
  provided_date,
}) {
  return (
    <>
      <div className="header">
        <h2>
          Electric Loco Shed , Bhusawal <br></br>
          Check-sheet for Single Bottle VCB 22 CB (Areva )
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
        <div className="flex-container"></div>
        <br> </br>
        <div className="table-responsive">
          <table>
            <tr>
              <td>
                <label htmlFor="O/H Date">
                  <span style={{ whiteSpace: "pre" }}>O/H Date</span>
                  {new Date(oh_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </label>
              </td>
              <td>
                <label htmlFor="Schedule -">
                  <span style={{ whiteSpace: "pre" }}>
                    Schedule -{schedule}
                  </span>
                </label>
              </td>
              <td>
                <label htmlFor="VCB Sr. No -">
                  <span style={{ whiteSpace: "pre" }}>
                    VCB Sr. No -{vcb_srno}
                  </span>
                </label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <label htmlFor="Provided Date:-">
                  <span style={{ whiteSpace: "pre" }}>Provided Date:-</span>
                  {new Date(provided_date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  })}
                </label>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br></br>
    </>
  );
}
Details.propTypes = {
  oh_date: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  vcb_srno: PropTypes.string.isRequired,
  provided_date: PropTypes.string.isRequired,
};
