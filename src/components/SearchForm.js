import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your Fav Cocktail</label>
          <input
            type="text"
            name=""
            id="name"
            ref={searchValue}
            onChange={() => {
              searchCocktail();
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
