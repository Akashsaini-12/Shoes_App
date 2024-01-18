import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    // marginLeft:"32%",
    marginTop: '8%',
    fontWeight: '800',
    borderBottomWidth: 1,
    borderColor: 'white',
    marginHorizontal: 40,
  },
  input: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    height: 37,
    width: '90%',
    marginHorizontal: 20,
    paddingLeft: 10,
    paddingRight: 30,
  },
  form_container: {
    marginTop: 30,
  },
  upload: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  marginHorizontal:10
    // marginLeft: 10,
  },
  input1: {
   color:'white',
   fontSize:15,
   fontWeight:'600',
   textAlignVertical:'center'
  },
  input2: {
    backgroundColor: 'white',
    width: '30%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    paddingLeft: 10,
    height:30
  },
});
export default styles;
