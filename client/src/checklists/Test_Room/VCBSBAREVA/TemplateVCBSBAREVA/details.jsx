import PropTypes from "prop-types";
export default function Details({
  oh_date,
  schedule,
  equipmentNumber,
  removed_loco,
  provided_date,
}) {
  return (
    <>
      <section className="container">
        <form>
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
          <div className="loco-dept"></div>
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
                      Schedule - {schedule}
                    </span>
                  </label>
                </td>
                <td>
                  <label htmlFor="VCB Sr. No -">
                    <span style={{ whiteSpace: "pre" }}>
                      VCB Sr. No - {equipmentNumber}
                    </span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Remove from Loco">
                    <span style={{ whiteSpace: "pre" }}>
                      Remove from Loco: {removed_loco}
                    </span>
                  </label>
                </td>
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
          <br></br>
        </form>
      </section>
      <div style="height: 25px;"></div>
    </>
  );
}
Details.propTypes = {
  oh_date: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  equipmentNumber: PropTypes.string.isRequired,
  removed_loco: PropTypes.string.isRequired,
  provided_date: PropTypes.string.isRequired,
};
