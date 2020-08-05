import React from 'react';
import {Song} from "components/Song";
import {useNavigation} from "@react-navigation/native";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {width_screen} from "screens/Playlists/DefaultPlaylists";

const Recent = (props: {
    song: Song,
    playlist: Array<Song>
}) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('PlayerFullScreen', props)}
                              style={{
                                  marginRight: 12,
                                  paddingVertical: 12,
                                  
                              }}>
                <Image source={{uri: `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`}}
                       style={{
                           width: width_screen * .40,
                           height: width_screen * .23,
                           borderRadius:5
                       }}/>
                <Text 
                 numberOfLines={2}
                style={{
                    width: width_screen * .40,
                    fontSize: 10,
                    color: '#D87777',
                    marginTop:6,
                   opacity:0.8
                }}>
                    {props.song.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Recent;
