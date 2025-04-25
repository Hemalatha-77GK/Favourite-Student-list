import React from "react";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

const FavouriteStudents = () => {
  const { favourites, removeFromFavourite } = useContext(StudentContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold text-red-600 mb-4">Favourite Students</h2>
      <div className="space-y-3">
        {favourites.map((name, index) => (
          <div key={index} className="flex justify-between items-center bg-yellow-100 p-4 rounded-md">
            <span className="text-gray-900 font-medium">{index + 1}. {name}</span>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              onClick={() => removeFromFavourite(name)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteStudents;
