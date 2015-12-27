var React = require('react-native');
var styles = require('../Styles');

var { 
	Text,
} = React;

class DayItem extends React.Component {

	constructorr(props){
		console.log('DayItem Component Constructor');

	}

	render() {
		return (
			<Text style={this.dynamicStyles()}>
				{this.props.day}
			</Text>
			);
	}
	dynamicStyles(){
		return {
			color: this.color(),
			fontWeight: ''+this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight(),
		}
	}
	color(){
		var opacity = 1 / this.props.daysUntil;
		return 'rgba(0, 0, 0, '+ opacity + ')';
	}
	fontWeight(){
		var weight = 7 - this.props.daysUntil;
		return weight * 100;
	}
	fontSize(){
		return 60 - 6 * this.props.daysUntil;
	}
	lineHeight(){
		return 70 - 4 * this.props.daysUntil;
	}

};

// Makes this code available elsewhere
module.exports = DayItem;