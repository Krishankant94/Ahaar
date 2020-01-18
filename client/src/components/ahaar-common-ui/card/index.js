import React from "react";

function card({ heading, children, image, containerClsName, actions }) {
  const containerClass = containerClsName ? containerClsName : "";
  return (
    <div className={`card ${containerClass}`}>
      <div className="card-body">
        {image && <img src={image} className="card-img-top" alt="..." />}
        <h2 className="card-title">{heading}</h2>
        <div className="card-text">{children}</div>
        <div className="btn-section">{actions}</div>
      </div>
    </div>
  );
}
export default card;
