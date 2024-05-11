import DocumentationPage from "../../../components/DocumentationPage";
import { frontmatter } from "./README.mdx";

import { Contacts } from "./Contacts";

export function Component() {
  return (
    <DocumentationPage title={frontmatter?.name} description={frontmatter?.description}>
      <Contacts />
    </DocumentationPage>
  );
}
