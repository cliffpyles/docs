import DocumentationPage from "../../../components/DocumentationPage";
import { frontmatter } from "./README.mdx";

import { Calendar } from "./Calendar";

export function Component() {
  return (
    <DocumentationPage title={frontmatter?.name} description={frontmatter?.description} demoHeight="700px">
      <Calendar />
    </DocumentationPage>
  );
}
