import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ASSETS
import EyeOff from '../../assets/icons/eye-off.svg';
import EyeOn from '../../assets/icons/eye-on.svg';

// STYLES
import {
  ViewStyled,
  StyledLabel,
  InputView,
  StyledInput,
  StyledButton,
  HelperText,
} from './styles';

class SecretIcon extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState(prevState => {
      return { ...prevState, show: !prevState.show };
    });
  };

  render() {
    const { show } = this.state;
    const { viewProps, labelProps, inputProps, helperText, error } = this.props;

    return (
      <ViewStyled {...viewProps}>
        <StyledLabel {...labelProps} />
        <InputView {...inputProps}>
          <StyledInput {...inputProps} secureTextEntry={!show} />
          <StyledButton onPress={this.handleShow}>{show ? <EyeOn /> : <EyeOff />}</StyledButton>
        </InputView>
        {!!helperText && error && <HelperText error={error}>{helperText}</HelperText>}
      </ViewStyled>
    );
  }
}

SecretIcon.defaultProps = {
  viewProps: {},
  labelProps: {},
  inputProps: {},
  helperText: '',
  error: false,
};

SecretIcon.propTypes = {
  viewProps: PropTypes.object,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

export default SecretIcon;
