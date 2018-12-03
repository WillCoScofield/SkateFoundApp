import React from "react";
import { Text, TouchableOpacity } from "react-native";

const NavButton = ({ onPress, children, isActive }) => {
  const buttonStyle = isActive ? {...styles.ButtonStyle, ...styles.activeButton} : styles.ButtonStyle;
  const textStyle = isActive ? {...styles.textStyle, ...styles.activeText} : styles.textStyle;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...buttonStyle }}
    >
      <Text style={{ ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  activeButton: {
    backgroundColor: "black"
  },
  activeText: {
    color: "white"
  },
  ButtonStyle: {
    flex: 1,
    // alignSelf: 'stretch',
    //backgroundColor: 'green',
    // flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 3,
    borderRadius: 10
  },
  textStyle: {
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
    fontSize: 12,
    fontWeight: "500"
  }
};

export default NavButton;
