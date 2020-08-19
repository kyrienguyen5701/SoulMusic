import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View, Text, Image, Animated} from 'react-native';
import Video from "react-native-video";
import SeekBar from 'screens/Player/components/SeekBar';
import LinearGradient from 'react-native-linear-gradient';
import Controls from 'screens/Player/components/Controls';
import {useDispatch, useSelector} from 'react-redux';
import {createFavorite, deleteFavorite, getFavorites} from 'components/Data';
import Pause from 'screens/Player/components/Pause';
import Discard from 'screens/Player/components/Discard';
import Next from 'screens/Player/components/Next';
import Disk from 'screens/Player/components/Disk';

// try to use dispatch to update the state of the chosen song in redux
// fix on y position

const Player = () => {
    const {song, playlist} = useSelector(state => state.chosen)
    let audioElement = useRef(null);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        isLoading: false,
        paused: false,
        isLoop: false,
        isShuffle: false,
        isFavorite: false,
        visible: false,
        duration: 0,
        currentTime: 0,
        indexAtSource: -1,
        playedSongs: [],
        pendingSongs: [],
        selectedSong: 0,
        error: null,
    });
    const y = useRef(new Animated.Value(-400)).current;

    // initialize the playedSongs and pendingSongs when a song is clicked
    useEffect(() => {
        setState(prevState => {
            // console.log(playlist);
            return {
                ...prevState,
                indexAtSource: playlist.findIndex((element) => element.id === song.id),
                playedSongs: song ? [song] : [],
                pendingSongs: playlist.filter((element) => element.id !== song.id)
            }
        })
    }, [playlist])

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

    // duration and favorite state
    const getInfo = useCallback(
        (data) => {
            let getFavorite;
            getFavorites((source) => {
                console.log(source);
                if (source.findIndex((element) => element.id === state.playedSongs[state.selectedSong].id) === -1) {
                    getFavorite = false;
                }
                else {
                    getFavorite = true;
                }
                setState(prevState => {
                    return {
                        ...prevState,
                        isLoading: false,
                        isFavorite: getFavorite,
                        duration: Math.floor(data.duration)
                    }
                });
            })
        }, [state.playedSongs[state.selectedSong], state.isLoading]
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
                    isLoop: !prevState.isLoop
                }
            })
        }, [state.isLoop]
    )

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

    const setFavorite = useCallback(
        () => {
            if (state.isFavorite) {
                deleteFavorite(state.playedSongs[state.selectedSong])
            }
            else {
                createFavorite(state.playedSongs[state.selectedSong])
            }
            setState(prevState => {
                return {
                    ...prevState,
                    isFavorite: !prevState.isFavorite
                }
            })
        }, [state.playedSongs[state.selectedSong], state.isFavorite]
    )

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
                // dispatch(chosenSong(state.playedSongs[state.selectedSong], playlist));
            } else {
                audioElement.seek(0);
                setState(prevState => {
                    return {
                        ...prevState,
                        currentTime: 0
                    }
                });
            }
        }, [state.playedSongs[state.selectedSong], state.selectedSong]
    );

    const forward = useCallback(
        () => {
            if (state.pendingSongs.length > 0) {
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
                        pendingSongs: prevState.pendingSongs.filter((element) => element.id !== toBeNext.id),
                        selectedSong: prevState.selectedSong + 1
                    }
                }), 0);
                // dispatch(chosenSong(state.playedSongs[state.selectedSong], playlist));
            }
        }, [state.playedSongs[state.selectedSong], state.selectedSong,state.indexAtSource]
    );

    const forwardDisabled = state.selectedSong === playlist.length - 1;

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

    const discard = useCallback(
        () => {
            setState(prevState => {
                return {
                    ...prevState
                }
            })
        }, []
    )

    const slideUp = useCallback(
        () => {
            Animated.spring(y, {
                toValue: -700,
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
                toValue: -500,
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
        state.playedSongs.length > 0
            ? (
                <View>
                    <TouchableOpacity onPress={slideUp} style={{
                        position: 'absolute',
                        top: -600,
                        backgroundColor: '#030239',
                        flexDirection: 'row',
                        height: 150,
                        width: '100%',
                    }}>
                        <Disk
                            uri={`https://i.ytimg.com/vi/${state.playedSongs[state.selectedSong].id}/hqdefault.jpg`}
                        />
                        <Text numberOfLines={2}
                            style={{
                                lineHeight: 15,
                                color: '#ffffff',
                                marginLeft: -5,
                                width: 200,
                                padding: 20,
                                height:70,
                                fontSize:12
                            }}
                        >
                            {state.playedSongs[state.selectedSong].title}
                        </Text>
                        <Pause pause={pause} paused={state.paused} height={30} width={30}/>
                        {state.paused
                            ? <Discard discard={discard} style={{flex: 1}} />
                            : <Next forward={forward} forwardDisabled={forwardDisabled} />
                        }
                    </TouchableOpacity>
                    <Animated.View style={{
                        position: 'absolute',
                        transform: [
                            {
                                translateY: y
                            }
                        ]
                    }}>
                        <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
                            <View style={{
                                height: '100%',
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
                                    backgroundColor: "black",
                                    marginTop: 15
                                }}>
                                    <Video
                                        source={{uri: state.playedSongs[state.selectedSong].url}}
                                        ref={(ref) => {audioElement = ref}}
                                        playInBackground={true}
                                        resizeMode={'contain'}
                                        paused={state.paused}
                                        repeat={state.isLoop}
                                        onLoadStart={onLoadStart}
                                        onLoad={getInfo}
                                        onEnd={
                                            !state.isLoop &&
                                            state.indexAtSource === playlist.length - 1 ? pause : forward
                                        }
                                        onProgress={setTime}
                                        style={{
                                            width: "100%",
                                            height: 200,
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
                                        forwardDisabled={forwardDisabled}
                                        isLoop={state.isLoop}
                                        setLoop={setLoop}
                                        isShuffle={state.isShuffle}
                                        setShuffle={setShuffle}
                                        isFavorite={state.isFavorite}
                                        setFavorite={setFavorite}
                                    />
                                </View>
                            </View>
                        </LinearGradient>
                    </Animated.View>
                </View>

            ) : null
    )

}

export default Player;
