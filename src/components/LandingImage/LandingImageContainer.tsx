import * as React from "react";
import { Grid } from "@material-ui/core";
import MiddleBar from "./MiddleBar";

interface ICoolPatternProps {
  loops: number;
  depth: number;
}

class LandingImageContainer extends React.Component {
  createCoolPattern({ loops = 0, depth = 0 }) {
    const root = this.getRoot(25, depth);
    const list = this.getList(root, depth);

    const loop = list.map((num, i) => {
      const step =
        i < depth + 2 ? i % (depth + 2) : depth + 1 - (i % (depth + 2));

      const colorNum = (255 / (depth + 2)) * step;
      return (
        <div
          style={{
            background: `rgba(${colorNum}, ${colorNum}, ${colorNum}, 0.1)`,
            width: "100%",
            height: `${num / loops}vh`
          }}
        />
      );
    });

    let arr = [];
    for (let i = 0; i < loops; i++) {
      arr = [...arr, ...loop];
    }

    return arr;
  }

  getList(arr, depth = 0) {
    if (depth === 0) {
      return arr;
    }
    const timesTwo = 2 * arr[0];
    return this.getList([timesTwo, ...arr, timesTwo], depth - 1);
  }

  getRoot(num, depth = 0) {
    if (depth === 0) {
      return [num, num, num, num];
    }
    return this.getRoot(num / 2, depth - 1);
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {this.createCoolPattern({ loops: 3, depth: 5 })}
        </Grid>
      </Grid>
    );
  }
}

export default LandingImageContainer;
