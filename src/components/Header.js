// import component libraries
import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

// components
import Button from "./Button";
import DropDown from "./DropDown";

// image
import Logo from "../img/menuButton.png";

const Header = props => {
  const { imageStyle, viewStyle, dropStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={() => props.changeScreen("about")}>
        <Image style={imageStyle} source={require("../img/logo.png")} />
      </TouchableOpacity>
      <DropDown style={dropStyle} changeScreen={props.changeScreen} />
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  imageStyle: {
    height: 110,
    width: 50,
    resizeMode: "contain"
  },
  viewStyle: {
    backgroundColor: "#E8E8E8",
    height: 80,
    paddingTop: 25,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 3,
    position: "relative",
    paddingLeft: 5
  },
  dropStyle:{
      
  }
};

export default Header;
