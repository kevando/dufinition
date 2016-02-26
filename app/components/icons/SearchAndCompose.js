import React, { StyleSheet, View, PropTypes, Text } from 'react-native';

import SearchIcon from './Search'; // just image
import DufineView from '../../containers/DufineView'; // static page

var Icon = require('react-native-vector-icons/FontAwesome'); // not sure how to write this otherwise

const styles = StyleSheet.create({ // not sure why this is in the constructor but whatever
      icon: {
        width: 25,
        height: 25,
        marginTop: 0,
        marginLeft: 8,
      },
    });

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class SearchAndCompose extends React.Component {
  constructor(props) {
    super(props);

    this.styles = StyleSheet.create({
      iconContainer: {
        flexDirection: 'row',
      },
      icon: {
        width: 21,
        height: 21,
        marginTop: 4,
        marginRight: 15,
      },
      input: {
        backgroundColor: '#3f88bf',
        width: 220,
        height: 32,
        marginTop: 6,
        paddingLeft: 10,
        color: 'white',
        borderRadius: 4,
      },
    });

    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch() {

    this.props.toRoute({
      name: 'Search',
      component: DufineView,
      // rightCorner: {}, // this should be empty
      //titleComponent: SearchBar, not changing this as of now. i guess this defaults to the name
    });
  }

  render() {
    //<ComposeIcon />
    // this was inside the view container, but i am not sure why
    // console.log('SearchAndCompose',this.props);
    return (
      <View style={this.styles.iconContainer}>
        <SearchIcon goToSearch={this.goToSearch} />

      </View>
    );
  }
}

SearchAndCompose.propTypes = propTypes;

export default SearchAndCompose;
