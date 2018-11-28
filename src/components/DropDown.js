import React, { Component } from "react";
import { View, TouchableOpacity, Image, Linking } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

class DropDown extends React.Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  changeScreen = screenName => {
    console.log(`changing screen to ${screenName}`);
    this.props.changeScreen(screenName);
    this.hideMenu();
  };

  showMenu = () => {
    this._menu.show();
    // console.log(this._menu);
  };

  render() {
    const {
      abtItem,
      formItem,
      playItem,
      resItem,
      viewStyle,
      imageStyle
    } = styles;
    const { changeScreen } = this.props;

    return (
      <View
        style={viewStyle}
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 10
        }}
      >
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu}>
              <Image
                style={imageStyle}
                source={require("../img/menuButton.png")}
              />
            </TouchableOpacity>
          }
        >
          <MenuItem style={abtItem} onPress={() => this.changeScreen("about")}>
            About
          </MenuItem>
          <MenuDivider />
          <MenuItem
            style={formItem}
            onPress={() => this.changeScreen("formula21")}
          >
            Formula21
          </MenuItem>
          <MenuDivider />
          <MenuItem
            style={playItem}
            onPress={() => this.changeScreen("playhouse")}
          >
            Skate/GiGi's Playhouse
          </MenuItem>
          <MenuDivider />
          <MenuItem
            style={resItem}
            onPress={() =>
              Linking.openURL(
                "http://theskatefoundation.org/pdf/Apr_18_Formula21References.pdf"
              )
            }
          >
            Resources
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    borderTopWidth: 5,
    borderBottomWidth: 5,
    padding: 0,
    margin: 0,
    borderColor: "#ddd"
  },

  abtItem: {
    backgroundColor: "#f42e3f"
  },
  formItem: {
    backgroundColor: "#ffb326"
  },
  playItem: {
    backgroundColor: "#63bf6b"
  },
  resItem: {
    backgroundColor: "#ed5395"
  },
  imageStyle: {
    backgroundColor: "white",
    elevate: 2,
    margin: 5,
    borderWidth: 0.1,
    borderColor: "black"
  }
};

export default DropDown;
