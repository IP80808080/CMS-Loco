import PropTypes from "prop-types";
export default function Details({
    overhaul_date,
    revctf_make,
    schedule,
    removed_locono,
    coil_srno,
    provided_locono,
    epvalve_srno1,
    epvalve_srno2,
}) {
  return (
   <>
   <div class="header">
                  <h2>
                    Electric Loco Shed , Bhusawal <br></br>
                    Check-sheet for SPM (AOH/IOH)
                  </h2>
                  <img
                    src="IR Logo.png"
                    alt="Logo"
                    class="logo"
                    height="70px"
                    width="70px"
                  ></img>
                </div>
                <div class="loco-dept"></div>
                <div class="flex-container">
                  <p>(MMCLW)</p>
                </div>
                <br></br>
                <div class="table-responsive">
                  <table>
                    <tr>
                      <td>
                        <label for="Date of overhauling:-">
                        <span style={{ whiteSpace: "pre" }}>
                          Date of overhauling:-
                          {overhaul_date}</span>
                        </label>
                      </td>
                      <td>
                        <label for="Make of Rev/CTF:-">
                        <span style={{ whiteSpace: "pre" }}>
                          Make of Rev/CTF:- {revctf_make}
                         </span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="Schedule:-">
                        <span style={{ whiteSpace: "pre" }}>
                          Schedule:- {schedule}
                         </span>
                        </label>
                      </td>
                      <td>
                        <label for="Removed from Loco No.:-">
                        <span style={{ whiteSpace: "pre" }}>
                          Removed from Loco No.:-
                         {removed_locono}
                         </span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="Sr. No. of coil :-">
                        <span style={{ whiteSpace: "pre" }}>
                          Sr. No. of coil :-
                         {coil_srno}
                         </span>
                        </label>
                      </td>
                      <td>
                        <label for="Provided on Loco No.:-">
                        <span style={{ whiteSpace: "pre" }}>
                          Provided on Loco No.:-
                         {provided_locono}
                         </span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label for="EP valve Sr. No.:-">
                        <span style={{ whiteSpace: "pre" }}>
                          EP valve Sr. No.:-
                         {epvalve_srno1}
                         </span>
                        </label>
                      </td>
                      <td>
                        <label for="EP valve Sr. No.:-">
                        <span style={{ whiteSpace: "pre" }}>
                          EP valve Sr. No.:- {epvalve_srno2}
                          </span>
                        </label>
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
   </>
  );
}
Details.propTypes = {
  equipmentNumber: PropTypes.string.isRequired,
  overhaul_date: PropTypes.string.isRequired,
  revctf_make: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  removed_locono: PropTypes.string.isRequired,
  coil_srno: PropTypes.string.isRequired,
  provided_locono: PropTypes.string.isRequired,
  epvalve_srno1: PropTypes.string.isRequired,
  epvalve_srno2: PropTypes.string.isRequired,
  
};
