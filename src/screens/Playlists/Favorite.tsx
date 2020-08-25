import {Image, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import React from "react";
import {Song} from "components/Song";
import {chosenSong} from "redux/reducer";
import {createRecent} from "components/Data";
import {useDispatch} from "react-redux";
import {width_screen} from "components/Device";

const Favorite = (props: {
    data: {
        song: Song;
        playlist: Array<Song>;
    }
}) => {
    const dispatch = useDispatch();
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    dispatch(chosenSong(props.data));
                    createRecent(props.data.song);
                }}
                style={{
                    height: 80,
                    borderRadius: 10,
                    marginVertical: 10,
                }}>
                <Image
                    source={{
                        uri: `https://i.ytimg.com/vi/${props.data.song.id}/hqdefault.jpg`,
                    }}
                    style={styles.minImage}
                />
                <View style={styles.component}>
                    <Text numberOfLines={2} style={styles.title}>
                        {props.data.song.title}
                    </Text>
                    <Text style={styles.channel}>
                        {props.data.song.channel}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Favorite;

const styles = StyleSheet.create({
    minImage: {
        width: 100,
        height: 80,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    trend: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    container: {
        marginRight: 15,
        marginTop: 20,
        borderRadius: 10,
        flex: 1,
    },
    component: {
        width: '60%',
        height: 76,
        marginLeft: 135,
        marginTop: 15,
        position: 'absolute',
        marginBottom: 100,
    },
    title: {
        position: 'absolute',
        lineHeight: 15,
        color: '#FFFFFF',
        fontSize: 13,
        marginLeft: ((width_screen - 30) % 2) - 8,
    },
    channel: {
        marginVertical: 33,
        color: '#D87777',
        fontSize: 11.5,
        marginLeft: ((width_screen - 30) % 2) - 8,
        opacity: 0.8,
    },
});
