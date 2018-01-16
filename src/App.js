/**
 * React Native X Boilerplate
 * https://github.com/Ahiho/ReactNativeX
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

const App = () => {
  registerScreens();
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'rnx.PushedScreen',
      title: 'ReactNativeX',
    },
  });
  return true;
};

export default App;
