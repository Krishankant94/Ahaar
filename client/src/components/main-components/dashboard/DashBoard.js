import React, { useEffect, useState } from "react";
import Header from "../../ahaar-common-ui/header";
import dashboardData from "../../../staticData/dashboard.json";
import Card from "../../ahaar-common-ui/card";
import Apis from "../../../api/Apis";
import Input from "../../ahaar-common-ui/input";
import Button from "../../ahaar-common-ui/button";
import Home from "../../main-components/home/Home";
import { useAuth0 } from "../../../react-auth0-spa";

function DashBoard() {
  const { isAuthenticated } = useAuth0();
  const [resorants, setRestorants] = useState(null);
  const [searchLocText, setLocationText] = useState({ value: "", erorr: "" });

  useEffect(() => {
    Apis.getRestorants()
      .then(res => res.json())
      .then(data => setRestorants(data));
  }, []);

  if (!isAuthenticated) {
    return <Home />;
  }

  return (
    <div className="ahhar-main-dashboard">
      <Header menuItems={dashboardData.menuItems} />
      <div className="search-section">
        <Input
          className="search-loc mr-1"
          name="searchItem"
          value={searchLocText.value}
          type="text"
          error={searchLocText.error}
          placeholder="Enter your current Location"
          onChange={e => setLocationText(e.target.value)}
        />
        <Button primary>Search</Button>
      </div>
      <div className="dashboard-collection mt-4">
        {resorants &&
          resorants.map((restorant, i) => (
            <Card
              key={i}
              heading={restorant.name}
              image={restorant.image}
            ></Card>
          ))}
      </div>
    </div>
  );
}

export default DashBoard;
