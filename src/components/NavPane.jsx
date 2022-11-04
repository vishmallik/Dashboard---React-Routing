import { NavLink } from "react-router-dom";

export default function NavPane(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact className="flex start" activeClassName="active">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles"
            className="flex start"
            activeClassName="active"
          >
            <i className="fa-solid fa-a"></i>
            <span>Article</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help" className="flex start" activeClassName="active">
            <i className="fa-solid fa-message"></i>
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
