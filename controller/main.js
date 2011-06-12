var _ = require('common/util');

var app = this;

_.extend(exports, {
	':load': function() {
		var view = this;
		console.log('View was loaded');
		
		view.get('input').on('submit', function(){
			console.log(view.get('input').value());
			app.msg('translate', {text : view.get('input').value()});
		});
		
		app.on('message', function(action, data){
			
			console.log(action);
			if (action === 'translate'){
				console.log(data.text);
				view.get('hasil').label(data.text);
			}
		});
	},

	':resized': function(width, height) {
		console.log('View was resized to ' + width + 'x' + height);
	},

	':keypress': function(key) {
		console.log('Key press: ' + key);
		this.get('input').emit('keypress', key);
	},

	':active': function() {
		console.log('View is active');
	},

	':inactive': function() {
		console.log('View is inactive');
	}
});
