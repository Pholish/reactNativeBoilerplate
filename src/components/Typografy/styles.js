import styled from 'styled-components/native';
import { Text } from 'react-native';

import colors from '../../constants/colors';

const TextStyled = styled(Text)`
  color: ${p => p.color || colors.mainText};
  font-size: ${p => p.fontSize || '13px'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '0px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '0px'};

  text-align: ${p => p.textAlign || 'left'};
`;

export default TextStyled;
