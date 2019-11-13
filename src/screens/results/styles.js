import { isIphoneX } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

import { windowWidth } from '../../../utils/windowDimensions'
import { isIOS } from '../../../utils/OS-types'

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  result: {
    color: '#726393',
    fontSize: 24,
    textAlign: 'center'
  },
  btnContainer: {
    width: windowWidth - 40,
    marginTop: isIOS ? 60 : 100,
    ...Platform.select({
      ios: {
        paddingBottom: isIphoneX() ? 20 : 40
      },
      android: {
        paddingBottom: 40
      },
    }),
  },
  listContainer: {
    flex: 1,
    marginTop: isIOS ? 60 : 100,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#C4C4C4",
    backgroundColor:'white'
  },
  header: {
    marginVertical: 10
  },
  rowContainer: {
    backgroundColor:'white',
    width: windowWidth - 40,
    flexDirection:'row',
    minHeight: 50
  },
  rowFirstView: {
    flex: 3,
    borderColor: 'gray',
    borderWidth: .5,
    justifyContent:'center',
    padding: 20
  },
  rowSecondView: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: .5,
    justifyContent:'center',
    alignItems:'center'
  }
};
