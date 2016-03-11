import Ember from 'ember';

export default Ember.Controller.extend({

	modal:Ember.inject.service(),

	resolvedResults:null,
	rejectedResults:null,

	actions:{
		launchModal:function(){
			var self = this;
			this.get('modal').showModal('modal-example', {data:'modal-example-data'}).then(function(modalResult){
				self.set('resolvedResults', modalResult);
			}).catch(function(modalResult){
				self.set('rejectedResults', modalResult);
			});
		}
	}
});
