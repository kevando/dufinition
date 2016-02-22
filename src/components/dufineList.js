import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  row: {
    padding: 10,
    borderBottomWidth: 2
  }
});

export default class DufineList extends Component {
  constructor(props) {
    super(props);
    console.log('props',this.props)
    const { dufineList, view } = this.props; // pull list from props. props come from DufineApp
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(dufineList),
      view: view, // i dont htink i should be doing htis

    }

    this.renderRow	= this.renderRow.bind(this); // give renderRow access to component state (this.state)
    // still feels dirty the way I get view from state into component state
  }

  render() {
    // const { dufineList, increment, decrement, view } = this.props;

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
    console.log(this.state.view)
    return(
      <View style={styles.row}>
        <TouchableOpacity onPress={this.state.view} >

          <Text>{rowData}</Text>

        </TouchableOpacity>
      </View>
    )
  }


}
