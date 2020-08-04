import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Image} from "react-native";
import Video from "react-native-video";
import SeekBar from 'screens/Player/components/SeekBar';


const PlayerFullScreen = ({navigation, route}) => {
    const {song, playlist} = route.params;
    let audioElement = useRef(null);
    const [state, setState] = useState({
        isLoading: true,
        paused: false,
        isLooping: false,
        isFullScreen: false,
        isShuffle: false,
        status: null,
        quality: null,
        duration: 0,
        currentTime: 0,
        selectedSong: playlist.findIndex((element: Song) => element.id === song.id),
        error: null,
    });

    const onLoadStart = (data) => {
        setState(prevState => {
            return {
                ...prevState,
                isLoading: true
            }
        })
    }

    const setDuration = (data) => {
        setState(prevState => {
            return {
                ...prevState,
                isLoading: false,
                duration: Math.floor(data.duration)
            }
        });
    }

    const setTime = (data) => {
        setState(prevState => {
            return {
                ...prevState,
                currentTime: Math.floor(data.currentTime)
            }
        });
    }

    const seek = (time) => {
        time = Math.round(time);
        audioElement && audioElement.seek(time);
        setState(prevState => {
            return {
                ...prevState,
                currentTime: time,
                paused: false
            }
        });
    }

    const onBack = () => {
        if (state.currentTime < 10 && state.selectedSong > 0) {
            audioElement && audioElement.seek(0);
            setState(prevState => {
                return {
                    ...prevState,
                    isChanging: true
                }
            });
            setTimeout(() => setState(prevState => {
                return {
                    ...prevState,
                    currentTime: 0,
                    paused: false,
                    duration: 0,
                    isChanging: false,
                    selectedSong: prevState.selectedSong - 1,
                }
            }), 0);
        } else {
            audioElement.seek(0);
            setState(prevState => {
                return {
                    ...prevState,
                    currentTime: 0
                }
            });
        }
    }

    const onForward = () => {
        if (state.selectedSong < playlist.length - 1) {
            audioElement && audioElement.seek(0);
            setState(prevState => {
                return {
                    ...prevState,
                    isChanging: true
                }
            });
            setTimeout(() => setState(prevState => {
                return {
                    ...prevState,
                    currentTime: 0,
                    paused: false,
                    isChanging: false,
                    selectedSong: prevState.selectedSong + 1,
                }
            }), 0);
        }
    }

    console.log(playlist[state.selectedSong].id);

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
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={require('assets/down.png')} />
                    </TouchableOpacity>
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
                        source={{uri: playlist[state.selectedSong].url}}
                        ref={(ref) => {audioElement = ref}}
                        playInBackground={true}
                        paused={state.paused}
                        onLoadStart={onLoadStart}
                        onLoad={setDuration}
                        onEnd={onForward}
                        onProgress={setTime}
                        forwardDisabled={state.selectedSong === playlist.length - 1}
                        style={{
                            width: "100%",
                            height: 100,
                            flex: 1
                        }}
                    />
                </View>
                <View>
                    <SeekBar
                        trackLength={state.duration}
                        currentPosition={state.currentTime}
                        onSlidingStart={() => setState(prevState => {
                            return {
                                ...prevState,
                                paused: true
                            }
                        })}
                        onSeek={seek}
                    />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginTop: 50
                }}>
                    <TouchableOpacity onPress={onBack}>
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
                    <TouchableOpacity onPress={onForward}>
                        <Image source={require('assets/next.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-evenly",
                    marginTop: 100
                }}>
                    <TouchableOpacity onPress={() => {
                        setState(prevState => {
                            return {
                                ...prevState,
                                isShuffle: !prevState.isShuffle
                            }
                        })
                    }}>
                        <Image source={require('assets/shuffle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('assets/favorite.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => {
                        setState(prevState => {
                            return {
                                ...prevState,
                                isLooping: !prevState.isLooping
                            }
                        })
                        audioElement.seek(0)
                    }}>
                        <Image source={require('assets/repeat.png')}
                               style={{
                                   tintColor: state.isLooping ? 'green' : 'white'
                               }}
                        />
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



