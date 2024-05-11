import PropTypes from "prop-types";

export default function Footer({ sign, uid }) {
  return (
    <>
      <footer>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <label htmlFor="तकनिशियन" className="form-label custom-label">
                <span style={{ whiteSpace: "pre" }}>
                  तकनिशियन का नाम एवं हस्ताक्षर:{" "}
                </span>
              </label>
              <input
                type="text"
                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                placeholder="Name"
                aria-label="Name"
                value={sign}
                readOnly
              ></input>
            </div>
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <label htmlFor="तकनिशियन" className="form-label custom-label">
                <span style={{ whiteSpace: "pre" }}>तकनिशियन का ID: </span>
              </label>
              <input
                type="text"
                className="placeholder-center text-center border border-gray-300 rounded-md p-2 form-control-sm"
                placeholder="ID"
                aria-label="ID"
                required
                value={uid}
                readOnly
              ></input>
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="सुपरवाईजर" className="form-label custom-label">
                सुपरवाईजर का नाम एवं हस्ताक्षर:
              </label>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  sign: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
};
