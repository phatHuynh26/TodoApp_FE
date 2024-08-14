import { View, Text } from 'react-native'
import React from 'react'
import ServiceComponent from '../Component/ServiceComponent';
import { useNavigation } from '@react-navigation/native';

const Service2Screen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Service3');
  }
  return (
    <View>
      <ServiceComponent
        image={require('../assets/img/ServiceImg2.png')}
        iconSlider={require('../assets/img/slider2.png')}
        title="Make a full schedule for the whole week and stay organized and productive all days"
        nextButton={handleNext}
      />
    </View>
  )
}

export default Service2Screen