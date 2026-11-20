import { Link } from "react-router-dom";

function Home({ doctors, bookedDoctors }) {
  const availableDoctors = doctors.filter(function (doctor) {
    return doctor.isAvailableToday && doctor.availableSlots > 0;
  });

  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="small-heading">YOUR HEALTH, OUR PRIORITY</p>
          <h1>Find the right doctor.<br />Feel better, sooner.</h1>
          <p className="hero-text">
            Book appointments with trusted doctors in a few simple steps.
          </p>
          <Link to="/doctors" className="main-button">Explore Doctors</Link>
        </div>
        <div className="hero-symbol">✚</div>
      </section>

      <h2 className="section-title">Appointment Overview</h2>
      <div className="stats">
        <div className="stat-box">
          <h2>{doctors.length}</h2>
          <p>Total Doctors</p>
        </div>
        <div className="stat-box">
          <h2>{availableDoctors.length}</h2>
          <p>Available Today</p>
        </div>
        <div className="stat-box">
          <h2>{bookedDoctors.length}</h2>
          <p>My Appointments</p>
        </div>
      </div>

      <section className="home-bottom">
        <div>
          <h2>Need a consultation?</h2>
          <p>Choose a doctor based on specialization, experience and fee.</p>
        </div>
        <Link to="/doctors" className="outline-button">Find a Doctor</Link>
      </section>
    </div>
  );
}

export default Home;
