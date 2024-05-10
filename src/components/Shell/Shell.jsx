import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { Box, Grid, Grommet, Header, Image, Main, Nav, Select, Sidebar, Text } from "grommet";
import * as themes from "../../themes";
import Anchor from "../Anchor";
import StickyBox from "../StickyBox";
import NavSection from "../NavSection";
// const themeNames = Object.keys(themes).toSorted();

const DEFAULT_DEMO_THEME = "standard";

export const DemoContext = createContext({
  theme: themes[DEFAULT_DEMO_THEME],
});

function App() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_DEMO_THEME);

  return (
    <Grommet className="Shell" theme={themes.branded} full="min">
      <DemoContext.Provider value={{ theme: themes[activeTheme] }}>
        <Grid
          rows={["xsmall", "auto"]}
          columns={["small", "auto"]}
          gap="small"
          areas={[
            ["nav", "main"],
            ["nav", "main"],
          ]}
        >
          {/* <Header gridArea="header">
            <Box />
            <Box direction="row" justify="end" align="baseline" fill="horizontal" pad="small" gap="small">
              <Select
                options={themeNames}
                value={activeTheme}
                size="small"
                onChange={({ option }) => setActiveTheme(option)}
              />
            </Box>
          </Header> */}
          <Sidebar gridArea="nav">
            <Anchor
              label={
                <Box width="small" pad="medium">
                  <Image fit="contain" src="/logo.svg" />
                </Box>
              }
              href="/"
            />
            <StickyBox>
              <Nav pad="medium" gap="small">
                <NavSection title="Apps">
                  <Anchor href="/apps/calendar" label="Calendar" />
                  <Anchor href="/apps/chat" label="Chat" />
                  <Anchor href="/apps/dashboard" label="Dashboard" />
                  <Anchor href="/apps/email" label="Email" />
                </NavSection>
                <NavSection title="Components">
                  <Anchor href="/components/forms" label="Forms" />
                  <Anchor href="/components/typography" label="Typography" />
                </NavSection>
              </Nav>
            </StickyBox>
          </Sidebar>
          <Main gridArea="main" style={{ overflow: "visible" }}>
            <Outlet />
          </Main>
        </Grid>
      </DemoContext.Provider>
    </Grommet>
  );
}

export default App;
