import { Link } from "react-router-dom";

function Navbar({ bookedCount }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">CarePoint</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Find Doctors</Link>
        <Link to="/booked">My Appointments ({bookedCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
