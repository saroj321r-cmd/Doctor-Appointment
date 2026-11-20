import { useState } from "react";
import DoctorCard from "../components/DoctorCard";

function Doctors({ doctors }) {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  const filteredDoctors = doctors.filter(function (doctor) {
    const nameMatch = doctor.name.toLowerCase().includes(search.toLowerCase());
    const specializationMatch =
      specialization === "All" || doctor.specialization === specialization;

    return nameMatch && specializationMatch;
  });

  return (
    <div className="page">
      <div className="page-heading">
        <p className="small-heading">OUR MEDICAL TEAM</p>
        <h1>Find a Doctor</h1>
        <p>Search doctors by name or choose a specialization.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search doctor name..."
          value={search}
          onChange={function (event) {
            setSearch(event.target.value);
          }}
        />

        <select
          value={specialization}
          onChange={function (event) {
            setSpecialization(event.target.value);
          }}
        >
          <option value="All">All Specializations</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Dentist">Dentist</option>
        </select>
      </div>

      <p className="result-count">Showing {filteredDoctors.length} doctor(s)</p>

      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(function (doctor) {
            return <DoctorCard key={doctor.id} doctor={doctor} />;
          })
        ) : (
          <div className="empty-message">No doctors found. Try another search.</div>
        )}
      </div>
    </div>
  );
}

export default Doctors;
