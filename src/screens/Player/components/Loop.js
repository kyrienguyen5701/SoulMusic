import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Loop = ({
    setLoop,
    isLoop
}) => {
    return (
        <TouchableOpacity onPress={setLoop}>
            <Image source={require('assets/repeat.png')}
                   style={{
                       tintColor: isLoop ? 'red' : 'white'
                   }}
            />
        </TouchableOpacity>
    )
}

export default Loop;
