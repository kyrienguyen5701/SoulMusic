import React from "react";
import {FlatList, Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SongData from 'components/Song';
import Recent from "screens/Playlists/Recent";

export const width_screen = Dimensions.get('window').width;

const PlaylistButton = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                width: "40%",
                height: 24,
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: 'azure',
                borderRadius: 10
            }}
            onPress={() => navigation.navigate('Playlist', props.title)}
        >
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
}

const BasicGenres = ['V-Pop', 'K-Pop', 'Pop', 'Blue']

const DefaultPlaylists = () => {

    return (
        <View style={{
            backgroundColor: 'red',
            height: '100%',
        }}>
            <View style={{
                marginHorizontal: 16,
                marginVertical: 20
            }}>
                <View style={{
                    marginTop: 60,
                }}>
                    <Text style={{
                        fontSize: 40,
                    }}>Playlists</Text>
                </View>
                <View style={{
                    marginTop: 40,
                }}>
                    <Text style={{
                        fontSize: 20,
                    }}>Recently played</Text>
                </View>
                <View>
                    <FlatList
                        data={SongData.slice(0, 10)}
                        horizontal={true}
                        renderItem={({item})=>{
                            return <Recent
                                song={item}
                                playlist={SongData.slice(0, 10)}
                            />
                    }} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <FlatList
                        data={BasicGenres}
                        renderItem={({item}) => {
                            return <PlaylistButton title={item} />
                        }}
                        numColumns={2}
                    />
                </View>
                <View>
                </View>
            </View>
        </View>

    );
}

export default DefaultPlaylists;
