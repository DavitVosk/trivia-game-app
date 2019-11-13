import { isIphoneX } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

import { windowWidth, windowHeight } from '../../../utils/windowDimensions'
import { isIOS } from '../../../utils/OS-types'

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer:{
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 30,
    ...Platform.select({
      ios: {
        paddingBottom: isIphoneX() ? 20 : 40
      },
      android: {
        paddingBottom: 40
      },
    }),
  },
  loadingContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardStyle: {
    position: 'absolute',
    width: windowWidth
  },
  cardsListContainer: {
    flex: 1,
    marginTop: isIOS ? 60 : 100
  },
  category: {
    color:'#BCBCBC',
    fontSize:18,
    textAlign:'center'
  },
  question: {
    color:'#726393',
    fontSize:24,
    textAlign:'center'
  },
  cardContainer: {
    height: windowHeight/2,
    width: windowWidth - 60,
    alignItems:'center',
    backgroundColor:'#fff',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: .5,
    borderRadius: 10,
    borderColor: "#C4C4C4",
    padding: 10
  },
  questionContainer: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
};
