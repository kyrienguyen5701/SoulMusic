import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SongData} from 'components/Song';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';

export const width_screen = Dimensions.get('window').width;

const BasicGenres = ['V-Pop', 'K-Pop', 'Pop', 'Blue'];

const DefaultPlaylists = () => {
  return (
    <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
      <View
        style={{
          height: '100%',
        }}>
        <View
          style={{
            marginHorizontal: 16,
          }}>
          <View
            style={{
              marginTop: 41,
            }}>
            <Text
              style={{
                fontSize: 30,
                color: '#ffffff',
              }}>
              Playlist
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
            }}>
            <Text
              style={{
                fontSize: 17,
                color: '#D87777',
              }}>
              Recently played
            </Text>
          </View>
          <View>
            <FlatList
              data={SongData.slice(0, 10)}
              horizontal={true}
              renderItem={({item}) => {
                return <Recent song={item} playlist={SongData.slice(0, 10)} />;
              }}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DefaultPlaylists;
