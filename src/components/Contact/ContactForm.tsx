import * as React from "react";

interface IProps {
  onChange: (field: ContactFormFields, value: string) => void;
  message: string;
  name: string;
  email: string;
  companyName: string;
}

type ContactFormFields = "message" | "name" | "email" | "companyName";

const ContactForm: React.FC<IProps> = props => {
  return (
    <div>
      <input
        type="text"
        onChange={e => props.onChange("name", e.target.value)}
      />
      <input
        type="text"
        onChange={e => props.onChange("email", e.target.value)}
      />
      <input
        type="text"
        onChange={e => props.onChange("companyName", e.target.value)}
      />
      <textarea
        rows={4}
        cols={50}
        onChange={e => props.onChange("message", e.target.value)}
        value={props.message}
      />
    </div>
  );
};

export default ContactForm;
