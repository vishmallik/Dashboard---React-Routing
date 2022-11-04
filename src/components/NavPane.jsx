import { NavLink } from "react-router-dom";

export default function NavPane() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="flex start" activeClassName="active">
            <i className="fa-solid fa-house"></i>
            <h2>Home</h2>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className="flex start"
            activeClassName="active"
          >
            <i className="fa-solid fa-a"></i>
            <h2>Article</h2>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help" className="flex start" activeClassName="active">
            <i className="fa-solid fa-message"></i>
            <h2>Help & Support</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
