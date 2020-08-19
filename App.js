import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Playlists from 'screens/Playlists';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DefaultSearch from 'screens/Search/DefaultSearch';
import Player from 'screens/Player';
import {enableScreens} from 'react-native-screens';
import {View, Text, TouchableOpacity} from 'react-native';
import SearchBar from 'screens/Search/components/SearchBar';
import miniPlayer from 'screens/Player/miniPlayer';
import {Provider} from 'react-redux';
import store from 'redux/store';
import Search from 'screens/Search/index';

enableScreens();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Playlists') {
                  iconName = 'music';
                } else if (route.name === 'Search') {
                  iconName = 'search';
                } else if (route.name === 'More') {
                  iconName = 'ellipsis-h';
                }
                return <Icon name={iconName} size={30} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#C82424',
              inactiveTintColor: '#0063F8',
              tabStyle: {
                backgroundColor: '#0C08C3',
              },
              showLabel: false,
            }}
            initialRouteName={'Playlists'}>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Playlists" component={Playlists} />
            <Tab.Screen name="More" component={SearchBar} />
          </Tab.Navigator>
        </NavigationContainer>
        {/* <Player /> */}
      </Provider>
    </View>
  );
}
