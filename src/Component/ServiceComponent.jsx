import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';  
import LinearGradient from 'react-native-linear-gradient';
import { ImageSourcePropType } from 'react-native';

interface ItemProps {
  image: ImageSourcePropType;
  title: string;
  iconSlider: ImageSourcePropType;
  nextButton: ()=>void;
}

const ServiceComponent: FC<ItemProps> = ({
  image,
  title,
  iconSlider,
  nextButton
}) => {
  return (
    <LinearGradient
      colors={['#1253AA', '#05243E']}
      style={styles.linearGradient}>
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.footer}>
        <Image
          source={iconSlider}
          style={styles.iconSwitch}
        />
        <TouchableOpacity onPress={nextButton}>
          <Image
            source={require('../assets/img/next_button.png')}
            style={styles.nextButton}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ServiceComponent;

const styles = StyleSheet.create({
  linearGradient: {
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    height: 281,
    width: 279,
    top: 60,
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    height: 115,
    width: 276,
    top: 410,
    position: 'absolute',
    left:75
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 635.68,
    position: 'absolute',
  },
  iconSwitch: {
    height: 7,
    width: 91,
    left: 35,
  },
  nextButton: {
    height: 70,
    width: 70,
    left: 50,
  },
});
