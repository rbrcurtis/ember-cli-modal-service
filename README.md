# Ember-cli-modal-service

An Ember modal service packaged as an Ember-Addon. It allows to simply implement [Bootstrap](http://getbootstrap.com/javascript/#modals) modal dialog and open them through a service call that returns a promise.

## Demo

Visit [demo](http://www.arexo.be/demo/ember-cli-modal-service)

## Installation

Run either command below depending on Ember version in your project folder.

For Ember CLI >= `0.2.3`:

```shell
ember install ember-cli-modal-service
```

For Ember CLI < `0.2.3`:

```shell
ember install:addon ember-cli-modal-service
```

This addon requires Ember.js (>2.x)

The addon depends on Bootstrap (>3.x) but doesn't install it as a Bower dependency. You should add `"bootstrap": "~3"` to your bower.json before or after installation and the run `bower install`

## Usage

This addon provides a `modal-manager` component that you should insert in a near hierarchy top template.

```handlebars
{{!-- app/templates/application.hbs --}}

...
{{modal-manager}}
...
```

To create a modal dialog, extend the modal-instance component and create an associated template as it's the content of the tag `modal-content` from Bootstrap modal.

```javascript
// app/components/modal-example.js

import Ember from 'ember';
import layout from '../templates/components/modal-example';
import ModalInstance from 'ember-cli-modal-service/components/modal-instance';

export default ModalInstance.extend({
  layout: layout,

  ...

  actions:{
  	resolveMe:function(){
  		this.closeResolve(/* some resolved results */);
  	},
  	rejectMe:function(){
  		this.closeReject(/* some rejected results */);
  	},

  	...
  }
});

```

```handlebars
{{!-- app/templates/components/modal-example.hbs --}}

<div class="modal-header">
	<button type="button" class="close" {{action 'rejectMe'}}>&times;</button>
	<h4 class="modal-title">Modal Example</h4>
</div>
<div class="modal-body">
	...
</div>
<div class="modal-footer">
	<div class="row">
		<div class="col-sm-12">
			<button class="btn btn-success" {{action 'resolveMe'}}>
				Resolve
			</button>
			<button class="btn btn-danger" {{action 'rejectMe'}}>
				Reject
			</button>
		</div>
	</div>
</div>
```

To display the modal, call the `showModal` from the `modal` service

```javascript

modal:Ember.inject.service(),

displayExampleModal:function(){
	var modalModel = this.getModalModel();

	this.get('modal').showModal('modal-example', modalModel).then(function(results){
		//modal resolved
	}).catch(function(results){
		//modal rejected
	})
}

```










