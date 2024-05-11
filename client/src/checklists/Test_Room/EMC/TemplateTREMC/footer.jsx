import PropTypes from "prop-types";

export default function Footer({ remark, name_tech }) {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>TR EMC--WAG-5</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-gray-100">
        <section className="container mx-auto py-8">
          <form className="bg-white  rounded-lg shadow-md">
            <div className="container">
              <tr>
                <td
                  className="border border-gray-400 px-4 py-2 font-bold"
                  colSpan="5"
                >
                  Remark: -<span style={{ whiteSpace: "pre" }}>{remark}</span>
                </td>
              </tr>
            </div>
            <br className="mt-5" />
          </form>
        </section>
      </body>
    </>
  );
}
Footer.propTypes = {
  remark: PropTypes.string.isRequired,
  name_tech: PropTypes.string.isRequired,
};
