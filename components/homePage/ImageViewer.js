import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
 const imageSpot = placeholderImageSource;
  return (
    <Image  source={imageSpot} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
    borderRadius: 18,
  },
});