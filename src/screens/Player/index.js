import React, {useCallback, useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Image} from "react-native";
import Video from "react-native-video";
import SeekBar from 'screens/Player/components/SeekBar';
import LinearGradient from 'react-native-linear-gradient';

const PlayerFullScreen = ({navigation, route}) => {
    const {song, playlist} = route.params;
    let audioElement = useRef(null);
    const [state, setState] = useState({
        isLoading: true,
        paused: false,
        isLooping: false,
        isFullScreen: false,
        status: null,
        quality: null,
        duration: 0,
        currentTime: 0,
        selectedSong: playlist.findIndex((element: Song) => element.id === song.id),
        error: null,
    });

    const onLoadStart = useCallback(
        (data) => {
            setState(prevState => {
                return {
                    ...prevState,
                    isLoading: true
                }
            })
        }, [state.isLoading]
    );

    const setDuration = useCallback(
        (data) => {
            setState(prevState => {
                return {
                    ...prevState,
                    isLoading: false,
                    duration: Math.floor(data.duration)
                }
            });
        }, [state.isLoading, state.duration]
    )

    const setTime = (data) => {
        setState(prevState => {
            return {
                ...prevState,
                currentTime: Math.floor(data.currentTime)
            }
        });
    }

    const setLoop = useCallback(
        () => {
            setState(prevState => {
                return {
                    ...prevState,
                    isLooping: !prevState.isLooping
                }
            })
        }, [state.isLooping]
    )

    const seek = useCallback(
        (time) => {
            console.log(playlist[state.selectedSong].id)
            time = Math.round(time);
            audioElement && audioElement.seek(time);
            setState(prevState => {
                return {
                    ...prevState,
                    currentTime: time,
                    paused: false
                }
            });
        }, []
    );

    const loop = useCallback(
        () => {
            if (state.isLooping) {
                audioElement.seek(0)
                setState(prevState => {
                    return {
                        ...prevState,
                        currentTime: 0,
                        paused: false
                    }
                })
            };
        }, [state.isLooping]
    )

    const back = useCallback(
        () => {
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
        }, [state.selectedSong]
    );

    const forward = useCallback(
        () => {
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
        }, [state.selectedSong]
    );

    const onSlidingStart = useCallback(
        () => {
            setState(prevState => {
                return {
                    ...prevState,
                    paused: true
                }
            })
        }, [state.paused]
    )

    const pause = useCallback(
        () => {
            setState(prevState => {
                return {
                    ...prevState,
                    paused: !prevState.paused
                }
            })
        }, [state.paused]
    )

    return (
        <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>

        <View style={{

            height: '100%',
        }}>
            <View style={{
                marginHorizontal: 16,
                marginVertical: 20,
                marginTop:35
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
                        fontSize: 20,
                        color:"#D87777",
                    }}>{playlist[state.selectedSong].title}</Text>
                    <TouchableOpacity>
                        <Image source={require('assets/timer.png')} />
                    </TouchableOpacity>
                   
                </View>
                <Text style={{
                    color:"#ffffff",
                    textAlign:'center',
                    opacity:0.7
                }}>{song.channel}</Text>
                <View style={{
                    width: "100%",
                    height: 200,
                    backgroundColor: "azure",
                    marginTop: 15
                }}>
                    <Video
                        source={{uri: playlist[state.selectedSong].url}}
                        ref={(ref) => {audioElement = ref}}
                        playInBackground={true}
                        paused={state.paused}
                        onLoadStart={onLoadStart}
                        onLoad={setDuration}
                        onEnd={state.isLooping ? loop : forward}
                        onProgress={setTime}
                        forwardDisabled={state.selectedSong === playlist.length - 1}
                        style={{
                            width: "100%",
                            height: 100,
                            flex: 1,
                            
                        }}
                    />
                </View>
                <View>
                    <SeekBar
                        trackLength={state.duration}
                        currentPosition={state.currentTime}
                        onSlidingStart={onSlidingStart}
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
                    <TouchableOpacity onPress={back}>
                        <Image source={require('assets/previous.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pause}>
                        {state.paused
                            ? <Image source={require('assets/play-button.png')} />
                            : <Image source={require('assets/pause.png')} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={forward}>
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
                    <TouchableOpacity onPress={setLoop}>
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
</LinearGradient>
    );
}

export default PlayerFullScreen;



