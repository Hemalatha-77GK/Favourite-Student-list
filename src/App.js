import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StudentProvider } from "./StudentContext";
import StudentList from "./StudentList";
import FavouriteStudents from "./FavouriteStudents";

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-lg w-[500px]">
            <div className="bg-red-500 rounded-t-lg flex">
              <Link to="/" className="flex-1 text-center py-2 text-white font-semibold underline">
                List of Students
              </Link>
              <Link to="/favourites" className="flex-1 text-center py-2 text-white font-semibold underline">
                Favourite Students
              </Link>
            </div>
            <div className="p-6">
              <Routes>
                <Route path="/" element={<StudentList />} />
                <Route path="/favourites" element={<FavouriteStudents />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
