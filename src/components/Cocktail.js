import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";

const Cocktail = ({ id, name, image, isAlcoholic, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="cocktail-footer">
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p>{isAlcoholic}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          {" "}
          Info
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
