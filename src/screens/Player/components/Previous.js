import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Previous = ({
    back
}) => {
    return (
        <TouchableOpacity onPress={back}>
            <Image source={require('assets/previous.png')} />
        </TouchableOpacity>
    )
}

export default Previous;

