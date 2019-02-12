import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardSection from "../CardSection";
import {Button} from "../Buttons";
import Footer from "../Footer";

const Playhouse = () => {
  const { sec1Cont, sec2Cont, sec3Cont, sec3Text } = styles;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <CardSection>
          <View style={sec1Cont}>
            <Text>
              {"\t"} GiGi's Playhouse Inc., is a fast growing network of FREE
              centers for communities across the United States and
              internationally. We thrive on donors and volunteers and provide a
              lifespan of services including FREE therapy styled classes,
              one-to-one tutoring, arts, life skill and job training and most of
              all a place to belong. GiGi’s Playhouse is determined to see
              global acceptance of all individuals living with T21 (Down
              syndrome) through free purposeful programming.
            </Text>
          </View>
        </CardSection>

        <CardSection>
          <View style={sec2Cont}>
            <Button
              style={{ backgroundColor: "#63bf6b" }}
              onPress={() => Linking.openURL("https://gigisplayhouse.org/")}
            >
              <Text style={{color: "white"}}>Gigi's Playhouse</Text>
            </Button>
            <Text>
              {"\t"} In 2008 The SKate Foundation was formed and by 2011 had
              raised funds to open the first GiGi’s Playhouse in Atlanta. Today,
              GiGi’s Playhouse Atlanta has a thriving midtown center and it’s
              Board of Directors has just opened a second Atlanta center in
              Roswell Georgia, to better serve the 1000 families within Atlanta
              and another thousand families to have Georgia living with T21.
            </Text>
          </View>
        </CardSection>

        <CardSection>
          <View style={sec3Cont}>
            <Text style={sec3Text}>
              {"\t"}
              The SKate Foundation raised funds to open the first GiGI’s
              Playhouse in Atlanta in 2011, and opened a second location in
              Roswell, GA in 2017. Now our Board of Directors, volunteers, and
              families are being served daily with FREE therapeutic play, FREE
              family support, FREE fun, music and arts (even the parking is
              free!).
            </Text>

            <Text style={sec3Text}>
              {"\n"}
              {"\t"}
              The SKate Foundation continues support of GiGI’s Playhouse Atlanta
              and internationally. Our collective goal is to see A GiGi’s
              Playhouse in every neighborhood someday soon.
            </Text>
          </View>
        </CardSection>
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = {
  sec3Text: {
    color: "white"
  },
  sec1Cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  sec2Cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  sec3Cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#63bf6b"
  }
};

export default Playhouse;
