import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 0,
        margin: 0,
       
        borderColor: '#ddd',
        
        elevation: 1,
    }
}

export default CardSection;