/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // uncomment PROVIDER_GOOGLE import if want to use Google Maps

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { t } from '../../i18n/i18n';
import Layout from '../../hoc/Layout';

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
  },
  linearGradientContainer: {
    overflow: 'hidden',
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  helloWorld: {
    fontSize: 30,
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    position: 'relative',
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 32,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const App = () => {
  return (
    <Layout>
      <StatusBar barStyle="dark-content" />
      <Header />

      <View style={styles.sectionContainer}>
        <Text style={styles.helloWorld}>{t('helloWorld')}</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>React native maps</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      <View style={styles.linearGradientContainer}>
        <LinearGradient
          locations={[0, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#F47133', '#BC3081', '#4E61C1']}
          style={styles.linearGradient}
        >
          <Text style={styles.buttonText}>Linear Gradient</Text>
        </LinearGradient>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Vector Icons</Text>
        <Icon name="facebook" size={30} />
        <Icon.Button name="facebook" backgroundColor="#3b5998" size={30}>
          Button Vector Icons
        </Icon.Button>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step One</Text>
        <Text style={styles.sectionDescription}>
          Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come back
          to see your edits.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>See Your Changes</Text>
        <Text style={styles.sectionDescription}>
          <ReloadInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Debug</Text>
        <Text style={styles.sectionDescription}>
          <DebugInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
      </View>
      <LearnMoreLinks />
    </Layout>
  );
};

export default App;
