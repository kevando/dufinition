


import React, { Component, StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';


// This needs a much better name
class DufinePhoto extends Component {
  constructor(props) {
    super(props);
    // dont think i need this
  }


  render() {
    // console.log('dufineWord photo',this.props)
    const {
      // text,
      photo,
    } = this.props;
    console.log(photo);

    return (
      <View style={styles.tweetContainer}>
        <Image source={{ uri: photo.data, scale:3 }} style={styles.avatar} />
      </View>
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
const styles = StyleSheet.create({
  tweetContainer: {
    margin: 10,
    paddingTop: 8,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#DAE6F0',
  },
  retweetContainer: {
    margin: 10,
    paddingTop: 8,
    flexDirection: 'row',
    borderTopWidth: 5,
    borderColor: '#DAE6F0',
    flexWrap: 'wrap',
    flex: 1

  },
  rtBold: {
    fontSize: 14,
    marginRight: 3,
    fontWeight: '600',
  },
  rtText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#748999',
    flexWrap: 'wrap',
    alignSelf: 'stretch'

  },
    tweetContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#DAE6F0',
    paddingTop: 4,
  },
    avatar: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 4,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  username: {
    fontSize: 13,
    color: '#8999a5',
    marginTop: 2,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
  },
  text: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: '300',
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
});

export default DufinePhoto;
