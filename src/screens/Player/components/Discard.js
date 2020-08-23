import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Discard = ({
    discard
}) => {
    return (
        <TouchableOpacity onPress={discard}>
            <Image source={require('assets/x.png')} />
        </TouchableOpacity>
    )
}

export default Discard;
