import "./Volunteer.css";

const Volunteer = () => {
  return (
    <div className="volunteer">
      <h1>Get Involved</h1>
      <div className="button">
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1hHw6GMFzMKns828143kUZ4J36J9rAR6TN7Z8nqKhze8/edit"
            )
          }
        >
          Become a Volunteer
        </button>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/1JdMGGFqd6vru-175CdLMwohuPDl1yGdlpmySoJONhnw/edit#response=ACYDBNgarqa6BY6YDonmy1QSm_D2OFGg_hI0c2-F8RqXhSfrmCIvBSYs-va_MVX1ITVLeQw"
            )
          }
        >
          Start a Chapter
        </button>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfYHZke8QmIHSF6lBscPLU6fktXU7c9I1CpuikKabM8WLohww/viewform?usp=header"
            )
          }
        >
          Be a Leader
        </button>
      </div>
      <div className="description">
        <div className="descItem">
          <h1> Become a Volunteer </h1>
          <p>PLACEHOLDER</p>
        </div>

        <div className="descItem">
          <h1> Start a Chapter </h1>
          <p>PLACEHOLDER</p>
        </div>
        <div className="descItem">
          <h1> Be a Leader </h1>
          <p>PLACEHOLDER</p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
