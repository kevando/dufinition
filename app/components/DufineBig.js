import React, { Component, StyleSheet, Text, ScrollView, View, PropTypes } from 'react-native';

const propTypes = {
  data: PropTypes.object,
};

class DufineBig extends Component {
  constructor(props) {
    super(props); //
    // this.state = { term: '' }

    this.renderDefinitions = this.renderDefinitions.bind(this);
  }
  renderDefinitions(){
    const { definition } = this.props.data;

    Definitions = definition.results.map((result,index) => {
      // adding key to stop the react-native child array error. probly dont want to use word cause it could be dup
      return (
        <Text style={styles.rtText}>{++index} {result.definition}</Text>
      );
    });

    return Definitions;
  }

  render() {
    // props.data comes from the route call in listpage which comes from the listItem that came from the map function
    const { definition } = this.props.data;

    return (
      <ScrollView>


      <View style={styles.tweetContainer}>
                <View style={styles.userContainer}>

                  <View style={styles.rightContainer}>
                    <Text style={styles.name}>{definition.word}</Text>
                    <Text style={styles.username}>{definition.results[0].partOfSpeech}</Text>
                  </View>
                </View>
                <View style={styles.retweetContainer}>
                  {this.renderDefinitions()}
                </View>
              </View>
      </ScrollView>
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

DufineBig.propTypes = propTypes;

export default DufineBig;
