import { createBrowserRouter, Outlet } from "react-router-dom";
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
        path: "components/:pageName?",
        async lazy() {
          const { Components } = await import("./pages/Components/Components");
          return { Component: Components };
        },
      },
      {
        path: "apps",
        element: <Outlet />,
        children: [
          {
            id: "chat",
            path: "chat",
            lazy: () => import("./pages/Apps/Chat/Documentation"),
          },
          {
            id: "email",
            path: "email",
            lazy: () => import("./pages/Apps/Email/Documentation"),
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
