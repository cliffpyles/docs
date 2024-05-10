import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

// Theme Colors: https://coolors.co/31393c-2176ff-33a1fd-fdca40-f79824
const GUNMETAL = "#31393cff";
const BLUE_CRAYOLA = "#2176ffff";
const CELESTIAL_BLUE = "#33a1fdff";
const SUNGLOW = "#fdca40ff";
const CARROT_ORANGE = "#f79824ff";

const ACTIVE_COLOR = BLUE_CRAYOLA;
const BRAND_COLOR = BLUE_CRAYOLA;
const LINK_COLOR = CELESTIAL_BLUE;
const LINK_HOVER_COLOR = CARROT_ORANGE;

export const branded = deepMerge(grommet, {
  global: {
    colors: {
      brand: BRAND_COLOR,
      active: ACTIVE_COLOR,
    },
  },
  anchor: {
    color: LINK_COLOR,
    textDecoration: "none",
    fontWeight: 400,
    hover: {
      textDecoration: `none`,
      extend: () => `color: ${LINK_HOVER_COLOR};`,
    },
  },
});
