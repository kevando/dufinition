
var reactNativeStore = require('react-native-store');

var dataVersion = "dufine_v3.1";

module.exports = {
  

 	loadData: async function(callback) {
		console.log('async loadData = ');
		var dufineModel = await reactNativeStore.model(dataVersion);
		var find_data = await dufineModel.find();
		//console.log(find_data);

		callback(find_data); // refresh component state
	
	},
	saveData: async function(definition,source){
		//console.log('saving data word: ');
        var dufineModel = await reactNativeStore.model(dataVersion);
        var add_data = await dufineModel.add({
            //searchWord: this.state.word,
            word: definition.word,
            definition: definition,
            photo: source,
            //definition: this.state.definition
        });

	},
	deleteData: async function(word,callback){
        //console.log('delete this bitch')
        var dufineModel = await reactNativeStore.model("dufine_v3.1");
        var remove_data = await dufineModel.remove({
            word: word
        });
        callback();
    }
};

