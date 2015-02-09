// Set URL hash to editor value, encoded as base64.
var storeValueInHash = function(){
	var value = this.value(),
		b64 = new Buffer(value).toString("base64");

	window.location.hash = encodeURIComponent(b64);
}

// Get base64 from URL hash, decode as markdown 
// and set editor value. 
var getValueFromHash = function(){
	var b64 = decodeURIComponent(window.location.hash.slice(1)),
		markdown = new Buffer(b64, "base64").toString();

	this.set(markdown);
}

module.exports = function(opts){
	// Get hash, decode and set initially.
	getValueFromHash.call(this);

	// Store in hash on every change.
	this.on("change", storeValueInHash.bind(this));
}