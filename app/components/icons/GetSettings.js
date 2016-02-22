import React, { StyleSheet, TouchableHighlight, Image, PropTypes, Text } from 'react-native';

import AppSettings from '../../components/AppSettings';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class AddPeopleIcon extends React.Component {
  constructor(props) {
    super(props);

    this.styles = StyleSheet.create({ // not sure why this is in the constructor but whatever
      icon: {
        width: 25,
        height: 18,
        marginTop: 5,
        marginLeft: 8,
      },
    });

    this.goToAddPage = this.goToAddPage.bind(this);
  }

  goToAddPage() {
    this.props.toRoute({
      name: 'App Info',
      component: AppSettings,
    });
  }
  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToAddPage}>
        <Text>info</Text>
      </TouchableHighlight>
    );
  }
}

AddPeopleIcon.propTypes = propTypes;

export default AddPeopleIcon;
