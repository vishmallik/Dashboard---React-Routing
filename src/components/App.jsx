import Header from "./Header";
import { Link } from "react-router-dom";
import NavPane from "./NavPane";
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: true,
    };
  }
  handleClick = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <>
        <Header onClick={this.handleClick} />
        <div className="flex parent">
          <aside className={this.state.isNavOpen ? "" : "hidden"}>
            <NavPane navOpen={this.state.isNavOpen} />
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
}
