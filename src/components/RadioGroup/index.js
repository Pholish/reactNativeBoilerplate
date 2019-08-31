import React from 'react';
import PropTypes from 'prop-types';

import {
  GroupContainer,
  RadioContainer,
  RadioView,
  StyledLabel,
  RadioButton,
  RadioText,
  HelperText,
} from './styles';

import colors from '../../constants/colors';

const renderRadio = (item, index, value, props) => {
  const { radioViewProps, radioButtonProps, radioTextProps } = props;
  const { onPress, ...buttonProps } = radioButtonProps;

  let active = false;
  let buttonBgColor = colors.mainRadioGroupBg;
  let textColor = colors.mainRadioGroupTextColor;

  if (value === item.value) {
    active = true;
    buttonBgColor = colors.mainRadioGroupActiveBg;
    textColor = colors.mainRadioGroupActiveTextColor;
  }

  return (
    <RadioView {...radioViewProps} key={`radio_group_item_${index}_${item.id}_${item.value}`}>
      <RadioButton
        {...buttonProps}
        onPress={() => onPress(item.value)}
        bgColor={buttonBgColor}
        disabled={active}
      >
        <RadioText {...radioTextProps} color={textColor}>
          {item.label}
        </RadioText>
      </RadioButton>
    </RadioView>
  );
};

const radioGroup = props => {
  const {
    groupData,
    value,
    radioContainerProps,
    labelProps,
    groupContainerProps,
    radioViewProps,
    radioButtonProps,
    radioTextProps,
    helperText,
    error,
  } = props;

  return (
    <RadioContainer {...radioContainerProps}>
      <StyledLabel {...labelProps} />
      <GroupContainer {...groupContainerProps}>
        {groupData.map((groupItem, i) => {
          return renderRadio(groupItem, i, value, {
            radioViewProps,
            radioButtonProps,
            radioTextProps,
          });
        })}
      </GroupContainer>
      {!!helperText && error && <HelperText error={error}>{helperText}</HelperText>}
    </RadioContainer>
  );
};

radioGroup.defaultProps = {
  radioContainerProps: {},
  labelProps: {},
  groupContainerProps: {},
  radioViewProps: {},
  radioButtonProps: {},
  radioTextProps: {},
  children: '',
  helperText: '',
  error: false,
};

radioGroup.propTypes = {
  groupData: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
  radioContainerProps: PropTypes.object,
  labelProps: PropTypes.object,
  groupContainerProps: PropTypes.object,
  radioViewProps: PropTypes.object,
  radioButtonProps: PropTypes.object,
  radioTextProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

export default radioGroup;
