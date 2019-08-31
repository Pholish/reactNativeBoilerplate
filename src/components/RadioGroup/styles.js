import styled from 'styled-components/native';
import {View, TouchableOpacity, Text} from 'react-native';

import colors from '../../constants/colors';

export const RadioContainer = styled(View)`
  height: ${p => p.height || 'auto'};
  width: ${p => p.width || '100%'};

  align-items: ${p => p.alignItems || 'flex-start'};
  justify-content: ${p => p.justifyContent || 'flex-start'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0'};
  margin-right: ${p => p.marginRight || '0'};
  margin-bottom: ${p => p.marginBottom || '0'};
  margin-left: ${p => p.marginRight || '0'};

  padding-top: ${p => p.paddingTop || '0'};
  padding-right: ${p => p.paddingRight || '0'};
  padding-bottom: ${p => p.paddingBottom || '0'};
  padding-left: ${p => p.paddingRight || '0'};
`;

export const StyledLabel = styled(Text)`
  color: ${p => p.color || colors.mainRadioGroupLabelColor};
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

export const GroupContainer = styled(View)`
  height: ${p => p.height || 'auto'};
  width: ${p => p.width || '100%'};

  flex-wrap: ${p => p.wrap || 'wrap'};
  flex-direction: ${p => p.direction || 'row'};
  align-items: ${p => p.alignItems || 'flex-start'};
  justify-content: ${p => p.justifyContent || 'space-between'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0'};
  margin-right: ${p => p.marginRight || '0'};
  margin-bottom: ${p => p.marginBottom || '0'};
  margin-left: ${p => p.marginRight || '0'};

  padding-top: ${p => p.paddingTop || '0'};
  padding-right: ${p => p.paddingRight || '0'};
  padding-bottom: ${p => p.paddingBottom || '0'};
  padding-left: ${p => p.paddingRight || '0'};
`;

export const RadioView = styled(View)`
  height: ${p => p.height || 'auto'};
  min-width: ${p => p.width || '80px'};

  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'flex-start'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '-8px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '-8px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '8px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '8px'};
`;

export const RadioButton = styled(TouchableOpacity)`
  background-color: ${p => p.bgColor};
  border-radius: ${p => (p.borderRadius ? p.borderRadius : '8px')};

  width: ${p => p.width || '100%'};
  height: ${p => p.height || '48px'};

  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '10px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '17px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '17px'};

  position: ${p => p.position || 'relative'};
  z-index: ${p => p.zIndex || '0'};

  ${p => (p.top || p.top === 0 ? `top: ${p.top}` : 'auto')};
  ${p => (p.right || p.right === 0 ? `right: ${p.right}` : 'auto')};
  ${p => (p.bottom || p.bottom === 0 ? `bottom: ${p.bottom}` : 'auto')};
  ${p => (p.left || p.left === 0 ? `left: ${p.left}` : 'auto')};
`;

export const RadioText = styled(Text)`
  color: ${p => p.color || colors.mainRadioGroupTextColor};
  font-size: ${p => p.fontSize || '18px'};
  font-weight: ${p => p.fontWeight || 'bold'};
  text-align: ${p => p.textAlign || 'left'};
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
