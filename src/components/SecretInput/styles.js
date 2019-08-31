import styled from 'styled-components/native';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

import colors from '../../constants/colors';

export const ViewStyled = styled(View)`
  height: ${p => p.height || 'auto'};
  width: ${p => p.width || '100%'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '10px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};
`;

export const StyledLabel = styled(Text)`
  color: ${p => p.color || colors.mainInputLabelColor};
  font-size: ${p => p.fontSize || '13px'};
  font-weight: ${p => p.fontWeight || '200'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '6px'};
  margin-left: ${p => p.marginRight || '17px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};
`;

export const InputView = styled(View)`
  position: relative;

  width: ${p => p.width || '100%'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};
`;

export const StyledInput = styled(TextInput)`
  background-color: ${p => p.bgColor || colors.mainInputBg};
  border-radius: ${p => p.borderRadius || '8px'};

  color: ${p => p.color || colors.mainInputTextColor};
  font-size: ${p => p.fontSize || '15px'};
  font-weight: ${p => p.fontWeight || '400'};

  height: ${p => p.height || '48px'};
  width: 100%;

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '56px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '17px'};
`;

export const StyledButton = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  width: 56px;

  justify-content: center;
  align-items: center;
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
