import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Playlists from 'screens/Playlists';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Player from 'screens/Player';
import SearchBar from 'screens/Search/components/SearchBar';
import DefaultSearch from 'screens/Search/DefaultSearch';
import miniPlayer from 'screens/Player/miniPlayer';
import PlayerFullScreen from 'screens/Player';
import {enableScreens} from 'react-native-screens';
import {View, Text, TouchableOpacity} from 'react-native';
enableScreens();

// function MyTabBar({state, descriptors, navigation}) {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{flex: 1, height: 100}}
//             key={index}>
//             <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
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
        initialRouteName={'DefaultSearch'}>
        <Tab.Screen name="miniPlayer" component={miniPlayer} />
        <Tab.Screen name="DefaultSearch" component={DefaultSearch} />
        <Tab.Screen name="Playlists" component={Playlists} />
        <Tab.Screen name="Player" component={Player} />
        <Tab.Screen name="More" component={SearchBar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
