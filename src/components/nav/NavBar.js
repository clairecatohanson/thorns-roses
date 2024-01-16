import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/nurseries">
          Nurseries
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/distributors">
          Distributors
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/retailers">
          Retailers
        </Link>
      </li>
    </ul>
  );
};
