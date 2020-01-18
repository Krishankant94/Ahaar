import React, { useEffect, useState } from "react";
import Header from "../../ahaar-common-ui/header";
import dashboardData from "../../../staticData/dashboard.json";
import Card from "../../ahaar-common-ui/card";
import Apis from "../../../api/Apis";

function DashBoard() {
  const [resorants, setRestorants] = useState(null);

  useEffect(() => {
    Apis.getRestorants().then(res => setRestorants(res));
  }, []);
  return (
    <div className="ahhar-main-dashboard">
      <Header menuItems={dashboardData.menuItems} IsLogin={true} />
      <div className="dashboard-collection">
        {resorants &&
          resorants.map(restorant => (
            <Card heading={restorant.name} image={restorant.image}></Card>
          ))}
      </div>
    </div>
  );
}

export default DashBoard;
