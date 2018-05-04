import Ember from 'ember';
import layout from '../templates/components/modal-wrapper';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export default Ember.Component.extend({
  layout: layout,

  _sendReject:true,


  show: on('didInsertElement', function() {
    this.$('.modal').modal(this.get('modalOptions'));
  }),


  close:function(){
    this.$('.modal').modal('hide');
  },

  actions:{
  	closeModalResolve:function(result){
      this.close();
      this.sendAction('onCloseResolve', this.get('modal'), result);
    },

    closeModalReject:function(result){
      this.close();
      this.sendAction('onCloseReject', this.get('modal'), result);
    }
  }


});
