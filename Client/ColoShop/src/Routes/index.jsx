import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Pages";
import Home from "../Pages/HomePage";
import Basket from "../Pages/BasketPage";
import Detail from "../Pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "products/:id",
        element: <Detail />,
      },
    ],
  },
]);
