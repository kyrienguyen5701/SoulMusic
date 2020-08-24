import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DefaultSearch from 'screens/Search/DefaultSearch';
import Player from 'screens/Player';
import {enableScreens} from 'react-native-screens';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from 'redux/store';
import DefaultPlaylists from 'screens/Playlists/DefaultPlaylists';
import Informations from 'screens/More';
import Search from 'screens/Search';
import {createStackNavigator} from '@react-navigation/stack';
import SearchBar from './src/screens/Search/components/SearchBar';
enableScreens();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// let tabBarHeight = 0;
// export default function App() {
//   return (
//     <View
//       style={{
//         height: '100%',
//       }}>
//       <Provider store={store}>
//         <NavigationContainer>
//           <Tab.Navigator
//             screenOptions={({route}) => ({
//               tabBarIcon: ({focused, color, size}) => {
//                 let iconName;
//                 if (route.name === 'Playlists') {
//                   iconName = 'music';
//                 } else if (route.name === 'Search') {
//                   iconName = 'search';
//                 } else if (route.name === 'More') {
//                   iconName = 'ellipsis-h';
//                 }
//                 return <Icon name={iconName} size={30} color={color} />;
//               },
//             })}
//             tabBarOptions={{
//               activeTintColor: '#C82424',
//               inactiveTintColor: '#0063F8',
//               tabStyle: {
//                 backgroundColor: '#0C08C3',
//               },
//               showLabel: false,
//               keyboardHidesTabBar: true,
//               style: {
//                 position: 'absolute',
//               },

//             }}
//             style={{}}
//             initialRouteName={'Playlists'}>
//             <Tab.Screen name="Search" component={Search} />
//             <Tab.Screen name="Playlists" component={DefaultPlaylists} />
//             <Tab.Screen name="More" component={Informations} />
//           </Tab.Navigator>
//         </NavigationContainer>
//         <Player />
//       </Provider>
//     </View>
//   );
// }

const TabApp = () => {
  return (
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
          return <Icon name={iconName} size={27} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#C82424',
        inactiveTintColor: '#0063F8',
        tabStyle: {
          backgroundColor: '#0C08C3',
        },
        showLabel: false,
        keyboardHidesTabBar: true,
      }}
      initialRouteName={'Playlists'}>
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Playlists" component={DefaultPlaylists} />
      <Tab.Screen name="More" component={Informations} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="TabApp" component={TabApp} />
            <Stack.Screen name="SearchBar" component={SearchBar} />
          </Stack.Navigator>
        </NavigationContainer>
        <Player />
      </Provider>
    </View>
  );
}
