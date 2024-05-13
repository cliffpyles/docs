import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Collapsible, Nav as GrommetNav, ResponsiveContext, Text } from "grommet";
import { CaretDownFill as CaretDownFillIcon, CaretRightFill as CaretRightFillIcon } from "grommet-icons";
import { useLocation } from "react-router-dom";
import Anchor from "../Anchor";

function NavSection({ children, title, ...props }) {
  const childPaths = children?.map((child) => child?.props?.href);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(childPaths?.includes?.(location?.pathname) || false);
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  const smallLayoutProps = {
    gap: "medium",
    align: "start",
    margin: { vertical: "medium", left: "xlarge" },
  };
  const largeLayoutProps = {
    gap: "small",
    align: "start",
    margin: { vertical: "small", left: "large" },
  };
  const layoutProps = isSmall ? smallLayoutProps : largeLayoutProps;

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
        <Box {...layoutProps}>{children}</Box>
      </Collapsible>
    </Box>
  );
}

NavSection.propTypes = {
  children: PropTypes.node,
  open: PropTypes.boolean,
  title: PropTypes.string,
};

export default function Nav(props) {
  return (
    <GrommetNav gap="small" align="start" {...props}>
      <NavSection title="Overview"></NavSection>
      <NavSection title="Getting Started"></NavSection>
      <NavSection title="Guides"></NavSection>
      <NavSection title="Examples">
        <Anchor href="/examples/calendar" label="Calendar" />
        <Anchor href="/examples/chat" label="Chat" />
        <Anchor href="/examples/contacts" label="Contacts" />
        <Anchor href="/examples/dashboard" label="Dashboard" />
        <Anchor href="/examples/email" label="Email" />
      </NavSection>
      <NavSection title="Tooling"></NavSection>
      <NavSection title="References"></NavSection>
    </GrommetNav>
  );
}
