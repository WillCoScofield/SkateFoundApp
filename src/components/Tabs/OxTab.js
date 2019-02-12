import React from "react";
import { Text, View } from "react-native";
import CardSection from "../CardSection";

const OxTab = () => {
  const { viewStyle, title, header, pText } = styles;
  return (
    <View style={viewStyle}>
      <Text style={title}>
        A sleep study is needed early in the life of a child with T21
      </Text>

      <Text style={pText}>
        {"\t"}
        Sleep apnea has an effect on a child’s cognitive ability, behavior,
        growth rate, and heart issues. Since children with T21 are more likely
        to have heart problems from birth and are more likely to have sleep
        apnea, this combination can lead to severe complications. Unfortunately,
        it is very difficult for parents to accurately determine sleep
        abnormalities in their children with T21.
        {"\n"}
        {"\n"}
        {"\t"}
        Professor Sally Shot, MD conducted clinical studies which successfully
        led to the American Academy of Pediatrics to lower recommendations for
        earlier testing for sleep apnea to age three. Although a huge
        achievement, it has been proven to appear in as early as the first few
        months of life. This, coupled with the critical brain development which
        occurs in the first three years Families and cares are strongly urged to
        begin testing and to continue testing and overnight sleep studies from
        six months onward. A parent should have a short checklist with them when
        asking their pediatrician to prescribe sleep studies:
      </Text>

      <Text style={header}>{"\t"}Issue 1</Text>
      <Text style={pText}>
        {"\t"}
        Over 80% + of Children with T21 test positive for sleep apnea over all.
        Included in this statistic is an alarming percentage of infants and
        toddlers.
      </Text>

      <Text style={header}>{"\t"}Issue 2</Text>
      <Text style={pText}>
        {"\t"}
        Brain development between birth and three years of age is unanimously
        agreed as the most crucial in a human life. If a child suffers sleep
        apnea during this critical time, their brain is starved of oxygen
        hundreds of times during a regular night’s sleep, hence hindering normal
        healthy brain development.
      </Text>

      <Text style={header}>{"\t"}Issue 3</Text>
      <Text style={pText}>
        {"\t"}
        Most families place their faith in the advice of their pediatrician. The
        country’s pediatrics governing body has not yet advised testing to begin
        early enough. Therefore families are usually told that the test is
        probably not necessary.
      </Text>

      <Text style={header}>{"\t"}Issue 4</Text>
      <Text style={pText}>
        {"\t"}A large percentage of small children with T21 are unable to snore.
        And without audible snoring, tossing and turning, or other extremely
        restless symptoms sleep apnea is virtually undetectable without a fully
        excluded sleep study in a sleep clinic. With or without symptoms the
        condition can exist and accelerate cognitive delay.
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
    fontSize: 18,
    margin: 15,
    fontWeight: "bold"
  },

  header: {
    color: "#ffb326",
    margin: 6
  },

  pText: {
    margin: 6,
    paddingLeft: 2,
    paddingRight: 2
  }
};

export default OxTab;
