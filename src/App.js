/**
 * React Native X Boilerplate
 * https://github.com/Ahiho/ReactNativeX
 */
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import registerScreens from './screens';

const store = configureStore();
registerScreens(store, Provider);

const App = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'rnx.Home',
      title: 'ReactNativeX',
    },
  });
  return true;
};

export default App;
