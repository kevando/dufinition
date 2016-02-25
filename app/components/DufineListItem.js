import React, { StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';

class Dufine extends React.Component {
  constructor(props) {
    super(props);
    //console.log('this.props',this.props)
    this.goToDufine = this.goToDufine.bind(this);
  }

  goToDufine() {

    this.props.goToDufine(this.props);
  }

  render() {
    const {
      definition
    } = this.props;

    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToDufine}>
        <View style={styles.tweetContainer}>
          <View style={styles.rightContainer}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>{definition.word}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
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
  goToDufine: PropTypes.func.isRequired,
  text: PropTypes.string,
  user: PropTypes.object,
};

const styles = StyleSheet.create({
  tweetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 4,
    paddingBottom: 10,
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
  },
  username: {
    marginLeft: 4,
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
  },
  rightContainer: {
    flex: 1,
    padding: 10,
  },
});

Dufine.propTypes = propTypes;


export default Dufine;
