import { Link } from "react-router-dom";
import Header from "./Header";
import NavPane from "./NavPane";

export default function SingleArticle(props) {
  return (
    <>
      <Header />
      <div className="flex parent">
        <aside>
          <NavPane />
        </aside>
        <section>
          <Link to="/articles" className="go-back">
            👈 Go back to articles
          </Link>
          <p>The slug of the article is ::: {props.match.params.slug}</p>
        </section>
      </div>
    </>
  );
}
