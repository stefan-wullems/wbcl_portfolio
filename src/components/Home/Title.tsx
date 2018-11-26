import * as React from "react";

interface IProps {
  width: IWidth;
}

class Title extends React.Component<IProps> {
  render() {
    const { xs, sm } = this.props.width;
    const h1FontSize = xs ? 45 : sm ? 70 : 80;
    const h2FontSize = xs ? 35 : 50;
    return (
      <div
        style={{
          width: "100vw",
          height: "12.5vh",
          top: 0,
          position: "absolute"
        }}
      >
        <h1
          style={{
            marginTop: "12.5vh",
            height: "12.5vh",
            lineHeight: "12.5vh",
            textAlign: "center",
            fontFamily: "raleway",
            fontSize: h1FontSize,
            color: "#690f2a",
            marginBottom: 0,
            width: "100vw"
          }}
        >
          Stefan Wullems
        </h1>
        <h2
          style={{
            marginTop: "3.125vh",
            height: "6.25vh",
            lineHeight: "6.25vh",
            textAlign: "center",
            fontFamily: "raleway",
            fontSize: h2FontSize,
            color: "#690f2a"
          }}
        >
          Fullstack Developer
        </h2>
      </div>
    );
  }
}

export default Title;
