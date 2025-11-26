import { createBrowserRouter } from "react-router-dom";
import Landing from "../page/landingpage";
import StartTest from "../page/startTest";
import TestPage from "../page/Testpage";
import Register from "../Auth/register";
import Login from "../Auth/login";
import ResultPage from "../page/result";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Landing />,
  },
  {
    path: "start",
    element: <StartTest />,
  },
  {
    path: "test",
    element: <TestPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "result",
    element: <ResultPage />,
  },
]);
