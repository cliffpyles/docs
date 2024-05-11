import { Page, PageContent, PageHeader } from "grommet";

export default function {{blueprintInstance}}(props) {
  return (
    <Page kind="full" {...props}>
      <PageContent>
        <PageHeader title="{{blueprintInstance}}" description="{{description}}" pad={{ vertical: "medium" }} />
      </PageContent>
    </Page>
  );
}
