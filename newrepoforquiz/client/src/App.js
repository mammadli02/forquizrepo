import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./routes/routes";
function App() {
  const router = createBrowserRouter(ROUTES)
  return (
    <RouterProvider router={router} />
  );
}

export default App;
