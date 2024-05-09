import { useParams } from "react-router-dom";
import { Box, Page, PageContent, PageHeader } from "grommet";
import Anchor from "../../components/Anchor";
import { Typography } from "./Typography";
import { Layouts } from "./Layouts";
import { Forms } from "./Forms";
import { Data } from "./Data";

const pages = {
  typography: {
    title: "Typography",
    description: "Components relatated to displaying text and copy",
    component: Typography,
  },
  layouts: {
    title: "Layouts",
    description: "Components related to structuring and organizing",
    component: Layouts,
  },
  forms: {
    title: "Forms",
    description: "Components used in the context of a form",
    component: Forms,
  },
  data: {
    title: "Data",
    description: "Components related to data management",
    component: Data,
  },
};

export function General() {
  const { pageName = "typography" } = useParams();
  const { title, description, component: Component } = pages[pageName];

  return (
    <Page kind="wide">
      <PageContent>
        <PageHeader
          title={title}
          subtitle={description}
          parent={<Anchor label="General" />}
          actions={
            <Box direction="row" gap="small" justify="end" align="end" pad="medium">
              <Anchor href="/general/typography" label="Typography" />
              <Anchor href="/general/forms" label="Forms" />
              <Anchor href="/general/layouts" label="Layouts" />
              <Anchor href="/general/data" label="Data" />
            </Box>
          }
        />
        <Component />
      </PageContent>
    </Page>
  );
}
