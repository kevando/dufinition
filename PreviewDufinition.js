/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
//var SearchBooks = require('./SearchBooks');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var reactNativeStore = require('react-native-store');

var {
    StyleSheet,
    NavigatorIOS,
    Component,
    TouchableHighlight,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  CameraRoll,
  // NativeModules: {
  //   UIImagePickerManager
  // }
    } = React;



class PreviewDufinition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchWord: props.searchWord,
            photo: props.photo,
            definition: props.definition
        };
    }


    render() {
        return (
           <View style={styles.container}>
          <View style={[styles.avatar, styles.avatarContainer]}>
          { this.state.photo === null ? <Text>no photo passed :(</Text> :
            <Image style={styles.avatar} source={this.state.photo} />
          }
          </View>

          <Text style={styles.instructions}>{this.state.searchWord}</Text>
          <Text style={styles.instructions}>Definition{this.state.definition.text}</Text>
        
        <TouchableHighlight style={styles.button}
          underlayColor='#f1c40f'
          onPress={this.saveData.bind(this)}>
          <Text style={styles.buttonText}>Save this Dufinition</Text>
        </TouchableHighlight>
      </View>
        );
    }

    async saveData(){
      var dufineModel = await reactNativeStore.model("dufine_v1");

      var add_data = await dufineModel.add({
        searchWord: this.state.searchWord,
        photo: this.state.photo,
      })

      // Holding off until i can figure out how to generate custom images
      // CameraRoll.saveImageWithTag(this.state.photo.uri, function(data) {
      //     console.log(data);
      // }, function(err) {
      //     console.log(err);
      // });

    }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    
    width: 150,
    height: 150
  }
});

module.exports = PreviewDufinition;