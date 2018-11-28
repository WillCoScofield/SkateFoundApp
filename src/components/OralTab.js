import React from "react";
import { Text, View } from "react-native";
import CardSection from "./CardSection";
import Button from "./Button";

const OralTab = () => {
  // const { title, header, pText } = styles;

  return (
    <View>
      <Text>TILT - Tongue In, Lips Together</Text>

      <Text>
        Coupling oral motor skills to address issues with introductions to words
        and communication
      </Text>
      <Text>
        The fundamental goal in building or a motor skills is to correct and
        instruct the tongue. Simply put, the tongue must reside inside the mouth
        and the lips must remain together, even during sleep. When basic oral
        motor skills exercises begin early and aggressively, babies born with
        T21 grow to eat to breathe and to speak with clarity and control.
      </Text>
      <Text>Benefits</Text>

      <Text>Breathe.....Speak.....Eat</Text>

      <Text>
        Within the first critical 10 months of life, the shape of the mouth and
        hence positioning of the tongue can be changed, profoundly changing a
        baby’s future communication abilities, social interactions, and
        digestive health, not to mention healthy breathing. A baby born with T21
        has an abnormally high arch in the roof of the mouth. Most commonly they
        also have an obstructive tongue (which also has a detrimental flacid
        quality due to low tone). Curiously the tongue size is usually normal in
        measurement, but cannot fit comfortably within the overly arched cavity
        of the mouth causing the obstructive characteristic. But by engaging
        early and aggressively in a grouping of oral motor skills and techniques
        involving stimulation, tongue-reflex building, and mouth massaging, this
        can be greatly improved or near totally corrected. A qualified speech
        and language pathologist can work in concert with aggressive oral motor
        skills to help to encourage the beginning formations of speech centric
        sounds. But specific to the critical oral motor skills needs therapy
        involves daily massaging of the roof of the mouth, tongue stimulation
        techniques, and mouth/sensory wake up of both the interior and exterior
        of the babies mouth. A qualified therapist must guide parents to teach
        them the proper techniques to be done daily during those first critical
        months.
      </Text>

      <Text>
        Although this may appear to be overwhelming, interactions with a baby
        are 24 hours per day and can easily incorporate these ultra important
        exercises, into feedings or otherwise playful periods in a day.
      </Text>

      <Text>Strengthen the entire respiratory system</Text>

      <Text>
        With the help of physical therapy and building core strength, a child is
        able to sit up straight. It sounds overly simple, but sitting up
        straight is integral to proper oral motor skills development. Conversely
        with slouching comes a dropped, open mouth. Mouth breathing is the enemy
        to healthy air intake by preventimg the body from breathing through the
        nose (to clean and warm the air that goes into our bodies). Building
        upon the earliest skills will lead to higher levels of strength and
        endurance for continued exercise and greater respiratory stamina
        throughout a lifetime. Physical therapy is therefore integral to mouth
        control.
      </Text>

      <Text>Reduction in chronic chest infection</Text>

      <Text>
        Breathing through the nose warms and cleanses air intake, affording the
        body to be much less vulnerable to chronic chest and sinus infections.
        The three components of the respiratory system (being the airways, the
        lungs, and respiratory muscles) work in concert for efficient air and
        oxygen intake. With improved posture, tongue position and ultimately
        nose breathing the sinus cavity engages and is much more likely to
        develop and grow versus remain in a sinking position (which further
        prevents healthy air passage).
      </Text>

      <Button
        onPress={() => Linking.openURL("http://www.myofunctionaltherapy.org/")}
      >
        Myofunctional Inst.'s
      </Button>
    </View>
  );
};

// const styles = {
//   title: {},
//   header: {},
//   pText: {}
//  butStyle: {}
// };

export default OralTab;
