import express from "express";
import { getBook } from "../controller/book.controller.js";
import Book from "../model/book.model.js";

const router = express.Router();

router.get("/", getBook);

router.get("/category/:category", async (req, res) => {
    const category = req.params.category;
  
    try {
      // Query the database for books with the specified category
      const books = await Book.find({ category: category });
  
      res.json(books); // filtered books by category
    } catch (error) {
      console.error("Error fetching books by category:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });


export default router;