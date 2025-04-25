import React from "react";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentList = () => {
  const { students, favourites, addToFavourite } = useContext(StudentContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold text-red-600 mb-4">List of Students</h2>
      <div className="space-y-3">
        {students.map((name, index) => (
          <div key={index} className="flex justify-between items-center bg-white shadow-md p-4 rounded-md">
            <span className="text-gray-800 font-medium">{index + 1}. {name}</span>
            <button
              className="bg-[#865E9B] text-white px-4 py-1 rounded-md disabled:bg-gray-400"
              disabled={favourites.includes(name)}
              onClick={() => addToFavourite(name)}
            >
              Add to Favourite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
