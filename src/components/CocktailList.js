import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No Cocktails Matched your Search criteria
      </h2>
    );
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktail</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item}></Cocktail>;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
