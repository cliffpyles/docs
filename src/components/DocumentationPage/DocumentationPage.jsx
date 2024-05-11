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
            <Box id="accessibility">
              <PageHeader title="Accessibility" subtitle="Notes about accessibility" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
            <Box id="compatibility">
              <PageHeader title="Compatibility" subtitle="Notes about compatibility" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
            <Box id="performance">
              <PageHeader title="Performance" subtitle="Notes about performance" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
            <Box id="security">
              <PageHeader title="Security" subtitle="Notes about security" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
            <Box id="usage">
              <PageHeader title="Usage" subtitle="Notes about usage" level={2} />
              <Paragraph>Coming soon</Paragraph>
            </Box>
          </Box>
          <Box gridArea="sidebar">
            <StickyBox>
              <Box pad="medium" gap="small">
                <NavSection title="Calendar">
                  <Anchor href="#preview" label="Preview" />
                  <Anchor href="#props" label="Props" />
                  <Anchor href="#accessibility" label="Accessibility" />
                  <Anchor href="#compatibility" label="Compatibility" />
                  <Anchor href="#performance" label="Performance" />
                  <Anchor href="#security" label="Security" />
                  <Anchor href="#usage" label="Usage" />
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
