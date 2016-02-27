import React, { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import DeviceInfo from 'react-native-device-info';

import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 120,
    height: 30,
    marginTop: 6,
    padding: 10,
    color: 'white',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class FindPeoplePage extends React.Component {
  constructor(props) {
    super(props);

  }
  onButtonPress() {
    const engine = createEngine('async-data-v1');
    engine.save({}); // This clears the state from local storage

  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>App Version: { DeviceInfo.getVersion()}</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight onPress={this.onButtonPress} >
            <Text style={styles.button}>Clear State Data</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
