import { View, Text } from 'react-native';
import React from 'react';
import { defaultStyles } from '../constants/styles';

const Favorite = () => {
  return (
    <View style={defaultStyles}>
      <Text style={{ color: 'white' }}>Favorite</Text>
    </View>
  );
};

export default Favorite;
