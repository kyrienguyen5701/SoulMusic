import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const AddToPlaylist = ({

}) => {
    return (
        <TouchableOpacity>
            <Image source={require('assets/add.png')} />
        </TouchableOpacity>
    )
}

export default AddToPlaylist;
