import PropTypes from "prop-types";
import { Box, Text } from "grommet";

export default function NavSection({ children, title }) {
  return (
    <Box gap="small" margin={{ vertical: "small" }}>
      <Text weight="bold">{title}</Text>
      <Box gap="small" pad={{ left: "small" }}>
        {children}
      </Box>
    </Box>
  );
}

NavSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
