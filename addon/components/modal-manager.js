import Ember from 'ember';
import layout from '../templates/components/modal-manager';
const { keys, create } = Object; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, debug, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export default Ember.Component.extend({
  layout: layout,
  containerClass: 'modal-lg',
  modalOptions: {},
  // keyboard setting is NOT supported - cannot exit modal by pressing ESC

  modal:inject.service(),

  modals:computed.alias('modal.modals'),

  hasModal:computed.notEmpty('modals'),

  actions:{
    closeModalResolve:function(modal, result){
      this.get('modal').closeModalResolve(result);
    },

    closeModalReject:function(modal, result){
      this.get('modal').closeModalReject(result);
    }
  }
});
