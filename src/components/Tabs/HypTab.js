import React from "react";
import { Text, View } from "react-native";
import CardSection from "../CardSection";

const HypTab = () => {
  const { title, pText, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={title}>
        {"\t"}
        During the earliest days of life, and continuing throughout a healthy
        adulthood, individuals with T21 can reduce the difficulties of hypotonia
        through physical therapy, movement and exercise. Hypotonia (low muscle
        tone) ligamentous laxity (looseness of the ligaments that cause overly
        flexible joints) challenge us globally: our gross motors, our fine
        motors, and our oral motors.
      </Text>

      <Text style={pText}>
        {"\t"}
        From birth, babies have a natural urge to move. With low muscle tone, it
        is a serious struggle. But engaging in a combination of occupational
        therapy sensory wake up techniques and physical therapy gross motors
        strengthening, a lifetime of healthy movement is entirely possible.
      </Text>

      <Text style={pText}>
        {"\t"}
        Without early intervention, children with T21 will surely find
        compensatory techniques and feel a natural tendency to avoid normal
        development. Movement begins in a small way and should quickly advance
        to reaching, then crossing the midline. Crossing the midline movements
        strengthens ultra important cross-brain patterning. Without attacking
        these cornerstone milestones early, babies will find otherwise simple
        activities challenging and tiring.
        {"\n"}
        {"\n"}
        {"\t"}
        From the midline work, rolling over develops more easily. Rolling over
        then evolves into pushing up, stepping up and eventually walking and
        running. A physical therapist can teach parents creative fun tactics to
        provoke a newborn’s urges to engage these movements, thereby creating
        therapy disguised as play. Our ultimate goal is a normal and independent
        life, and it begins with the simplest interventions.
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
    fontSize: 15,
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold"
  },
  pText: {
    margin: 6,
    paddingLeft: 2,
    paddingRight: 2
  }
};

export default HypTab;
