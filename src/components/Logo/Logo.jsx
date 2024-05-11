import { Box, Text } from "grommet";
import LogoSVG from "./logo.svg?react";

export const Brandmark = LogoSVG;

export function Wordmark(props) {
  return (
    <Text size="xlarge" weight={400} {...props}>
      DOCS
    </Text>
  );
}

export function StackedLogo(props) {
  return (
    <Box direction="column" align="center" justify="center" gap="xxsmall" {...props}>
      <Box width="80px">
        <Brandmark />
      </Box>
      <Wordmark />
    </Box>
  );
}

export default function Logo(props) {
  return (
    <Box direction="row" align="center" gap="small" {...props}>
      <Box width="85px" pad={{ top: "3px" }}>
        <Brandmark />
      </Box>
      <Wordmark />
    </Box>
  );
}
