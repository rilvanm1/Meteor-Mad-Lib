import './madLib.html';

Template.body.events({
	'submit #submitButton'(event){

		event.preventDefault();

		console.log("Hello World");
	}
})