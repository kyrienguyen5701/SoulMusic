import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';

const DefaultSearch = () => {
    return (
        <View
            style={{
                backgroundColor: 'red',
                height: '100%',
            }}>
            <View
                style={{
                    marginHorizontal: 16,
                }}>
                <View
                    style={{
                        marginTop: 60,
                    }}>
                    <Text
                        style={{
                            fontSize: 40,
                        }}>
                        Search
                    </Text>
                </View>
                <SearchBar />
                <View
                    style={{
                        marginTop: 20,
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}>
                        Trending in Vietnam
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default DefaultSearch;
