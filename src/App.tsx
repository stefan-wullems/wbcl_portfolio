import * as React from "react";
import LandingImageContainer from "./components/LandingImage/LandingImageContainer";
class App extends React.Component {
  public render() {
    return (
      <div className="App" style={{ padding: 0, margin: 0 }}>
        <LandingImageContainer />
      </div>
    );
  }
}

export default App;
