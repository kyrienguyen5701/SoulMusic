import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Image} from "react-native";
import Video from "react-native-video";
// import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import SeekBar from 'screens/Player/components/SeekBar';


const PlayerFullScreen = ({navigation, route}) => {
    const song = route.params;
    const player = useRef(null);
    const [state, setState] = useState({
        isLoading: true,
        paused: false,
        isLooping: false,
        isFullScreen: false,
        status: null,
        quality: null,
        duration: 204,
        currentTime: 0,
        error: null,
    });

    const setDuration = (data) => {
        setState({duration: Math.floor(data.duration)});
    }

    const setTime = (data) => {
        this.setState({currentTime: Math.floor(data.currentTime)});
    }

    const seek = (time) => {
        time = Math.round(time);
        // this.refs.audioElement && this.refs.audioElement.seek(time);
        this.setState({
            currentPosition: time,
            paused: false,
        });
    }

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
                    height: 200,
                    backgroundColor: "azure",
                    marginTop: 12
                }}>
                    <Video
                        source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}
                        playInBackground={true}
                        paused={state.paused}
                        // onLoad={setDuration.bind(this)}    // Callback when video loads
                        // onProgress={setTime.bind(this)}
                        style={{
                            width: "100%",
                            height: 100,
                            flex: 1
                        }}
                    />
                </View>
                <View>
                    {/*<MediaControls*/}
                    {/*    duration={state.duration}*/}
                    {/*    isFullScreen={state.isFullScreen}*/}
                    {/*    isLoading={state.isLoading}*/}
                    {/*    mainColor={'#333'}*/}
                    {/*    onPaused={onPaused}*/}
                    {/*    onReplay={onReplay}*/}
                    {/*    onSeek={onSeek}*/}
                    {/*    onSeeking={onSeeking}*/}
                    {/*    playerState={state.playerState}*/}
                    {/*    progress={state.currentTime}*/}
                    {/*/>*/}
                    <SeekBar
                        trackLength={state.duration}
                        currentPosition={state.currentTime}
                        // onSlidingStart={() => setState({paused: true})}
                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: 50
                }}>
                    <TouchableOpacity>
                        <Image source={require('assets/previous.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setState(prevState => {
                        return {
                            ...prevState,
                            paused: !prevState.paused
                        }
                    })}>
                        {state.paused
                            ? <Image source={require('assets/play-button.png')} />
                            : <Image source={require('assets/pause.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/next.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-evenly",
                    marginTop: 100
                }}>
                    <TouchableOpacity>
                        <Image source={require('assets/shuffle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/favorite.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => {
                        setState({isLooping: !state.isLooping})
                    }}>
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



