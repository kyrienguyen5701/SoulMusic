import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Song} from 'components/Song';
import {useNavigation} from '@react-navigation/native';

export const width_screen = Dimensions.get('window').width;

const DefaultSearch = (props: Song) => {
  const navigation = useNavigation();
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
        </View>
        <View
          style={{
            marginTop: 28,
          }}>
          <TextInput
            style={styles.input}
            placeholder={'Search music'}
            placeholderTextColor="#AC1C1C"
            
          />
        </View>

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 16,
          }}>
          <Text style={styles.trend}>Trending in Vietnam</Text>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={styles.top}>#1</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlayerFullScreen', props)}>
              <Image
                style={styles.minImage}
                source={{
                  uri: `https://i.ytimg.com/vi/${props.id}/hqdefault.jpg`,
                }}
              />

              <View style={styles.component}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.channel}>Sơn Tùng M-TP Official</Text>
              </View>
            </TouchableOpacity>
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
    opacity: 0.6,
    borderColor: '#F57A8E',
  },
  minImage: {
    width: 65,
    height: 45,
    marginLeft: ((width_screen - 30) % 2) + 45,
    marginTop: 15,
    position: 'absolute',
    borderRadius: 5,
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
    marginTop: 29,
    marginLeft: ((width_screen - 30) % 2) + 15,
    color: '#FFFFFF',
  },
  component: {
    width: 192,
    height: 76,
    marginLeft: 135,
    marginTop: 15,
    position: 'absolute',
  },
  title: {
    position: 'absolute',
    lineHeight: 15,
    color: '#FFFFFF',
    fontSize: 10,
    marginLeft: ((width_screen - 30) % 2) - 8,
  },
  channel: {
    marginTop: 30,
    color: '#D87777',
    fontSize: 9,
    marginLeft: ((width_screen - 30) % 2) - 8,
  },
});

export default DefaultSearch;
