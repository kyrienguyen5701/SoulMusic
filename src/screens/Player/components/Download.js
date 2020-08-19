import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {exp} from 'react-native-reanimated';

const Download = ({

}) => {
    return (
        <TouchableOpacity>
            <Image source={require('assets/download.png')} />
        </TouchableOpacity>
    )
}

export default Download;
