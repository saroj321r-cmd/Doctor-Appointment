import DoctorCard from "../components/DoctorCard";

function Booked({ bookedDoctors }) {
  return (
    <div className="page">
      <div className="page-heading">
        <p className="small-heading">YOUR BOOKINGS</p>
        <h1>My Appointments</h1>
        <p>Doctors whose appointments you have booked are shown here.</p>
      </div>

      {bookedDoctors.length > 0 ? (
        <div className="doctor-grid">
          {bookedDoctors.map(function (doctor) {
            return (
              <div key={doctor.id}>
                <DoctorCard doctor={doctor} />
                <p className="success-message booked-label">✓ Appointment booked</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-message">
          <h2>No appointments yet</h2>
          <p>Visit Find Doctors to book your first appointment.</p>
        </div>
      )}
    </div>
  );
}

export default Booked;
