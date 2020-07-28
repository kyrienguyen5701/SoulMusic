import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Player from "screens/Player";
import DefaultPlaylists from 'screens/Playlists/DefaultPlaylists';

const Stack = createNativeStackNavigator();

const Playlists = () => {

    return (
        <Stack.Navigator initialRouteName={'DefaultPlaylists'}>
            <Stack.Screen name='DefaultPlaylists' component={DefaultPlaylists} />
            <Stack.Screen name='Player' component={Player} />
        </Stack.Navigator>
    );
}

export default Playlists;
