import styled from 'styled-components/native';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../constants/colors';

export const ButtonStyled = styled(TouchableOpacity)`
  overflow: hidden;

  background-color: ${p => p.bgColor};
  border-radius: ${p => (p.borderRadius ? p.borderRadius : '50px')};

  width: ${p => p.width || '100%'};
  height: ${p => p.height || '56px'};

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

  ${p => (p.top || p.top === 0 ? `top: ${p.top}` : 'auto')};
  ${p => (p.right || p.right === 0 ? `right: ${p.right}` : 'auto')};
  ${p => (p.bottom || p.bottom === 0 ? `bottom: ${p.bottom}` : 'auto')};
  ${p => (p.left || p.left === 0 ? `left: ${p.left}` : 'auto')};
`;

export const TextStyled = styled(Text)`
  color: ${p => p.color || colors.mainButtonTextColor};
  font-size: ${p => p.fontSize || '18px'};
  font-family: ${p => p.fontFamily || 'Montserrat-Regular'};
  text-align: ${p => p.textAlign || 'left'};
  text-transform: ${p => p.textTransform || 'none'};
  letter-spacing: ${p => p.letterSpacing || '0'};

  z-index: 2;
`;

export const LinearGradienStyled = styled(LinearGradient)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;
