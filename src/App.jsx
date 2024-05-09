import { useState } from "react";
import { Grommet, Tab, Tabs } from "grommet";
import FormsSection from "./sections/Forms";
import TypographySection from "./sections/Typography";
import LayoutsSection from "./sections/Layouts";
import DataSection from "./sections/Data";
import * as themes from "./themes";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Grommet theme={themes.standard} full>
      <Tabs activeIndex={activeTab} onActive={setActiveTab}>
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
      </Tabs>
    </Grommet>
  );
}

export default App;