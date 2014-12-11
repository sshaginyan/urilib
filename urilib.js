var UriLib = function(uri, relative, strictLevel, correcting, informationLevel) {

	var partial = '';

	this.originalUri = null;
	this.originalRelative = null;
	this.protocol = null; // [http]://username:password@example.com:8080/
	this.username = null; // http://[username]:password@example.com:8080/
	this.password = null; // http://username:[password]@example.com:8080/
	this.port = null; // http://username:password@example.com:[8080]/
	this.application = null; // Hypertext Transfer Protocol (HTTP)
	this.domain = null; // http://username:password@one.two.three.[example.com]:8080/
	this.host = null; // http://username:password@[one.two.three.example.com:8080]/
	this.hostname = null; // http://username:password@[one.two.three.example.com]:8080/
	this.subdomains = null; // http://username:password@[one].[two].[three].example.com:8080/
	this.tlds = null;
	this.cctld = null;

	if(typeof uri !== 'string') {
    	throw new TypeError("Parameter 'uri' must be a string, not " + typeof uri);
  	}

  	if(typeof relative !== 'string' && relative !== 'null') {
  		throw new TypeError("Parameter 'relative' must be a string or null, not " + typeof uri);
  	}

  	strictLevel = strictLevel || 0;

  	this.originalUri = uri;
  	this.originalRelative = relative;
  	partial = this.originalUri;

	function credentials_0(partial) {
		
		var potentialCredentials = partial.split('@', 1);
		var potentialusername = partial.split(':')
		var potentialpassword

		if(potentialCredentials.length === 2 && potentialCredentials[0] !== '') {
			
		} else {
			return partial;
		}
	}

	function credentials_1() {

	}

	function slashes_0(partial) {

		if(partial.substr(0, 2) === '//') {
			return [ true, partial.substr(2) ];
		} else {
			return [ false, partial ];
		}
	}

	function slashes_1(partial, slashes) {

	}

	function protocol_0(partial) {

		var potentialProtocol = partial.match(/^[a-zA-Z][a-zA-Z0-9\+\.\-]+:/);

		if(potentialProtocol !== null) {
			this.protocol = potentialProtocol[0];
			return partial.substr(potentialProtocol[0].length);
		} else {
			return partial;
		}

	}

	function protocol_1() {

	}

};