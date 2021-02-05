import React from "react";
import Card from "./Card";

const CardList = ({ pokemons }) => {
  return (
    <div>
      {
        pokemons.map((user, i) => {
        return (
          <Card
            key={i}
            name={pokemons[i].name}
            index={pokemons[i].index
            }
          />
        );
      })}
    </div>
  );
};

export default CardList;
