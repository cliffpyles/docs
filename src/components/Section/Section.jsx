import PropTypes from "prop-types";
import { Box, Card, CardBody, CardHeader, Grid, Heading, Paragraph } from "grommet";

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

export function SectionCard({ children, title }) {
  return (
    <Card>
      {title && (
        <CardHeader pad="medium" background="light-1">
          <Heading level={3} margin="none" size="small">
            {title}
          </Heading>
        </CardHeader>
      )}
      <CardBody pad="medium">{children}</CardBody>
    </Card>
  );
}

SectionCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
