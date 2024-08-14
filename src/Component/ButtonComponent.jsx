import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface ButtonItem {
  onPress: () => void;
  title: string;
  style: any;
}
const ButtonComponent: FC<ButtonItem> = ({onPress, title, style}) => {
  return (
    <View style={styles.container}> 
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
      
    },
    button: {
      backgroundColor: '#0EA5E9',
      padding: 10,
      borderRadius:10,
      width:348,
      height:46
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontFamily:"Poppins-Medium",
      alignSelf: 'center'
    },
  
});
