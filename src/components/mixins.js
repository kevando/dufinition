var reactNativeStore = require('react-native-store');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var ViewSnapshotter = require("react-native-view-snapshot");
var RNFS = require("react-native-fs");
var Mixpanel = require('react-native-mixpanel');

var AlertIOS = require('AlertIOS');
var CameraRoll = require('CameraRoll');

var dataVersion = "dufine_v5";

module.exports = {
  

 	loadData: async function(callback) {
		//console.log('async loadData = ');
		var dufineModel = await reactNativeStore.model(dataVersion);
		var find_data = await dufineModel.find();
		callback(find_data); // refresh component state	
	},
	saveData: async function(definition,source,callback){
        var dufineModel = await reactNativeStore.model(dataVersion);
        var add_data = await dufineModel.add({
            word: definition.word,
            definition: definition,
            photo: source,
        });
        //console.log('callback')
        //console.log(callback)
        callback(definition,source);
        Mixpanel.trackWithProperties("Definition Created",{word:definition.word});
	},
	deleteData: async function(word,callback){
        var dufineModel = await reactNativeStore.model(dataVersion);
        var remove_data = await dufineModel.remove({
            word: word
        });
        callback();
        console.log('definition deleted');
        Mixpanel.trackWithProperties("Definition Deleted",{word:word});
    },

    openImagePicker: function(callback){
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
            	return;
          	}
            if (response.customButton) {
              	console.log('User tapped custom button: ', response.customButton);
              	return;
            }
            // Otherwise the image should have saved to some tmp/cache dir
			var source = {
				data: 'data:image/jpeg;base64,' + response.data,
				uri: response.uri.replace('file://', ''), 
				isStatic: true
			};
            callback(source);
        });
    }, // openImagePicker
    openCamera: function(callback){
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

        UIImagePickerManager.launchCamera(options, (didCancel, response) => {
            console.log('Response = ', response);

            if (didCancel) {
                console.log('User cancelled image picker');
                return;
            }
            if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                return;
            }
            // Otherwise the image should have saved to some tmp/cache dir
            var source = {
                data: 'data:image/jpeg;base64,' + response.data,
                uri: response.uri.replace('file://', ''), 
                isStatic: true
            };
            callback(source);
        });
    }, // openCamera
    
    getWordDefinition: function(word,callback){

        var baseURL = 'https://wordsapiv1.p.mashape.com/words/'+word
        fetch(baseURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Mashape-Key': 'i5OFV6PQGkmsh1HhWu7b9c76bNodp1Df8DmjsnKzsbV0G6Ke9r'
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log('responseData');
            console.log(responseData);
            //this.setState({definition:responseData}); // I would like to put this in another
            callback(responseData);
        });

    },

    saveToCameraRoll: function(ref){
        var tmpImagePath = RNFS.CachesDirectoryPath+"/definition.png";
        // var ref = React.findNodeHandle(this.refs.definition);
        ViewSnapshotter.saveSnapshotToPath(ref, tmpImagePath, (error, successfulWrite) => {
            if (successfulWrite) {
                //this.setState({catSaved: true});
                // and save it to camera roll
                CameraRoll.saveImageWithTag(tmpImagePath, function(data) {
                    // console.log(data);
                    AlertIOS.alert(
                        'Image saved to Camera Roll', '',
                        [{text: 'Cool', onPress: () => console.log('ok')},]
                    );
                }, function(err) {
                    // console.log(err);
                });
            } else {
                console.log(error)
            }
        });
        Mixpanel.trackWithProperties("Definition Exported",{word:this.state.word});
    }
    
};

