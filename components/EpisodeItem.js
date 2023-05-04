import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const EpisodeItem = ({ episode, onPress }) => {
  return (
    <>
      <Pressable
        style={{ marginBottom: 10, paddingHorizontal: 12 }}
        onPress={() => onPress(episode)}
      >
        <View style={styles.row}>
          <Image source={{ uri: episode.poster }} style={styles.image} />
          <View style={styles.container}>
            <Text style={styles.title}>{episode.title}</Text>
            <Text style={styles.duration}>{episode.duration}</Text>
          </View>
          <AntDesign name="download" size={24} color="white" />
        </View>
        <Text style={styles.plot}>{episode.plot}</Text>
      </Pressable>
    </>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    color: 'white',
  },
  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },
  plot: {
    color: 'darkgrey',
  },
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
  },
});
