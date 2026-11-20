import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <div className="doctor-icon">✚</div>
      <h3>{doctor.name}</h3>
      <p className="speciality">{doctor.specialization}</p>
      <p>{doctor.hospital}</p>
      <div className="card-info">
        <span>{doctor.experience} years experience</span>
        <span>★ {doctor.rating}</span>
      </div>
      <p className="fee">Consultation Fee: ₹{doctor.fee}</p>
      <p className={doctor.isAvailableToday && doctor.availableSlots > 0 ? "available" : "not-available"}>
        {doctor.isAvailableToday && doctor.availableSlots > 0
          ? doctor.availableSlots + " slots available"
          : "Not available today"}
      </p>
      <Link className="details-button" to={"/doctors/" + doctor.id}>View Details</Link>
    </div>
  );
}

export default DoctorCard;
