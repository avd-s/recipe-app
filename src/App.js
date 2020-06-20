import React, { useEffect, useState } from "react";
import Receipe from "./receipe";
import "./App.css";

const App = () => {
  const APP_ID = "a5621491";
  const APP_KEY = "6f9fe70284d1209302eee026adcbe6f8	";

  const [receipes, setreceipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getReceipes();
  }, [query]);

  const getReceipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setreceipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="name">
        <h2>React Recipes</h2>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="rec">
        {receipes.map((recp) => (
          <Receipe
            key={recp.recipe.label}
            Title={recp.recipe.label}
            Calories={recp.recipe.calories}
            image={recp.recipe.image}
            ingredients={recp.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
