import {
  Anchor,
  Button,
  Footer,
  Header,
  Main,
  Menu,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from "grommet";
import Section, { SectionCard, SectionGrid, SectionGroup } from "../../components/Section";

import { Home as HomeIcon, Notification as NotificationIcon, ChatOption as ChatOptionIcon } from "grommet-icons";

export function Layouts() {
  return (
    <Section>
      <SectionCard title="Page" bodyPad="none">
        <Page kind="narrow">
          <PageContent>
            <PageHeader
              title="Page Title"
              subtitle="A subtitle for the page."
              parent={<Anchor label="Parent Page" />}
              actions={<Button label="Edit" primary />}
            />
            <Paragraph>Some content</Paragraph>
          </PageContent>
        </Page>
      </SectionCard>
      <SectionGroup title="Semantic Elements">
        <SectionGrid columns={2}>
          <SectionCard title="Header" level={4}>
            <Header background="brand">
              <Button icon={<HomeIcon />} hoverIndicator />
              <Menu label="account" items={[{ label: "logout" }]} />
            </Header>
          </SectionCard>
          <SectionCard title="Nav" level={4}>
            <Nav direction="row" background="brand" pad="medium">
              <Anchor icon={<HomeIcon />} hoverIndicator />
              <Anchor icon={<NotificationIcon />} hoverIndicator />
              <Anchor icon={<ChatOptionIcon />} hoverIndicator />
            </Nav>
          </SectionCard>
          <SectionCard title="Main" level={4}>
            <Main pad="large">
              <Text>Something about something</Text>
            </Main>
          </SectionCard>
          <SectionCard title="Footer" level={4}>
            <Footer background="brand" pad="medium">
              <Text>Copyright</Text>
              <Anchor label="About" />
            </Footer>
          </SectionCard>
        </SectionGrid>
      </SectionGroup>
    </Section>
  );
}
