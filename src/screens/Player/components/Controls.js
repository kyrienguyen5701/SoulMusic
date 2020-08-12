import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Controls = ({
    paused,
    pause,
    back,
    forward,
    forwardDisabled,
    isLooping,
    setLoop,
    isShuffle,
    setShuffle,
    isFavorite,
    setFavorite
  }) => {

    return (
        <View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: 50
            }}>
                <TouchableOpacity onPress={back}>
                    <Image source={require('assets/previous.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={pause}>
                    {paused
                        ? <Image source={require('assets/play-button.png')} />
                        : <Image source={require('assets/pause.png')} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={forward} disabled={forwardDisabled}>
                    <Image source={require('assets/next.png')} />
                </TouchableOpacity>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-evenly",
                marginTop: 100
            }}>
                <TouchableOpacity onPress={setShuffle}>
                    <Image source={require('assets/shuffle.png')}
                           style={{
                               tintColor: isShuffle ? 'green' : 'white'
                           }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={setFavorite} disabled={true}>
                    <Image source={require('assets/favorite.png')}
                           style={{
                               tintColor: isFavorite ? 'red' : 'white'
                           }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={setLoop}>
                    <Image source={require('assets/repeat.png')}
                           style={{
                               tintColor: isLooping ? 'green' : 'white'
                           }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('assets/download.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('assets/add.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Controls;
