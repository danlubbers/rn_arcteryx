import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  homescreenContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  searchText: {
    paddingLeft: 20,
    paddingBottom: 23,
  },

  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  heroWrapper: {
    width: 350,
    height: 500,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  titleText: {
    fontSize: 17,
    color: 'rgb(210, 210, 210)',
    paddingBottom: 20,
  },
});
