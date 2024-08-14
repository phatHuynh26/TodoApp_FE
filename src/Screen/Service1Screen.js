import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ServiceComponent from '../Component/ServiceComponent';
import { useNavigation } from '@react-navigation/native';
const Service1Screen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Service2');
  }
  return (
    <View>
      <ServiceComponent
        image={require('../assets/img/ServiceImg1.png')}
        iconSlider={require('../assets/img/slider.png')}
        title="Plan your tasks to do, that way you’ll stay organized and you won’t skip any"
        nextButton={handleNext}
      />
    </View>
  );
};

export default Service1Screen;

const styles = StyleSheet.create({});
