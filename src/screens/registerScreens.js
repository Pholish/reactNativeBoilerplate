import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// COMMON
import * as screens from '../constants/screens';
import configureStore from '../store/configureStore';

// SCREENS IMPORTS
// COMMON SCREENS
import AppStart from './AppStart';

// Configurate store
const store = configureStore();

export default function registerScreens() {
  Navigation.registerComponentWithRedux(screens.APP_START, () => AppStart, Provider, store);
}
