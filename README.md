### Project Info

- "react": "16.8.6",
- "react-native": "0.60.5",

### Setup

`yarn && react-native link && cd ios/ && pod install && cd ..`

Open android studio. If you faced with issue related `react-native-i18n`, remove this field `<uses-sdk android:minSdkVersion="16" /> and rebuild app`

`react-native run-ios`

`react-native run-android`

### Third Party Libraries

- "react-native-i18n": "^2.0.15"
- "react-native-linear-gradient": "^2.5.6"
- "react-native-navigation": "^3.1.2"
- "react-native-svg": "^9.6.2"
- "react-native-vector-icons": "^6.6.0"
- "react-native-splash-screen": "^3.2.0"
- "react-native-maps": "0.25.0" `WORKS ONLY FOR IOS (ANDROID BROKEN)`

### Some issues

If you have issue like: `Keystore file '/Project-Folder/android/app/debug.keystore' not found for signing config 'debug'`. Download [debug.keystore file](https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore) (or from official template) and put debug.keystore in the `android/app/` directory
