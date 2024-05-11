import { Page, PageContent, PageHeader } from "grommet";
import { useLoaderData } from "react-router-dom";

export function Posts(props) {
  const data = useLoaderData();

  console.log(data);
  return (
    <Page kind="full" {...props}>
      <PageContent>
        <PageHeader title="Posts" description="" pad={{ vertical: "none" }} />
      </PageContent>
    </Page>
  );
}

export function loadPosts() {
  return { cliff: "working" };
}
