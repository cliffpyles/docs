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
        path: "examples",
        element: <Outlet />,
        children: [
          {
            id: "calendar",
            path: "calendar",
            lazy: () => import("./pages/Examples/Calendar/Documentation"),
          },
          {
            id: "chat",
            path: "chat",
            lazy: () => import("./pages/Examples/Chat/Documentation"),
          },
          {
            id: "contacts",
            path: "contacts",
            lazy: () => import("./pages/Examples/Contacts/Documentation"),
          },
          {
            id: "dashboard",
            path: "dashboard",
            lazy: () => import("./pages/Examples/Dashboard/Documentation"),
          },
          {
            id: "email",
            path: "email",
            lazy: () => import("./pages/Examples/Email/Documentation"),
          },
        ],
      },
      {
        path: "guides/:pageName?",
        async lazy() {
          const { Guides } = await import("./pages/Guides/Guides");
          return { Component: Guides };
        },
      },
      {
        path: "posts/:pageName?",
        async lazy() {
          const { Posts, loadPosts } = await import("./pages/Posts/Posts");
          return { Component: Posts, loader: loadPosts };
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
