import React from "react";
import { Text, View, Image, Linking } from "react-native";
import CardSection from "../CardSection";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../Buttons";
import Footer from "../Footer";

const About = () => {
  const {
    quoteContainer,
    checkPhotoContainer,
    missionStateContainer,
    whyContainer,
    howContainer,
    whoContainer,
    titleText,
    pText,
    mPtext,
    mPTitle,
    formBut,
    giBut,
    resBut,
    quote
  } = styles;

  return (
    <ScrollView>
      <View>
        <CardSection>
          <View style={quoteContainer}>
            <Text style={quote}>
              {"\t"}
              "Break down old stereotypes and raise expectation for babies born
              with T21 (Down Syndrome)."
            </Text>
            <Text style={{ fontStyle: "italic" }}>
              -- Adrienne C. Mulligan, Founder
            </Text>
          </View>
        </CardSection>

        <CardSection>
          <View style={checkPhotoContainer}>
            <Image
              style={{
                flex: 1,
                height: 125,
                width: 380,
                resizeMode: "contain"
              }}
              source={require("../../img/homePeopleImg.png")}
            />
          </View>
        </CardSection>

        <CardSection>
          <View style={missionStateContainer}>
            <Text style={mPTitle}>Our Mission</Text>
            <Text style={mPtext}>
              {"\t"}
              To redirect a baby born with T21 from a life of mediocrity, to a
              normal and independent one.
            </Text>
            <Text style={mPtext}>
              {"\t"}
              To provide every family in the world with formula21, an
              intervention guideline specific to T21.
            </Text>
            <Text style={mPtext}>
              {"\t"}
              To integrate persons with T21 into every facet of society.
            </Text>
          </View>
        </CardSection>

        <CardSection>
          <View style={whyContainer}>
            <Text style={titleText}> Why </Text>
            <Text style={pText}>
              {"\t"}
              There are currently many recommended forms of early intervention.
              There is no doubt intervention has a profoundly positive impact on
              a child’s future.
              {"\n"}
            </Text>
            <Text>
              {"\t"}
              Until now there hasn’t been a composite summary that profiles the
              obstacles that T21 presents. Families can reference formula21 for
              a first glance at how T21 effects their baby, and how to combat
              early.
            </Text>

            <Button
              onPress={() =>
                Linking.openURL("http://theskatefoundation.org/formula.php")
              }
              style={formBut}
            >
              <Text style={{ color: "white" }}>Formula21</Text>
            </Button>
          </View>
        </CardSection>

        <CardSection>
          <View style={howContainer}>
            <Text style={titleText}> How </Text>
            <Text style={pText}>
              {"\t"}
              Our aim is to provide every family, support center and institution
              with a full briefing of formula21. Our network begins with
              digital, print and personal campaigns to educate from the first
              day of diagnosis. Children who are engaged in our custom and basic
              intervention guidelines will undoubtedly achieve more independence
              and contribution to society than those without.
            </Text>

            <Text style={pText}>
              {"\t"}
              Someday we hope to see government funding be redirected towards
              early & aggressive intervention, over today’s ineffective and
              dwindling support for individuals and their families. Funds
              supporting people with T21 across an entire lifetime for housing,
              transportation, healthcare and meals could be reduced to a
              fraction if governmental effort and spending focused on the early
              precious years of development, most effectively if under the age
              of ten. On a parallel, The SKate Foundation supports GiGi’s
              Playhouse Achievement Centers. Thanks to incredible volunteers and
              positivity, GiGi’s provides therapeutic play, education and
              support - all for FREE in their communities.
            </Text>

            <Button
              onPress={() => Linking.openURL("https://gigisplayhouse.org/")}
              style={giBut}
            >
              <Text style={{ color: "white" }}>Gigi's Playhouse</Text>
            </Button>
          </View>
        </CardSection>

        <CardSection>
          <View style={whoContainer}>
            <Text style={titleText}> Who </Text>
            <Text style={pText}>
              {"\t"}
              Good people, willing to contribute to the outreach needed to help
              families fast.
            </Text>
            <Button
              onPress={() =>
                Linking.openURL(
                  "http://theskatefoundation.org/pdf/Apr_18_Formula21References.pdf"
                )
              }
              style={resBut}
            >
              <Text style={{ color: "white" }}>Resources and References</Text>
            </Button>
          </View>
        </CardSection>

        <CardSection>
          <Footer />
        </CardSection>
      </View>
    </ScrollView>
  );
};

const styles = {
  giBut: {
    backgroundColor: "#63bf6b"
  },
  resBut: {
    backgroundColor: "blue"
  },
  formBut: {
    backgroundColor: "#ffb326"
  },

  mPtext: {
    color: "white"
  },

  mPTitle: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    color: "white",
    textDecorationLine: "underline"
  },

  checkPhotoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  checkPhoto: {
    // resizeMode: "contain"
  },

  quote: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    fontWeight: "bold"
  },

  titleText: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    textDecorationLine: "underline"
  },

  pText: {
    padding: 3
  },

  quoteContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },

  checkPhoto: {},

  missionStateContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#ed5395"
  },

  whyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },

  howContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },

  whoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  }
};

export default About;
