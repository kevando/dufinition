// import React, { StyleSheet, View, PropTypes } from 'react-native';
//
// import SearchIcon from './Search'; // just image
// import ComposeIcon from './Compose'; // image
// import SearchPage from '../../pages/SearchPage'; // static page
// import SearchBar from './SearchBar'; // input form that does nothing
//
// const propTypes = {
//   toRoute: PropTypes.func.isRequired,
// };
//
// class SearchAndCompose extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.styles = StyleSheet.create({
//       iconContainer: {
//         flexDirection: 'row',
//       },
//       icon: {
//         width: 21,
//         height: 21,
//         marginTop: 4,
//         marginRight: 15,
//       },
//       input: {
//         backgroundColor: '#3f88bf',
//         width: 220,
//         height: 32,
//         marginTop: 6,
//         paddingLeft: 10,
//         color: 'white',
//         borderRadius: 4,
//       },
//     });
//
//     this.goToSearch = this.goToSearch.bind(this);
//   }
//
//   goToSearch() {
//     this.props.toRoute({
//       name: 'Search',
//       component: SearchPage,
//       rightCorner: ComposeIcon,
//       titleComponent: SearchBar,
//     });
//   }
//
//   render() {
//     return (
//       <View style={this.styles.iconContainer}>
//         <SearchIcon goToSearch={this.goToSearch} />
//         <ComposeIcon />
//       </View>
//     );
//   }
// }
//
// SearchAndCompose.propTypes = propTypes;
//
// export default SearchAndCompose;
