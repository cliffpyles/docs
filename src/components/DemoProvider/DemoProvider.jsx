import PropTypes from "prop-types";
import { Box } from "grommet";

export default function DemoProvider({ children }) {
    return <Box>{children}</Box>
}

DemoProvider.propTypes = {
    children: PropTypes.node.isRequired
}