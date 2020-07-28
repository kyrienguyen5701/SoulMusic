import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image} from "react-native";
import Video from "react-native-video";

const PlayerFullScreen = ({navigation, route}) => {
    const song = route.params;
    const [paused, setPaused] = useState(false)

    const [rate, setRate] = useState(1.0)
    console.log(song.id)

    return (
        <View style={{
            backgroundColor: 'red',
            height: '100%',
        }}>
            <View style={{
                marginHorizontal: 16,
                marginVertical: 20,
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Image source={require('assets/down.png')} />
                    <Text style={{
                        marginHorizontal: 12,
                        width: '80%',
                        textAlign: 'center',
                        fontSize: 20
                    }}>{song.title}</Text>
                    <TouchableOpacity>
                        <Image source={require('assets/timer.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "100%",
                    height: 100
                }}>
                    <Video
                        // source={{ uri: `https://www.youtube.com/embed/${song.id}`}}
                        style={{flex: 1}}
                        source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
                        paused={paused}
                        rate={rate}
                        playInBackground={true}
                        ignoreSilentSwitch={'ignore'}
                        playWhenInactive={true} // for iOS only
                        resizeMode={'contain'}

                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-evenly"
                }}>
                    <TouchableOpacity>
                        <Image source={require('assets/previous.png')} />
                    </TouchableOpacity>
                    {paused
                        ? <TouchableOpacity onPress={() => {
                            setPaused(!paused);
                        }}>
                            <Image source={require('assets/play-button.png')} />
                        </TouchableOpacity>
                        : <TouchableOpacity onPress={() => {
                            setPaused(!paused);
                        }}>
                            <Image source={require('assets/pause.png')} />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity>
                        <Image source={require('assets/next.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-evenly"
                }}>
                    <TouchableOpacity>
                        <Image source={require('assets/shuffle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/favorite.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/repeat.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/download.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/add.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

export default PlayerFullScreen;
