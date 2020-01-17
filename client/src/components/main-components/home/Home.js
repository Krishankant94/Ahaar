import React, { Component } from "react";
import homeData from "../../../staticData/homePage.json";
import Card from "../../ahaar-common-ui/card";
import Jumbotron from "../../ahaar-common-ui/jumbotron";
import Header from "../../ahaar-common-ui/header";
import Apis from "../../../api/Apis";

export default class Home extends Component {
  handleLogin = type => {
    console.log("Login for type", type);
  };

  componentDidMount() {
    Apis.getRestorants().then(res => console.log(res));
  }

  render() {
    return (
      <>
        <Header IsLogin={false} />
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
      </>
    );
  }
}
