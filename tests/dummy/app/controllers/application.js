import Ember from 'ember';

export default Ember.Controller.extend({

	modal:Ember.inject.service(),

	actions:{
		launchModal:function(){
			this.get('modal').showModal('modal-example', {data:'modal-example-data'}).then(function(modalResult){
				console.log('modal-example resolved with results ', modalResult);
			}).catch(function(modalResult){
				console.log('modal-example rejected with results ', modalResult);
			});
		}
	}
});
