import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className="cocktail">
      <Link to={`/cocktail/${id}`}>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
      </Link>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}
