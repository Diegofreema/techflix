import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultStyles } from '../constants/styles';
import Container from '../constants/Container';

const Home = () => {
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text className="text-white">Home</Text>
      </View>
    </Container>
  );
};

export default Home;
