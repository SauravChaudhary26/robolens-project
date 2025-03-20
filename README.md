# Book List React Application

## Live link:- [https://robolens-assignment.netlify.app/](https://robolens-assignment.netlify.app/)

A single-page React application that displays a list of books fetched from an external API, featuring a search bar for filtering, a dark mode toggle, and a responsive design using Material UI. The project is bootstrapped with Vite for a fast, modern development experience.

## Features

-  **Fetch Book Data:** Retrieves book data from [FakerAPI](https://fakerapi.it/api/v2/books?_quantity=40).
-  **Book Component:** Displays individual book details including title, author, publication year, image, and a brief description.
-  **Search Functionality:** Filters the displayed books by title or author.
-  **Dark Mode Toggle:** Easily switch between light and dark modes using Material UI theming.
-  **Responsive Design:** Built with Material UI components to ensure a user-friendly experience on various screen sizes.
-  **Image Fallback:** Implements a dummy image placeholder for broken image links.

## Project Structure

```
robolens/
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── components/
│   │   ├── Book.jsx       // Component to display individual book details.
│   │   └── BookList.jsx   // Component that fetches data, handles search, and lists books.
│   ├── App.jsx            // Main application component that includes theme provider and dark mode toggle.
│   ├── main.jsx           // Entry point for the React application.
│   └── index.css          // Global CSS styles.
└── README.md              // Project overview and instructions.
```

## Getting Started

### Prerequisites

-  [Node.js](https://nodejs.org/) (version 14 or later is recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SauravChaudhary26/robolens-project
   cd robolens
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and visit [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the application.

## Project Details

-  **Vite:** Provides a fast development server and efficient bundling.
-  **React:** Used for building the user interface.
-  **Material UI:** Supplies a comprehensive set of components for a responsive design.
-  **FakerAPI:** Serves as the data source for the book list.
-  **State Management:** Utilizes React's `useState` and `useEffect` hooks for managing component state and side effects.

## Code Overview

-  **`src/App.jsx`:**  
   Sets up the Material UI theme provider and includes a dark mode toggle button. Wraps the main content (`BookList`) to apply global theming.

-  **`src/components/BookList.jsx`:**  
   Fetches book data from the external API, manages loading and error states, and renders a list of `Book` components along with a search bar for filtering by title or author.

-  **`src/components/Book.jsx`:**  
   Displays details of an individual book, including the title, author, publication year (extracted from the published date), and description. Implements a fallback mechanism using a dummy image if the provided image fails to load.

## Decisions Made

-  **Dark Mode:**  
   Integrated Material UI's theming system with a toggle to switch between light and dark modes, enhancing the user experience in different lighting conditions.

-  **Image Fallback:**  
   Used an `onError` handler on the image component to replace broken or missing images with a dummy placeholder image.

-  **Modern Tooling:**  
   Chose Vite for its speed and simplicity, ensuring a streamlined development process.

-  **External Data Source:**  
   Leveraged FakerAPI to provide a realistic dataset without manually creating a large number of book entries.

## Acknowledgments

-  [FakerAPI](https://fakerapi.it/) for supplying the dummy book data.
-  [Material UI](https://mui.com/) for the robust and responsive UI components.
-  [Vite](https://vitejs.dev/) for providing a fast and modern development environment.

```

```
