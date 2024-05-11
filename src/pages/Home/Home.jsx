import { Page, PageContent, PageHeader } from "grommet";

export default function Home() {
  return (
    <Page kind="wide">
      <PageContent>
        <PageHeader title="Home" pad={{ vertical: "none" }} />
      </PageContent>
    </Page>
  );
}
