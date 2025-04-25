import React from "react";
import { createContext } from "react";
import { useState } from "react";


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students] = useState(["Vignesh", "Hema", "Vijay", "Abi", "Divya"]);
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (name) => {
    if (!favourites.includes(name)) {
      setFavourites([...favourites, name]);
    }
  };

  const removeFromFavourite = (name) => {
    setFavourites(favourites.filter((item) => item !== name));
  };

  return (
    <StudentContext.Provider value={{ students, favourites, addToFavourite, removeFromFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};
