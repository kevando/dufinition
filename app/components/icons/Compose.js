import React, { StyleSheet, TouchableHighlight, Image, Text } from 'react-native';

export default class ComposeIcon extends React.Component {
  constructor(props) {
    super(props);

    this.styles = StyleSheet.create({
      icon: {
        width: 21,
        height: 21,
        marginTop: 4,
        marginRight: 15,
      },
    });
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent">
        <Text>Compose</Text>
      </TouchableHighlight>
    );
  }
}
