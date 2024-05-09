import { Heading, Markdown, Paragraph, Text } from "grommet";
import Section, { SectionCard } from "../../components/Section";
import markdownText from "./markdownText.md?raw";

export default function Typography() {
  return (
    <Section title="Typography" description="Components relatated to displaying text and copy">
      <SectionCard title="Semantic">
        <Heading level={1}>Heading Level 1</Heading>
        <Heading level={2}>Heading Level 2</Heading>
        <Heading level={3}>Heading Level 3</Heading>
        <Heading level={4}>Heading Level 4</Heading>
        <Heading level={5}>Heading Level 5</Heading>
        <Heading level={6}>Heading Level 6</Heading>
        <Paragraph>
          In the newsroom, chaos ensues as Ron Burgundy and his team of intrepid reporters navigate through a sea of
          absurdity. From Baxter the dog's unorthodox teleprompter skills to Brick Tamland's questionable weather
          forecasts (cue the prediction of "a 60% chance of rain...of fire"), every moment is a comedic rollercoaster
          ride. Amidst the madness, Ron's iconic mustache remains impeccably coiffed, serving as a symbol of hope and
          stability in a world where the only certainty is uncertainty.
        </Paragraph>
      </SectionCard>
      <SectionCard title="Text">
        <Text size="6xl">6xl text</Text>
        <Text size="5xl">5xl text</Text>
        <Text size="4xl">4xl text</Text>
        <Text size="3xl">3xl text</Text>
        <Text size="2xl">2xl text</Text>
        <Text size="xxlarge">xxlarge text</Text>
        <Text size="xlarge">xlarge text</Text>
        <Text size="large">large text</Text>
        <Text size="medium">medium text</Text>
        <Text size="small">small text</Text>
        <Text size="xsmall">xsmall text</Text>
      </SectionCard>
      <SectionCard title="Markdown">
        <Markdown>{markdownText}</Markdown>
      </SectionCard>
    </Section>
  );
}
