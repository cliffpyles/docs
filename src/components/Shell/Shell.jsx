import { Outlet } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Header,
  Layer,
  Main,
  ResponsiveContext,
  Sidebar as GrommetSidebar,
} from "grommet";
import { Close as CloseIcon, Menu as MenuIcon } from "grommet-icons";
import * as themes from "../../themes";
import StickyBox from "../StickyBox";
import { StackedLogo } from "../Logo";
import Nav from "../Nav";
import Anchor from "../Anchor";

const DEFAULT_DEMO_THEME = "standard";

export const DemoContext = createContext({
  theme: themes[DEFAULT_DEMO_THEME],
});

const smallLayoutProps = {
  rows: ["auto", "auto"],
  columns: ["1/4", "auto", "1/4"],
  gap: "none",
  areas: [
    ["header", "header", "header"],
    ["main", "main", "main"],
  ],
};

const largeLayoutProps = {
  rows: ["xsmall", "auto"],
  columns: ["small", "auto", "1/4"],
  gap: "small",
  areas: [
    ["sidebar", "main", "main"],
    ["sidebar", "main", "main"],
  ],
};

function Sidebar() {
  return (
    <GrommetSidebar gridArea="sidebar">
      <Box pad={{ horizontal: "medium" }} margin={{ bottom: "medium" }}>
        <Anchor href="/" icon={<StackedLogo />} color="text" />
      </Box>

      <Nav />
    </GrommetSidebar>
  );
}

function Drawer({ open, onClose }) {
  return (
    open && (
      <Layer position="left" onEsc={onClose} onClickOutside={onClose} full="vertical" responsive={false}>
        <Card width="medium" fill="vertical" pad="large" gap="large">
          <CardHeader align="center">
            <Anchor href="/" icon={<StackedLogo />} color="text" />
            <Button icon={<CloseIcon />} onClick={onClose} plain />
          </CardHeader>
          <CardBody>
            <Nav />
          </CardBody>
        </Card>
      </Layer>
    )
  );
}

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeTheme, setActiveTheme] = useState(DEFAULT_DEMO_THEME);
  const size = useContext(ResponsiveContext);
  const smallLayouts = ["small"];
  const isSmall = smallLayouts.includes(size);
  const layoutProps = isSmall ? smallLayoutProps : largeLayoutProps;

  return (
    <DemoContext.Provider value={{ theme: themes[activeTheme] }}>
      <Grid {...layoutProps}>
        {isSmall ? (
          <Header gridArea="header" pad="medium">
            <Box direction="row" align="center" justify="between" fill>
              <Button icon={<MenuIcon size="large" />} onClick={() => setIsMenuActive(!isMenuActive)} plain />

              <Anchor href="/" icon={<StackedLogo />} color="text" />
            </Box>
          </Header>
        ) : null}
        {isSmall ? <Drawer open={isMenuActive} onClose={() => setIsMenuActive(false)} /> : <Sidebar />}
        <Main gridArea="main" style={{ overflow: "visible" }}>
          <Outlet />
        </Main>
      </Grid>
    </DemoContext.Provider>
  );
}

export default App;
