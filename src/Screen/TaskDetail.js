import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradientView from '../Component/LinearGradientView';
const TaskDetail = () => {
  const task = {
    name: 'ádsadsadsadsadsa',
    day: 111,
    time: '11111',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
    <LinearGradientView style={styles.container}>
      <Text style={styles.title}>Task Detail</Text>
      <View style={styles.taskView}>
        <Text style={styles.nameTask}>{task.name}</Text>
        <View style={styles.timeView}>
          <Text style={styles.day}>{task.day}</Text>
          <Text style={styles.time}> {task.time}</Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.time}>{task.description}</Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={{height: 20, width: 20, marginBottom: 5}}
            source={require('../assets/img/done.png')}></Image>
          <Text style={styles.buttonText}>done</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            style={{height: 20, width: 20, marginBottom: 5}}
            source={require('../assets/img/done.png')}></Image>
          <Text style={styles.buttonText}>done</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={{height: 20, width: 20, marginBottom: 5}}
            source={require('../assets/img/done.png')}></Image>
          <Text style={styles.buttonText}>done</Text>
        </TouchableOpacity>
      </View>
    </LinearGradientView>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginTop: 35,
    marginLeft: 30,
    color: '#fff',
  },
  taskView: {
    marginLeft: 37,
    marginTop: 50,
  },
  nameTask: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  day: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  time: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  descriptionView: {
    width: 331,
    height: 267,
    marginLeft: 37,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: 88,
    height: 71,
    backgroundColor: '#001F3F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFF',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
});
