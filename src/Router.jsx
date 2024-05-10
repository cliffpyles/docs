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
        path: "components/:pageName?",
        async lazy() {
          let { Components } = await import("./pages/Components/Components");
          return { Component: Components };
        },
      },
      {
        path: "apps/:appName?",
        async lazy() {
          let { Apps } = await import("./pages/Apps/Apps");
          return { Component: Apps };
        },
        children: [
          {
            path: "chat",
            async lazy() {
              let { Chat } = await import("./pages/Apps/Chat");
              return { Component: Chat };
            },
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
