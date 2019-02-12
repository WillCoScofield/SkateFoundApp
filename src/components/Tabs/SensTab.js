import React from "react";
import { Text, View, Linking } from "react-native";
import CardSection from "../CardSection";

const SensTab = () => {
  const { viewStyle, title, pText, link, subHeader } = styles;

  return (
    <View style={viewStyle}>
      <Text style={title}>Sensory deficiency is a fact of T21</Text>

      <Text style={pText}>
        {"\t"}
        Human beings need touch. And one of several negative effects of
        hypotonia is a lack of awareness of it.
      </Text>

      <Text style={pText}>
        {"\t"}
        In order for a baby to be able to feel touch at normal levels, families
        and carers have to wake up the surface of the skin, and it is achievable
        through techniques easily woven into regular routine and play.
      </Text>

      <Text style={pText}>
        {"\t"}
        There are endless methods of therapies available to enable proper
        breathing, swallowing and articulate speech. The{" "}
        <Text
          style={link}
          onPress={() =>
            Linking.openURL("http://www.myofunctionaltherapy.org/")
          }
        >
          Institute of Myofunctional Studies{" "}
        </Text>
        website provides a clear overview for how to begin to interpret the
        symptoms and solutions.
      </Text>

      <Text style={subHeader}>
        {"\t"}
        Left to the natural state of hypotonia an individual has a lower urge to
        move, roll over, or walk and talk.
      </Text>

      <Text style={pText}>
        {"\t"}
        Through sensory integration, external stimuli sends information that can
        be processed and create appropriate reactions. Without stimulation, the
        brain produces hyporesponsive (brain failing to register inputs) or
        hyperesponsive (brain registers input too intensely) reactions. It is
        possible for a child with T21 to be hyporesponsive for one type of input
        and hyper responsive for another.
        {"\n"}
        {"\n"}
        {"\t"}Occupational therapy provides techniques from the earliest days of
        life that begins to regulate sources of input and enable normal sensory
        interpretation. The same issue and treatments within the mouth are
        addressed with Oral Motor Skills therapies, also easily absorbed into
        daily routines.
      </Text>
    </View>
  );
};

const styles = {
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
  link: {
    color: "blue"
  },
  subHeader: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 6
  }
};

export default SensTab;
