import React from "react";

export default function index({ lead, head, children, clsName }) {
  return (
    <div className={`jumbotron ${clsName ? clsName : ""}`}>
      {head && <h1 className="display-4">{head}</h1>}
      {lead && <p className="lead">{lead}</p>}
      <hr className="my-4" />
      <div className="row">{children}</div>
    </div>
  );
}
