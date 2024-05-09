import { Box, Heading, Paragraph } from "grommet";
import Section from "../../components/Section";

export default function Typography() {
  return (
    <Section title="Typography" description="Components relatated to displaying text and copy" columns={2}>
      <Box>
        <Heading level={1}>Heading Level 1</Heading>
        <Heading level={2}>Heading Level 2</Heading>
        <Heading level={3}>Heading Level 3</Heading>
        <Heading level={4}>Heading Level 4</Heading>
        <Heading level={5}>Heading Level 5</Heading>
        <Heading level={6}>Heading Level 6</Heading>
      </Box>
      <Box>
        <Paragraph>
          In the newsroom, chaos ensues as Ron Burgundy and his team of intrepid reporters navigate through a sea of
          absurdity. From Baxter the dog's unorthodox teleprompter skills to Brick Tamland's questionable weather
          forecasts (cue the prediction of "a 60% chance of rain...of fire"), every moment is a comedic rollercoaster
          ride. Amidst the madness, Ron's iconic mustache remains impeccably coiffed, serving as a symbol of hope and
          stability in a world where the only certainty is uncertainty.
        </Paragraph>
      </Box>
    </Section>
  );
}
