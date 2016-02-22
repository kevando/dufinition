import React, { Component, StyleSheet, ScrollView, PropTypes } from 'react-native';

import DufineListItem from '../components/DufineListItem'; //
import DufinePage from '../components/DufineBig'; //

// From the tweet app, this was a component, changing this to a container now so it has access to redux
// at least i think thats how it works. here is the redux connection code
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'; // not sure that i need this
import { connect } from 'react-redux';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({ //wtf
      container: {
        flex: 1,
        backgroundColor: '#f5f8fa',
      },
    });
    this.goToDufine = this.goToDufine.bind(this);
  }

  // I wonder if this should be an action
  goToDufine(dufineData) {
    // i dont know if its the best approach to send in the data object for every single function call

    this.props.toRoute({
      name: 'Dufine',
      component: DufinePage,
      data: dufineData,
    });
  }

  render() {
    //console.log('this.props',this.props); // these props include route data, as well as action and state data from redux
    const { state } = this.props; // redux state

    // Dufines is a list of dufine objects. probly want to create a schema for that data somewhere.
    //This is getting pulled from the redux state
    const Dufines = state.dufines.map((dufineData) => {
      // adding key to stop the react-native child array error. probly dont want to use word cause it could be dup
      return <DufineListItem {...dufineData} onPress={this.goToRoute} goToDufine={this.goToDufine} key={dufineData.word }/>;
    });

    return (
      <ScrollView style={this.styles.container}>
        {Dufines}
      </ScrollView>
    );
  }
}

ListPage.propTypes = propTypes;

// export default ListPage;
// I do not understand any of this..
export default connect(state => ({
  state: state.dufine // this grabs information from the reducer.
}),
(dispatch) => ({
  actions: bindActionCreators(dufineActions, dispatch)
})
)(ListPage);
