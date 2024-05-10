import PropTypes from "prop-types";
import { Box, Grid, Page, PageContent, PageHeader, Paragraph } from "grommet";
import { SectionCard } from "../Section";
import Anchor from "../Anchor";
import StickyBox from "../StickyBox";
import NavSection from "../NavSection";

export default function DocumentationPage({ children, className = "", demoHeight = "500px", description, title }) {
  return (
    <Page className={`DocumentationPage ${className}`} kind="full">
      <PageContent>
        <PageHeader gridArea="header" title={title} subtitle={description} background="light-1" pad="medium" />
        <Grid
          columns={["auto", "1/4"]}
          rows={["auto", "auto"]}
          gap="medium"
          areas={[
            ["main", "sidebar"],
            ["main", "sidebar"],
          ]}
        >
          <Box gridArea="main" gap="medium" pad="medium">
            <Box id="preview" pad={{ bottom: "xsmall" }}>
              <SectionCard bodyPad="none" height={demoHeight}>
                {children}
              </SectionCard>
            </Box>
            <Box id="props">
              <PageHeader title="Props" subtitle="Props that can be passed to the app" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
            <Box id="sections">
              <PageHeader title="Sections" subtitle="Sections of the app" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
            <Box id="components">
              <PageHeader title="Components" subtitle="Components the app is composed of" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
          </Box>
          <Box gridArea="sidebar">
            <StickyBox>
              <Box pad="medium" gap="small">
                <NavSection title="Calendar">
                  <Anchor href="#preview" label="Preview" />
                  <Anchor href="#props" label="Props" />
                  <Anchor href="#sections" label="Sections" />
                  <Anchor href="#components" label="Components" />
                </NavSection>
              </Box>
            </StickyBox>
          </Box>
        </Grid>
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
