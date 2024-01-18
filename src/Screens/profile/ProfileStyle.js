import {StyleSheet} from 'react-native';

const profile = StyleSheet.create({
  head: {
    height: '15%',
  },
  detail: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
  },
  main: {
    height: '85%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'white',
    marginTop: 40,
  },
  user: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 1,
    // borderColor: '#9391F3',
    marginTop: -40,
  },
  list: {
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 20,
    textAlignVertical: 'center',
  },
  txt: {
    textAlignVertical: 'center',
  },
});
export default profile;
