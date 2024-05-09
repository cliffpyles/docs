import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

export const standard = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#2176FF",
    },
  },
});
