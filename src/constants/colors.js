export const BLACK = '#000000';
export const WHITE = '#ffffff';
export const WHITE_LILAC = '#E4E8F4';
export const CORNFLOWER_BLUE = '#C6C6C6';
export const MYSTIC = '#EBEDF4';
export const TRANSPARENT = 'transparent';
export const SILVER_1 = '#C6C6C6';
export const SILVER_2 = '#C4C4C4';
export const BITTERSWEET = '#FF6666';
export const EMPEROR = '#515151';
export const DUSTY_GRAY = '#959595';
export const BLACK_75 = 'rgba(0,0,0,0.75)';
export const BLACK_60 = 'rgba(0,0,0,0.6)';
export const BLACK_50 = 'rgba(0,0,0,0.5)';
export const BLACK_25 = 'rgba(0,0,0,0.25)';

export const MIDNIGHT_EXPRESS_1 = '#141829';
export const MIDNIGHT_EXPRESS_2 = '#1C1E2E';
export const MELANZANE_40 = 'rgba(37,34,37,0.4)'; // #252225 (opacity: 0.4)
export const MELANZANE_60 = 'rgba(37,34,37,0.6)'; // #252225 (opacity: 0.6)
export const LUCKY_POINT_1 = '#212845';
export const LUCKY_POINT_2 = '#29304C';
export const BUNTING = '#2C324D';
export const EBONY = '#2E3036';
export const EAST_BAY_1 = '#565D76';
export const EAST_BAY_2 = '#484F67';
export const ECHO_BLUE = '#A5AECD';
export const HAWKES_BLUE = '#E7EAF4';
export const SOLITUDE = '#EDEFF5';
export const MEDIUM_RED_VIOLET = '#BC3081';
export const CRUSTA = '#F35D5B';
export const SUN = '#F47133';
export const MEDIUM_PURPLE = '#9153DE';
export const MEDIUM_SLATE_BLUE = '#6341EC';
export const PURPLE_HEART_1 = '#5A42D3';
export const PURPLE_HEART_2 = '#5034DD';
export const PURPLE_HEART_3 = '#5A39DD';
export const FREE_SPEECH_BLUE = '#4E61C1';
export const DODGER_BLUE = '#4985FE';
export const LIGHT_SEA_GREEN = '#1CBBC5';

// IOS PANEL
const iosPanel = {
  iosPanelConfirm: BLACK,
  iosPanelCancel: BITTERSWEET,
};

// MAIN
const main = {
  mainBg: WHITE,
  mainText: BLACK,
  mainTitle: BLACK,
  mainError: BITTERSWEET,
};

// MAIN HEADER
const mainHeader = {
  mainHeaderBg: WHITE,
  mainHeaderTextColor: BLACK,
  mainHeaderButtonColor: BLACK,
};

// MAIN INPUT
const mainInputs = {
  mainInputBg: MYSTIC,
  mainInputLabelColor: BLACK_60,
  mainInputTextColor: BLACK,
  mainInputPlaceholder: BLACK_50,
};

// MAIN BUTTONS
const mainButtons = {
  mainButtonBg: BLACK,
  mainButtonTextColor: WHITE,
  mainButtonDisabledBg: SILVER_1,
};

// SECONDARY BUTTONS
const simpleButtons = {
  simpleButtonBg: TRANSPARENT,
  simpleButtonTextColor: BLACK,
  simpleButtonDisabledTextColor: SILVER_1,
};

// MAIN SOCIAL BUTTONS
const socialButtons = {
  mainFacebook: FREE_SPEECH_BLUE,
  mainInstagram: [SUN, MEDIUM_RED_VIOLET, FREE_SPEECH_BLUE],
  mainGoogle: CRUSTA,
};

// MAIN RADIO GROUP
const mainRadioGroup = {
  mainRadioGroupLabelColor: BLACK_60,
  mainRadioGroupBg: MYSTIC,
  mainRadioGroupTextColor: BLACK,
  mainRadioGroupActiveBg: EMPEROR,
  mainRadioGroupActiveTextColor: WHITE,
  mainRadioGroupDisabledBg: SILVER_1,
};

// MAIN CHIPS
const mainChips = {
  mainChipsBg: SILVER_2,
  mainChipsTextColor: WHITE,
  mainChipsPrimaryActiveBg: BLACK,
  mainChipsPrimaryActiveTextColor: WHITE,
  mainChipsSecondaryActiveBg: DUSTY_GRAY,
  mainChipsSecondaryActiveTextColor: WHITE,
};

// MAIN SEARCH INPUT
const mainSearchInputs = {
  mainSearchInputsBg: TRANSPARENT,
  mainSearchInputsTextColor: BLACK,
  mainSearchInputsPlaceholder: BLACK_60,
  mainSearchInputsBorder: BLACK_25,
};

// COMMON SCREENS
export const commonScreens = {
  // AUTH TYPES SCREEN
  authTypesColors: {
    buttonSkipTextColor: ECHO_BLUE,
    buttonPhoneBg: TRANSPARENT,
    buttonPhoneTextColor: DODGER_BLUE,
    descriptionTextColor: MELANZANE_40,
    orTextColor: MELANZANE_60,
    footerButtonBg: WHITE_LILAC,
    footerButtonTextColor: BLACK,
  },
  // AUTH SOCIAL SCREEN
  authSocialColors: {
    buttonAllowBg: BLACK,
    buttonAllowTextColor: WHITE,
    buttonCancelBg: TRANSPARENT,
    buttonCancelTextColor: BLACK,
    iconBg: CORNFLOWER_BLUE,
  },
};

// USER SCREENS
export const userScreens = {
  // REGISTRATION PHONE SCREEN
  registrationPhoneColors: {
    descriptionTextColor: BLACK_60,
  },
  perferencesColors: {
    footerBg: MYSTIC,
  },
};

export default {
  ...iosPanel,
  ...main,
  ...mainHeader,
  ...mainInputs,
  ...mainButtons,
  ...simpleButtons,
  ...socialButtons,
  ...mainRadioGroup,
  ...mainChips,
  ...mainSearchInputs,
  ...commonScreens,
  ...userScreens,
};
