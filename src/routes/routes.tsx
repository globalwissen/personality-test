import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/landingpage";

import { ResultsPage } from "../page/Resultpage";
import TestWrapper from "../wrapper/testwrapper";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/test",
    element: <TestWrapper />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);
