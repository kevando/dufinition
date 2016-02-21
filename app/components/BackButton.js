import React, { StyleSheet, Image, Text } from 'react-native';

export default class BackButton extends React.Component {
  render() {
    return(<Text style={styles.backButton} >Back</Text>)
  }
  render_imgnotworking() {
    return (
      <Image source={require('../images/back_button.png')} style={styles.backButton} />
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    // width: 10,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
    },
});
