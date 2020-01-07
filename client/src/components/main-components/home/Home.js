import React, { Component } from "react";
import homeData from "../../../mockData/homePage.json";
import Card from "../../ahaar-common-ui/card";
import Jumbotron from "../../ahaar-common-ui/jumbotron";

export default class Home extends Component {
  handleLogin = type => {
    console.log("Login for type", type);
  };
  render() {
    return (
      <Jumbotron
        clsName={homeData.clsName}
        head={homeData.jhead}
        lead={homeData.jlead}
      >
        {homeData.children.map(item => (
          <Card
            containerClsName={item.containerClsName}
            heading={item.heading}
            onActionClick={() => this.handleLogin(item.type)}
          >
            {item.content}
          </Card>
        ))}
      </Jumbotron>
    );
  }
}
