import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Image, TouchableOpacity, View, Text} from 'react-native';
import {Song} from 'components/Song';
import {useDispatch} from 'react-redux';
import {chosenSong} from 'redux/reducer';
import {createRecent} from 'components/Data';

const SearchResult = (props: {
    data: {
        song: Song;
        playlist: Array<Song>;
    };
    updateRecents: () => void;
}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        width: '85%',
        marginHorizontal: 23,
        marginBottom: 20,
      }}>
      <TouchableOpacity
        onPress={() => {
            dispatch(chosenSong(props.data));
            createRecent(props.data.song);
            props.updateRecents();
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${props.data.song.id}/hqdefault.jpg`,
            }}
            style={{
              width: 120,
              height: 90,
            }}
          />
          <View
            style={{
              paddingLeft: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                width: Dimensions.get('screen').width / 2,
                color: '#ffffff',
                opacity: 0.86,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {props.data.song.title}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: '#D87777',
                marginVertical: 10,
              }}>
              {props.data.song.channel}
            </Text>
          </View>
        </View>
  </TouchableOpacity>
  </View>
  );
};

export default SearchResult;
