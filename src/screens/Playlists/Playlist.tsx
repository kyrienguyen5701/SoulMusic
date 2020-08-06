import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import ShuffleButton from 'components/ShuffleButton';
import SongData, { Song } from 'components/Song';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';

const Playlist = ({navigation, route}) => {
  const genre = route.params;
  const [data, setData] = useState(Array<Song>());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
          .then((res) => {return res.json()})
          .then((res) => {
              setData(res.filter((song: Song) => song.genre == genre));
          })
          .catch((error) => console.log("Error: ", error))
          .finally(() => {setLoading(false)})
  })

  if (loading) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator />
        </View>
    )
  }

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
            keyExtractor={(item, index) => index}
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
