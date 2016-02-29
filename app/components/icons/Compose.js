import React, { TouchableHighlight, Image, StyleSheet, PropTypes, Text } from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome'); // not sure how to write this otherwise

const propTypes = {
  goToSearch: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginTop: 0,
    marginRight: 8,
  },
});

class SearchIcon extends React.Component {
  constructor(props) {
    super(props);


    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch() {
    this.props.goToSearch(); // i guess this was passed in via SearchAndCompose
  }

  render() {
    // console.log('Search',this.props);
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSearch}>
        <Icon style={styles.icon} name="pencil-square-o" size={25} color="#fff" />
      </TouchableHighlight>
    );
  }
}

SearchIcon.propTypes = propTypes;

export default SearchIcon;
