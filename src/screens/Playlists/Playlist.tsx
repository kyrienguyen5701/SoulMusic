import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ShuffleButton from 'components/ShuffleButton';
import SongData from 'components/Song';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';

const Playlist = ({navigation, route}) => {
  const genre = route.params;
  const data = SongData.filter((song) => song.genre == genre);
  console.log(data);

  return (
<LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
    <View
      style={{
        height: '100%',
      }}>
      <View
        style={{
          marginHorizontal: 16,
          marginVertical: 20,
          display: 'flex',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('assets/back.png')} />
          </TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 12,
              width: '80%',
              textAlign: 'center',
              fontSize: 20,
            }}>
            {genre}
          </Text>
          {/*<TouchableOpacity>*/}
          {/*    <Image source={require('assets/moreVertical.png')} />*/}
          {/*</TouchableOpacity>*/}
        </View>
        <View>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>{
              return <Recent
                  song={item}
                  playlist={data}
              />
            }}
          />
        </View>
        {/*TODO: write an onPress function for button*/}
        <ShuffleButton title="Shuffle Play" />
      </View>
    </View>
    </LinearGradient>
  );
};

export default Playlist;
