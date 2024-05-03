import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ imageSpot }) {
  return (
    <Image source={imageSpot} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 100,
    borderRadius: 18,
  },
});