import React from 'react';
import {Song} from 'components/Song';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {chosenSong} from 'redux/reducer';
import {width_screen} from 'components/Device';
import {createRecent} from 'components/Data';

const ListGenre = (props: {
  data: {
    song: Song;
    playlist: Array<Song>;
  };
  updateRecents: () => void;
}) => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(chosenSong(props.data));
          createRecent(props.data.song);
          props.updateRecents();
        }}
        style={{
          marginRight: 12,
          marginHorizontal: 12,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.data.song.id}/hqdefault.jpg`,
          }}
          style={{
            width: width_screen * 0.3,
            height: width_screen * 0.2,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 15,
            marginBottom: 20,
          }}>
          <Text
            numberOfLines={2}
            style={{
              width: width_screen * 0.6,
              fontSize: 16,
              color: '#FFFFFF',
              opacity: 0.8,
            }}>
            {props.data.song.title}
          </Text>
          <Text style={{color: '#D87777', marginVertical: 5, fontSize: 12}}>
            {props.data.song.channel}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListGenre;
