


import React, { Component, StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';


// This needs a much better name
class DufinePhoto extends Component {
  constructor(props) {
    super(props);
    // dont think i need this
  }


  render() {
    const { photo } = this.props;

    return (
      <View style={styles.photoContainer}>
        <Image source={{ uri: photo.data, scale:1 }} style={styles.photo} />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  photoContainer: {
    marginRight: 20,
    paddingTop: 2,
    flexDirection: 'row',
    backgroundColor: "#fff"
  },
  photo: {
    backgroundColor: 'gray',
    width: 90,
    height: 90,
    margin: 1,
  },
});

export default DufinePhoto;
