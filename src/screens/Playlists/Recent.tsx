import React from 'react';
import {Song} from "components/Song";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {chosenSong} from "redux/reducer";
import {createRecent, deleteRecent, getRecents} from "components/Data";
import {width_screen} from "components/Device";

const Recent = (props: {data: {
    song: Song,
    playlist: Array<Song>
}, updateRecents: () => void}) => {
    const dispatch = useDispatch();
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    dispatch(chosenSong(props.data));
                    createRecent(props.data.song);
                    props.updateRecents;
                }}
                // onLongPress={() => deleteRecent(props.song)}
                style={{
                    marginRight: 12,
                    paddingVertical: 12,
                }}
            >
                <Image
                    source={{uri: `https://i.ytimg.com/vi/${props.data.song.id}/hqdefault.jpg`}}
                    style={{
                        width: width_screen * .40,
                        height: width_screen * .23,
                        borderRadius:5
                    }}
                />
                <Text
                    numberOfLines={2}
                    style={{
                        width: width_screen * .40,
                        fontSize: 10,
                        color: '#D87777',
                        marginTop:6,
                        opacity:0.8
                    }}
                >
                    {props.data.song.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Recent;
