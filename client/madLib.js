import './madLib.html';

Template.body.events({
	'submit form'(event){

		event.preventDefault();

		console.log("Hello World");
	}
})