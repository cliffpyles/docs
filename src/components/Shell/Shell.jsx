import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { Box, Grid, Grommet, Header, Image, Main, Nav, Select, Sidebar } from "grommet";
import * as themes from "../../themes";
import Anchor from "../Anchor";
const themeNames = Object.keys(themes).toSorted();

const DEFAULT_DEMO_THEME = "standard";

export const DemoContext = createContext({
  theme: themes[DEFAULT_DEMO_THEME],
});

function App() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_DEMO_THEME);

  return (
    <DemoContext.Provider value={{ theme: themes[activeTheme] }}>
      <Grommet theme={themes.standard} full>
        <Grid
          rows={["xsmall", "auto"]}
          columns={["small", "auto"]}
          gap="small"
          areas={[
            { name: "header", start: [1, 0], end: [1, 0] },
            { name: "nav", start: [0, 0], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] },
          ]}
        >
          <Header gridArea="header">
            <Box></Box>
            <Box direction="row" justify="end" align="baseline" fill="horizontal" pad="small" gap="small">
              <Select
                options={themeNames}
                value={activeTheme}
                size="small"
                onChange={({ option }) => setActiveTheme(option)}
              />
            </Box>
          </Header>
          <Sidebar gridArea="nav">
            <Anchor
              label={
                <Box width="small" pad="medium">
                  <Image fit="contain" src="/logo.svg" />
                </Box>
              }
              href="/"
            />
            <Nav pad="medium" gap="small" align="center">
              <Anchor href="/general" label="General" />
              <Anchor href="/apps" label="Apps" />
            </Nav>
          </Sidebar>
          <Main gridArea="main">
            <Outlet />
          </Main>
        </Grid>
      </Grommet>
    </DemoContext.Provider>
  );
}

export default App;
