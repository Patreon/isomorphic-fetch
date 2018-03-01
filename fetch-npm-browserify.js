// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');

var useCurrentGlobalFetch = function(url, options) {
    /* LogRocket.init() runs in app code and replaces global fetch, so
    at request time, always get the latest instance of fetch from window. -- @george */
    return self.fetch.call(self, url, options);
};

module.exports = useCurrentGlobalFetch
