import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  content: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentArquives: {
    width: 300,
    borderRadius: 12,
    borderTopRightRadius: 100,
    backgroundColor: 'hsl(228, 56%, 26%)',
    padding: 30,
  },

  Icons: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  contentIcons: {
    padding: 15,
    marginRight: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12, 18, 44)',
  },

  contentDataStorage: {
    width: 300,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: 'hsl(228, 56%, 26%)',
    padding: 30,
  }

});