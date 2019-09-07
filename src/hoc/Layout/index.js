import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SplashScreen from 'react-native-splash-screen';

import Wrapper, {
  StyledSafeAreaView,
  StyledKeyboardAvoidingView,
  StyledScrollView,
} from './styles';

const layout = props => {
  const { keyboardProps, safeAreaView, aware, awareProps, scroll } = props;

  // Effects
  useEffect(() => {
    SplashScreen.hide();
  }, []); // DidMount

  if (aware) {
    return (
      <StyledSafeAreaView>
        <KeyboardAwareScrollView {...awareProps}>
          <Wrapper {...props} />
        </KeyboardAwareScrollView>
      </StyledSafeAreaView>
    );
  }

  if (safeAreaView) {
    return (
      <StyledSafeAreaView>
        <StyledKeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          {...keyboardProps}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {scroll ? (
              <StyledScrollView
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
              >
                <Wrapper {...props} />
              </StyledScrollView>
            ) : (
              <Wrapper {...props} />
            )}
          </TouchableWithoutFeedback>
        </StyledKeyboardAvoidingView>
      </StyledSafeAreaView>
    );
  }

  return (
    <StyledKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      {...keyboardProps}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Wrapper {...props} />
      </TouchableWithoutFeedback>
    </StyledKeyboardAvoidingView>
  );
};

layout.defaultProps = {
  keyboardProps: {},
  safeAreaView: true,
  aware: false,
  awareProps: {},
  scroll: true,
};

layout.propTypes = {
  keyboardProps: PropTypes.object,
  safeAreaView: PropTypes.bool,
  aware: PropTypes.bool,
  awareProps: PropTypes.object,
  scroll: PropTypes.bool,
};

export default layout;
