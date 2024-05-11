import PropTypes from "prop-types";
export default function Details({
  stator_no,
  armature_no,
  bhrr_no,
  kmo_no,
  kmo_make,
  karmachari_name,
  engine_no,
  nikalne_date,
  kmv_no,
  nikalne_reason,
}) {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>TAO-659 Traction Motor OH checksheet</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="TAO-659.css"></link>
      </head>
      <body>
        <section className="container">
          <form>
            <h4 className="title">
              TAO-659कर्षण मोटर ओवरहाल करने के लिये जॉंच पत्रक<br></br>
              कर्षण मोटर डिस्‍मेंटल करने से पूर्व की जाने वाली जॉंच
            </h4>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="state_number">स्‍टेटर क्र.-</label>
                <div className="flex items-center justify-center">
                  {stator_no}
                </div>
                <label htmlFor="armature_number">आर्मेचर क्र.-</label>
                <div className="flex items-center justify-center">
                  {armature_no}
                </div>
                <label htmlFor="bhr_arr_number">बी.एच.आर.आर. अ.क्र.-</label>
                <div className="flex items-center justify-center">
                  {bhrr_no}
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="motor_type">क.मो. का प्रकार:-</label>
                <div className="flex items-center justify-center">{kmo_no}</div>
                <label htmlFor="motor_make">क.मो. का मेक:-</label>
                <div className="flex items-center justify-center">
                  {kmo_make}
                </div>
                <label htmlFor="employee_name">कर्मचारी का नाम:-</label>
                <div className="flex items-center justify-center">
                  {karmachari_name}
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="engine_number">इंजीन क्रमांक:-</label>
                <div className="flex items-center justify-center">
                  {engine_no}
                </div>
                <label htmlFor="removal_date">निकालने का दिनांक:-</label>
                <div className="flex items-center justify-center">
                  {nikalne_date}
                </div>
                <label htmlFor="motor_removal_date">
                  क.मो.विच्‍छेदन दिनांक:-
                </label>
                <div className="flex items-center justify-center">{kmv_no}</div>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="removal_reason">निकालने का कारण:-</label>
                <div className="flex items-center justify-center">
                  {nikalne_reason}
                </div>
              </div>
            </div>
            <br> </br>
          </form>
        </section>
      </body>
    </>
  );
}
Details.propTypes = {
  stator_no: PropTypes.string.isRequired,
  armature_no: PropTypes.string.isRequired,
  bhrr_no: PropTypes.string.isRequired,
  kmo_no: PropTypes.string.isRequired,
  kmo_make: PropTypes.string.isRequired,
  karmachari_name: PropTypes.string.isRequired,
  engine_no: PropTypes.string.isRequired,
  nikalne_date: PropTypes.string.isRequired,
  kmv_no: PropTypes.string.isRequired,
  nikalne_reason: PropTypes.string.isRequired,
};
