import styled from 'styled-components/native';
import { View } from 'react-native';

const ViewStyled = styled(View)`
  background-color: ${p => p.bgColor || 'transparent'};

  width: ${p => p.width || '100%'};
  height: ${p => p.height || 'auto'};
  ${p => {
    return (
      p.maxWidth &&
      p.paddingRight &&
      p.paddingLeft &&
      `max-width: ${p.maxWidth + p.paddingRight + p.paddingLeft}`
    );
  }};

  align-items: ${p => p.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'flex-start'};
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

export default ViewStyled;
