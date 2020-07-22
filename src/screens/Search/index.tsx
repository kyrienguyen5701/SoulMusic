import React from 'react';
import DefaultSearch from 'screens/Search/DefaultSearch';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import QuerySearch from 'screens/Search/QuerySearch';
// import Trending from 'screens/Search/Trending';

const Stack = createStackNavigator();

const Search = () => {
    return (
        <View>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Search'>
                    <Stack.Screen name='Search' component={DefaultSearch}/>
                    {/*<Stack.Screen name='Query' component={QuerySearch}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Search'>
                    <Stack.Screen name='Search' component={DefaultSearch} />
                    {/*<Stack.Screen name='Trending' component={Trending} />*/}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default Search;
