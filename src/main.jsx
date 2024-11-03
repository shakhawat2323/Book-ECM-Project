import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./RootFile and component/Root.jsx";
import Errorpage from "./RootFile and component/Error Page/Errorpage";
import Home from "./RootFile and component/Home/Home.jsx";
import Dashboard from "./RootFile and component/Dashboard/Dashboard.jsx";
import BooksDetels from "./RootFile and component/Books Detels/BooksDetels.jsx";
import Listedbook from "./listedbook/Listedbook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        loader: () => fetch("../public/booksData.json"),
        element: <BooksDetels></BooksDetels>,
      },
      {
        path: "/listedbook",
        element: <Listedbook></Listedbook>,
        loader: () => fetch("../public/booksData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
