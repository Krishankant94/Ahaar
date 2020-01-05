import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Food to make india healthy and fit </h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <div class="row">
          <div class="col-sm">For restorants</div>
          <div class="col-sm">For Users</div>
        </div>
      </div>
    );
  }
}
