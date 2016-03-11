import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | modal service');

test('display modal,close it and resolve it', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  	click('#launchModalBtn');

  	andThen(function() {
  		assert.ok(find('.modal-backdrop:first'));
  		assert.equal(find('.modal').length, 1);
  		assert.equal(find('#resolveModalBtn').length, 1);
  		assert.equal(find('#rejectModalBtn').length, 1);
  		
  		click('#resolveModalBtn');
  		assert.notOk(find('.modal-backdrop').length);
  		assert.notOk(find('#resolvedResults').text().trim(), 'results');
	});
  });
});

test('display modal,close it and reject it', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  	click('#launchModalBtn');

  	andThen(function() {
  		assert.ok(find('.modal-backdrop:first'));
  		assert.equal(find('.modal').length, 1);
  		assert.equal(find('#resolveModalBtn').length, 1);
  		assert.equal(find('#rejectModalBtn').length, 1);
  		
  		click('#resolveModalBtn');
  		assert.notOk(find('.modal-backdrop').length);
  		assert.notOk(find('#rejectedResults').text().trim(), 'rejected');
	});
  });
});

test('it passes context', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  	click('#launchModalBtn');

  	andThen(function() {
  		assert.equal(find('#modalModelData').length, 1);
  		assert.equal(find('#modalModelData').text().trim(), 'modal-example-data');
  		
  		click('#resolveModalBtn');
  		
	});
  });
});






