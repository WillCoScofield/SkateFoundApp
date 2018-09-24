// import component libraries
import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

// components
import Button from './Button';
import DropDown from './DropDown';

// image
import Logo from '../img/menuButton.png';



const Header = (props) => {
    const { imageStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <TouchableOpacity onPress={() => props.changeScreen('about')}>
                <Image
                    style={imageStyle}
                    source={require('../img/logo.png')}
                />
            </TouchableOpacity>
            <DropDown changeScreen={props.changeScreen} />
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    imageStyle: {
        height: 110,
        width: 65,
        resizeMode: 'contain' 
    },
    viewStyle: {
        backgroundColor: '#E8E8E8',
        height: 80,
        paddingTop: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 2,
        position: 'relative',
        paddingLeft: 5
    },
}

export default Header;
