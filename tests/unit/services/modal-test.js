import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('service:modal', 'Unit | Service | modal', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
  assert.ok(service.get('modals'));
});

test('it add modal when call to showModal', function(assert) {
	assert.expect(5);

  let service = this.subject();
  
  assert.equal(service.get('modals.length'),0);

  var promise = service.showModal('modal', {data:'dummy'});

  assert.equal(service.get('modals.length'),1);

  var modalDef = service.get('modals.firstObject');
  assert.equal(modalDef.componentName,'modal');
  assert.equal(modalDef.context.data,'dummy');
  assert.ok(Ember.RSVP.Promise.prototype.isPrototypeOf(promise));
  service.closeModalResolve({data:'result'});
});

test('it resolves promise', function(assert) {
	assert.expect(1);
	let service = this.subject();
  
  var promise = service.showModal('modal', {data:'dummy'});
	promise.then(function(results){
		assert.equal(results.data, 'result');
	});
  service.closeModalResolve({data:'result'});

});

test('it rejects promise', function(assert) {
	assert.expect(1);
	let service = this.subject();
  
  var promise = service.showModal('modal', {data:'dummy'});
	promise.catch(function(results){
		assert.equal(results.data, 'result');
	});
  service.closeModalReject({data:'result'});

});

