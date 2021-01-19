import { Link } from "react-router-dom";
import onRewindLogo from "../assets/images/onRewindLogo.png";
export default function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={onRewindLogo} alt="OnRewind Logo" />
      </Link>
      <Link to="/funzone">Funzone</Link>
      <Link to="/testimonials">Testimonial</Link>
    </div>
  );
}
