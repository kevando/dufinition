import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
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
  }
});

export default class List extends Component {
  constructor(props) {
    super(props);

    this.viewDufine = this.viewDufine.bind(this);
  }

  viewDufine(){
    this.props.navigator.push({
      name: component
    })
  }

  render() {
    console.log('this.props',this.props);
    // const { state, actions } = this.props;
    const { push} = this.props;
    // console.log(actions)
    console.log(push)
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:250 }}>
      <TouchableOpacity onPress={this.viewDufine}>
        <Text>Navigate to second screen</Text>
      </TouchableOpacity>
      </View>
    );
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
