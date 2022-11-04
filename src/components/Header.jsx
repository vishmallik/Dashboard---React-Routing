import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header className="flex start">
      <Link to="/" className="flex start">
        <i className="fa-solid fa-layer-group"></i>
        <h2>Dashboard</h2>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 385 385"
        onClick={props.onClick}
      >
        <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
      </svg>
      <input type="text" name="" id="" placeholder="Search documentation" />
    </header>
  );
}
