import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const IconComponent = ({ title, Icon, name, size, color, style }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Icon name={name} size={size} color={color} style={style} />
      <Text style={{ color: 'grey', fontWeight: '400' }}>{title}</Text>
    </View>
  );
};

export default IconComponent;

const styles = StyleSheet.create({});
