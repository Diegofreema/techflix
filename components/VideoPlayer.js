import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Video } from 'expo-av';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const VideoPlayer = ({ episode }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [loading, setLoading] = React.useState({});
  // const handleVideoRef = component => {
  //   const playbackObject = component;
  //         const source = {
  //             uri: episode.video
  //         };

  //         const initialStatus = {

  //         };

  //         playbackObject.loadAsync(source, initialStatus, false)
  // }

  React.useEffect(() => {
    if (!video) {
      return;
    }
    async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync(
        {
          uri: episode.video,
        },
        {},
        false
      );
    };
  }, [episode]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: 'cover',
        }}
        useNativeControls
        resizeMode={'contain'}
        isLooping
        usePoster={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          {
            <Feather
              name={status.isPlaying ? 'pause' : 'play'}
              size={24}
              color="white"
            />
          }{' '}
        </Button>
      </View> */}
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  buttons: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-30px, -30px)',
  },
});
