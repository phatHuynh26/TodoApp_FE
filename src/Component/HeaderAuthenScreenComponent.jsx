import {View, Text, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';

interface HeaderItem {
  title: string;
  title2: string;
  style?:any
}
const HeaderAuthenScreen: FC<HeaderItem> = ({
  title ,
  title2,
  style
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/img/IconDoIt.png')}></Image>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.doIt}> DO IT</Text>
      </View>
      <Text style={styles.title2}>{title2}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
  },
  img: {
    top:30,
    height: 100,
    width: 100,
    left:120
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    top: 50,
  },
  title2: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    top: 50,
  },
  doIt: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'DarumadropOne-Regular',
    top: 47,
  },
});
export default HeaderAuthenScreen;
