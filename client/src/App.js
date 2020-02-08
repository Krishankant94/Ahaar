import React from "react";
import Routes from "./Routes";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/ahaar-common-ui/loader";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className="ahaar-main-container">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
