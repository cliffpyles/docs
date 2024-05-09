import {
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
import Section from "../../components/Section";

export default function Forms() {
  return (
    <Section title="Forms" description="Components used in the context of a form">
      <TextInput placeholder="Please enter first name" />
      <CheckBoxGroup options={["Apples", "Bananas", "Oranges"]} />
      <DateInput />
      <FileInput />
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
      <RadioButtonGroup name="faces" options={["Clubs", "Diamonds", "Hearts", "Spades"]} />
      <RangeInput />
      <RangeSelector />
      <Select options={["Small", "Medium", "Large"]} />
      <StarRating name="star_rating" />
      <TextArea />
      <ThumbsRating name="thumb_rating" />
    </Section>
  );
}
