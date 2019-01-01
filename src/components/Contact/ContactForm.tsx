import * as React from "react";
import ContactField from "./ContactField";

export type ContactFormFields = "name" | "email" | "companyName";

const ContactForm: React.FC = props => {
  return (
    <form
      action="https://postmail.invotes.com/send"
      method="post"
      id="email_form"
    >
      <ContactField label="Name: " field="name" />
      <ContactField label="Email: " field="email" />
      <ContactField label="Company Name: " field="companyName" />
      <label>
        Message:
        <textarea rows={4} cols={50} name="text" />
      </label>
      <input
        type="hidden"
        name="subject"
        value="Somebody replied to your portfolio page"
      />
      <input
        type="hidden"
        name="access_token"
        value="kfxqg6t730w1xf14zidw22hn"
      />
      <input type="hidden" name="success_url" value="/contact/successful" />
      <input
        type="hidden"
        name="error_url"
        value=".?message=Email+could+not+be+sent.&isError=1"
      />
      <input type="submit" />
    </form>
  );
};

export default ContactForm;
