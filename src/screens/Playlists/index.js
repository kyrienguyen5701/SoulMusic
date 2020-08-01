import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import PlayerFullScreen from "screens/Player";
import DefaultPlaylists from 'screens/Playlists/DefaultPlaylists';
import Playlist from 'screens/Playlists/Playlist';

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
            <Stack.Screen name='PlayerFullScreen' component={PlayerFullScreen} />
            <Stack.Screen name='Playlist' component={Playlist} />
        </Stack.Navigator>
    );
}

export default Playlists;
