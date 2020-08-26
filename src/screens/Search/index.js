import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchBar from './components/SearchBar';
import Playlist from 'screens/Playlists/Playlist';
import DefaultSearch from './DefaultSearch';

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
