import * as React from "react";

import HomeNavButton from "./HomeNavButton";

interface IProps {
  width: IWidth;
}

function NavButtons({ width }: IProps) {
  const { xs, sm } = width;
  const fontSize = xs ? 14 : sm ? 16 : 18;
  return (
    <React.Fragment>
      <HomeNavButton
        style={{ marginTop: "40.625vh", fontSize }}
        text="about me"
        url="/about"
      />
      <HomeNavButton
        style={{ marginTop: "6.25vh", fontSize }}
        text="my work"
        url="/experience"
      />
      <HomeNavButton
        style={{ marginTop: "6.25vh", fontSize }}
        text="contact"
        url="/contact"
      />
    </React.Fragment>
  );
}

export default NavButtons;
