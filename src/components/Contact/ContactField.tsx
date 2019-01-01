import * as React from "react";
import { ContactFormFields } from "./ContactContainer";

interface IProps {
  label: string;
  value: string;
  field: ContactFormFields;
  onChange: (field: ContactFormFields, value: string) => void;
}

const ContactField: React.FC<IProps> = props => {
  return (
    <label>
      {props.label}
      <input
        type="text"
        onChange={e => props.onChange(props.field, e.target.value)}
        value={props.value}
      />
    </label>
  );
};

export default ContactField;
