import styled from 'styled-components/native';
import { KeyboardAvoidingView, SafeAreaView, View, ScrollView } from 'react-native';

import colors from '../../constants/colors';

const Wrapper = styled(View)`
  position: relative;

  background-color: ${p => p.bgColor || colors.mainBg};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};

  height: ${p => p.height || 'auto'};
  width: ${p => p.width || 'auto'};
  flex: ${p => p.flex || '1'};
  ${p => p.maxWidth && `width: ${p.maxWidth}`};

  justify-content: ${p => p.justifyContent || 'flex-start'};
  align-items: ${p => p.alignItems || 'center'};
`;

export const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.mainBg};
`;

export const StyledScrollView = styled(ScrollView)`
  flex: 1;
  width: 100%;
`;

export default Wrapper;
