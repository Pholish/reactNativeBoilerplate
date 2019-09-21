# Project Info

- "react": "16.8.6",
- "react-native": "0.60.5",

# Setup

`yarn init-project`

Open android studio. If you faced with issue related `react-native-i18n`, remove this field `<uses-sdk android:minSdkVersion="16" />` and rebuild app

## Enabling Google Maps on iOS

If you want to enable Google Maps on iOS, obtain the Google API key and
edit your `AppDelegate.m` as follows:

```objc
+ #import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate
...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
+  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
...
```

The `[GMSServices provideAPIKey]` should be the **first call** of the method.

## Enabling Google Maps on Android

Specify your Google Maps API Key:

Add your API key to your manifest file (`android/app/src/main/AndroidManifest.xml`):

```xml
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>
```

> Note: As shown above, `com.google.android.geo.API_KEY` is the
> recommended metadata name for the API key. A key with this name can be
> used to authenticate to multiple Google Maps-based APIs on the Android
> platform, including the Google Maps Android API. For backwards
> compatibility, the API also supports the name
> `com.google.android.maps.v2.API_KEY`. This legacy name allows
> authentication to the Android Maps API v2 only. An application can
> specify only one of the API key metadata names. If both are specified,
> the API throws an exception.

Source: https://developers.google.com/maps/documentation/android-api/signup

## Now you can run your app

`react-native run-ios`

`react-native run-android`

# Third Party Libraries

- "react-native-i18n": "^2.0.15"
- "react-native-linear-gradient": "^2.5.6"
- "react-native-navigation": "^3.1.2"
- "react-native-svg": "^9.6.2"
- "react-native-vector-icons": "^6.6.0"
- "react-native-splash-screen": "^3.2.0"
- "react-native-maps": "0.25.0"

# Some issues

## Keystore file

If you have issue like: `Keystore file '/Project-Folder/android/app/debug.keystore' not found for signing config 'debug'`. Download [debug.keystore file](https://raw.githubusercontent.com/facebook/react-native/master/template/android/app/debug.keystore) (or from official template) and put debug.keystore in the `android/app/` directory

## Trouble with Google Play services

- Make sure that your emulator has Google Play (Go to Anroid studio -> Virtual Devices -> Check that you have icon in "Play Store" column)
- Click to bottom dots icon in the emulator
- Go to Google Play Tab and click Update

---

# Troubleshooting (react-native-maps)

## The map background is blank (Google Maps)

If google logo/markers/polylines etc are displayed but the map
background is otherwise blank, this is likely an API key issue. Verify
your API keys and their restrictions. Ensure the native `provideAPIKey`
call is the first line of `didFinishLaunchingWithOptions`.

Ensure also that the relevant Google APIs have been enabled for your
project from the URLs below:

- [Google Maps SDK Android](https://console.developers.google.com/apis/library/maps-android-backend.googleapis.com/)
- [Google Maps SDK iOS (if required)](https://console.developers.google.com/apis/library/maps-ios-backend.googleapis.com)

For reference, you may read the relevant issue reports: ([#118](https://github.com/react-native-community/react-native-maps/issues/118), [#176](https://github.com/react-native-community/react-native-maps/issues/176), [#684](https://github.com/react-native-community/react-native-maps/issues/684)).

## No map whatsoever

Ensure the map component and its container have viewport dimensions. An
example is below:

```jsx
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
...
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
```

## Build issues with Google Maps iOS Utils (iOS)

If your XCode project uses dynamic frameworks (e.g. you also have Swift
code in your project), you cannot install `Google-Maps-iOS-Utils` with
CocoaPods. The issue and a workaround for it has been documented
[here](https://github.com/googlemaps/google-maps-ios-utils/blob/master/Swift.md).

## Runtime errors on iOS (Apple Maps)

If you are trying to mount the map with the `GOOGLE_PROVIDER` during
runtime, but your build has been configured for the Apple Maps backend,
a runtime exception will be raised.

In addition, when using Apple Maps, some Google-only functionalities
have been disabled via runtime errors.

An exception will be raised if you try to use advanced features that
depend on the [Google Maps SDK for
iOS](https://github.com/googlemaps/google-maps-ios-utils). These include

- Making markers from KML files
- Heatmap rendering
- Marker clustering
- etc.

## Clearing caches

Run these commands to clean caches

```sh
# NPM
watchman watch-del-all
npm cache clean

# Android, if you encounter `com.android.dex.DexException: Multiple dex files define Landroid/support/v7/appcompat/R$anim`, then clear build folder.
cd android
./gradlew clean
cd ..
```

## When using XCode &lt;9

If you use Xcode with version less than 9 you may get `use of undeclared identifier 'MKMapTypeMutedStandard'` or `Entry, ":CFBundleIdentifier", Does Not Exist` errors. In this case you have to update your Xcode.

## When using Android studio

Make sure your Android studio is up to date and set up following the
[React Native
docs](https://facebook.github.io/react-native/docs/getting-started.html).

In particular, the following packages have to be installed:

- Extras / Google Play services
- Extras / Google Repository
- Android 6.0 (API 23) / Google APIs Intel x86 Atom System Image Rev. 19
- Android SDK Build-tools 23.0.3

## No native module found exception on Android

Be sure to have `new MapsPackage()` in your `MainApplication.java` :

```java
import com.airbnb.android.react.maps.MapsPackage;
...
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new MapsPackage()
        );
    }
```

## Android emulator issues

- When starting Android emulator, make sure you have enabled `Wipe user data`.
- If you are using Android Virtual Devices (AVD), ensure that `Use Host GPU` is checked in the settings for your virtual device.
- If using an emulator and the only thing that shows up on the screen is
  the message: `[APPNAME] won't run without Google Play services which are not supported by your device.`, you need to change the emulator
  CPU/ABI setting to a system image that includes Google APIs. These may
  need to be downloaded from the Android SDK Manager first.

  ### Google Play Services conflicting issues with other modules

  In case you have multiple modules using Google Play Services such as `react-native-onesignal`, Make sure to exclude all the Google Play Services dependencies from the modules and import all the Google Play Services dependencies for all the modules in the project-wide `build.gradle` file like the following example:

  ```
   implementation(project(':react-native-onesignal')){
        exclude group: 'com.google.android.gms'
    }

   implementation(project(':react-native-maps')){
        exclude group: 'com.google.android.gms'
    }
    implementation 'com.google.android.gms:play-services-base:12.0.1'
    implementation 'com.google.android.gms:play-services-basement:12.0.1'
    implementation 'com.google.android.gms:play-services-location:12.0.1'
    implementation 'com.google.android.gms:play-services-tasks:12.0.1'
    implementation 'com.google.android.gms:play-services-maps:12.0.1'
  ```

## Android build error: "Program type already present"

If you **don't** use project-wide properties as per instructions above (not making changes to global android/build.gradle) and encounter at build time "Program type already present" error - add those lines to your android/app/build.gradle in the dependencies section:

dependencies {
...
implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
  implementation "com.android.support:design:${rootProject.ext.supportLibVersion}"
implementation "com.android.support:support-v4:\${rootProject.ext.supportLibVersion}"
}

```

```
