import React, { useState } from "react";
import {
   Card,
   CardContent,
   Typography,
   Button,
   CardMedia,
} from "@mui/material";

// Dummy image to be used if the provided image fails to load.
// Make sure this variable is defined before using it in the component.
const dummyImage = "https://via.placeholder.com/480x640?text=No+Image";

const Book = ({ title, author, published, description, image }) => {
   // Initialize state for image source.
   // Default is set to "b.jpg" (assuming it's a valid local image).
   // You can change this default to image if available, e.g., image || dummyImage.
   const [imgSrc, setImgSrc] = useState("b.jpg");

   // State to determine whether to show the book description.
   const [showDescription, setShowDescription] = useState(false);

   // Toggle the display of the book's description.
   const toggleDescription = () => {
      setShowDescription((prev) => !prev);
   };

   // Extract the publication year from the published date.
   // Assumes the published date is in the format "YYYY-MM-DD".
   const publicationYear = published ? published.split("-")[0] : "";

   return (
      // The main container Card for each book
      <Card sx={{ marginBottom: 2 }}>
         {/* 
           CardMedia is used to display the book image.
           - 'component="img"' tells MUI to render an image element.
           - 'onError' handler sets the source to dummyImage if the original image fails.
           - 'sx' prop provides additional styling for the image.
         */}
         <CardMedia
            component="img"
            height="200"
            image={imgSrc}
            alt={title}
            onError={() => setImgSrc(dummyImage)}
            sx={{
               objectFit: "contain", // Ensures the image scales correctly within the container.
               width: "auto",
               maxHeight: "200px",
               margin: "auto",
            }}
         />
         {/* 
           CardContent holds the textual information about the book,
           including title, author, publication year, and the description toggle button.
         */}
         <CardContent>
            {/* Display the book title */}
            <Typography variant="h5" component="div">
               {title}
            </Typography>
            {/* Display the author and publication year */}
            <Typography color="text.secondary">
               {author} &bull; {publicationYear}
            </Typography>
            {/* 
              Button to toggle the display of the book's description.
              The text on the button changes based on the current state.
            */}
            <Button
               variant="outlined"
               size="small"
               sx={{ marginTop: 1 }}
               onClick={toggleDescription}
            >
               {showDescription ? "Hide Description" : "Show Description"}
            </Button>
            {/* Conditionally render the description if showDescription is true */}
            {showDescription && (
               <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {description}
               </Typography>
            )}
         </CardContent>
      </Card>
   );
};

export default Book;
