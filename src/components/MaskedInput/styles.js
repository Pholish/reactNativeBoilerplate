import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

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

export const StyledInput = styled(TextInputMask)`
  background-color: ${p => p.bgColor || colors.mainInputBg};
  border-radius: ${p => p.borderRadius || '8px'};

  color: ${p => p.color || colors.mainInputTextColor};
  font-size: ${p => p.fontSize || '15px'};
  font-weight: ${p => p.fontWeight || '400'};

  height: ${p => p.height || '48px'};
  width: ${p => p.width || '100%'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '17px'};
`;
