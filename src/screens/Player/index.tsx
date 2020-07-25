import React from "react";
import {TouchableOpacity, View, Text, Image} from "react-native";
import {Song} from "components/Song";

const Player = (props: Song) => {

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
                    }}>{props.title}</Text>
                    <TouchableOpacity>
                        <Image source={require('assets/timer.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image source={{uri: `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`}} />
                    </TouchableOpacity>
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
                    <TouchableOpacity>
                        <Image source={require('assets/play-button.png')} />
                    </TouchableOpacity>
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

export default Player;
