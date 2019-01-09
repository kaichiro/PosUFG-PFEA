import * as React from "react";
import "./App.css";
import HomeComponent from "./components/home/HomeComponent";

class App extends React.Component {
  // tslint:disable-next-line:member-access
  render() {
    return (
      <div className="App">
        <HomeComponent />
      </div>
    );
  }
}

export default App;
