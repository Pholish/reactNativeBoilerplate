### Project Info

- "react": "16.8.6",
- "react-native": "0.60.5",

### Setup

`yarn && react-native link && cd ios/ && pod install && cd ..`

`Open android studio. If you faced with issue related react-native-i18n, remove this field <uses-sdk android:minSdkVersion="16" /> and rebuild app`

`react-native run-ios`

`react-native run-android`

### Third Party Libraries

- "react-native-i18n": "^2.0.15",
- "react-native-linear-gradient": "^2.5.6",
- "react-native-navigation": "^3.1.2",
- "react-native-svg": "^9.6.2",
- "react-native-vector-icons": "^6.6.0",

### Some issues

`If you have issue like: Keystore file '/Project-Folder/android/app/debug.keystore' not found for signing config 'debug'. Download this file https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore (or from official template) and put debug.keystore in the android/app/ directory`
