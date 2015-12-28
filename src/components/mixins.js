
var reactNativeStore = require('react-native-store');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var dataVersion = "dufine_v3.1";

module.exports = {
  

 	loadData: async function(callback) {
		console.log('async loadData = ');
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
        console.log('callback')
        console.log(callback)
        callback(definition,source);
	},
	deleteData: async function(word,callback){
        var dufineModel = await reactNativeStore.model("dufine_v3.1");
        var remove_data = await dufineModel.remove({
            word: word
        });
        callback();
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
    } // openImagePicker
};

