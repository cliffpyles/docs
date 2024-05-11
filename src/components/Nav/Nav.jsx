import PropTypes from "prop-types";
import { Anchor, Box, Button, Collapsible, Nav as GrommetNav, Text } from "grommet";
import { useState } from "react";
import { CaretDownFill as CaretDownFillIcon, CaretRightFill as CaretRightFillIcon } from "grommet-icons";

function NavSection({ children, open, title, ...props }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <Box gap="small" margin={{ vertical: "small" }} align="start" {...props}>
      <Button
        icon={isOpen ? <CaretDownFillIcon /> : <CaretRightFillIcon />}
        label={<Text weight="bold">{title}</Text>}
        onClick={() => setIsOpen(!isOpen)}
        disabled={!children}
        plain
      />
      <Collapsible open={isOpen}>
        <Box gap="medium" margin={{ vertical: "medium", left: "xlarge" }} align="start">
          {children}
        </Box>
      </Collapsible>
    </Box>
  );
}

NavSection.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.boolean,
  title: PropTypes.string,
};

export default function Nav(props) {
  return (
    <GrommetNav gap="small" align="start" {...props}>
      <NavSection title="Overview"></NavSection>
      <NavSection title="Getting Started"></NavSection>

      <NavSection title="Examples">
        <Anchor href="/apps/calendar" label="Calendar" />
        <Anchor href="/apps/chat" label="Chat" />
        <Anchor href="/apps/contacts" label="Contacts" />
        <Anchor href="/apps/dashboard" label="Dashboard" />
        <Anchor href="/apps/email" label="Email" />
      </NavSection>
      <NavSection title="Guides"></NavSection>
      <NavSection title="Deep Dives"></NavSection>
      <NavSection title="Tooling"></NavSection>
      <NavSection title="References"></NavSection>
    </GrommetNav>
  );
}
