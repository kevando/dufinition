import React, { StyleSheet, TouchableHighlight, Image, PropTypes, Text } from 'react-native';


var Icon = require('react-native-vector-icons/FontAwesome'); // not sure how to write this otherwise

import AppSettings from '../../components/AppSettings';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};
const styles = StyleSheet.create({ // not sure why this is in the constructor but whatever
      icon: {
        width: 25,
        height: 25,
        marginTop: 0,
        marginLeft: 8,
      },
    });

class AddPeopleIcon extends React.Component {
  constructor(props) {
    super(props);
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
        <Icon style={styles.icon} name="gear" size={25} color="#fff" />
      </TouchableHighlight>
    );
  }
}

AddPeopleIcon.propTypes = propTypes;

export default AddPeopleIcon;
