// src/components/BookList.jsx
import React, { useState, useEffect } from "react";
import {
   TextField,
   Container,
   Typography,
   CircularProgress,
   Alert,
} from "@mui/material";
import Book from "./Book";

const BookList = () => {
   // State for storing fetched books data
   const [books, setBooks] = useState([]);
   // State for tracking the search term from the input field
   const [searchTerm, setSearchTerm] = useState("");
   // State to manage the loading indicator while data is being fetched
   const [loading, setLoading] = useState(true);
   // State to store any error message if the fetch fails
   const [error, setError] = useState(null);

   // useEffect to fetch books data from the external API when component mounts
   useEffect(() => {
      fetch("https://fakerapi.it/api/v2/books?_quantity=40")
         .then((response) => {
            // Check if response is not OK and throw an error
            if (!response.ok) {
               throw new Error("Failed to fetch books.");
            }
            // Convert the response to JSON format
            return response.json();
         })
         .then((data) => {
            // The API response structure is { data: [ ...books ] }
            // Set the books state with the fetched data array
            setBooks(data.data);
            // Set loading to false as the data has been fetched successfully
            setLoading(false);
         })
         .catch((error) => {
            // If an error occurs, store the error message in state
            setError(error.message);
            // Also set loading to false as the fetch operation is complete
            setLoading(false);
         });
   }, []); // Empty dependency array ensures this runs only once on mount

   // Filter the books array based on the search term entered by the user.
   // Both title and author fields are checked (case-insensitive)
   const filteredBooks = books.filter(
      (book) =>
         book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         book.author.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      // Container provides some padding and centers the content
      <Container sx={{ padding: 3 }}>
         {/* Header for the page */}
         <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
            Book List
         </Typography>
         {/* TextField to capture user input for searching books */}
         <TextField
            label="Search by title or author"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
            value={searchTerm}
            // Update the searchTerm state on each keystroke
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         {/* Show a loading spinner while data is being fetched */}
         {loading && <CircularProgress />}
         {/* If there's an error during fetch, display an error alert */}
         {error && <Alert severity="error">{error}</Alert>}
         {/* Once loading is complete and there's no error, display the filtered list of books */}
         {!loading &&
            !error &&
            filteredBooks.map((book) => (
               <Book
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  published={book.published}
                  description={book.description}
               />
            ))}
      </Container>
   );
};

export default BookList;
