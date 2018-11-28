import React from "react";
import { Text, View, Linking } from "react-native";
import CardSection from "./CardSection";

const SensTab = () => {
  // const { title, header, pText } = styles;

  return (
    <View>
      <Text>Sensory deficiency is a fact of T21</Text>

      <Text>
        Human beings need touch. And one of several negative effects of
        hypotonia is a lack of awareness of it.
      </Text>

      <Text>
        In order for a baby to be able to feel touch at normal levels, families
        and carers have to wake up the surface of the skin, and it is achievable
        through techniques easily woven into regular routine and play.
      </Text>

      <Text>
        There are endless methods of therapies available to enable proper
        breathing, swallowing and articulate speech. The{" "}
        <Text
          onPress={() =>
            Linking.openURL("http://www.myofunctionaltherapy.org/")
          }
        >
          Institute of Myofunctional Studies{" "}
        </Text>{" "}
        website provides a clear overview for how to begin to interpret the
        symptoms and solutions.
      </Text>

      <Text>
        Left to the natural state of hypotonia an individual has a lower urge to
        move, roll over, or walk and talk.
      </Text>

      <Text>
        Through sensory integration, external stimuli sends information that can
        be processed and create appropriate reactions. Without stimulation, the
        brain produces hyporesponsive (brain failing to register inputs) or
        hyperresponsive (brain registers input too intensely) reactions. It is
        possible for a child with T21 to be hyporesonsive for one type of input
        and hyper responsive for another. Occupational therapy provides
        techniques from the earliest days of life that begins to regulate
        sources of input and enable normal sensory interpretation. The same
        issue and treatments within the mouth are addressed with Oral Motor
        Skills therapies, also easily absorbed into daily routines.
      </Text>
    </View>
  );
};

// const styles = {
//   title: {},
//   header: {},
//   pText: {}
// };

export default SensTab;
