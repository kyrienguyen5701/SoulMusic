import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ShuffleButton = ({title}) => {
    return (
        <TouchableOpacity style={{
            width: 150,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#005995',
            justifyContent: 'center'
        }}>
            <Text style={{
                textAlign: 'center',
                color: '#FBF579'
            }}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ShuffleButton;
