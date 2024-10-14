import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ColorScreen = ({ route }) => {
  const { color } = route.params;

  // Đường dẫn đến hình ảnh điện thoại theo màu đã chọn
  const getImageSource = (color) => {
    switch (color) {
      case 'blue':
        return require('./images/vs_blue.png');
      case 'red':
        return require('./images/vs_red.png');
      case 'teal':
        return require('./images/vs_teal.png');
      case 'white':
        return require('./images/vs_white.png');
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.title}>Điện thoại màu {color}</Text>
      <Image source={getImageSource(color)} style={styles.phoneImage} />
      <TouchableOpacity style={styles.buyButton} onPress={() => alert('Mua ngay!')}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  phoneImage: {
    width: 200,
    height: 400,
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#E3C000',
    padding: 15,
    borderRadius: 10,
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ColorScreen;
