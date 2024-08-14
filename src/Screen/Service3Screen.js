import { View, Text } from 'react-native'
import React from 'react'
import ServiceComponent from '../Component/ServiceComponent';
import { useNavigation } from '@react-navigation/native';

const Service3Screen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Service4');
  }
  return (
    <View>
      <ServiceComponent
        image={require('../assets/img/ServiceImg3.png')}
        iconSlider={require('../assets/img/slider2.png')}
        title="create a team task, invite people and manage your work together"
        nextButton={handleNext}

      />
    </View>
  )
}

export default Service3Screen