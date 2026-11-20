import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import doctorData from "./data/doctors";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Booked from "./pages/Booked";
import "./App.css";

function App() {
  const [doctors, setDoctors] = useState(doctorData);

  function bookDoctor(id) {
    setDoctors(function (oldDoctors) {
      return oldDoctors.map(function (doctor) {
        if (doctor.id === id) {
          return { ...doctor, isBooked: true, availableSlots: doctor.availableSlots - 1 };
        }
        return doctor;
      });
    });
  }

  const bookedDoctors = doctors.filter(function (doctor) {
    return doctor.isBooked;
  });

  return (
    <BrowserRouter>
      <Navbar bookedCount={bookedDoctors.length} />

      <Routes>
        <Route
          path="/"
          element={<Home doctors={doctors} bookedDoctors={bookedDoctors} />}
        />
        <Route
          path="/doctors"
          element={<Doctors doctors={doctors} />}
        />
        <Route
          path="/doctors/:id"
          element={<DoctorDetails doctors={doctors} bookDoctor={bookDoctor} />}
        />
        <Route
          path="/booked"
          element={<Booked bookedDoctors={bookedDoctors} />}
        />
      </Routes>

      <footer>
        <p>© 2026 CarePoint | Doctor Appointment System</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
