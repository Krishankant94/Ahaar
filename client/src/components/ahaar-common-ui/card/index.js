import React from "react";
import Button from "../button";

function card({ heading, children, onBtnClick }) {
  return (
    <div className="card col-sm-6">
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <div className="card-text">{children}</div>
        <div className="btn-section">
          <Button primary onClick={onBtnClick}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
export default card;
