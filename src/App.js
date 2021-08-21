import React from "react";
import "./App.css";
import Home from "./views/home";
import Loading from "./component/loading";
import SmallDevices from "./component/smalldevices";
import Header from "./component/header";

function App() {
  return (
    <div className="App">
      <Loading />
      <SmallDevices />
      <Header />
      <Home />
    </div>
  );
}

export default App;
