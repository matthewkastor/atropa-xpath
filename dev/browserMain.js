var xpath = require('../src/atropa-xpath.js');

try {
    Object.keys(xpath).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = xpath[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-xpath.js');
}

Object.keys(xpath.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = xpath.data[prop];
    }
);
