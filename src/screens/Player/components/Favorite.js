import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Favorite = ({
    setFavorite,
    isFavorite
}) => {
    return (
        <TouchableOpacity onPress={setFavorite}>
            <Image source={require('assets/favorite.png')}
                   style={{
                       tintColor: isFavorite ? 'red' : 'white'
                   }}
            />
        </TouchableOpacity>
    )
}

export default Favorite;
