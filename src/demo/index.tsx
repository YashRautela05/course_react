import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCourse from "../CreateCourse/CreateCourse";
import MyCourses from "../MyCourses/MyCourses";
import Home from "../home/Home";
import App from "./App";
// import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/editor" element={<App></App>}></Route>
        <Route path="/my-courses" element={<MyCourses></MyCourses>}></Route>
        <Route
          path="/create-course"
          element={<CreateCourse></CreateCourse>}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
