import * as React from "react";

import Background from "./Screenshot-from-2018-11-23-13-44-29.png";
import { withWidth } from "@material-ui/core";
import toRenderProps from "recompose/toRenderProps";

import Title from "./Title";
import NavButtons from "./NavButtons";

const WithWidth = toRenderProps(withWidth());

class HomeContainer extends React.Component {
  render() {
    return (
      <WithWidth>
        {({ widthStr }) => {
          const width: IWidth = {
            sm: widthStr === "sm",
            xs: widthStr === "xs"
          };

          return (
            <div
              style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "100vw 100vh",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100vw",
                margin: 0
              }}
            >
              <Title width={width} />
              <NavButtons width={width} />
            </div>
          );
        }}
      </WithWidth>
    );
  }
}

export default HomeContainer;
