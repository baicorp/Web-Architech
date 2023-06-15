import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import { Home, News, Contact, About, Work, NotFound } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="work" element={<Work />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
