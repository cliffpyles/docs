import { useParams } from "react-router-dom";
import { Page, PageContent, PageHeader } from "grommet";
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

export function Components() {
  const { pageName = "typography" } = useParams();
  const { title, description, component: Component } = pages[pageName];

  return (
    <Page kind="wide">
      <PageContent>
        <PageHeader title={title} subtitle={description} parent={<Anchor label="Components" />} />
        <Component />
      </PageContent>
    </Page>
  );
}
