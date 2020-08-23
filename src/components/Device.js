import {Dimensions, Platform} from 'react-native';

const width_screen = Dimensions.get('window').width;
const height_screen = Dimensions.get('window').height;
const platform = Platform.OS;

export {
    width_screen,
    height_screen,
    platform
}
