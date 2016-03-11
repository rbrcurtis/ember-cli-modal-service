import Ember from 'ember';
import layout from '../templates/components/modal-example';
import ModalInstance from 'ember-cli-modal-service/components/modal-instance';

export default ModalInstance.extend({
  layout: layout,

  actions:{
  	resolveMe:function(){
  		this.closeResolve('results');
  	},
  	rejectMe:function(){
  		this.closeReject('rejected');
  	}
  }
});
