import React, {useCallback, useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Image} from "react-native";
import Video from "react-native-video";
import SeekBar from 'screens/Player/components/SeekBar';
import LinearGradient from 'react-native-linear-gradient';
import Controls from 'screens/Player/components/Controls';

const PlayerFullScreen = ({navigation, route}) => {
    const {song, playlist} = route.params;
    let audioElement = useRef(null);
    const [state, setState] = useState({
        isLoading: true,
        paused: false,
        isLooping: false,
        isShuffle: false,
        isFullScreen: false,
        duration: 0,
        currentTime: 0,
        indexAtSource: playlist.findIndex((element) => element.id === song.id),
        playedSongs: [song],
        pendingSongs: playlist.filter((element) => element.id != song.id),
        selectedSong: 0,
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

    const seek = (time) => {
        console.log(playlist[state.indexAtSource].id)
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

    const setShuffle = useCallback(
        () => {
            setState(prevState => {
                return {
                    ...prevState,
                    isShuffle: !prevState.isShuffle
                }
            })
        }, [state.isShuffle]
    )

    const back = useCallback(
        () => {
            if (state.currentTime < 10 && state.selectedSong > 0) {
                audioElement && audioElement.seek(0);
                setTimeout(() => setState(prevState => {
                    return {
                        ...prevState,
                        currentTime: 0,
                        paused: false,
                        selectedSong: prevState.selectedSong - 1
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
            if (state.pendingSongs.length < playlist.length) {
                audioElement && audioElement.seek(0);
                setTimeout(() => setState(prevState => {
                    let indexAtSource = prevState.indexAtSource;
                    if(prevState.selectedSong === prevState.playedSongs.length - 1) {
                        indexAtSource = prevState.indexAtSource + 1;
                        if (prevState.isShuffle) {
                            let next = parseInt(Math.random() * prevState.pendingSongs.length);
                            indexAtSource = playlist.findIndex((element) => element.id === prevState.pendingSongs[next].id)
                            console.log(indexAtSource);
                        }
                    }
                    const toBeNext = playlist[indexAtSource];
                    return {
                        ...prevState,
                        currentTime: 0,
                        paused: false,
                        indexAtSource: indexAtSource,
                        playedSongs: prevState.playedSongs.concat([toBeNext]),
                        pendingSongs: prevState.pendingSongs.filter((element) => element.id != toBeNext.id),
                        selectedSong: prevState.selectedSong + 1
                    }
                }), 0);
            }
        }, [state.selectedSong,state.indexAtSource]
    );


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
                    }}>{state.playedSongs[state.selectedSong].title}</Text>
                    <TouchableOpacity>
                        <Image source={require('assets/timer.png')} />
                    </TouchableOpacity>

                </View>
                <Text style={{
                    color:"#ffffff",
                    textAlign:'center',
                    opacity:0.7
                }}>{state.playedSongs[state.selectedSong].channel}</Text>
                <View style={{
                    width: "100%",
                    height: 200,
                    backgroundColor: "azure",
                    marginTop: 15
                }}>
                    <Video
                        source={{uri: state.playedSongs[state.selectedSong].url}}
                        ref={(ref) => {audioElement = ref}}
                        playInBackground={true}
                        paused={state.paused}
                        repeat={state.isLooping}
                        onLoadStart={onLoadStart}
                        onLoad={setDuration}
                        onEnd={state.indexAtSource === playlist.length - 1 ? pause : forward}
                        onProgress={setTime}
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
                    <Controls
                        paused={state.paused}
                        pause={pause}
                        back={back}
                        forward={forward}
                        forwardDisabled={state.selectedSong === playlist.length - 1}
                        isLooping={state.isLooping}
                        setLoop={setLoop}
                        isShuffle={state.isShuffle}
                        setShuffle={setShuffle}
                    />
                </View>

            </View>
        </View>
</LinearGradient>
    );
}

export default PlayerFullScreen;



