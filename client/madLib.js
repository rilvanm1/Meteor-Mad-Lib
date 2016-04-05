import './madLib.html';

Template.body.events({
	'submit form'(event){

		event.preventDefault();

		//console.log("Hello World");

		const target = event.target;

		const exclamation = target.exclamation.value;
		const adverb = target.adverb.value
		const animal = target.animal.value
		const verb = target.verb.value
		


		console.log(exclamation + "! you say, as you " + adverb + " jump onto your " + animal + " and " + verb + " into the sunset");
	}
})