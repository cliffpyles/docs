import { generate } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const baseSpacing = 18; //default to 24
const scale = 12; //defaults to 6
const newBase = generate(baseSpacing, scale);

export const condensed = deepMerge(newBase, {
  icon: {
    size: {
      small: "9px", // defaults to 12px
      medium: "18px", // defaults to 24px
      large: "37px", // defaults to 48px
      xlarge: "72px", // defaults to 96px
    },
    extend: undefined,
  },
});
