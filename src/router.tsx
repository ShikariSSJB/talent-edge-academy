import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Prerender requests pages with a trailing slash; preserving it avoids a
    // redirect loop (/about/ -> /about -> /about/) during static generation.
    trailingSlash: "preserve",
  });

  return router;
};
