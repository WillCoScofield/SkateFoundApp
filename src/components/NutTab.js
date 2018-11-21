import React from "react";
import { Text, View } from "react-native";
import CardSection from "./CardSection";
import Button from "./Button"


const NutTab = () => {
  // const { title, header, pText } = styles;

  return (
    <View>
      <Text>
      Life shouldn’t be toxic. Our babies are born with known nutritional deficiencies, many of them learning enablers.
      </Text>

      <Text>
      Countless and uncontested proof states the merits of a strong nutritional foundation for any child. Research is able to directly link certain nutrients to the strengthening of brain and eye health as well as cognition in general. A challenge that T21 presents is lower than normal levels of Zinc, selenium, copper, vitamin E to name just a few. Parents requesting a simple blood test can determine the severity of their child’s potential deficiencies, and how to supplement them. Advice from nutritionists ranges from dietary supplements to designing a diet to reduce inflammation, congestion and toxins. 
      </Text>

      <Text>
      We look forward to a day when conventional medicine addresses this very important challenge for our community. Until then contacting a nutritionist with this type of expertise is great risk-free step in raising our children’s global health. 
      </Text>

      <Text>
      A great reference for understanding the many different approaches to nutritional excellence is <Text  onPress={() =>
                Linking.openURL("http://www.kellydorfman.com/")
              }>www.kellydorfman.com</Text>.
      </Text>

        <Button onPress={() =>
                Linking.openURL("http://www.kellydorfman.com/")
              }>How Nutrition Affets Muscle Tone & Cognition</Button>

        <Button onPress={() =>
                Linking.openURL("http://kellydorfman.com/wp-content/uploads/2014/11/Piracetam-A_Powerful_Tool_for_Learning_Disabilities.pdf")
              }>A Powerful Tool for Learning Disabilities and Dyspraxia</Button>

        <Button onPress={() =>
                Linking.openURL("http://kellydorfman.com/wp-content/uploads/2014/11/Improving_Cognitive_Functioning.pdf")
              }>Improving Cognitive Functioning with Nutrient Therapy</Button>




     
    </View>
  );
};

// const styles = {
//   title: {},
//   header: {},
//   pText: {}
//   linkStyle: {}
// };

export default NutTab;
