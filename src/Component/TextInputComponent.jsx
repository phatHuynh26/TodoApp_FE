import { View, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';

interface CustomTextInputProps {
  icon?: ImageSourcePropType;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: any;
  placeholderTextColor?: string;
  fontSize?: number;
}

const TextInputComponent: React.FC<CustomTextInputProps> = ({
  icon = {icon},
  placeholder ,
  value,
  onChangeText,
  style,
  placeholderTextColor = 'gray',
  fontSize = 16,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.icon}
        source={icon}
      />
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 42,
    width: 358,
    paddingHorizontal: 10,
    borderRadius:5
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily:"Poppins-Regular",
    color:"black",
    height:42,
    top:5
  },
  icon: {
    width: 20,
    height: 24,
    marginRight: 10,
  },
});

export default TextInputComponent;
