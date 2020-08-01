import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
import {NavigationContext} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Song from '../../components/Song';


export const width_screen = Dimensions.get('window').width;
export const height_screen = Dimensions.get('window').height;
const DefaultSearch = (navigation) => {
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
          <Text
            style={{
              fontSize: 30,
              marginTop: 41,
              color: '#FFFFFF',
            }}>
            Search
          </Text>

          <View
            style={{
              marginTop: 28,
            }}>
            <TextInput
              style={styles.input}
              placeholder={'Search music'}
              placeholderTextColor="rgba(172, 28, 28, 0.9)"
            />
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Text style={styles.trend}>Trending in Vietnam</Text>
          </View>

          <View style={styles.container}>
            <View>
              <Text style={styles.top}>#1</Text>
              <Image
                style={styles.minImage}
                source={require('../../assets/maxresdefault.jpg')}
              />

              <View style={styles.component}>
                <Text style={styles.title}>
                  [MV] 마마무(MAMAMOO) - 고고베베(gogobebe)
                </Text>
                <Text style={styles.channel}>Sơn Tùng M-TP Official</Text>
              </View>
            </View>

            <Image
              style={{
                width: '100%',
                borderRadius: 10,
                opacity: 0.3,
              }}
              source={require('../../assets/lili.jpg')}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#0C08C3',
    opacity: 0.7,
    borderColor: 'rgba(0, 0, 0, 0.8)',
  },
  minImage: {
    width: 75,
    height: 50,
    marginLeft: (width_screen - 30)%2+50,
    marginTop: 22,
    position: 'absolute',
  },
  trend: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  top: {
    fontSize: 12,
    position: 'absolute',
    marginTop: 31,
    marginLeft: (width_screen - 30)%2+15,
    color: '#FFFFFF',
  },
  component: {
    width: 192,
    height: 76,
    marginLeft: 149,
    marginTop: 22,
    position: 'absolute',
    fontSize: 11,
  },
  title: {
    position: 'absolute',
    lineHeight: 15,
    color: '#FFFFFF',
    fontSize:11,
    marginLeft:(width_screen - 30)%2-8
  },
  channel: {
    marginTop: 30,
    color: '#D87777',
  },
});

export default DefaultSearch;
