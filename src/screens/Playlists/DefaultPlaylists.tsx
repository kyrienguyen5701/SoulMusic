import React, {useCallback, useEffect, useState, useMemo} from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import {SongData} from 'components/Song';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';
import {getFavorites, getRecents} from "components/Data";

const DefaultPlaylists = () => {
    const [recents, setRecents] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [all, setAll] = useState([]);

    useEffect(
        () => {
            getRecents(source => {
            const cloneSrc = JSON.parse(JSON.stringify(source));
            setRecents(Object.values(cloneSrc))
        })}, []
    )

    useEffect(
        () => {
            getFavorites(source => {
            const cloneSrc = JSON.parse(JSON.stringify(source));
            setRecents(Object.values(cloneSrc))
        })}, []
    )

    useEffect(
        () => {
            fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    setAll(res);
                })
                .catch((error) => console.log('Error: ', error))
        },[]
    )

    const updateRecents = useCallback(
        () => {getRecents(source => {
            const cloneSrc = JSON.parse(JSON.stringify(source));
            console.log("Noob UwU");
            setRecents(Object.values(cloneSrc))
        })}, [recents]
    )

    const updateFavorites = useCallback(
        () => {getFavorites(source => {
            const cloneSrc = JSON.parse(JSON.stringify(source));
            console.log("Noob UwU");
            setRecents(Object.values(cloneSrc))
        })}, [recents]
    )

  return (
    <LinearGradient colors={['#0C08C4', '#030239', '#000000']}>
      <View style={{
          height: '100%',
      }}>
          <View
              style={{
                  marginHorizontal: 16,
          }}>
          <View style={{
              marginTop: 41,
          }}>
              <Text style={{
                fontSize: 30,
                color: '#ffffff',
              }}>Playlist</Text>
          </View>
          <View style={{
              marginTop: 40,
          }}>
              <Text
                  style={{
                      fontSize: 17,
                      color: '#D87777',
              }}>Recently played</Text>
          </View>
          <View>
              <FlatList
                  data={recents.reverse()}
                  horizontal={true}
                  renderItem={({item}) => {
                      return <Recent data={{song: item, playlist: all}} updateRecents={updateRecents} />;
                  }}
              />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DefaultPlaylists;
