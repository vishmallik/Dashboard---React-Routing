import Header from "./Header";
import { Link } from "react-router-dom";
import NavPane from "./NavPane";
export default function App(props) {
  console.log(props);
  return (
    <>
      <Header />
      <div className="flex parent">
        <aside>
          <NavPane />
        </aside>
        <section>
          <h1>🚀 Welcome to Homepage!</h1>
          <div className="flex start">
            <Link className="flex-32" to="/articles">
              <p>Articles Page</p>
            </Link>
            <Link className="flex-32" to="/help">
              <p>Help Page</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
