import {StyleSheet, Text, View, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import HeaderAuthenScreen from '../Component/HeaderAuthenScreenComponent';
import LinearGradientView from '../Component/LinearGradientView';
import TextInputComponent from '../Component/TextInputComponent';
import ButtonComponent from '../Component/ButtonComponent';
import TypeSignInComponent from '../Component/TypeSignInComponent';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigation = useNavigation();
  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:2610/users/register', {
        name,
        email,
        password,
      });
      if (response.data.status == true) {
        ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT)
        navigation.navigate('Login');
      } else {
        ToastAndroid.show("Đăng ký không thành công", ToastAndroid.SHORT)

      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LinearGradientView style={styles.container}>
      <View style={{bottom: 220, right: 40}}>
        <View style={styles.header}>
          <HeaderAuthenScreen
            title="Welcome to"
            title2="create an account and Join us now!"
          />
        </View>
      </View>
      <TextInputComponent
        value={name}
        onChangeText={setname}
        style={styles.textInput}
        placeholder="User"
        icon={require('../assets/img/user.png')}></TextInputComponent>
      <TextInputComponent
        value={email}
        onChangeText={setemail}
        style={styles.textInput2}
        placeholder="Email"
        icon={require('../assets/img/email.png')}></TextInputComponent>
      <TextInputComponent
        value={password}
        onChangeText={setpassword}
        placeholder="Password"
        style={styles.textInput3}
        icon={require('../assets/img/password.png')}></TextInputComponent>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>forgot password</Text>
      </TouchableOpacity>
      <View style={styles.viewButton}>
        <ButtonComponent
          title="Sign Up"
          onPress={handleSignUp}></ButtonComponent>
      </View>
      <View style={styles.dontHaveAcc}>
        <Text style={styles.dontHaveAccText}>Already have an account</Text>
        <TouchableOpacity>
          <Text style={styles.buttonSignUp}> sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.typeSignIn}>
        <TypeSignInComponent text="Sign Up with:"></TypeSignInComponent>
      </View>
    </LinearGradientView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    top: 80,
    left: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput: {
    bottom: 80,
    right: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput2: {
    bottom: 50,
    right: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput3: {
    bottom: 20,
    right: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  forgotPassword: {
    bottom: 40,
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
    left: 110,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  viewButton: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dontHaveAcc: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dontHaveAccText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    left: 50,
  },
  buttonSignUp: {
    color: '#63D9F3',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    left: 50,
  },
  typeSignIn: {
    marginRight: 120,
    top: 100,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
