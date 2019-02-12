<script src="http://10.136.19.176:8097" />;
import React from "react";
import { ScrollView, View, Text } from "react-native";

// components
import Header from "./src/components/Header";
import About from "./src/components/Pages/About";
import Playhouse from "./src/components/Pages/Playhouse";
import Resources from "./src/components/Pages/Resources";
import Formula21 from "./src/components/Pages/Formula21";

<script src="http://localhost:8097" />;

export default class App extends React.Component {
  state = {
    currentScreen: "formula21"
  };

  changeScreen = screenName => {
    this.setState({
      currentScreen: screenName
    });
  };

  renderComponent = currentScreen => {
    if (currentScreen === "resources") {
      return <Resources />;
    } else if (currentScreen === "about") {
      return <About />;
    } else if (currentScreen === "formula21") {
      return <Formula21 />;
    } else if (currentScreen === "playhouse") {
      return <Playhouse />;
    }
    // return <ContentSection />;
  };

  render() {
    const { currentScreen } = this.state;
    console.log(currentScreen);
    return (
      <ScrollView>
        <View>
          <Header changeScreen={this.changeScreen} />
          {this.renderComponent(currentScreen)}
        </View>
      </ScrollView>
    );
  }
}
