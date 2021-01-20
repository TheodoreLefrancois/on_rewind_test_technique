import { Link } from "react-router-dom";
import onRewindLogo from "../assets/images/onRewindLogo.png";
import "./header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-items">
        <Link to="/">
          <img
            height="100px"
            width="100px"
            src={onRewindLogo}
            alt="OnRewind Logo"
          />
        </Link>
      </div>
      <div className="header-items">
        <Link style={{ listStyle: "none" }} to="/funzone">
          Funzone
        </Link>
      </div>
      <div className="header-items">
        <Link to="/testimonials">Testimonial</Link>
      </div>
    </div>
  );
}
