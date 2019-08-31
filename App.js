import {Navigation} from 'react-native-navigation';

import registerScreens from './src/screens/registerScreens';
import {setRoot, defaultOptions} from './src/utility/navigation';
import {APP_START} from './src/constants/screens';

// set Default Options for React Native Navigation

// Register screens
registerScreens();

// Start an App
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(defaultOptions);
  setRoot(APP_START);
});
