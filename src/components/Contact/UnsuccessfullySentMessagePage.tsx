import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

const SuccessfullySentMessagePage: React.FC<RouteComponentProps> = props => {
  return (
    <div>
      Uh oh. Something went wrong :(. Click <Link to="/contact">Here</Link> to
      try again.
    </div>
  );
};

export default SuccessfullySentMessagePage;
