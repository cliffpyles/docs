import {
  Box,
  CheckBoxGroup,
  DateInput,
  FileInput,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  RangeSelector,
  Select,
  StarRating,
  TextArea,
  TextInput,
  ThumbsRating,
} from "grommet";
import Section, { SectionCard, SectionGrid } from "../../components/Section";

export function Forms() {
  return (
    <Section>
      <SectionGrid>
        <SectionCard title="Text Inputs">
          <Box gap="medium">
            <Box>
              <TextInput placeholder="Please enter first name" />
            </Box>

            <Box>
              <MaskedInput
                mask={[
                  {
                    length: [1, 2],
                    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: "hh",
                  },
                  { fixed: ":" },
                  {
                    length: 2,
                    options: ["00", "15", "30", "45"],
                    regexp: /^[0-5][0-9]$|^[0-9]$/,
                    placeholder: "mm",
                  },
                  { fixed: " " },
                  {
                    length: 2,
                    options: ["am", "pm"],
                    regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
                    placeholder: "ap",
                  },
                ]}
              />
            </Box>

            <Box>
              <TextArea />
            </Box>
          </Box>
        </SectionCard>
        <SectionCard title="Option Inputs">
          <Box gap="medium">
            <Box>
              <Select options={["Small", "Medium", "Large"]} />
            </Box>
            <Box>
              <CheckBoxGroup options={["Apples", "Bananas", "Oranges"]} />
            </Box>
            <Box>
              <RadioButtonGroup name="faces" options={["Clubs", "Diamonds", "Hearts", "Spades"]} />
            </Box>
            <Box>
              <StarRating name="star_rating" />
            </Box>
            <Box>
              <ThumbsRating name="thumb_rating" />
            </Box>
          </Box>
        </SectionCard>
        <SectionCard title="Other Inputs">
          <Box gap="medium">
            <Box>
              <DateInput />
            </Box>
            <Box>
              <FileInput />
            </Box>
            <Box>
              <RangeInput />
            </Box>
            <Box>
              <RangeSelector />
            </Box>
          </Box>
        </SectionCard>
      </SectionGrid>
    </Section>
  );
}
