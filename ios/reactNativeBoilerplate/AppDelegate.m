#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>
#import "RNSplashScreen.h"
#import <GoogleMaps/GoogleMaps.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//  If you want to enable Google Maps on iOS
 [GMSServices provideAPIKey:@"AIzaSyB7WB0NvAhdA1V_WSAjMdMoTD-vUG7-E6Y"]; // add this line using the api key obtained from Google Console
  
  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
  
  [RNSplashScreen show];
  return YES;
}

@end
