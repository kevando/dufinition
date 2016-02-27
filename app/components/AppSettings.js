import React, { StyleSheet, Text, View } from 'react-native';

var DeviceInfo = require('react-native-device-info');

export default class FindPeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text>App Version: { DeviceInfo.getVersion()}</Text>
      </View>
    );
  }
}
