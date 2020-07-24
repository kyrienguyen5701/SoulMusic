import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ShuffleButton from 'components/ShuffleButton';

const PersonalPlaylist = ({navigation}) => {

    return (
        <View style={{
            backgroundColor: 'red',
            height: '100%',
        }}>
            <View style={{
                marginHorizontal: 16,
                marginVertical: 20,
                display: 'flex',
                alignItems: 'center'
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={require('assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{
                        marginHorizontal: 12,
                        width: '80%',
                        textAlign: 'center',
                        fontSize: 20
                    }}>Personal Playlist</Text>
                    <TouchableOpacity>
                        <Image source={require('assets/moreVertical.png')} />
                    </TouchableOpacity>
                </View>
                {/*TODO: write an onPress function for button*/}
                <ShuffleButton title='Shuffle Play'/>
            </View>
        </View>
    );
}

export default PersonalPlaylist;
