// this should probably be a container and not a component
// that way it gets access to the application state
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';

// stuff for redux
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions'; // not sure if this is needed
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  row: {
    padding: 10,
    borderBottomWidth: 2
  }
});

class List extends Component {
  constructor(props) {
    super(props);
    console.log('props',this.props)
    // const { dufineList } = this.props.sta; // is this even used?
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.state.dufineList), // pulls from app state

    }
    this.renderRow = this.renderRow.bind(this);

  }



  render() {

    return(
      <View>
        <ListView
          initialListSize={25}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    );
  }
  renderRow(rowData, sectionID, rowID,highlightRow) { // I think these are all default ListView renderRow arguements
    console.log('props',this.props)
    const { state } = this.props;
    return(
      <View style={styles.row}>
        <TouchableOpacity onPress={this.props.toRoute} >
          <Text>{rowData}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  render_counter() {
    const { counter, increment, decrement} = this.props;

    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button} >
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

// I do not understand any of this..
export default connect(state => ({
  state: state.counter // I might need to add other stuff here for my state vars
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
})
)(List);
