
import React from "react";
import { View, Text, Image, Linking, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardSection from "../CardSection";
import Footer from "../Footer";
import { OxTab, SensTab, HypTab, OralTab, NutTab } from "../Tabs";
import { NavButton } from "../Buttons";

//global variables
let scrollYPos = 0;

class Formula21 extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentTab: null,
    active: false,
    screenHeight: Dimensions.get("window").height,
    screenWidth: Dimensions.get("window").width,
    // scrollHere: null
  };

  changeTab = (tab, scrollHere) => {
    this.setState({
      currentTab: tab,
      screenHeight: Dimensions.get("window").height,
      screenWidth: Dimensions.get("window").width,
      // scrollHere: scrollHere
    });
  };

  scrollToContent = () => {
    scrollYPos = this.state.scrollYPos - 300;
    this.scroller.scrollTo({ x: 0, y: scrollYPos, animated: true });
    console.log("scrollTo fired");
    console.log(this.state.screenHeight, this.state.screenWidth);
    //works on IOS but not on Android, I think it has to do with the fact I'm trying to scroll to a dynamically created div upon creation of it? myabe not because it's in component did update. 
  };

  componentDidUpdate = (prevProp, prevState) => {
    console.log("componentDidUpdate fired")
    this.scrollToContent();
  };

  renderComponent = () => {
    const { currentTab } = this.state;
    if (currentTab === "tab1") {
      return <OxTab />;
    } else if (currentTab === "tab2") {
      return <HypTab />;
    } else if (currentTab === "tab3") {
      return <OralTab />;
    } else if (currentTab === "tab4") {
      return <SensTab />;
    } else if (currentTab === "tab5") {
      return <NutTab />;
    }
  };

  render() {
    const {
      dynCont,
      imageStyle,
      sec1Cont,
      linkStyle,
      linkContain,
      sec3Cont,
      sec3But,
      sec2Cont,
      sec2Text,
      sec2Title,
      paraCont,
      activeButton
    } = styles;

    return (
      <ScrollView
        ref={scroller => {
          this.scroller = scroller;
        }}
      >
        <CardSection>
          <View style={sec1Cont}>
            <Image
              style={imageStyle}
              source={require("../../img/formulaImg.png")}
            />
          </View>
        </CardSection>

        <CardSection>
          <View style={paraCont}>
            <Text>
              {"\t"}
              Almost every baby born with T21 will face several common issues.
              The most critical are oxygen deprivation due to sleep apnea, and
              hypotonia (low muscle tone). Early and aggressive intervention
              maximizes a child’s potential by combatting the challenges
              presented by the condition. Designed as a day-one document,
              formula21 helps families first understand what are the basic
              issues they need to overcome, and how to tackle them. Each of the
              identified issues and their related therapies can be woven into
              daily routines, playtime and normal loving time spent as with any
              baby.
              {"\n"}
            </Text>

            <Text>
              {"\t"}
              Sleep apnea is not common in typical children but has an
              alarmingly high rate of occurrence in babies with T21. Studies
              conducted by Professor Sally Shott, MD report a 50-100% incidence
              of this problem in overall age ranges and detection as early as
              within the first few months of life. Parents and carers absolutely
              must ask their pediatricians for early testing and continue
              throughout childhood and adulthood. It is extremely difficult if
              at all possible for parents to detect obstructive sleep apnea at
              home. Snoring may or may not present as a symptom due to a variety
              of predisposed factors from anatomic variances, and smaller airway
              sizes are a predominant contributor overall.
              {"\n"}
            </Text>

            <Text>
              {"\t"} The good news is once detected, the source of the sleep
              obstruction can be addressed, the most common being tonsil or
              adenoid adjustment. To reduce contributing factors directly due to
              global low tone, oral motor, occupational and physical therapies
              early are definitely pivotal. In summary early detection through
              an overnight sleep apnea test and continued testing is key. {"\n"}
            </Text>

            <Text>
              {"\t"}
              Hypotonia manifests in several ways ranging from sensory deficit,
              to gross motor and fine motor control. The body's most heavily
              concentrated zone for fine motor skills is in the mouth, therefore
              addressing oral motor skills development early is equally
              important. Sensory deficiency is addressed through proprioceptor
              stimulation, massage and skin surface wake-up. Occupational and
              physical therapists can provide parents and carers with integrated
              exercises and techniques with sleeping eating bathing and play
              routines, that can be easy and fun. {"\n"}
            </Text>
          </View>
        </CardSection>

        <CardSection>
          <View style={sec2Cont}>
            <Text style={sec2Title}>Formula21's 5 Basic T21 Components</Text>
            <Text style={sec2Text}>1. Oxygen Loss</Text>
            <Text style={sec2Text}>2. Hypotonia </Text>
            <Text style={sec2Text}>3. Oral Motor Skills </Text>
            <Text style={sec2Text}>4. Sensory Wake Up </Text>
            <Text style={sec2Text}>5. Nutrition </Text>
          </View>
        </CardSection>

        <CardSection style={dynCont}>
          <View style={sec3Cont}>
            <NavButton
              isActive={this.state.currentTab === "tab1"}
              data-button="oxLoBut"
              onPress={this.changeTab.bind(null, "tab1")}
            >
              Oxygen Loss
            </NavButton>

            <NavButton
              isActive={this.state.currentTab === "tab2"}
              data-button="hypBut"
              onPress={this.changeTab.bind(null, "tab2")}
            >
              Hypotonia
            </NavButton>

            <NavButton
              isActive={this.state.currentTab === "tab3"}
              data-button="orMoBut"
              onPress={this.changeTab.bind(null, "tab3")}
            >
              Oral Motor Skills
            </NavButton>

            <NavButton
              isActive={this.state.currentTab === "tab4"}
              data-button="senWakBut"
              onPress={this.changeTab.bind(null, "tab4")}
            >
              Sensory Wake Up
            </NavButton>

            <NavButton
              isActive={this.state.currentTab === "tab5"}
              data-button="nutBut"
              onPress={this.changeTab.bind(null, "tab5")}
            >
              Nutrition
            </NavButton>
          </View>
        </CardSection>

        <CardSection>
          {this.renderComponent()}
        </CardSection>

        <CardSection>
          <View style={linkContain}>
            <Text
              style={linkStyle}
              onPress={() => Linking.openURL("https://www.ndsccenter.org/")}
            >
              - National Down Syndrome Congress -
            </Text>

            <Text
              style={linkStyle}
              onPress={() => Linking.openURL("https://gigisplayhouse.org/")}
            >
              - GiGi’s Playhouse -
            </Text>

            <Text
              style={linkStyle}
              onPress={() => Linking.openURL("http://kellydorfman.com/")}
            >
              - KellyDorfman.com -
            </Text>

            <Text
              style={linkStyle}
              onPress={() => Linking.openURL("http://www.dsaatl.org/")}
            >
              - Down Syndrome Association of Atlanta -
            </Text>

            <Text
              style={linkStyle}
              onPress={() =>
                Linking.openURL("http://www.myofunctionaltherapy.org/")
              }
            >
              - Myofunctional Inst.’s
            </Text>
          </View>
        </CardSection>

        <CardSection>
          <Footer />
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  sec1Cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  paraCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 8
  },

  sec2Cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#ffb326"
  },

  sec2Text: {
    color: "white"
  },

  sec2Title: {
    fontSize: 18,
    color: "white",
    textDecorationLine: "underline"
  },

  sec3Cont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 9
  },

  textStyle: {},

  imageStyle: {
    height: 110,
    resizeMode: "contain"
  },
  sec1: {},

  linkContain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: 6
  },

  linkStyle: {
    color: "#4979ff"
  }
};

export default Formula21;
