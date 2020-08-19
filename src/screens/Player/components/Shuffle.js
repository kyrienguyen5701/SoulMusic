import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Shuffle = ({
    setShuffle,
    isShuffle
}) => {
    return (
        <TouchableOpacity onPress={setShuffle}>
            <Image source={require('assets/shuffle.png')}
                   style={{
                       tintColor: isShuffle ? 'red' : 'white'
                   }}
            />
        </TouchableOpacity>
    )
}

export default Shuffle;
