import React from 'react';
import { Text, View } from 'react-native';


const Footer = () => {
    const { footText, footCont } = styles
    return (
        <View style={footCont}>
            <Text style={footText}>
                The SKate Foundation is a registered trademark and is a 501(c)3 tax exempt non-profit organization.
            </Text>
        </View>
    )
};


const styles = {

    footText: {
        textAlign: 'center',
        color: '#ffffff',
        width: '100%',
        
    },
    footCont: {
        flex: 1,
        backgroundColor: '#515154',
        padding: 7,
       
        

    },
}
export default Footer;
