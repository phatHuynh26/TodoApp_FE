import {Image, StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Service1');
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000); // Chuyển sau 3 giây

    return () => clearTimeout(timer); // Dọn dẹp bộ nhớ khi component bị hủy
  }, []);
  return (
    <LinearGradient
      colors={['#1253AA', '#05243E']}
      style={styles.linearGradient}>
      <Image
        style={styles.img}
        source={require('../assets/img/IconDoIt.png')}></Image>
      <Text style={styles.title}>DO IT</Text>
        
      <Text style={styles.text}>V.1.0.0</Text>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  img: {
    height: 100,
    width: 100,
    top: 155,
    left: 143,
  },
  title: {
    fontFamily:"DarumadropOne-Regular",
    color:'white',
    fontSize:36,
    top:170,
    alignSelf:"center",
  },
  text: {
    fontFamily:"Poppins_Medium",
    color:'white',
    fontSize:20,
    alignSelf:"center",
    top:450
  },
});
