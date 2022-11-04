import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.scss";
import data from "./data";

import App from "./components/App";
import Articles from "./components/Article";
import SingleArticle from "./components/SingleArticle";

import Help from "./components/Help";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        <Route path="/articles/:slug" component={SingleArticle} />
        <Route path="/articles">
          <Articles data={data} />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
