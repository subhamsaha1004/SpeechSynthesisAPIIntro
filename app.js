(function(window) {
	// General Utilities
	var doc = window.document,
		$ = function(selector) {
			var result = doc.querySelectorAll(selector);
			return (result.length > 1) ? result : result[0];
		};

	Node.prototype.on = Node.prototype.addEventListener;
	NodeList.prototype.on = function(type, func, flag) {
		[].forEach.call(this, function(node, index) {
			node.on(type, func, flag);
		});
	};

	// App related code goes here
	if('speechSynthesis' in window) {
		var msg = new SpeechSynthesisUtterance();
		var voices = window.speechSynthesis.getVoices();
		msg.voice = voices[10]; // Note: some voices don't support altering params
		msg.voiceURI = 'native';
		msg.volume = 1; // 0 to 1
		msg.rate = 1; // 0.1 to 10
		msg.pitch = 2; //0 to 2
		msg.text = 'Hello World';
		msg.lang = 'en-US';

		msg.onend = function(e) {
		  console.log('Finished in ' + event.elapsedTime + ' seconds.');
		};

		speechSynthesis.speak(msg);

		/*
		speechSynthesis.getVoices().forEach(function(voice) {
		  console.log(voice.name, voice.default ? '(default)' :'');
		});

		var msg = new SpeechSynthesisUtterance('I see dead people!');
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Whisper'; })[0];
		speechSynthesis.speak(msg);
		*/
	}

}(this));