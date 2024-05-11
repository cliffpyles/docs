import DocumentationPage from "../../../components/DocumentationPage";
import { frontmatter } from "./README.mdx";

import { Chat } from "./Chat";

export function Component() {
  return (
    <DocumentationPage title={frontmatter?.name} description={frontmatter?.description}>
      <Chat />
    </DocumentationPage>
  );
}
