import PropTypes from "prop-types";
import { Box, ThemeContext } from "grommet";
import { useContext } from "react";

export default function StickyBox({ children, stickTo = "top", distance = "medium", ...props }) {
  const theme = useContext(ThemeContext);
  const edgeSize = theme?.global?.edgeSize?.[distance] || distance;

  return (
    <Box
      {...props}
      style={{
        position: "sticky",
        [stickTo]: edgeSize,
      }}
    >
      {children}
    </Box>
  );
}

StickyBox.propTypes = {
  children: PropTypes.node.isRequired,
  stickTo: PropTypes.oneOf(["top", "bottom"]),
  distance: PropTypes.string,
};
