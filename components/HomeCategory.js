import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
// firstCategory.title;
// firstCategory.lectures

const HomeCategory = ({ category }) => {
  const navigation = useNavigation();
  const navigationHAndler = () => {
    navigation.navigate('Details');
  };
  return (
    <Pressable onPress={navigationHAndler} style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image style={styles.imageStyle} source={{ uri: item.poster }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Pressable>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  imageStyle: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
});
