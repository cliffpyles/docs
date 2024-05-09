import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Shell from "./components/Shell";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "general/:pageName?",
        async lazy() {
          let { General } = await import("./pages/General/General");
          return { Component: General };
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
