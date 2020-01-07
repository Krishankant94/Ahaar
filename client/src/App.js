import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/ahaar-common-ui/header/Header";

function App() {
  return (
    <Router>
      <div className="ahaar-main-container">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
