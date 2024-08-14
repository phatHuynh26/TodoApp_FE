import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface IncompleteTask {
  name: string;
  date: string;
  time: number;
  style?: StyleProp<ViewStyle>;
}
const ImcompleteTaskComponent: FC<IncompleteTask> = ({
  name ,
  date ,
  time ,
  style,
}) => {
  return (
    <View
      style={{
        width: 375,
        height: 51,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop:10
        
      }}>
      <View style={{height: 29, width: 345, left: 25, top: 5}}>
        <Text
          style={{fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black'}}>
          {name}
        </Text>
        <View style={{flexDirection: 'row',}}>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Medium',
              color: 'black',
            }}>
            {date} | 
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Medium',
              color: 'black',marginLeft:2   
            }}>
            {time}pm
          </Text>
        </View>
      </View>
      <Image
        source={require('../assets/img/nextbuttonblue.png')}
        style={{height: 20, width: 20,top:15}}></Image>
    </View>
  );
};

export default ImcompleteTaskComponent;

const styles = StyleSheet.create({});
