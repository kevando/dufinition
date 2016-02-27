import React, { StyleSheet, Text, View, AlertIOS, TouchableHighlight } from 'react-native';

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
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    AlertIOS.alert(
      'ಠ_ಠ ', 'This action deletes all your data?',
      [{ text: 'Okay', onPress: this.clearAllData },
       { text: 'Stop', onPress: () => console.log('cancel action') }]
    ); // Alert
  }
  clearAllData() {
    const engine = createEngine('async-data-v1');
    engine.save({}); // This clears the state from local storage
    AlertIOS.alert(
      'Everything has been delete!', '',
      [{text: 'I like fresh starts', onPress: ()=> console.log('deleted')}]
    ); // Alert
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>App Version: { DeviceInfo.getVersion()}</Text>
        </View>
        <View>
          <TouchableHighlight onPress={this.onButtonPress} >
            <Text style={styles.button}>Clear State Data</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
