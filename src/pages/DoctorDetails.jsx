import { Link, useParams } from "react-router-dom";

function DoctorDetails({ doctors, bookDoctor }) {
  const { id } = useParams();

  const doctor = doctors.find(function (item) {
    return item.id === Number(id);
  });

  if (!doctor) {
    return (
      <div className="page empty-message">
        <h2>Doctor not found</h2>
        <Link to="/doctors">Back to doctors</Link>
      </div>
    );
  }

  const canBook = doctor.isAvailableToday && doctor.availableSlots > 0;

  return (
    <div className="page">
      <Link to="/doctors" className="back-link">← Back to doctors</Link>

      <div className="details-card">
        <div className="details-top">
          <div className="doctor-icon big-icon">✚</div>
          <div>
            <p className="small-heading">DOCTOR PROFILE</p>
            <h1>{doctor.name}</h1>
            <p className="speciality">{doctor.specialization}</p>
          </div>
        </div>

        <div className="detail-list">
          <p><strong>Hospital:</strong> {doctor.hospital}</p>
          <p><strong>Experience:</strong> {doctor.experience} years</p>
          <p><strong>Rating:</strong> ★ {doctor.rating} / 5</p>
          <p><strong>Consultation Fee:</strong> ₹{doctor.fee}</p>
          <p><strong>Available Slots:</strong> {doctor.availableSlots}</p>
          <p><strong>Available Today:</strong> {doctor.isAvailableToday ? "Yes" : "No"}</p>
        </div>

        {doctor.isBooked ? (
          <p className="success-message">You have booked this appointment.</p>
        ) : canBook ? (
          <button className="main-button" onClick={function () { bookDoctor(doctor.id); }}>
            Book Appointment
          </button>
        ) : (
          <p className="not-available">Appointments are not available today.</p>
        )}
      </div>
    </div>
  );
}

export default DoctorDetails;
