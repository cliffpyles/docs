import PropTypes from "prop-types";
import { Box, Grid, Heading, Paragraph } from "grommet";

export default function Section({ children, columns = 3, title, description }) {
  return (
    <Box pad="medium">
      <Heading margin={{ vertical: "none" }}>{title}</Heading>
      <Paragraph margin={{ top: "small" }}>{description}</Paragraph>
      <Grid
        margin={{ top: "medium" }}
        columns={{
          count: columns,
          size: "auto",
        }}
        gap={{ column: "medium", row: "large" }}
      >
        {children}
      </Grid>
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
