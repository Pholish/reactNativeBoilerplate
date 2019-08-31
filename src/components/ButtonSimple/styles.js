import styled from 'styled-components/native';
import {View, Text} from 'react-native';

import colors from '../../constants/colors';

export const ViewStyled = styled(View)`
  background-color: ${p => p.bgColor || colors.simpleButtonBg};

  width: ${p => p.width || 'auto'};
  height: ${p => p.height || 'auto'};

  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  align-self: ${p => p.alignSelf || 'auto'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};

  position: ${p => p.position || 'relative'};
  z-index: ${p => p.zIndex || '0'};

  border-top-left-radius: ${p => p.borderTopLeftRadius || '0px'};
  border-top-right-radius: ${p => p.borderTopRightRadius || '0px'};
  border-bottom-left-radius: ${p => p.borderBottomLeftRadius || '0px'};
  border-bottom-right-radius: ${p => p.borderBottomRightRadius || '0px'};

  ${p => (p.top || p.top === 0 ? `top: ${p.top}` : 'auto')};
  ${p => (p.right || p.right === 0 ? `right: ${p.right}` : 'auto')};
  ${p => (p.bottom || p.bottom === 0 ? `bottom: ${p.bottom}` : 'auto')};
  ${p => (p.left || p.left === 0 ? `left: ${p.left}` : 'auto')};
`;

export const TextStyled = styled(Text)`
  color: ${p => p.color || colors.simpleButtonTextColor};
  font-family: ${p => p.fontFamily || 'Montserrat-Semibold'};
  font-size: ${p => p.fontSize || '18px'};
  text-align: ${p => p.textAlign || 'left'};
  text-transform: ${p => p.textTransform || 'none'};
  letter-spacing: ${p => p.letterSpacing || '0'};
`;
