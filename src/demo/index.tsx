import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../state/store";
import Blog from "../view/Blog/Blog";
import CreateCourse from "../view/CreateCourse/CreateCourse";
import MyCourses from "../view/MyCourses/MyCourses";
import Home from "../view/home/Home";
import App from "./App";
// import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById("root")!;
createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/editor" element={<App></App>}></Route>
          <Route path="/my-courses" element={<MyCourses></MyCourses>}></Route>
          <Route path="/blog/:courseId" element={<Blog></Blog>}></Route>
          <Route
            path="/create-course"
            element={<CreateCourse></CreateCourse>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
