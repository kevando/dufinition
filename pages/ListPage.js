import React, { StyleSheet, ScrollView, PropTypes } from 'react-native';

import Dufine from '../components/Dufine'; //
import DufinePage from '../components/DufineBig'; //

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.styles = StyleSheet.create({ //wtf
      container: {
        flex: 1,
        backgroundColor: '#f5f8fa',
      },
    });
    this.state = {
      dufines: [
        {
          text: 'The React Native Router is awesome!',
          user: {
            name: 'Tristan Edwards',
            username: 't4t5',
            avatar: 'https://pbs.twimg.com/profile_images/497658257276538880/KrPEaVDu_400x400.jpeg',
          },
        },
        {
          text: 'Hello world!',
          user: {
            name: 'Leonard Pauli',
            username: 'LeonardPauli',
            avatar: 'https://pbs.twimg.com/profile_images/436581173871927296/txEzObgk_400x400.jpeg',
          },
        },
      ],
    };
    this.goToDufine = this.goToDufine.bind(this);
  }

  goToDufine(dufineData) {
    this.props.toRoute({
      name: 'Dufine',
      component: DufinePage,
      data: dufineData,
    });
  }

  render() {
    const Dufines = this.state.dufines.map((dufineData) => {
      return <Dufine {...dufineData} onPress={this.goToRoute} goToTweet={this.goToDufine} />;
    });

    return (
      <ScrollView style={this.styles.container}>
        {Dufines}
      </ScrollView>
    );
  }
}

ListPage.propTypes = propTypes;

export default ListPage;
