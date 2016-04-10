import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	session: Ember.inject.service(),
	headers: Ember.computed('session.token', function(){
		return{
			'Authorization': `Bearer ${this.get('session.token')}`
		};
	})
});
