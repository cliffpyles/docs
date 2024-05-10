import DocumentationPage from "../../../components/DocumentationPage";
import { frontmatter } from "./README.mdx";

import { Dashboard } from "./Dashboard";

export function Component() {
  return (
    <DocumentationPage title={frontmatter?.name} description={frontmatter?.description}>
      <Dashboard />
    </DocumentationPage>
  );
}
