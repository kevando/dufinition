// // this should probably be a container and not a component
// // that way it gets access to the application state
// import React, {
//   StyleSheet,
//   Component,
//   View,
//   Text,
//   TouchableOpacity,
//   ListView
// } from 'react-native';
//
// import Header from './header'; //
//
// const styles = StyleSheet.create({
//   row: {
//     padding: 10,
//     borderBottomWidth: 2
//   }
// });
//
// export default class List extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props)
//     const { dufineList, route } = this.props; // is this even used?
//     this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
//     this.state = {
//       dataSource: this.ds.cloneWithRows(dufineList),
//     }
//     this.renderRow = this.renderRow.bind(this);
//   }
//
//
//
//   render() {
//
//     return(
//       <View>
//         <ListView
//           initialListSize={25}
//           dataSource={this.state.dataSource}
//           renderRow={this.renderRow}
//           />
//       </View>
//     );
//   }
//   renderRow(rowData, sectionID, rowID,highlightRow) { // I think these are all default ListView renderRow arguements
//
//     return(
//       <View style={styles.row}>
//         <TouchableOpacity onPress={this.viewDufine} >
//           <Text>{rowData}</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
//   render_counter() {
//     const { counter, increment, decrement} = this.props;
//
//     return(
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>{counter}</Text>
//         <TouchableOpacity onPress={increment} style={styles.button} >
//           <Text>up</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={decrement} style={styles.button}>
//           <Text>down</Text>
//           </TouchableOpacity>
//       </View>
//     );
//   }
// }
