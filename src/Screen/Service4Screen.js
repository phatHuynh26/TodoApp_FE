import { View, Text } from 'react-native'
import React from 'react'
import ServiceComponent from '../Component/ServiceComponent';
import { useNavigation } from '@react-navigation/native';

const Service4Screen = () => {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Login');
  }
  return (
    <View>
      <ServiceComponent
        image={require('../assets/img/ServiceImg4.png')}
        iconSlider={require('../assets/img/slider3.png')}
        title="You informations are secure with us"
        nextButton={handleNext}

      />
    </View>
  )
}

export default Service4Screen