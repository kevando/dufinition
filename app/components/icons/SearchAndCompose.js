import React, { StyleSheet, View, PropTypes, Text } from 'react-native';

import SearchIcon from './Search'; // just image
import SearchPage from '../../containers/SearchPage'; // static page
import SearchBar from './SearchBar'; // im not sure why this is in icons

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
      component: SearchPage,
      // rightCorner: ComposeIcon,
      //titleComponent: SearchBar, not changing this as of now. i guess this defaults to the name
    });
  }
  render_f() {
    return (
      <View style={this.styles.iconContainer}>
      <Text>Add</Text>
      </View>
    );
  }

  render() {
    //<ComposeIcon />
    // this was inside the view container, but i am not sure why
    return (
      <View style={this.styles.iconContainer}>
        <SearchIcon goToSearch={this.goToSearch} />

      </View>
    );
  }
}

SearchAndCompose.propTypes = propTypes;

export default SearchAndCompose;
