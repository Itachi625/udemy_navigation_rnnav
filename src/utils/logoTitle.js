import React from 'react';
import { Text,View,Image } from 'react-native';

import Logo from '../images/paypal-logo.png'

const LogoTitle = () =>{
    return(
        <Image
            source={Logo}
            style={{width:50,height:50}}
        />
    )
}

export default LogoTitle;