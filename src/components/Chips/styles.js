import styled from 'styled-components/native';
import {View, TouchableOpacity, Text} from 'react-native';

import colors from '../../constants/colors';

export const ChipsContainer = styled(View)`
  height: ${p => p.height || 'auto'};
  width: ${p => p.width || '100%'};

  flex-wrap: ${p => p.wrap || 'wrap'};
  flex-direction: ${p => p.direction || 'row'};
  align-items: ${p => p.alignItems || 'flex-start'};
  justify-content: ${p => p.justifyContent || 'flex-start'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0'};
  padding-right: ${p => p.paddingRight || '0'};
  padding-bottom: ${p => p.paddingBottom || '0'};
  padding-left: ${p => p.paddingRight || '0'};
`;

export const ChipView = styled(View)`
  height: ${p => p.height || 'auto'};
  width: auto;
  min-width: ${p => p.width || '30px'};

  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'flex-start'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '-8px'};

  padding: 0 8px;
`;

export const ChipButton = styled(TouchableOpacity)`
  background-color: ${p => p.bgColor};
  border-radius: ${p => (p.borderRadius ? p.borderRadius : '27px')};

  width: ${p => p.width || 'auto'};
  height: ${p => p.height || '30px'};

  flex-wrap: ${p => p.wrap || 'nowrap'};
  flex-direction: ${p => p.direction || 'row'};
  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '10px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '15px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => (p.checked ? p.paddingRight || '10px' : '15px')};

  position: ${p => p.position || 'relative'};
  z-index: ${p => p.zIndex || '0'};

  ${p => (p.top || p.top === 0 ? `top: ${p.top}` : 'auto')};
  ${p => (p.right || p.right === 0 ? `right: ${p.right}` : 'auto')};
  ${p => (p.bottom || p.bottom === 0 ? `bottom: ${p.bottom}` : 'auto')};
  ${p => (p.left || p.left === 0 ? `left: ${p.left}` : 'auto')};
`;

export const IconContainer = styled(View)`
  margin-right: 8px;
`;

export const ChipText = styled(Text)`
  color: ${p => p.color || colors.mainChipsTextColor};
  font-size: ${p => p.fontSize || '15px'};
  font-weight: ${p => p.fontWeight || 'bold'};
  text-align: ${p => p.textAlign || 'left'};
  line-height: 18px;
`;
