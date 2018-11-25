import * as React from "react";
import HomeContainer from "./components/Home/HomeContainer";
class App extends React.Component {
  public render() {
    return (
      <div className="App" style={{ padding: 0, margin: 0 }}>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
