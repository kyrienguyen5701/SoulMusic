import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SongData from 'components/Song';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';

export const width_screen = Dimensions.get('window').width;

const BasicGenres = ['V-Pop', 'K-Pop', 'Pop', 'Blue'];

const Genre = (props) => {
  const navigation = useNavigation();
  let backgroundColor = '';

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 70,
        marginTop: 20,
      }}>
      {BasicGenres.map((item, index) => {
        if (index === 0) {
          backgroundColor = '#666EF7';
        } else if (index === 1) {
          backgroundColor = '#F57A8E';
        } else if (index === 2) {
          backgroundColor = '#F7A602';
        } else {
          backgroundColor = '#41D5A8';
        }
        return (
          <TouchableOpacity
            key={item}
            style={{
              width: '35%',
              height: 87,
              marginHorizontal: 10,
              marginVertical: 10,
              backgroundColor: backgroundColor,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Playlist', {item})}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Monoton-Regular',
                textShadowColor: 'rgba(0,0,0,0.25)',
                textShadowOffset: {width: 1, height: 4},
                textShadowRadius: 5,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Genre;
