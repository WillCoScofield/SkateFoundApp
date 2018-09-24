import React from 'react';
import { Text, View, Image } from 'react-native';
import CardSection from './CardSection';
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import Button from '../components/Button';

const ContentSection = () => {
    const {
        quoteContainer,
        checkPhotoContainer,
        missionStateContainer,
        whyContainer,
        howContainer,
        whoContainer,
        footerContainer,
        titleText,
        pText,
        checkPhoto
    } = styles;

    return (
        <ScrollView>
            <View>
                <CardSection>
                    <View style={quoteContainer}>
                        <Text style={titleText}> "Break down old stereotypes and raise expectation for babies born with T21 (Down Syndrome)." </Text>
                        <Text> -- Adrienne C. Mulligan, Founder</Text>
                    </View>
                </CardSection>

                <CardSection style={checkPhotoContainer}>
                    <View>
                        <Image source={require('../img/homePeopleImg.png')} />
                    </View>
                </CardSection>

                <CardSection style={{backgroundColor: '#ed5395'}}>
                    <View style={missionStateContainer}>
                        <Text style={titleText}>Our Mission</Text>
                        <Text style={pText}>
                            To redirect a baby born with T21 from a life of mediocrity, to a normal and independent one.
                        </Text>
                        <Text style={pText}>
                            To provide every family in the world with formula21, an intervention guideline specific to T21.
                        </Text>
                        <Text style={pText}>
                            To integrate persons with T21 into every facet of society.
                        </Text>
                    </View>
                </CardSection>

                <CardSection style={whyContainer}>
                    <View>
                        <Text style={titleText}> Why </Text>
                        <Text style={pText}>
                            There are currently many recommended forms of early intervention. There is no doubt intervention has a profoundly positive impact on a child’s future. Until now there hasn’t been a composite summary that profiles the obstacles that T21 presents. Families can reference formula21 for a first glance at how T21 effects their baby, and how to combat early. </Text>
                        <Button>
                            <Text></Text>
                        </Button>
                    </View>
                </CardSection>

                <CardSection style={howContainer}>
                    <View>
                        <Text style={titleText}> How </Text>
                        <Text style={pText}>
                        Our aim is to provide every family, support center and institution with a full briefing of formula21. Our network begins with digital, print and personal campaigns to educate from the first day of diagnosis. Children who are engaged in our custom and basic intervention guidelines will undoubtedly achieve more independence and contribution to society than those without.
                        Someday we hope to see government funding be redirected towards early & aggressive intervention, over today’s ineffective and dwindling support for individuals and their families. Funds supporting people with T21 across an entire lifetime for housing, transportation, healthcare and meals could be reduced to a fraction if governmental effort and spending focused on the early precious years of development, most effectively if under the age of ten. On a parallel, The SKate Foundation supports GiGi’s Playhouse Achievement Centers. Thanks to incredible volunteers and positivity, GiGi’s provides therapeutic play, education and support - all for FREE in their communities.  </Text>
                        <Button>
                            <Text></Text>
                        </Button>
                    </View>
                </CardSection>

                <CardSection style={whoContainer}>
                    <View>
                        <Text style={titleText}> Who </Text>
                        <Text style={pText}>
                            Good people, willing to contribute to the outreach needed to help families fast.
                        </Text>
                        <Button>
                            <Text></Text>
                        </Button>
                    </View>
                </CardSection>

                <CardSection>
                    <View style={footerContainer}>
                        <Text> The SKate Foundation is a registered trademark and is a 501(c)3 tax exempt non-profit organization. </Text>
                    </View>
                </CardSection>

            </View>
        </ScrollView>
    )
};


const styles = {
    titleText: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginLeft: 5,
        marginRight: -1,


    },

    pText: {
        padding: 5,

    },

    quoteContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2


    },

    checkPhoto: {

    },

    missionStateContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,


    },

    whyContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2


    },

    howContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2

    },

    whoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2

    },

    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    }



}


export default ContentSection;
