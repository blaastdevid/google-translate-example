// Translate -- backend.js

var http    = require('blaast/simple-http');
var QS = require('querystring');

log.info('Hello from backend bootstrap.');


app.message(function(client, action, data){
	console.log(action);
	console.log(data.text);	
	if (action === 'translate'){
		var param = QS.stringify({key: 'AIzaSyDIFGGpYQhTzuom4xlmybzyBD0vFG2Zd0k', source:'en', target:'id', q: data.text});
		var url = "https://www.googleapis.com/language/translate/v2?" + param;
		
		http.get(url, { type: 'binary' }, {
			ok: function(data) {
				console.log(data);
				data = JSON.parse(data);
				client.msg('translate', {text: data.data.translations[0].translatedText});
			},
			error: function(err) {
				console.log(err);
			}
		});
	}	
		
		
});