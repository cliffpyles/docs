import { Box } from "grommet";

import Contact from "./Contact";
import ContactForm from "./ContactForm";

export default function ContactsMain({ contact, contactUpdates, isEditMode, updateContact }) {
  return (
    <Box className="ContactsMain" gridArea="ContactsMain" pad="medium" overflow="auto">
      {isEditMode ? <ContactForm fields={contactUpdates} update={updateContact} /> : <Contact {...contact} />}
    </Box>
  );
}
