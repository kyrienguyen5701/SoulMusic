import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";

const DefaultPlaylists = () => {
    return (
        <View style={{
            backgroundColor: 'red',
            height: '100%',
        }}>
            <View style={{
                marginHorizontal: 16,
                marginVertical: 20
            }}>
                <View style={{
                    marginTop: 60,
                }}>
                    <Text style={{
                        fontSize: 40,
                    }}>Playlists</Text>
                </View>
                <View style={{
                    marginTop: 40,
                }}>
                    <Text style={{
                        fontSize: 20,
                    }}>Recently played</Text>
                </View>
                <View>

                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                        }}>Personal playlists</Text>
                        <Text style={{
                            fontSize: 12,
                        }}>Create playlist to organize your tracks</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity style={{
                            width: 20,
                            height: 20,
                            marginLeft: 12
                        }}>
                            <Image source={require('../../assets/import.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 20,
                            height: 20,
                            marginLeft: 12
                        }}>
                            <Image source={require('../../assets/plus.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                </View>
            </View>
        </View>

    );
}

export default DefaultPlaylists;
