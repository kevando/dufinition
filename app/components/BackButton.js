import React, { StyleSheet, Image, Text } from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome'); // not sure how to write this otherwise
export default class BackButton extends React.Component {
  render() {
    return(<Icon style={styles.icon} name="angle-left" size={25} color="#fff" />)
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginTop: 0,
    marginLeft: 8,
    },
});
