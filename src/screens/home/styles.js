import { isIphoneX } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export default {
  container: { height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' },
  logoPiece: { height: 63, width: 63 },
  questionMark: { height: 36.33, width: 21.8, position: 'absolute' },
  bigTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Montserrat',
    color: '#7E768E',
    lineHeight: 35,
    fontWeight: '900'
  },
  smallTitle: { textAlign: 'center', fontSize: 28, fontFamily: 'Roboto', color: '#615E67' },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        paddingBottom: isIphoneX() ? 20 : 40
      },
      android: {
        paddingBottom: 0
      },
    }),
  }
};
