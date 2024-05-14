import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [originalBooks, setOriginalBooks] = useState([]); // for original list of books
  const [book, setBook] = useState([]); // for current list of books
  const [searchCategory, setSearchCategory] = useState(""); // State to store the search category

  useEffect(() => {
    getBooks(); // function to fetch all the books
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to fetch all books
  const getBooks = async () => {
    try {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setOriginalBooks(res.data); // Store the original list of books
      setBook(res.data); // Set the current list of books
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle search by category
  const handleSearch = () => {
    const filteredBooks = originalBooks.filter(item => item.category.toLowerCase() === searchCategory.toLowerCase());
    setBook(filteredBooks);
  };

  // Function to handle resetting the search and displaying all books
  const handleReset = () => {
    setSearchCategory("");
    setBook(originalBooks); // Reset the current list of books to the original list display all the books
  };

  // Function to handle category search
  const handleChange = (e) => {
    setSearchCategory(e.target.value);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! </span>
          </h1>
          <p className="mt-12">
            Dive in to your Learning Journey!
          </p>
          <div className="mt-6 flex items-center">
            <input
              type="text"
              placeholder="Search by category"
              value={searchCategory}
              onChange={handleChange}
              className="px-4 py-2 rounded-md mr-2"
            />
            <button
              onClick={handleSearch}
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mr-2"
            >
              Search
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-300 m-20 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 duration-300"
            >
              All Books
            </button>
          </div>
          
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

        <Link to="/" >
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
      </div>
    </>  
  );
}

export default Course;
