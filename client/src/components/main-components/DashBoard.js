import React from "react";
import Header from "../ahaar-common-ui/header";
import dashboardData from "../../staticData/dashboard.json";

function DashBoard() {
  return (
    <div className="ahhar-main-dashboard">
      <Header menuItems={dashboardData.menuItems} IsLogin={true} />
      <div>Slider</div>
      <div>Enter Current Location and search </div>
      <div>
        <main>Show all the collection</main>
        <aside>detect or enter delivery address </aside>
      </div>
    </div>
  );
}

export default DashBoard;
