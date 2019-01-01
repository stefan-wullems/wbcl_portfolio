import * as React from "react";
import { ContactFormFields } from "./ContactForm";

interface IProps {
  label: string;
  field: ContactFormFields;
}

const ContactField: React.FC<IProps> = props => {
  return (
    <label>
      {props.label}
      <input type="text" name={"extra_" + props.label} />
    </label>
  );
};

export default ContactField;
