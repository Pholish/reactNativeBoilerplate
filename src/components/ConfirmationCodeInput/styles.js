import styled from 'styled-components/native';
import {View, Text, Platform, StyleSheet} from 'react-native';

import colors from '../../constants/colors';

export const ViewStyled = styled(View)`
  align-items: center;

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};
`;

export const HelperText = styled(Text)`
  color: ${p => (p.error ? colors.mainError : p.color || colors.mainText)};
  font-size: ${p => p.fontSize || '14px'};
  line-height: ${p => p.fontSize || '14px'};

  margin-top: ${p => p.marginTop || '10px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};

  text-align: ${p => p.textAlign || 'left'};

  width: 100%;
`;

export const styles = StyleSheet.create({
  inputWrapStyle: {
    height: 52,
    maxHeight: 52,
    marginTop: 30,
    margin: 0,
    padding: 0,
  },
  input: {
    height: 52,
    width: 52,
    borderRadius: 8,
    color: colors.mainInputTextColor,
    backgroundColor: colors.mainInputBg,
    ...Platform.select({
      web: {
        lineHeight: 52,
      },
    }),
  },
  error: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.mainError,
  },
});
