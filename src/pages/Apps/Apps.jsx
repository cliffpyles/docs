import { Page, PageContent } from "grommet";
import { Outlet } from "react-router-dom";

export function Apps() {
  return (
    <Page>
      <PageContent>
        <Outlet />
      </PageContent>
    </Page>
  );
}
