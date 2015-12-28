var React = require('react-native');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var reactNativeStore = require('react-native-store'); // to abstract

var {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableHighlight,
	TextInput,
	Image,
} = React;

var Button = require('../common/button');
var styles = require('../../styles/styles');
var DufineMixins = require('../mixins');



module.exports = React.createClass({
	mixins: [DufineMixins],
	getInitialState: function(){
		console.log(this.props);
		// this is currently if coming from main.js if(this.props.route.localData)
    	return {
      		definition: this.props.route.props.definition,
            photo: this.props.route.props.photo,
            word: this.props.route.props.definition.word
    	};

	},
	componentWillMount: function() {
		console.log('dufine-list.js componentWillMount()');
		
	},
	render: function(){
		return (
            <View style={styles.container}>
                <View ref="definition" style={styles.definitionContainer}>
                    <View style={styles.definition} >
                        <View style={styles.dufTop}>                            
                            <View style={styles.definitionWordContainer}>
                                <Text style={[styles.georgia,styles.definitionWord]}>{this.state.definition.word}</Text>
                                <Text style={[styles.georgia,styles.definitionType]}>{this.state.definition.partOfSpeech}</Text>
                            </View>

                            
                            
                        </View>
                        <View style={styles.definitionBottom}>
                            <View style={styles.dufinitionDefinition}>
                                <Text style={styles.georgia}>{this.state.definition.text}</Text>
                            </View>
                        </View>

                    </View>
                    
                </View>
                <Button text={'Add Photo'} onPress={this.onAddPhotoPressed} />
               
            </View>
        );
		

	},
	
	onAddPhotoPressed: function() {
		var options = {
            title: 'Select Photo',
            cancelButtonTitle: 'Cancel',
            takePhotoButtonTitle: 'Take NEW Photo...',
            chooseFromLibraryButtonTitle: 'Choose EXISTING from Library...',
            quality: 0.2,
            allowsEditing: true,
            storageOptions: {
                skipBackup: true,
                path: 'images' // will save image at /Documents/images rather than the root
            }
        };

        UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
          console.log('Response = ', response);

          if (didCancel) {
            console.log('User cancelled image picker');
          }
          else {
            if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({loading:true})
                console.log(response);
                //var newPath = './images/'+this.state.searchWord+'.jpg';
                console.log('paths');
                //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                // RNFS.writeFile(newPath, 'data:image/jpeg;base64,' + response.data, 'base64')
                //   .then((success) => {
                //     console.log('Image successfully copied to: ');
                //     console.log(newPath)
                //   })
              //var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
              var source = {data: 'data:image/jpeg;base64,' + response.data,uri: response.uri.replace('file://', ''), isStatic: true};
              this.state.photo = source;
              console.log('source');
              console.log(source);

              this.saveData(this.state.definition,source);
              //todo should probly abstract this
              this.props.navigator.push({
		            name: 'dufineview',
		            props: {definition: this.state.definition,photo: source,preview:true},
        		});
                
            }
          }
        });
	},

});