import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Previous from 'screens/Player/components/Previous';
import Pause from 'screens/Player/components/Pause';
import Next from 'screens/Player/components/Next';
import Shuffle from 'screens/Player/components/Shuffle';
import Favorite from 'screens/Player/components/Favorite';
import Loop from 'screens/Player/components/Loop';
import Download from 'screens/Player/components/Download';
import AddToPlaylist from 'screens/Player/components/AddToPlaylist';

const Controls = ({
    paused,
    pause,
    back,
    forward,
    forwardDisabled,
    isLoop,
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
                <Previous back={back} />
                <Pause pause={pause} paused={paused} />
                <Next forward={forward} forwardDisabled={forwardDisabled} />
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-evenly",
                marginTop: 100
            }}>
                <Shuffle isShuffle={isShuffle} setShuffle={setShuffle} />
                <Favorite isFavorite={isFavorite} setFavorite={setFavorite} />
                <Loop isLoop={isLoop} setLoop={setLoop} />
                <Download />
                <AddToPlaylist />
            </View>
        </View>
    )
}

export default Controls;
