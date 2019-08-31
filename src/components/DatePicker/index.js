import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';
// import colors from '../../constants/colors';

import { ViewStyled, StyledLabel, styles } from './styles';

const datePicker = props => {
  const { error, touched, viewProps, labelProps } = props;
  let customStyles = { ...styles };

  if (error) {
    customStyles = {
      ...styles,
      dateInput: {
        ...styles.dateInput,
        ...styles.error,
      },
    };
  }

  return (
    <ViewStyled {...viewProps}>
      <StyledLabel {...labelProps} />

      <DatePicker
        style={styles.datePicker}
        customStyles={customStyles}
        showIcon={false}
        hideText={!touched}
        {...props}
      />
    </ViewStyled>
  );
};

datePicker.defaultProps = {
  mode: 'date',
  format: 'DD.MM.YYYY',
  maxDate: new Date(),
  confirmBtnText: 'Подтвердить',
  cancelBtnText: 'Закрыть',
  date: new Date(),
};

datePicker.propTypes = {
  mode: PropTypes.string,
  onDateChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  format: PropTypes.string,
  date: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  confirmBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  customStyles: PropTypes.object,
  touched: PropTypes.bool,
};

export default datePicker;
