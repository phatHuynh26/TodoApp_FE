import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface LinearGradientProps {
  style?: any;
}

const LinearGradientView: FC<LinearGradientProps> = ({ style, children }) => {
  return (
     <LinearGradient
     colors={['#1253AA', '#05243E']}
     style={[styles.linearGradient, style]}>
       {children}
    </LinearGradient>

  );
};

export default LinearGradientView;

const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: '#1253AA', // Màu nền thay cho LinearGradient
    // flex: 1, // Đảm bảo View chiếm toàn bộ không gian
  },
});
