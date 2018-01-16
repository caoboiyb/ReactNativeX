import { Navigation } from 'react-native-navigation';
import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
function registerScreens() {
  Navigation.registerComponent('rnx.PushedScreen', () => PushedScreen);
  return true;
}

export default registerScreens;
