import { createContext, useState } from "react";
import { Box, Grommet, Tab, Tabs, Select } from "grommet";
import FormsSection from "./sections/Forms";
import TypographySection from "./sections/Typography";
import LayoutsSection from "./sections/Layouts";
import DataSection from "./sections/Data";
import * as themes from "./themes";
const themeNames = Object.keys(themes).toSorted();

const DEFAULT_DEMO_THEME = "standard";

export const DemoContext = createContext({
  theme: themes[DEFAULT_DEMO_THEME],
});

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTheme, setActiveTheme] = useState(DEFAULT_DEMO_THEME);

  return (
    <DemoContext.Provider value={{ theme: themes[activeTheme] }}>
      <Grommet theme={themes.standard} full>
        <Tabs activeIndex={activeTab} onActive={setActiveTab} justify="start">
          <Tab title="Layouts">
            <LayoutsSection />
          </Tab>
          <Tab title="Data">
            <DataSection />
          </Tab>
          <Tab title="Forms">
            <FormsSection />
          </Tab>
          <Tab title="Typography">
            <TypographySection />
          </Tab>

          <Box direction="row" justify="end" align="baseline" fill="horizontal" pad="small" gap="small">
            <Select
              options={themeNames}
              value={activeTheme}
              size="small"
              onChange={({ option }) => setActiveTheme(option)}
            />
          </Box>
        </Tabs>
      </Grommet>
    </DemoContext.Provider>
  );
}

export default App;
