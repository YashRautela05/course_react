import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { store } from "../state/store";
import Blog from "../view/Blog/Blog";
import CreateCourse from "../view/CreateCourse/CreateCourse";
import MyCourses from "../view/MyCourses/MyCourses";
import SignIn from "../view/SignIn/SignIn";
import SignUp from "../view/SignUp/SignUp";
import Home from "../view/home/Home";
import App from "./App";
import "./index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

const container = document.getElementById("root")!;

function TokenChecker({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const token = localStorage.getItem("authDetails");

  return token ? (
    children
  ) : (
    <Navigate to="/sign-in" replace state={{ from: location }} />
  );
}

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TokenChecker>
                <Home></Home>
              </TokenChecker>
            }
          ></Route>
          <Route
            path="/editor"
            element={
              <TokenChecker>
                <App></App>
              </TokenChecker>
            }
          ></Route>
          <Route
            path="/my-courses"
            element={
              <TokenChecker>
                <MyCourses></MyCourses>
              </TokenChecker>
            }
          ></Route>
          <Route
            path="/blog/:courseId"
            element={
              <TokenChecker>
                <Blog></Blog>
              </TokenChecker>
            }
          ></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/create-course"
            element={<CreateCourse></CreateCourse>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
