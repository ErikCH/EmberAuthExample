import Ember from 'ember';

export default Ember.Controller.extend({
	loginName: null,
	password: null,
	session: Ember.inject.service(),
	actions: {
		authenticate(){
			this.get('session').authenticate(this.get('loginName'),
				this.get('password')).then( ()=>{
					alert('Logged in!');
					this.transitionToRoute('students');
				}, (err) =>{
					alert('Error with login! ' + err.responseText);
					
				});	
				
				
		}
	}
});
