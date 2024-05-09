import PropTypes from "prop-types";
import { Box } from "grommet";

export default function {{blueprintInstance}}({ children }) {
    return <Box>{children}</Box>
}

{{blueprintInstance}}.propTypes = {
    children: PropTypes.node.isRequired
}