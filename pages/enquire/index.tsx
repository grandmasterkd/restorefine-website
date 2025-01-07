import React from "react";
import { ContactForm } from "./contact-form";
import { ContactFormProvider } from "./contact-form-context";

function Enquire() {
  return (
    <ContactFormProvider>
      <ContactForm />
    </ContactFormProvider>
  );
}

export default Enquire;
