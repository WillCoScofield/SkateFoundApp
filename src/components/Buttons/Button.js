import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.ButtonStyle, ...style}}>
      <Text style={{...styles.textStyle, ...textStyle}}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  ButtonStyle: {
    flex: 1,
    // alignSelf: 'stretch',
    //backgroundColor: 'green',
    // flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 3, 
    borderRadius: 10,
  },

  textStyle: {
    justifyContent: "center",
    alignSelf: "center",
    color: "black",
    fontSize: 12,
    fontWeight: "500"
  }
};

export default Button;
