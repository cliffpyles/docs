import { Page, PageContent, PageHeader } from "grommet";

export function Guides(props) {
  return (
    <Page kind="full" {...props}>
      <PageContent>
        <PageHeader title="Guides" description="" pad={{ vertical: "medium" }} />
      </PageContent>
    </Page>
  );
}
