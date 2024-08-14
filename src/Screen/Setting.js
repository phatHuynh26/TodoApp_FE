import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradientView from '../Component/LinearGradientView';
import {logout} from '../reduce/Reducer';
import {useDispatch, useSelector} from 'react-redux';

const Setting = () => {
  const dispatch = useDispatch();
  return (
    <LinearGradientView style={{flex: 1}}>
      <Text style={styles.title}>Setting</Text>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.Button}>
          <Image
            style={styles.icon}
            source={require('../assets/img/redprofile.png')}></Image>
          <Text style={styles.Text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(logout())}
          style={styles.Button}>
          <Image
            style={styles.icon}
            source={require('../assets/img/logout.png')}></Image>
          <Text style={styles.Text}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* <Button title="logout" onPress={() => dispatch(logout())}></Button> */}
    </LinearGradientView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
    color: '#fff',
    top: 30,
  },
  buttonView: {
    top: 150,
    alignSelf: 'center',
  },
  Button: {
    flexDirection: 'row',
    height: 42,
    width: 226,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 20,
    shadowColor: '#000',
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    color: '#DC4343',
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});
