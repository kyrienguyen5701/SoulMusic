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
import {Provider, useSelector} from 'react-redux';
import store from 'redux/store';
import DefaultPlaylists from 'screens/Playlists/DefaultPlaylists';

enableScreens();
const Tab = createBottomTabNavigator();

export default function App() {

    return (
    <Provider store={store}>
        <View style={{
            height: '100%',
            flex: 1
        }}>
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
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'red',
                        inactiveTintColor: 'gray',
                        tabStyle: {
                            backgroundColor: '#0C08C3',
                            height:90
                        },
                    }}
                    initialRouteName={'Playlists'}>
                    <Tab.Screen name="Playlists" component={DefaultPlaylists} />
                    <Tab.Screen name="Search" component={DefaultSearch} />
                    <Tab.Screen name="More" component={SearchBar} />
                </Tab.Navigator>
            </NavigationContainer>
            {/*{song != null ? <Player song={song} playlist={playlist}/> : null}*/}
            <Player/>
        </View>


    </Provider>



  );
}
