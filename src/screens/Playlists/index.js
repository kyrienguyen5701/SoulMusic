import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Player from "screens/Player";
import Playlist from 'screens/Playlists/Playlist';
import DefaultPlaylists from 'screens/Playlists/DefaultPlaylists';

const Stack = createNativeStackNavigator();

const Playlists = () => {

    return (
        <Stack.Navigator
            initialRouteName={'DefaultPlaylists'}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='DefaultPlaylists' component={DefaultPlaylists} />
            <Stack.Screen name='PlayerFullScreen' component={Player} />
            <Stack.Screen name='Playlist' component={Playlist} />
        </Stack.Navigator>
    );
}

export default Playlists;
