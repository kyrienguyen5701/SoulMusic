import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ShuffleButton from 'components/ShuffleButton';
import {Song} from 'components/Song';
import LinearGradient from 'react-native-linear-gradient';
import ListGenre from './ListGenre';

// @ts-ignore
const Playlist = ({navigation, route}) => {
  const genre = route.params;
  const [data, setData] = useState(Array<Song>());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.filter((song: Song) => song.genre == genre));
      })
      .catch((error) => console.log('Error: ', error))
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator />
      </View>
    );
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
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                marginVertical: 25,
                height: 30,
                width: '10%',
              }}
              onPress={() => navigation.goBack()}>
              <Image
                style={{marginLeft: 20}}
                source={require('assets/back.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 30,
                marginVertical: 20,
                textAlign: 'center',
                width: '80%',
                color: '#FFFFFF',
              }}>
              {genre}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              marginTop: -5,
              color: '#D87777',
            }}>
            Âm nhạc
          </Text>
        </View>
        <ShuffleButton title="Shuffle Play" />
        <View style={{marginTop: 20, marginHorizontal: 16, marginVertical: 20}}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <ListGenre song={item} playlist={data} />;
            }}
          />

          {/*TODO: write an onPress function for button*/}
        </View>
        {/*TODO: write an onPress function for button*/}
      </View>
    </LinearGradient>
  );
};

export default Playlist;
