import "./Navbar.scss";
import logo from "../../images/aushadhilogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <div className="menu">
        <p>LAB</p>
        <p>TESTS</p>
        <p>CONSULT DOCTORS</p>
        <p>CANCER CARE</p>
        <p>AYURVEDA CARE</p>
        <p>PLAN</p>
      </div>
    </div>
  );
};

export default Navbar;
