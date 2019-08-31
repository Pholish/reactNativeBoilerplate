import React from 'react';
import PropTypes from 'prop-types';

import colors from '../../constants/colors';
import CrossIcon from '../../assets/icons/cross.svg';
import CheckIcon from '../../assets/icons/check.svg';
import {
  ChipsContainer,
  ChipView,
  ChipButton,
  IconContainer,
  ChipText,
} from './styles';

function setTheme(type) {
  let theme;

  switch (type) {
    case 'all':
      theme = {
        bg: colors.mainChipsBg,
        text: colors.mainChipsTextColor,
        activeBg: colors.mainChipsPrimaryActiveBg,
        activeText: colors.mainChipsPrimaryActiveTextColor,
      };
      break;
    case 'onlySelected':
      theme = {
        bg: colors.mainChipsBg,
        text: colors.mainChipsTextColor,
        activeBg: colors.mainChipsSecondaryActiveBg,
        activeText: colors.mainChipsSecondaryActiveTextColor,
      };
      break;

    default:
      theme = {
        bg: colors.mainChipsBg,
        text: colors.mainChipsTextColor,
        activeBg: colors.mainChipsPrimaryActiveBg,
        activeText: colors.mainChipsPrimaryActiveTextColor,
      };
      break;
  }

  return theme;
}

function renderChip(chip, index, theme, type, restProps) {
  const {viewProps, buttonProps, textProps, selected, onChange} = restProps;
  const checked = selected.includes(chip.id);

  if (type === 'onlySelected' && !checked) {
    return;
  }

  let buttonBgColor = theme.bg;
  let textColor = theme.text;

  if (checked) {
    buttonBgColor = theme.activeBg;
    textColor = theme.activeText;
  }

  let InnerIcon = () => <CheckIcon width="16px" height="11px" />;

  if (type === 'onlySelected') {
    InnerIcon = () => <CrossIcon width="10px" height="10px" />;
  }

  const handleChip = () => {
    const selectedData = [...selected];

    if (checked) {
      const selectedIndex = selectedData.indexOf(chip.id);
      selectedData.splice(selectedIndex, 1);
    } else {
      selectedData.push(chip.id);
      selectedData.sort((a, b) => {
        return a - b;
      });
    }

    onChange(selectedData);
  };

  return (
    <ChipView key={`chip_${index}_${chip.id}`} {...viewProps}>
      <ChipButton
        {...buttonProps}
        checked={checked}
        onPress={() => handleChip(chip.id, checked)}
        bgColor={buttonBgColor}>
        {checked && (
          <IconContainer>
            <InnerIcon color={textColor} width="100%" />
          </IconContainer>
        )}
        <ChipText {...textProps} color={textColor}>
          {chip.value}
        </ChipText>
      </ChipButton>
    </ChipView>
  );
}

function chips({containerProps, data, type, ...restProps}) {
  const theme = setTheme(type);

  return (
    <ChipsContainer {...containerProps}>
      {data.map((chip, index) => {
        return renderChip(chip, index, theme, type, restProps);
      })}
    </ChipsContainer>
  );
}

chips.defaultProps = {
  containerProps: {},
  viewProps: {},
  buttonProps: {},
  textProps: {},
  type: 'all',
};

chips.propTypes = {
  data: PropTypes.array.isRequired,
  containerProps: PropTypes.object,
  buttonProps: PropTypes.object,
  viewProps: PropTypes.object,
  textProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default chips;
