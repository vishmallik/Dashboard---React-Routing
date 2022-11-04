import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import NavPane from "./NavPane";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange = (event) => {
    let { value } = event.target;
    this.setState({
      value,
    });
  };
  render() {
    return (
      <>
        <Header />
        <div className="flex parent">
          <aside>
            <NavPane />
          </aside>
          <section>
            <input
              type="text"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <ul className="articles-list">
              {this.props.data.map((article) => {
                return article.title
                  .toLowerCase()
                  .includes(this.state.value.toLowerCase()) ? (
                  <li key={article.title}>
                    <Link to={"/articles/" + article.slug}>
                      {article.title}
                    </Link>
                    <p>{article.author}</p>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
          </section>
        </div>
      </>
    );
  }
}
