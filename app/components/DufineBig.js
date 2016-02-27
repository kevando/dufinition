// import React, { Component, StyleSheet, Text, View, PropTypes } from 'react-native';
//
// import DufinePhoto from '../components/DufinePhoto';
// import DufineWord from '../components/DufineWord';
//
// const propTypes = {
//   data: PropTypes.object,
// };
//
// class DufineBig extends Component {
//   constructor(props) {
//     super(props);
//     this.renderDefinitions = this.renderDefinitions.bind(this);
//   }
//
//   renderDefinitions(){
//     const { definition } = this.props.data;
//     // console.log('DufineBig',this.props)
//     Definitions = definition.results.map((result,index) => {
//       // adding key to stop the react-native child array error. probly dont want to use word cause it could be dup
//       return (
//         <Text style={styles.definitionText}><Text style={styles.definitionCount}>{++index}</Text> {result.definition}</Text>
//       );
//     });
//
//     return Definitions;
//   }
//
//   render() {
//     // props.data comes from the route call in listpage which comes from the listItem that came from the map function
//     const { definition, photo } = this.props.data;
//
//     return (
//       <View>
//         <View style={styles.tweetContainer}>
//           <View style={styles.topContainer}>
//             <View style={styles.wordContainer}>
//               <DufineWord definition={ definition } />
//             </View>
//             <DufinePhoto photo={photo} />
//           </View>
//           <View style={styles.definitionsContainer}>
//             {this.renderDefinitions()}
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   definitionsContainer: {
//     margin: 10,
//     paddingTop: 8,
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     flex: 1
//   },
//   // topContainer: { //
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   flex: 1,
//   //   backgroundColor: '#fff'
//   // },
//   // wordContainer: { //
//   //   flex: 1,
//   //   padding: 10,
//   //   marginLeft:10,
//   // },
//   definitionText: {
//     fontWeight: '300',
//     fontSize: 14,
//     fontFamily: 'Georgia'
//   },
//   definitionCount: {
//     fontWeight: '600',
//     fontSize: 16,
//     fontFamily: 'Georgia'
//   }
// });
//
// DufineBig.propTypes = propTypes;
//
// export default DufineBig;
