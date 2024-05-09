import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box } from "grommet";

export default function NotFound({ children }) {
  return (
    <Box>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Box>
  );
}

NotFound.propTypes = {
  children: PropTypes.node,
};
