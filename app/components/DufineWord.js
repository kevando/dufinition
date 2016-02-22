


import React, { Component, StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';


// This needs a much better name
class DufineWord extends Component {
  constructor(props) {
    super(props);
    // dont think i need this
  }


  render() {
    // console.log('dufineWord props',this.props)
    const {
      // text,
      definition,
    } = this.props;

    return (
      <View><Text>{definition.word}</Text></View>
    );
  }
  render_tweet() {
    const {
      text,
      user,
    } = this.props;

    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToDufine}>
        <View style={styles.tweetContainer}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View style={styles.rightContainer}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.username}>@{user.username}</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const propTypes = {
  word: PropTypes.string,

};

DufineWord.propTypes = propTypes;


export default DufineWord;
