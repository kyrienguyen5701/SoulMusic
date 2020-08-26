import React, {useCallback, useEffect, useState} from 'react';
import {
    FlatList,
    Text,
    View,
    StyleSheet, ScrollView,
} from 'react-native';
import Recent from 'screens/Playlists/Recent';
import LinearGradient from 'react-native-linear-gradient';
import {getRecents, getFavorites} from 'components/Data';
import Favorite from "screens/Playlists/Favorite";

const DefaultPlaylists = () => {

  const [recents, setRecents] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [all, setAll] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(
      () => {
        getRecents(source => {
          const cloneSrc = JSON.parse(JSON.stringify(source));
          setRecents(Object.values(cloneSrc))
        })
          getFavorites(source => {
              const cloneSrc = JSON.parse(JSON.stringify(source));
              setFavorites(Object.values(cloneSrc))
          })
          fetch('https://5f22da500e9f660016d8893d.mockapi.io/SoulMusic/Api/Songs')
              .then((res) => {
                  return res.json();
              })
              .then((res) => {
                  setAll(res);
              })
              .catch((error) => console.log('Error: ', error))
      }, []
  )

  const updateRecents = useCallback(
      () => {getRecents(source => {
        const cloneSrc = JSON.parse(JSON.stringify(source));
        console.log("Noob UwU");
        setRecents(Object.values(cloneSrc))
        setRefresh(!refresh);
        // setTimeout(setRefresh(true), 500)
      })}, [refresh]
  )

  // const updateFavorites = useCallback(
  //     () => {getFavorites(source => {
  //       const cloneSrc = JSON.parse(JSON.stringify(source));
  //       console.log("Noob UwU");
  //       setRecents(Object.values(cloneSrc))
  //     })}, [recents]
  // )

  return (
    <LinearGradient
      colors={['#0C08C4', '#030239', '#000000']}
      style={{
        height: '100%',
        flex: 1,
        paddingLeft: 16,
      }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
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
              fontSize: 20,
              color: '#D87777',
            }}>
            Recently played
          </Text>
        </View>
        <View>
            {recents.length !== 0
                ? <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={recents.reverse()}
                    extraData={refresh}
                    horizontal={true}
                    renderItem={({item}) => {
                        return <Recent data={{song: item, playlist: all}} updateRecents={updateRecents} />;
                    }}
                />
                : <Text>Play a song to add to this queue</Text>
            }
        </View>
        <Text
          style={{
            marginTop: 40,
            fontSize: 20,
            color: '#D87777',
          }}>
          Favorite Songs
        </Text>
           <View style={styles.container}>
               {favorites.length !== 0
                   ? <FlatList
                       showsVerticalScrollIndicator={false}
                       keyExtractor={item => item.id}
                       data={favorites}
                       renderItem={({item}) => {
                           return <Favorite data={{song:item, playlist: favorites}} />
                       }}
                   />
                   : <Text>Save your favorite songs here</Text>
               }
          </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
  },
});

export default DefaultPlaylists;
