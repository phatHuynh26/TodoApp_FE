import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

interface ItemSignIn {
  text: string;
  style?: any;
}
const TypeSignInComponent: FC<ItemSignIn> = ({text, style}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          color: 'white',
        }}>
        {text}
      </Text>
      <TouchableOpacity>
        <Image
          style={{height: 50, width: 50, marginLeft: 40}}
          source={require('../assets/img/apple.png')}></Image>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={{height: 50, width: 50, marginLeft: 10}}
          source={require('../assets/img/gg.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default TypeSignInComponent;
