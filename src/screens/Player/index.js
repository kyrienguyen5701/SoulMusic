import React, {useCallback, useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Image, Animated} from 'react-native';
import Video from "react-native-video";
import SeekBar from 'screens/Player/components/SeekBar';
import LinearGradient from 'react-native-linear-gradient';
import Controls from 'screens/Player/components/Controls';
import {useSelector} from 'react-redux';

const Player = () => {
    const {song, playlist} = useSelector(state => state.chosen)
    let audioElement = useRef(null);
    const [state, setState] = useState({
        isLoading: true,
        paused: false,
        isLooping: false,
        isShuffle: false,
        visible: false,
        duration: 0,
        currentTime: 0,
        indexAtSource: playlist.findIndex((element) => element.id === song.id),
        playedSongs: [song],
        pendingSongs: playlist.filter((element) => element.id != song.id),
        selectedSong: 0,
        error: null,
    });
    const y = new Animated.Value(1000)

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

    const slideUp = useCallback(
        () => {
            Animated.spring(y, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true
            }).start();
            setState(prevState => {
                return {
                    ...prevState,
                    visible: !prevState.visible
                }
            });
        }, [y, state.visible]
    )

    const slideDown = useCallback(
        () => {
            Animated.spring(y, {
                toValue: -1000,
                duration: 2000,
                useNativeDriver: true
            }).start();
            setState(prevState => {
                return {
                    ...prevState,
                    visible: !prevState.visible
                }
            });
        }, [y, state.visible]
    )

    return (
        {...playlist.length != 0
        ? (
            <View>
                {/*<TouchableOpacity onPress={slideUp} style={{*/}
                {/*    marginTop: 600,*/}
                {/*    backgroundColor: '#030239',*/}
                {/*    flexDirection: 'row',*/}
                {/*    height:300,*/}
                {/*    width: '100%',*/}
                {/*}}>*/}
                {/*    <Image*/}
                {/*        // style={styles.minImage}*/}
                {/*        source={{uri: `https://i.ytimg.com/vi/${state.playedSongs[state.selectedSong].id}/hqdefault.jpg`}}*/}
                {/*    />*/}
                {/*    <Text numberOfLines={2}*/}
                {/*          // style={styles.title}*/}
                {/*    >*/}
                {/*        {state.playedSongs[state.selectedSong].title}*/}
                {/*    </Text>*/}
                {/*    <TouchableOpacity style={{flex:1}}>*/}
                {/*        <Image*/}
                {/*            // style={styles.play}*/}
                {/*            source={require('assets/play-button.png')}*/}
                {/*        />*/}
                {/*    </TouchableOpacity>*/}
                {/*    <TouchableOpacity style={{flex:1}}>*/}
                {/*        <Image*/}
                {/*            // style={styles.close}*/}
                {/*            source={require('assets/x.png')}*/}
                {/*        />*/}
                {/*    </TouchableOpacity>*/}
                {/*</TouchableOpacity>*/}
                <Animated.View>
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
                                    <TouchableOpacity onPress={slideDown}>
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
                </Animated.View>
            </View>

        ) : null}
    )



}

export default Player;
