import React from "react";
import {FlatList, Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SongData, {Song} from 'components/Song';

export const width_screen = Dimensions.get('window').width;

const RecentlyPlayedSong = (props: Song) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Player', props)}
            style={{
                marginRight: 12,
                paddingVertical: 12
            }}>
                <Image source={{uri: `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`}}
                       style={{
                           width: width_screen * .45,
                           height: width_screen * .25
                       }}/>
                <Text style={{
                    width: width_screen * .45,
                    fontSize: 12.5
                }}>
                    {props.title + ' - ' + props.channel}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

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
                    <FlatList data={SongData}
                              horizontal={true}
                              renderItem={({item})=>{
                        return <RecentlyPlayedSong
                            id={item.id}
                            title={item.title}
                            channel={item.channel}
                        />
                    }} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                        }}>Personal playlists</Text>
                        <Text style={{
                            fontSize: 12,
                        }}>Create playlist to organize your tracks</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity style={{
                            width: 20,
                            height: 20,
                            marginLeft: 12
                        }}>
                            <Image source={require('../../assets/import.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 20,
                            height: 20,
                            marginLeft: 12
                        }}>
                            <Image source={require('../../assets/plus.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                </View>
            </View>
        </View>

    );
}

export default DefaultPlaylists;
