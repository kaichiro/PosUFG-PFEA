import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import PerfilComponent from './components/semantic/PerfilComponent';

// ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/perfil" component={PerfilComponent}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
