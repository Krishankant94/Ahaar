import React, { Component } from "react";
import homeData from "../../../staticData/homePage.json";
import Card from "../../ahaar-common-ui/card";
import Jumbotron from "../../ahaar-common-ui/jumbotron";
import Header from "../../ahaar-common-ui/header";
import Button from "../../ahaar-common-ui/button";

export default class Home extends Component {
  handleLogin = type => {
  
    console.log("Login for type", type);
  };

  render() {
    return (
      <>
        <Header />
        <Jumbotron
          clsName={homeData.clsName}
          head={homeData.jhead}
          lead={homeData.jlead}
        >
          {homeData.children.map(item => (
            <Card
              containerClsName={item.containerClsName}
              heading={item.heading}
              actions={
                <Button primary onClick={() => this.handleLogin(item.type)}>
                  Login
                </Button>
              }
            >
              {item.content}
            </Card>
          ))}
        </Jumbotron>
      </>
    );
  }
}
