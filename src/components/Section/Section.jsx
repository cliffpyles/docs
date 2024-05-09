import { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Card, CardBody, CardHeader, Grid, Heading, ResponsiveContext, ThemeContext } from "grommet";
import { DemoContext } from "../Shell";

export default function Section({ children }) {
  return (
    <Box pad="medium">
      <Box gap="medium">{children}</Box>
    </Box>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export function SectionGrid({ children, columns = 3 }) {
  const screenSize = useContext(ResponsiveContext);
  const smallScreens = ["small", "medium"];
  const responsiveColumns = !smallScreens.includes(screenSize)
    ? {
        count: columns,
        size: "auto",
      }
    : "100%";
  return (
    <Grid columns={responsiveColumns} gap={{ column: "medium", row: "large" }}>
      {children}
    </Grid>
  );
}

SectionGrid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  columns: PropTypes.number,
};

export function SectionCard({ children, level = 3, title, bodyPad = "medium" }) {
  const { theme } = useContext(DemoContext);
  return (
    <Card>
      {title && (
        <CardHeader pad="medium" background="light-1">
          <Heading level={level} margin="none" size="small">
            {title}
          </Heading>
        </CardHeader>
      )}
      <CardBody pad={bodyPad}>
        <ThemeContext.Extend value={theme}>{children}</ThemeContext.Extend>
      </CardBody>
    </Card>
  );
}

SectionCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  bodyPad: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export function SectionGroup({ children, level = 3, title }) {
  return (
    <Box gap="small">
      {title && (
        <Heading level={level} margin={{ horizontal: "medium", bottom: "none" }} size="small">
          {title}
        </Heading>
      )}
      <Box border={{ color: "light-3" }} pad="medium" round>
        {children}
      </Box>
    </Box>
  );
}

SectionGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
};
