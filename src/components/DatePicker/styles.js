import styled from 'styled-components/native';
import { Platform, StyleSheet, View, Text } from 'react-native';

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

export const styles = StyleSheet.create({
  dateInput: {
    height: 48,
    width: '100%',
    color: colors.mainInputTextColor,
    textAlign: 'left',
    alignItems: 'flex-start',
    paddingLeft: 17,
    borderWidth: 0,
    ...Platform.select({
      web: {
        lineHeight: 48,
      },
    }),
  },
  disabled: {},
  dateTouchBody: {
    height: 48,
    width: '100%',
  },
  dateIcon: {},
  placeholderText: {
    fontSize: 15,
    color: colors.mainInputPlaceholder,
  },
  dateText: {
    fontSize: 15,
    color: colors.mainInputTextColor,
  },
  datePickerCon: {},
  datePicker: {
    width: '100%',
    height: 48,
    backgroundColor: colors.mainInputBg,
    borderRadius: 8,
  },
  btnConfirm: {},
  btnTextConfirm: {
    color: colors.iosPanelConfirm,
  },
  btnCancel: {},
  btnTextCancel: {
    color: colors.iosPanelCancel,
  },
});
