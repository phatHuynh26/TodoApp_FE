import {StyleSheet, Text, View, TouchableOpacity, Button,ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import HeaderAuthenScreen from '../Component/HeaderAuthenScreenComponent';
import LinearGradientView from '../Component/LinearGradientView';
import TextInputComponent from '../Component/TextInputComponent';
import ButtonComponent from '../Component/ButtonComponent';
import TypeSignInComponent from '../Component/TypeSignInComponent';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../reduce/UserAPI';

const SignInScreen = () => {
  const navigation = useNavigation();
  const Register = () => {
    {
      navigation.navigate('SignUp');
    }
  };

  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show(
        'Vui lòng nhập đầy đủ email và password',
        ToastAndroid.SHORT,
      );
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      ToastAndroid.show('Email không hợp lệ', ToastAndroid.SHORT);
      return;
    }
    if (password.length < 8) {
      ToastAndroid.show('Mật khẩu phải có ít nhất 8 ký tự', ToastAndroid.SHORT);
      return;
    }
    try {
      const body = {email, password};
      await dispatch(login(body));
      ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
      console.log(body);
    } catch (error) {
      ToastAndroid.show(
        'Đăng nhập thất bại. Vui lòng thử lại.',
        ToastAndroid.SHORT,
      );
      console.error('Login error:', error);
    }
  };
  return (
    <LinearGradientView style={styles.container}>
      <View style={{bottom: 220, right: 40}}>
        <View style={styles.header}>
          <HeaderAuthenScreen
            title="Welcome Back"
            title2="Have an other productive day !"
          />
        </View>
      </View>
      <TextInputComponent
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        icon={require('../assets/img/email.png')}></TextInputComponent>
      <TextInputComponent
        placeholder="Password"
        style={styles.textInput2}
        onChangeText={setPassword}
        value={password}
        icon={require('../assets/img/password.png')}></TextInputComponent>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>forgot password</Text>
      </TouchableOpacity>
      <View style={styles.viewButton}>
        <ButtonComponent
          title="Sign In"
          onPress={handleLogin}></ButtonComponent>
      </View>
      <View style={styles.dontHaveAcc}>
        <Text style={styles.dontHaveAccText}>don't have an account?</Text>
        <TouchableOpacity onPress={Register}>
          <Text style={styles.buttonSignUp}> sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.typeSignIn}>
        <TypeSignInComponent text="Sign In with:"></TypeSignInComponent>
      </View>
    </LinearGradientView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    top: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput: {
    bottom: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInput2: {
    bottom: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  forgotPassword: {
    bottom: 40,
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
    justifyContent: 'center',
    alignSelf: 'center',

    left: 110,
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
    justifyContent: 'center',
    alignSelf: 'center',
    left: 50,
    bottom: 1,
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
