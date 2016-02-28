import React, { StyleSheet, Text, View, AlertIOS, TouchableHighlight } from 'react-native';

import DeviceInfo from 'react-native-device-info';
import * as styles from '../style/styles.js';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
const GoogleAnalytics = require('react-native-google-analytics-bridge');

export default class FindPeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    GoogleAnalytics.trackEvent('Clear Data','Prompt');
    AlertIOS.alert(
      'ಠ_ಠ ', 'This action deletes all your dufine app data?',
      [{ text: 'Okay', onPress: this.clearAllData },
       { text: 'Stop', onPress: () => console.log('cancel action') }]
    ); // Alert
  }
  clearAllData() {
    GoogleAnalytics.trackEvent('Clear Data','Submitted');
    const engine = createEngine('async-data-v1');
    engine.save({}); // This clears the state from local storage
    AlertIOS.alert(
      'Everything has been delete!', 'Restart app to see changes reflected.',
      [{text: 'I like fresh starts', onPress: ()=> console.log('deleted')}]
    ); // Alert
  }

  render() {
    return (
      <View style={styles.appSettingsContainer}>
        <View>
          <Text>App Version: { DeviceInfo.getVersion()}</Text>
        </View>
        <View>
          <TouchableHighlight onPress={this.onButtonPress} >
            <Text style={styles.appSettingsButton}>Delete All Dufine Data</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
