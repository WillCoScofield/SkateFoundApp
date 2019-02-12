import React from "react";
import { Text, View, Linking } from "react-native";
import CardSection from "../CardSection";
import Button from "../Buttons/Button";

const NutTab = () => {
  const { title, pText, linkStyle, viewStyle, butStyle, butText } = styles;

  return (
    <View style={viewStyle}>
      <Text style={title}>
        {"\t"}
        Life shouldn’t be toxic. Our babies are born with known nutritional
        deficiencies, many of them learning enablers.
      </Text>

      <Text style={pText}>
        {"\t"}
        Countless and uncontested proof states the merits of a strong
        nutritional foundation for any child. Research is able to directly link
        certain nutrients to the strengthening of brain and eye health as well
        as cognition in general. A challenge that T21 presents is lower than
        normal levels of Zinc, selenium, copper, vitamin E to name just a few.
        Parents requesting a simple blood test can determine the severity of
        their child’s potential deficiencies, and how to supplement them. Advice
        from nutritionists ranges from dietary supplements to designing a diet
        to reduce inflammation, congestion and toxins.
      </Text>

      <Text style={pText}>
        {"\t"}
        We look forward to a day when conventional medicine addresses this very
        important challenge for our community. Until then contacting a
        nutritionist with this type of expertise is great risk-free step in
        raising our children’s global health.
      </Text>

      <Text style={pText}>
        {"\t"}A great reference for understanding the many different approaches
        to nutritional excellence is{" "}
        <Text
          style={linkStyle}
          onPress={() => Linking.openURL("http://www.kellydorfman.com/")}
        >
          www.kellydorfman.com
        </Text>
        .
      </Text>

      <Button
        style={butStyle}
        onPress={() =>
          Linking.openURL(
            "http://kellydorfman.com/wp-content/uploads/2014/11/Low_Muscle_Tone.pdf"
          )
        }
      >
        <Text style={butText}>
          How Nutrition Affects Muscle Tone & Cognition
        </Text>
      </Button>

      <Button
        style={butStyle}
        onPress={() =>
          Linking.openURL(
            "http://kellydorfman.com/wp-content/uploads/2014/11/Piracetam-A_Powerful_Tool_for_Learning_Disabilities.pdf"
          )
        }
      >
        <Text style={butText}>
          A Powerful Tool for Learning Disabilities and Dyspraxia
        </Text>
      </Button>

      <Button
        style={butStyle}
        onPress={() =>
          Linking.openURL(
            "http://kellydorfman.com/wp-content/uploads/2014/11/Improving_Cognitive_Functioning.pdf"
          )
        }
      >
        <Text style={butText}>
          Improving Cognitive Functioning with Nutrient Therapy
        </Text>
      </Button>
    </View>
  );
};

const styles = {
  butText: {
    color: "white"
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  pText: {
    margin: 6,
    paddingLeft: 2,
    paddingRight: 2
  },
  linkStyle: {
    color: "blue"
  },
  butStyle: {
    backgroundColor: "#ffb326",
    margin: 10
  }
};

export default NutTab;
