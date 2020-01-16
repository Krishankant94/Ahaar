import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="ahaar-main-container">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
