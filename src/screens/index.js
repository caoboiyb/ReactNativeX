import { Navigation } from 'react-native-navigation';
import PushedScreen from './PushedScreen';
import homeScreen from './Home';

// register all screens of the app (including internal ones)
function registerScreens(store, Provider) {
  Navigation.registerComponent('rnx.Home', () => homeScreen, store, Provider);
  Navigation.registerComponent('rnx.PushedScreen', () => PushedScreen);
  return true;
}

export default registerScreens;
