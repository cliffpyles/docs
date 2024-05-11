import docs from "./README.mdx?raw";

export function loadData({ request, params, ...rest }) {
  return { docs };
}
