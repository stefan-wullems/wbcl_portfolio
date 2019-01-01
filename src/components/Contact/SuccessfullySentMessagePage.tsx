import * as React from "react";
import { RouteComponentProps } from "react-router";

const SuccessfullySentMessagePage: React.FC<RouteComponentProps> = props => {
  return (
    <div>
      Your message was sent successfully. I will reach out to you as soon as
      possible :)
    </div>
  );
};

export default SuccessfullySentMessagePage;
