import PropTypes from "prop-types";
export default function Details({
  loco_no1,
  date_1,
  oh_date,
  schedule,
  vcb_srno,
  removed_loco,
  provided_date,
}) {
  return (
    <>
      <section className="container">
        <form>
          <div className="header-text">
            <h4>
              CENTRAL RAILWAY <br></br>ELECTRIC LOCO SHED, BHUSAWAL
            </h4>
          </div>
          <label htmlFor="loco-number">
            <span style={{ whiteSpace: "pre" }}>Loco No:{loco_no1}</span>
          </label>
          <label htmlFor="date">
            <span style={{ whiteSpace: "pre" }}>Date:</span>
            {new Date(date_1).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </label>
          <br></br>
          <div>
            <label htmlFor="section">Section:</label>
            <span>Test Room</span>
          </div>
          <div>
            <label htmlFor="inspection">Inspection:</label>
            <span>
              AOH<input type="checkbox" aria-label=" "></input> IOH
              <input type="checkbox" aria-label=" "></input> TOH
              <input type="checkbox" aria-label=" "></input>
            </span>
          </div>

          <br> </br>
          <div className="header">
            <h2>
              Electric Loco Shed , Bhusawal <br></br>
              Check Sheet for Single bottle VCB (Type VCBA 25.10 Tr ) of M/s AAL
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
                        Schedule - {schedule}
                      </span>
                    </label>
                  </td>
                  <td>
                    <label htmlFor="VCB Sr. No -">
                      <span style={{ whiteSpace: "pre" }}>
                        VCB Sr. No - {vcb_srno}
                      </span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <label htmlFor="Provided Date:-">
                      <span style={{ whiteSpace: "pre" }}>
                        Remove from Loco- {removed_loco}
                      </span>
                    </label>
                  </td>
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
          <br></br>
        </form>
      </section>
    </>
  );
}
Details.propTypes = {
  loco_no1: PropTypes.string.isRequired,
  date_1: PropTypes.string.isRequired,
  oh_date: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  vcb_srno: PropTypes.string.isRequired,
  removed_loco: PropTypes.string.isRequired,
  provided_date: PropTypes.string.isRequired,
};
