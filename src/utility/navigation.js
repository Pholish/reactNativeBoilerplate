import { Navigation } from 'react-native-navigation';

import colors from '../constants/colors';

export const defaultOptions = {
  topBar: {
    noBorder: true,
    backButton: {
      color: colors.mainHeaderButtonColor,
    },
    background: {
      color: colors.mainHeaderBg,
    },
  },
};

const defaultSetRootOptions = {
  topBar: {
    visible: false,
  },
};

export function setRoot(screen, options = defaultSetRootOptions) {
  return Navigation.setRoot({
    root: {
      stack: {
        id: screen,
        children: [
          {
            component: {
              name: screen,
            },
          },
        ],
        options,
      },
    },
  });
}

export function pushScreen(componentId, screen, passProps = {}, options = {}) {
  Navigation.push(componentId, {
    component: {
      name: screen,
      id: screen,
      passProps: {
        prevScreen: componentId,
        ...passProps,
      },
    },
    options,
  });
}

export function popScreen(componentId) {
  Navigation.pop(componentId);
}

export function mergeOptions(componentId, options = {}) {
  Navigation.mergeOptions(componentId, options);
}
