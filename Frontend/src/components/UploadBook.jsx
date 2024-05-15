import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import toast from "react-hot-toast";

const UploadBook = () => {
  // const { isAuthenticated } = useContext(AuthContext);
  const [bookData, setBookData] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
    title: "",
    durl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !category || !image || !title || !durl) {
      // If any required field is empty, display an error message
      toast.error("All input fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:4001/book/upload", bookData);
    //   alert("Book uploaded successfully");
      toast.success("Book uploaded successfully");
      // Reset form after successful upload
      setBookData({
        name: "",
        price: 0,
        category: "",
        image: "",
        title: "",
        durl: "",
      });
    } catch (error) {
      console.error(error);
    //   alert("Error uploading book");
      toast.error("Error uploading book");
    }
  };
  

  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white">
      <Navbar />
      <div className="max-w-screen-lg mx-auto py-12 px-4 md:px-6">
        <form onSubmit={handleSubmit} className="bg-white shadow-md my-24 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Upload </h2>
          <input
            type="text"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="number"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="text"
            name="image"
            value={bookData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="text"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="text"
            name="durl"
            value={bookData.durl}
            onChange={handleChange}
            placeholder="URL "
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UploadBook;
