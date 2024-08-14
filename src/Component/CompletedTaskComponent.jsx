import {StyleSheet, Text, View, Image} from 'react-native';
import React, {FC} from 'react';

interface CompletedTask {
  name: string;
  date: string;
  time: number;
  style: any;
}
const CompletedTaskComponent: FC<CompletedTask> = ({
  name,
  date,
  time,
  style,
}) => {
  return (
    <View
      style={{
        width: 375,
        height: 51,
        borderRadius: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 10,
      }}>
      <Image
        source={require('../assets/img/done.png')}
        style={{height: 22, width: 24, top: 13,left:5}}></Image>
      <View style={{height: 29, width: 320, left: 10, top: 5}}>
        <Text
          style={{fontSize: 14, fontFamily: 'Poppins-Medium', color: 'black'}}>
          {name}
        </Text>
        <View style={{flexDirection: 'row'}}>
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
              color: 'black',
              marginLeft: 2,
            }}>
            {time}pm
          </Text>
        </View>
      </View>
      <Image
        source={require('../assets/img/nextbuttonblue.png')}
        style={{height: 20, width: 20, top: 15}}></Image>
    </View>
  );
};

export default CompletedTaskComponent;

const styles = StyleSheet.create({});
