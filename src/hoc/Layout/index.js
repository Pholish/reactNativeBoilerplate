import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container, Content} from 'native-base';

import Wrapper from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
    width: '100%',
  },
});

const layout = props => {
  const {safeAreaView, aware} = props;
  if (aware) {
    return (
      <Container>
        <SafeAreaView style={styles.container}>
          <Content contentContainerStyle={styles.content} {...props} />
        </SafeAreaView>
      </Container>
    );
  }

  if (safeAreaView) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.keyboardAvoidingView}
        {...props}>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Wrapper {...props} />
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
      {...props}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper {...props} />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

layout.defaultProps = {
  safeAreaView: true,
  aware: false,
};

layout.propTypes = {
  behavior: PropTypes.string,
  enabled: PropTypes.bool,
  safeAreaView: PropTypes.bool,
  aware: PropTypes.bool,
};

export default layout;
