import React, { Component } from "react";
import homeData from "../../../mockData/homePage.json";
import Card from "../../ahaar-common-ui/card";

export default class Home extends Component {
  handleLogin = type => {
    console.log("Login for type", type);
  };
  render() {
    const content = homeData.map(item => (
      <Card
        heading={item.heading}
        onBtnClick={() => this.handleLogin(item.type)}
      >
        {item.content}
      </Card>
    ));
    return (
      <div className="jumbotron ahaar-home">
        <h1 className="display-4">Food to make india healthy and fit </h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <div className="row">{content}</div>
      </div>
    );
  }
}
