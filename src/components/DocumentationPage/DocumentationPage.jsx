import PropTypes from "prop-types";
import { Box, Page, PageContent, PageHeader } from "grommet";

import { SectionCard } from "../Section";

export default function DocumentationPage({ children, className = "", demoHeight = "500px", description, title }) {
  return (
    <Page className={`DocumentationPage ${className}`} kind="wide">
      <PageContent>
        <PageHeader title={title} subtitle={description} pad={{ top: "none" }} margin={{ bottom: "medium" }} />

        <Box height={demoHeight} pad={{ bottom: "xsmall" }}>
          <SectionCard bodyPad="none" fill>
            {children}
          </SectionCard>
        </Box>
      </PageContent>
    </Page>
  );
}

DocumentationPage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  demoHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.string,
  title: PropTypes.string,
};
