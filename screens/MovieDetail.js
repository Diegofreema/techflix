import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import movie from '../assets/data/movie';
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
  Feather,
} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import IconComponent from '../components/IconComponent';
import EpisodeItem from '../components/EpisodeItem';
import VideoPlayer from '../components/VideoPlayer';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];
const MovieDetail = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );

  const seasonNames = movie.seasons.items.map((season) => season.name);
  return (
    <View style={{ marginBottom: 250 }}>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPress={setCurrentEpisode} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            <Pressable onPress={() => console.warn('play')} style={styles.play}>
              <FontAwesome name="play" size={15} color="black" />
              <Text
                style={{ color: 'black', marginLeft: 8, fontWeight: 'bold' }}
              >
                Play
              </Text>
            </Pressable>
            <Pressable
              onPress={() => console.warn('pause')}
              style={styles.pause}
            >
              <AntDesign name="download" size={24} color="white" />
              <Text
                style={{ color: 'white', marginLeft: 8, fontWeight: 'bold' }}
              >
                Download
              </Text>
            </Pressable>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ color: 'white' }}>{movie.plot}</Text>
            </View>
            <Text style={{ color: 'grey', fontWeight: '400' }}>
              Cast: {movie.cast}...more
            </Text>
            <Text style={{ color: 'grey', fontWeight: '400' }}>
              Creator: {movie.creator}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <IconComponent
                Icon={AntDesign}
                name={'plus'}
                size={30}
                color={'white'}
                title={'My List'}
              />
              <IconComponent
                Icon={Feather}
                name={'thumbs-up'}
                size={30}
                color={'white'}
                title={'Rate'}
              />
              <IconComponent
                Icon={Feather}
                name={'send'}
                size={30}
                color={'white'}
                title={'Share'}
              />
            </View>
            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) =>
                setCurrentSeason(movie.seasons.items[itemIndex])
              }
              style={{ color: 'white', width: 150 }}
              dropdownIconColor={'white'}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />

      {/*  */}
    </View>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  match: {
    color: '#59d419',
    fontWeight: 'bold',
    marginRight: 8,
  },
  year: {
    color: '#757575',
    marginRight: 8,
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    paddingHorizontal: 3,
    paddingBottom: 3,
    marginRight: 8,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },
  play: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
  },
  pause: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#383734',
    padding: 10,
    marginVertical: 5,
  },
});
