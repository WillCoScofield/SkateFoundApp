import React from "react";
import { ScrollView, View, Text } from "react-native";

// components
import Header from "./src/components/Header";
import About from "./src/components/About";
import Playhouse from "./src/components/Playhouse";
import Resources from "./src/components/Resources";
import Formula21 from "./src/components/Formula21";

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

//Header
// Logo, Title?, DropDown Menu

//Each Full Width Card with different Contents
// Adrienne Mulligan Quote 1
// Checkerboard Photo 2
//Mission 3
//2 views
//"Our Mission"
//3 Text Tags
//Why 4
//2 Views
//Column Title (Font Size) -- text under
//Button
//How 5
//2 Views
//Column Title (Font Size) -- text under
//Button
//Who 6
//2 Views
//Column Title (Font Size) -- text under
//Button
//Footer 7
//Text
