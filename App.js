import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Playlists from 'screens/Playlists';
import Icon from 'components/Icon';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Playlists') {
                            iconName = 'musical-notes';
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        } else if (route.name === 'More') {
                            iconName = 'ellipsis-horizontal';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
                initialRouteName={'Playlists'}>
                <Tab.Screen name="Playlists" component={Playlists} />
                <Tab.Screen name="Search" component={Playlists} />
                <Tab.Screen name="More" component={Playlists} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
