import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/" className="flex start">
        <i className="fa-solid fa-layer-group"></i>
        <h2>Dashboard</h2>
      </Link>
    </header>
  );
}
