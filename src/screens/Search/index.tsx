import React from 'react';
import DefaultSearch from 'screens/Search/DefaultSearch';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchBar from './components/SearchBar';
import Playlist from 'screens/Playlists/Playlist';

const Stack = createStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator initialRouteName="DefaultSearch">
      <Stack.Screen
        name="DefaultSearch"
        component={DefaultSearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchBar"
        component={SearchBar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Search;
