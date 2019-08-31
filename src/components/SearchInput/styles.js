import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';

import SearchIcon from '../../assets/icons/search.svg';
import colors from '../../constants/colors';

export const ViewStyled = styled(View)`
  position: relative;

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

export const StyledInput = styled(TextInput)`
  background-color: ${p => p.bgColor || colors.mainSearchInputsBg};

  border-radius: ${p => p.borderRadius || '17px'};
  border-color: ${p => p.borderColor || colors.mainSearchInputsBorder};
  border-width: ${p => p.borderwidth || '2px'};

  color: ${p => p.color || colors.mainSearchInputsTextColor};
  font-size: ${p => p.fontSize || '15px'};
  font-weight: ${p => p.fontWeight || '400'};

  height: ${p => p.height || '37px'};
  width: ${p => p.width || '100%'};

  margin-top: ${p => p.marginTop || '0px'};
  margin-right: ${p => p.marginRight || '0px'};
  margin-bottom: ${p => p.marginBottom || '0px'};
  margin-left: ${p => p.marginRight || '0px'};

  padding-top: ${p => p.paddingTop || '0px'};
  padding-right: ${p => p.paddingRight || '44px'};
  padding-bottom: ${p => p.paddingBottom || '0px'};
  padding-left: ${p => p.paddingRight || '17px'};
`;

export const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  right: 14px;
  top: 10px;

  justify-content: center;
  align-items: center;
`;
