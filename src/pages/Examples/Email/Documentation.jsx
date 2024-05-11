import DocumentationPage from "../../../components/DocumentationPage";
import { frontmatter } from "./README.mdx";

import { Email } from "./Email";

export function Component() {
  return (
    <DocumentationPage title={frontmatter?.name} description={frontmatter?.description}>
      <Email />
    </DocumentationPage>
  );
}
