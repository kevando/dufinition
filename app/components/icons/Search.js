import React, { TouchableHighlight, Image, StyleSheet, PropTypes, Text } from 'react-native';

const propTypes = {
  goToSearch: PropTypes.func.isRequired,
};

class SearchIcon extends React.Component {
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

    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch() {
    this.props.goToSearch(); // i guess this was passed in via SearchAndCompose
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSearch}>
        <Text>Add +</Text>
      </TouchableHighlight>
    );
  }
  renderog() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSearch}>
        <Image source={require('../../images/search_icon.png')} style={this.styles.icon} />
      </TouchableHighlight>
    );
  }
}

SearchIcon.propTypes = propTypes;

export default SearchIcon;
