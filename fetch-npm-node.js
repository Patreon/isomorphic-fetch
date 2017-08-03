"use strict";

var realFetch = require('node-fetch');
module.exports = function(url, options) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
	}
	return realFetch.call(this, url, options);
};

// Because Edge 14 has fetch but its implementation is broken,
// don't check for existence of global.fetch. Just always polyfill it.
global.fetch = module.exports;
global.Response = realFetch.Response;
global.Headers = realFetch.Headers;
global.Request = realFetch.Request;
