// src/components/Book.jsx
import React, { useState } from "react";
import {
   Card,
   CardContent,
   Typography,
   Button,
   CardMedia,
} from "@mui/material";

const Book = ({ title, author, published, description, image }) => {
   const [imgSrc, setImgSrc] = useState("b.jpg");
   const [showDescription, setShowDescription] = useState(false);

   const toggleDescription = () => {
      setShowDescription((prev) => !prev);
   };

   // Extract publication year from published date
   const publicationYear = published ? published.split("-")[0] : "";

   return (
      <Card sx={{ marginBottom: 2 }}>
         <CardMedia
            component="img"
            height="200"
            image={imgSrc}
            alt={title}
            onError={() => setImgSrc(dummyImage)}
            sx={{
               objectFit: "contain",
               width: "auto",
               maxHeight: "200px",
               margin: "auto",
            }}
         />
         <CardContent>
            <Typography variant="h5" component="div">
               {title}
            </Typography>
            <Typography color="text.secondary">
               {author} &bull; {publicationYear}
            </Typography>
            <Button
               variant="outlined"
               size="small"
               sx={{ marginTop: 1 }}
               onClick={toggleDescription}
            >
               {showDescription ? "Hide Description" : "Show Description"}
            </Button>
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
