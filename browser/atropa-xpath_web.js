;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var atropa = {};

/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>

/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global XPathResult */
// end header

/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa;
atropa = {};
/**
 * Checks whether this class has been marked as unsupported and throws an 
 *  error if it has.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {String} errorMessage Optional. A custom error message. Defaults to
 *  atropa.data[className].error
 */
atropa.supportCheck = function (className, errorMessage) {
    "use strict";
    className = String(className);
    errorMessage = errorMessage || atropa.data[className].error;
    errorMessage = String(errorMessage);
    
    if(atropa.data[className].support === 'unsupported') {
        throw new Error(errorMessage);
    }
};
/**
 * Pushes a requirement check into atropa.data.requirements. The test
 *  tests whether the class is supported in this environment. Sets
 *  atropa.data[className]'s support to unsupported and error to errorMessage
 *  if the requirementFn returns false. The requirement checks will all be run
 *  after the library has loaded.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {Function} requirementFn A function to test whether or not the class
 *  is supported in this environment. If supported, returns true otherwise
 *  return false.
 * @param {String} errorMessage The error message to use when this class or its
 *  methods are called in unsupported environments. Defaults to:
 *  'The atropa.' + className + ' class is unsupported in this environment.';
 */
atropa.requires = function (className, requirementFn, errorMessage) {
    "use strict";
    var check = function () {
        var test = false;
        if(typeof className !== 'string') {
            throw new Error('atropa.requires requires the class name to be ' +
                'specified');
        }
        
        if(atropa.data[className] === undefined) {
            atropa.data[className] = {};
            
            if(typeof requirementFn !== 'function') {
                requirementFn = false;
            }
            errorMessage = errorMessage || 'The atropa.' + className +
                    ' class is unsupported in this environment.';
            try {
                test = requirementFn();
            } catch (e) {
                test = false;
            }
            
            atropa.data[className].error = errorMessage;
            
            if(test === false) {
                atropa.data[className].support = 'unsupported';
            }
        }
    };
    
    atropa.data.requirements.push(check);
};
/**
 * Container for gobal data related to the classes and functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for gobal data related to the classes and functions.
 */
atropa.data = {};

atropa.data.requirements = [];

atropa.nop = function nop () {
    "use strict";
    return null;
};
module.exports = atropa;


},{}],2:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

atropa.requires(
    'removeNodeByReference',
    function () {
        "use strict";
        if(document === undefined) {
            return false;
        }
        return true;
    }
);

/**
 * Removes DOM Nodes.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @function
 * @param {DOM Node} elementReference A reference to the DOM Node you want
 * to remove.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.removeNodeByReference">tests</a>
 */
atropa.removeNodeByReference = function (elementReference) {
    "use strict";
    atropa.supportCheck('removeNodeByReference');
    if(elementReference !== undefined) {
        elementReference.parentNode.removeChild(elementReference);
    }
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":1}],3:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Set default values for optional function parameters.
 * @example
 * <pre>
 *   // To set a default value for an optional parameter
 *   function(optionalArg) {
 *       var defaultVal = 'hello there!';
 *       optionalArg = atropa.setAsOptionalArg(defaultVal, optionalArg);
 *       return optionalArg;
 *   }
 * </pre>
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} defaultVal The default value to set.
 * @param {Mixed} optionalArg A reference to the optional argument.
 * @returns {Mixed} Returns the default value supplied when the optional
 * argument is undefined or null. Otherwise, the supplied optional argument
 * is returned.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.setAsOptionalArg">tests</a>
 */
atropa.setAsOptionalArg = function (defaultVal, optionalArg) {
    "use strict";
    if (optionalArg === undefined || optionalArg === null) {
        optionalArg = defaultVal;
    }
    return optionalArg;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":1}],4:[function(require,module,exports){
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

},{"../src/atropa-xpath.js":5}],5:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
atropa.setAsOptionalArg = require('atropa-setAsOptionalArg').setAsOptionalArg;
atropa.removeNodeByReference = require('atropa-removeNodeByReference').removeNodeByReference;
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa, XPathResult */
// end header


(function () {
    "use strict";
    atropa.requires(
        'xpath',
        function () {
            var supported = true;
            
            [
                window,
                document.evaluate
            ].forEach(function (prerequisite) {
                if(prerequisite === undefined) {
                    supported = false;
                }
            });
            return supported;
        }
    );
}());

/**
 * An Xpath toolkit for manipulating the DOM.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130313
 * @namespace An Xpath toolkit for manipulating the DOM.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.xpath">tests</a>
 */
atropa.xpath = {};
/**
 * Processes nodes from the DOM using an Xpath expression.
 * @example
 *   // Say you wanted to touch all the anchors and links in window.document
 *   var xpathExpression, callback;
 *   xpathExpression = './/a';
 *   callback = function(oneNode) {
 *       oneNode.touched = true;
 *   }
 *   atropa.xpath.processNodesByXpath(
 *       xpathExpression, document, document, callback);
 *   
 *   // Or say you have an iframe, with the id 'myFrame'. In the iframe there
 *   // is a div with the id myDiv.
 *   // Here is how you would remove all the anchors in that div.
 *   var myFrame, xpathExpression, contextNode, docref, callback;
 *   myFrame = document.getElementById('myFrame');
 *   docref = myFrame.contentWindow.document;
 *   contextNode = docref.getElementById('myDiv');
 *   xpathExpression = './/a';
 *   callback = function(oneNode) {
 *       atropa.removeNodeByReference(oneNode);
 *   }
 *   atropa.xpath.processNodesByXpath(
 *       xpathExpression, contextNode, docref, callback);
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130313
 * @param {String} xpathExpression An Xpath expression as a string
 * @param {DOM Node} contextNode Optional. The node which is to serve as the root
 * for the supplied Xpath expression. Defaults to whatever docref is.
 * If you are using a relative path such as <code>.//a</code> and, you only
 * want the anchors that are descendants of another element, you would
 * supply a reference to that element for this argument. When using a
 * context node, the docref argument must refer to the context node's
 * containing document.
 * @param {DOM Document} docref Optional. A reference to the document you
 * are searching, defaults to document. If you have created a separate
 * DOMDocument with the <code>atropa.HTMLParser</code>, an iframe, or by
 * some other means, you would put a reference to that document here to
 * indicate that you intend to use that document's root.
 * @param {Function} callback A function applied to every element found
 * using the supplied xpath expression. The callback receives a single
 * element as it's only argument.
 * @returns {Number} Returns the quantity of nodes processed.
 */
atropa.xpath.processNodesByXpath = function processNodesByXpath(
    xpathExpression, contextNode, docref, callback
) {
    "use strict";
    atropa.supportCheck('xpath');
    docref = atropa.setAsOptionalArg(document, docref);
    contextNode = atropa.setAsOptionalArg(docref, contextNode);
    var nodesSnapshot,
    nsl,
    i,
    nsi;
    nodesSnapshot = docref.evaluate(
        xpathExpression,
        contextNode,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
    );
    nsl = nodesSnapshot.snapshotLength;
    for (i = 0; i < nsl; i++) {
        nsi = nodesSnapshot.snapshotItem(i);
        callback(nsi);
    }
    return i;
};
/**
 * Removes nodes from the DOM using an Xpath expression.
 * @example
 *   // to remove all anchors with the class "oops" inside of any div in
 *   // document
 *   var xpathExpression = ".//div//a[@class='oops']";
 *   atropa.xpath.removeNodesByXpath(xpathExpression);
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130313
 * @param {String} xpathExpression An Xpath expression as a string
 * @param {DOM Node} contextNode Optional. The node which is to serve as the root
 * for the supplied Xpath expression. Defaults to whatever docref is.
 * @param {DOM Document} docref Optional. A reference to the document you
 * are searching, defaults to document.
 * @returns {Number} Returns the quantity of nodes removed.
 * @see atropa.xpath.processNodesByXpath for more information.
 */
atropa.xpath.removeNodesByXpath = function removeNodesByXpath(
    xpathExpression, contextNode, docref
) {
    "use strict";
    atropa.supportCheck('xpath');
    var count;
    count = atropa.xpath.processNodesByXpath(
        xpathExpression,
        contextNode,
        docref,
        function (element) {
            atropa.removeNodeByReference(element);
        }
    );
    return count;
};
/**
 * Selects nodes from the DOM using an Xpath expression.
 * @example
 * <pre>
 *   // To get all the elements in the document with a src attribute:
 *   var srcElements = atropa.xpath.getNodesByXpath('[@src]');
 * </pre>
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130313
 * @param {String} xpathExpression An Xpath expression as a string
 * @param {DOM Node} contextNode Optional. The node which is to serve as the root
 * for the supplied Xpath expression. Defaults to the document's root node.
 * @param {DOM Document} docref Optional. A reference to the document you
 * are searching, defaults to document.
 * @returns {Array} Returns an array whose elements are DOM Nodes
 * @see atropa.xpath.processNodesByXpath for more information.
 */
atropa.xpath.getNodesByXpath = function getNodesByXpath(
    xpathExpression, contextNode, docref
) {
    'use strict';
    atropa.supportCheck('xpath');
    var elementReferences;
    elementReferences = [];
    atropa.xpath.processNodesByXpath(
        xpathExpression,
        contextNode,
        docref,
        function (element) {
            elementReferences.push(element);
        }
    );
    return elementReferences;
};
/**
 * Escapes single quotes (apostrope) in Xpath queries.
 * @example
 * <pre>
 *  // this is useful for using arbitrary strings in your queries.
 *  var arbStr, escapedStr, xpathExpression, foundNodes;
 *  arbStr = "Jimmy ain't never said \"Shur\" Why? I don't know!";
 *  escapedStr = atropa.xpath.escapeQuotesXpath(arbStr);
 *  // produces: concat('Jimmy ain', "'", 't never said "Shur" Why? I don', "'",
 *  // 't know!')
 *  // it is much easier to deal with the variable name than it is to deal with
 *  // all those quotes and commas!
 *  xpathExpression = './/p[contains(text(),' + escapedStr + ')]';
 *  foundNodes = atropa.xpath.getNodesByXpath(xpathExpression);
 *  // found nodes will contain the p elements where the text was matched.
 * </pre>
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {String} string An Xpath query
 * @returns {String} Returns a string representing a concat function in Xpath
 * which will effectively work in escaping quotes in your xpath query.
 */
atropa.xpath.escapeQuotesXpath = function escapeQuotesXpath(string) {
    'use strict';
    string = string.replace(/\'/g, "', \"'\", '");
    string = string.replace(/^(.*)$/g, "concat('$1')");
    return string;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":1,"atropa-removeNodeByReference":2,"atropa-setAsOptionalArg":3}]},{},[4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1oZWFkZXJcXHNyY1xcYXRyb3BhLWhlYWRlci5qcyIsIkM6XFxVc2Vyc1xca2FzdG9yXFxEZXNrdG9wXFxleHBlcmltZW50c1xcYXRyb3BhLWNvbXBvbmVudHNcXG5vZGVfbW9kdWxlc1xcYXRyb3BhLXJlbW92ZU5vZGVCeVJlZmVyZW5jZVxcc3JjXFxhdHJvcGEtcmVtb3ZlTm9kZUJ5UmVmZXJlbmNlLmpzIiwiQzpcXFVzZXJzXFxrYXN0b3JcXERlc2t0b3BcXGV4cGVyaW1lbnRzXFxhdHJvcGEtY29tcG9uZW50c1xcbm9kZV9tb2R1bGVzXFxhdHJvcGEtc2V0QXNPcHRpb25hbEFyZ1xcc3JjXFxhdHJvcGEtc2V0QXNPcHRpb25hbEFyZy5qcyIsIkM6XFxVc2Vyc1xca2FzdG9yXFxEZXNrdG9wXFxleHBlcmltZW50c1xcYXRyb3BhLWNvbXBvbmVudHNcXG5vZGVfbW9kdWxlc1xcYXRyb3BhLXhwYXRoXFxkZXZcXGJyb3dzZXJNYWluLmpzIiwiQzpcXFVzZXJzXFxrYXN0b3JcXERlc2t0b3BcXGV4cGVyaW1lbnRzXFxhdHJvcGEtY29tcG9uZW50c1xcbm9kZV9tb2R1bGVzXFxhdHJvcGEteHBhdGhcXHNyY1xcYXRyb3BhLXhwYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGF0cm9wYSA9IHt9O1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2RvY3MvdnNkb2MvT3BlbkxheWVyc0FsbC5qc1wiLz5cclxuXHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBYUGF0aFJlc3VsdCAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYTtcclxuYXRyb3BhID0ge307XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciB0aGlzIGNsYXNzIGhhcyBiZWVuIG1hcmtlZCBhcyB1bnN1cHBvcnRlZCBhbmQgdGhyb3dzIGFuIFxyXG4gKiAgZXJyb3IgaWYgaXQgaGFzLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAzMDhcclxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvck1lc3NhZ2UgT3B0aW9uYWwuIEEgY3VzdG9tIGVycm9yIG1lc3NhZ2UuIERlZmF1bHRzIHRvXHJcbiAqICBhdHJvcGEuZGF0YVtjbGFzc05hbWVdLmVycm9yXHJcbiAqL1xyXG5hdHJvcGEuc3VwcG9ydENoZWNrID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGNsYXNzTmFtZSA9IFN0cmluZyhjbGFzc05hbWUpO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8IGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uZXJyb3I7XHJcbiAgICBlcnJvck1lc3NhZ2UgPSBTdHJpbmcoZXJyb3JNZXNzYWdlKTtcclxuICAgIFxyXG4gICAgaWYoYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5zdXBwb3J0ID09PSAndW5zdXBwb3J0ZWQnKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBQdXNoZXMgYSByZXF1aXJlbWVudCBjaGVjayBpbnRvIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy4gVGhlIHRlc3RcclxuICogIHRlc3RzIHdoZXRoZXIgdGhlIGNsYXNzIGlzIHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50LiBTZXRzXHJcbiAqICBhdHJvcGEuZGF0YVtjbGFzc05hbWVdJ3Mgc3VwcG9ydCB0byB1bnN1cHBvcnRlZCBhbmQgZXJyb3IgdG8gZXJyb3JNZXNzYWdlXHJcbiAqICBpZiB0aGUgcmVxdWlyZW1lbnRGbiByZXR1cm5zIGZhbHNlLiBUaGUgcmVxdWlyZW1lbnQgY2hlY2tzIHdpbGwgYWxsIGJlIHJ1blxyXG4gKiAgYWZ0ZXIgdGhlIGxpYnJhcnkgaGFzIGxvYWRlZC5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzA4XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXF1aXJlbWVudEZuIEEgZnVuY3Rpb24gdG8gdGVzdCB3aGV0aGVyIG9yIG5vdCB0aGUgY2xhc3NcclxuICogIGlzIHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50LiBJZiBzdXBwb3J0ZWQsIHJldHVybnMgdHJ1ZSBvdGhlcndpc2VcclxuICogIHJldHVybiBmYWxzZS5cclxuICogQHBhcmFtIHtTdHJpbmd9IGVycm9yTWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2Ugd2hlbiB0aGlzIGNsYXNzIG9yIGl0c1xyXG4gKiAgbWV0aG9kcyBhcmUgY2FsbGVkIGluIHVuc3VwcG9ydGVkIGVudmlyb25tZW50cy4gRGVmYXVsdHMgdG86XHJcbiAqICAnVGhlIGF0cm9wYS4nICsgY2xhc3NOYW1lICsgJyBjbGFzcyBpcyB1bnN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50Lic7XHJcbiAqL1xyXG5hdHJvcGEucmVxdWlyZXMgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCByZXF1aXJlbWVudEZuLCBlcnJvck1lc3NhZ2UpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIGNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYodHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHJvcGEucmVxdWlyZXMgcmVxdWlyZXMgdGhlIGNsYXNzIG5hbWUgdG8gYmUgJyArXHJcbiAgICAgICAgICAgICAgICAnc3BlY2lmaWVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhdHJvcGEuZGF0YVtjbGFzc05hbWVdID0ge307XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgcmVxdWlyZW1lbnRGbiAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRGbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCAnVGhlIGF0cm9wYS4nICsgY2xhc3NOYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAnIGNsYXNzIGlzIHVuc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQuJztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRlc3QgPSByZXF1aXJlbWVudEZuKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5lcnJvciA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRlc3QgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBhdHJvcGEuZGF0YVtjbGFzc05hbWVdLnN1cHBvcnQgPSAndW5zdXBwb3J0ZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLnB1c2goY2hlY2spO1xyXG59O1xyXG4vKipcclxuICogQ29udGFpbmVyIGZvciBnb2JhbCBkYXRhIHJlbGF0ZWQgdG8gdGhlIGNsYXNzZXMgYW5kIGZ1bmN0aW9ucy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEBuYW1lc3BhY2UgQ29udGFpbmVyIGZvciBnb2JhbCBkYXRhIHJlbGF0ZWQgdG8gdGhlIGNsYXNzZXMgYW5kIGZ1bmN0aW9ucy5cclxuICovXHJcbmF0cm9wYS5kYXRhID0ge307XHJcblxyXG5hdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMgPSBbXTtcclxuXHJcbmF0cm9wYS5ub3AgPSBmdW5jdGlvbiBub3AgKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBhdHJvcGE7XHJcblxyXG4iLCIvKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYSA9IHJlcXVpcmUoJ2F0cm9wYS1oZWFkZXInKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2RvY3MvdnNkb2MvT3BlbkxheWVyc0FsbC5qc1wiLz5cclxuLypqc2xpbnRcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG5hdHJvcGEucmVxdWlyZXMoXHJcbiAgICAncmVtb3ZlTm9kZUJ5UmVmZXJlbmNlJyxcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICBpZihkb2N1bWVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbik7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBET00gTm9kZXMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtET00gTm9kZX0gZWxlbWVudFJlZmVyZW5jZSBBIHJlZmVyZW5jZSB0byB0aGUgRE9NIE5vZGUgeW91IHdhbnRcclxuICogdG8gcmVtb3ZlLlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi8uLi9BdHJvcGFUb29sYm94VGVzdHMuaHRtbD9zcGVjPWF0cm9wYS5yZW1vdmVOb2RlQnlSZWZlcmVuY2VcIj50ZXN0czwvYT5cclxuICovXHJcbmF0cm9wYS5yZW1vdmVOb2RlQnlSZWZlcmVuY2UgPSBmdW5jdGlvbiAoZWxlbWVudFJlZmVyZW5jZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBhdHJvcGEuc3VwcG9ydENoZWNrKCdyZW1vdmVOb2RlQnlSZWZlcmVuY2UnKTtcclxuICAgIGlmKGVsZW1lbnRSZWZlcmVuY2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsZW1lbnRSZWZlcmVuY2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50UmVmZXJlbmNlKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcbndoaWxlKGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMucG9wKCkoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGF0cm9wYTtcclxuIiwiLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGEgPSByZXF1aXJlKCdhdHJvcGEtaGVhZGVyJyk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBhdHJvcGEgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIFNldCBkZWZhdWx0IHZhbHVlcyBmb3Igb3B0aW9uYWwgZnVuY3Rpb24gcGFyYW1ldGVycy5cclxuICogQGV4YW1wbGVcclxuICogPHByZT5cclxuICogICAvLyBUbyBzZXQgYSBkZWZhdWx0IHZhbHVlIGZvciBhbiBvcHRpb25hbCBwYXJhbWV0ZXJcclxuICogICBmdW5jdGlvbihvcHRpb25hbEFyZykge1xyXG4gKiAgICAgICB2YXIgZGVmYXVsdFZhbCA9ICdoZWxsbyB0aGVyZSEnO1xyXG4gKiAgICAgICBvcHRpb25hbEFyZyA9IGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnKGRlZmF1bHRWYWwsIG9wdGlvbmFsQXJnKTtcclxuICogICAgICAgcmV0dXJuIG9wdGlvbmFsQXJnO1xyXG4gKiAgIH1cclxuICogPC9wcmU+XHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge01peGVkfSBkZWZhdWx0VmFsIFRoZSBkZWZhdWx0IHZhbHVlIHRvIHNldC5cclxuICogQHBhcmFtIHtNaXhlZH0gb3B0aW9uYWxBcmcgQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbmFsIGFyZ3VtZW50LlxyXG4gKiBAcmV0dXJucyB7TWl4ZWR9IFJldHVybnMgdGhlIGRlZmF1bHQgdmFsdWUgc3VwcGxpZWQgd2hlbiB0aGUgb3B0aW9uYWxcclxuICogYXJndW1lbnQgaXMgdW5kZWZpbmVkIG9yIG51bGwuIE90aGVyd2lzZSwgdGhlIHN1cHBsaWVkIG9wdGlvbmFsIGFyZ3VtZW50XHJcbiAqIGlzIHJldHVybmVkLlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi8uLi9BdHJvcGFUb29sYm94VGVzdHMuaHRtbD9zcGVjPWF0cm9wYS5zZXRBc09wdGlvbmFsQXJnXCI+dGVzdHM8L2E+XHJcbiAqL1xyXG5hdHJvcGEuc2V0QXNPcHRpb25hbEFyZyA9IGZ1bmN0aW9uIChkZWZhdWx0VmFsLCBvcHRpb25hbEFyZykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBpZiAob3B0aW9uYWxBcmcgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25hbEFyZyA9PT0gbnVsbCkge1xyXG4gICAgICAgIG9wdGlvbmFsQXJnID0gZGVmYXVsdFZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiBvcHRpb25hbEFyZztcclxufTtcclxuXHJcblxyXG5cclxuXHJcbndoaWxlKGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMucG9wKCkoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGF0cm9wYTtcclxuIiwidmFyIHhwYXRoID0gcmVxdWlyZSgnLi4vc3JjL2F0cm9wYS14cGF0aC5qcycpO1xyXG5cclxudHJ5IHtcclxuICAgIE9iamVjdC5rZXlzKHhwYXRoKS5mb3JFYWNoKFxyXG4gICAgICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGlmKCFhdHJvcGFbcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIGF0cm9wYVtwcm9wXSA9IHhwYXRoW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSBjYXRjaCAoaWdub3JlKSB7XHJcbiAgICBhdHJvcGEgPSByZXF1aXJlKCcuLi9zcmMvYXRyb3BhLXhwYXRoLmpzJyk7XHJcbn1cclxuXHJcbk9iamVjdC5rZXlzKHhwYXRoLmRhdGEpLmZpbHRlcihcclxuICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3AgIT09ICdyZXF1aXJlbWVudHMnO1xyXG4gICAgfVxyXG4pLmZvckVhY2goXHJcbiAgICBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIGF0cm9wYS5kYXRhW3Byb3BdID0geHBhdGguZGF0YVtwcm9wXTtcclxuICAgIH1cclxuKTtcclxuIiwiLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGEgPSByZXF1aXJlKCdhdHJvcGEtaGVhZGVyJyk7XHJcbmF0cm9wYS5zZXRBc09wdGlvbmFsQXJnID0gcmVxdWlyZSgnYXRyb3BhLXNldEFzT3B0aW9uYWxBcmcnKS5zZXRBc09wdGlvbmFsQXJnO1xyXG5hdHJvcGEucmVtb3ZlTm9kZUJ5UmVmZXJlbmNlID0gcmVxdWlyZSgnYXRyb3BhLXJlbW92ZU5vZGVCeVJlZmVyZW5jZScpLnJlbW92ZU5vZGVCeVJlZmVyZW5jZTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2RvY3MvdnNkb2MvT3BlbkxheWVyc0FsbC5qc1wiLz5cclxuLypqc2xpbnRcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSwgWFBhdGhSZXN1bHQgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGF0cm9wYS5yZXF1aXJlcyhcclxuICAgICAgICAneHBhdGgnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHN1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB3aW5kb3csXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ldmFsdWF0ZVxyXG4gICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKHByZXJlcXVpc2l0ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYocHJlcmVxdWlzaXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSgpKTtcclxuXHJcbi8qKlxyXG4gKiBBbiBYcGF0aCB0b29sa2l0IGZvciBtYW5pcHVsYXRpbmcgdGhlIERPTS5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzEzXHJcbiAqIEBuYW1lc3BhY2UgQW4gWHBhdGggdG9vbGtpdCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBET00uXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLnhwYXRoXCI+dGVzdHM8L2E+XHJcbiAqL1xyXG5hdHJvcGEueHBhdGggPSB7fTtcclxuLyoqXHJcbiAqIFByb2Nlc3NlcyBub2RlcyBmcm9tIHRoZSBET00gdXNpbmcgYW4gWHBhdGggZXhwcmVzc2lvbi5cclxuICogQGV4YW1wbGVcclxuICogICAvLyBTYXkgeW91IHdhbnRlZCB0byB0b3VjaCBhbGwgdGhlIGFuY2hvcnMgYW5kIGxpbmtzIGluIHdpbmRvdy5kb2N1bWVudFxyXG4gKiAgIHZhciB4cGF0aEV4cHJlc3Npb24sIGNhbGxiYWNrO1xyXG4gKiAgIHhwYXRoRXhwcmVzc2lvbiA9ICcuLy9hJztcclxuICogICBjYWxsYmFjayA9IGZ1bmN0aW9uKG9uZU5vZGUpIHtcclxuICogICAgICAgb25lTm9kZS50b3VjaGVkID0gdHJ1ZTtcclxuICogICB9XHJcbiAqICAgYXRyb3BhLnhwYXRoLnByb2Nlc3NOb2Rlc0J5WHBhdGgoXHJcbiAqICAgICAgIHhwYXRoRXhwcmVzc2lvbiwgZG9jdW1lbnQsIGRvY3VtZW50LCBjYWxsYmFjayk7XHJcbiAqICAgXHJcbiAqICAgLy8gT3Igc2F5IHlvdSBoYXZlIGFuIGlmcmFtZSwgd2l0aCB0aGUgaWQgJ215RnJhbWUnLiBJbiB0aGUgaWZyYW1lIHRoZXJlXHJcbiAqICAgLy8gaXMgYSBkaXYgd2l0aCB0aGUgaWQgbXlEaXYuXHJcbiAqICAgLy8gSGVyZSBpcyBob3cgeW91IHdvdWxkIHJlbW92ZSBhbGwgdGhlIGFuY2hvcnMgaW4gdGhhdCBkaXYuXHJcbiAqICAgdmFyIG15RnJhbWUsIHhwYXRoRXhwcmVzc2lvbiwgY29udGV4dE5vZGUsIGRvY3JlZiwgY2FsbGJhY2s7XHJcbiAqICAgbXlGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUZyYW1lJyk7XHJcbiAqICAgZG9jcmVmID0gbXlGcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gKiAgIGNvbnRleHROb2RlID0gZG9jcmVmLmdldEVsZW1lbnRCeUlkKCdteURpdicpO1xyXG4gKiAgIHhwYXRoRXhwcmVzc2lvbiA9ICcuLy9hJztcclxuICogICBjYWxsYmFjayA9IGZ1bmN0aW9uKG9uZU5vZGUpIHtcclxuICogICAgICAgYXRyb3BhLnJlbW92ZU5vZGVCeVJlZmVyZW5jZShvbmVOb2RlKTtcclxuICogICB9XHJcbiAqICAgYXRyb3BhLnhwYXRoLnByb2Nlc3NOb2Rlc0J5WHBhdGgoXHJcbiAqICAgICAgIHhwYXRoRXhwcmVzc2lvbiwgY29udGV4dE5vZGUsIGRvY3JlZiwgY2FsbGJhY2spO1xyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAzMTNcclxuICogQHBhcmFtIHtTdHJpbmd9IHhwYXRoRXhwcmVzc2lvbiBBbiBYcGF0aCBleHByZXNzaW9uIGFzIGEgc3RyaW5nXHJcbiAqIEBwYXJhbSB7RE9NIE5vZGV9IGNvbnRleHROb2RlIE9wdGlvbmFsLiBUaGUgbm9kZSB3aGljaCBpcyB0byBzZXJ2ZSBhcyB0aGUgcm9vdFxyXG4gKiBmb3IgdGhlIHN1cHBsaWVkIFhwYXRoIGV4cHJlc3Npb24uIERlZmF1bHRzIHRvIHdoYXRldmVyIGRvY3JlZiBpcy5cclxuICogSWYgeW91IGFyZSB1c2luZyBhIHJlbGF0aXZlIHBhdGggc3VjaCBhcyA8Y29kZT4uLy9hPC9jb2RlPiBhbmQsIHlvdSBvbmx5XHJcbiAqIHdhbnQgdGhlIGFuY2hvcnMgdGhhdCBhcmUgZGVzY2VuZGFudHMgb2YgYW5vdGhlciBlbGVtZW50LCB5b3Ugd291bGRcclxuICogc3VwcGx5IGEgcmVmZXJlbmNlIHRvIHRoYXQgZWxlbWVudCBmb3IgdGhpcyBhcmd1bWVudC4gV2hlbiB1c2luZyBhXHJcbiAqIGNvbnRleHQgbm9kZSwgdGhlIGRvY3JlZiBhcmd1bWVudCBtdXN0IHJlZmVyIHRvIHRoZSBjb250ZXh0IG5vZGUnc1xyXG4gKiBjb250YWluaW5nIGRvY3VtZW50LlxyXG4gKiBAcGFyYW0ge0RPTSBEb2N1bWVudH0gZG9jcmVmIE9wdGlvbmFsLiBBIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgeW91XHJcbiAqIGFyZSBzZWFyY2hpbmcsIGRlZmF1bHRzIHRvIGRvY3VtZW50LiBJZiB5b3UgaGF2ZSBjcmVhdGVkIGEgc2VwYXJhdGVcclxuICogRE9NRG9jdW1lbnQgd2l0aCB0aGUgPGNvZGU+YXRyb3BhLkhUTUxQYXJzZXI8L2NvZGU+LCBhbiBpZnJhbWUsIG9yIGJ5XHJcbiAqIHNvbWUgb3RoZXIgbWVhbnMsIHlvdSB3b3VsZCBwdXQgYSByZWZlcmVuY2UgdG8gdGhhdCBkb2N1bWVudCBoZXJlIHRvXHJcbiAqIGluZGljYXRlIHRoYXQgeW91IGludGVuZCB0byB1c2UgdGhhdCBkb2N1bWVudCdzIHJvb3QuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEEgZnVuY3Rpb24gYXBwbGllZCB0byBldmVyeSBlbGVtZW50IGZvdW5kXHJcbiAqIHVzaW5nIHRoZSBzdXBwbGllZCB4cGF0aCBleHByZXNzaW9uLiBUaGUgY2FsbGJhY2sgcmVjZWl2ZXMgYSBzaW5nbGVcclxuICogZWxlbWVudCBhcyBpdCdzIG9ubHkgYXJndW1lbnQuXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgdGhlIHF1YW50aXR5IG9mIG5vZGVzIHByb2Nlc3NlZC5cclxuICovXHJcbmF0cm9wYS54cGF0aC5wcm9jZXNzTm9kZXNCeVhwYXRoID0gZnVuY3Rpb24gcHJvY2Vzc05vZGVzQnlYcGF0aChcclxuICAgIHhwYXRoRXhwcmVzc2lvbiwgY29udGV4dE5vZGUsIGRvY3JlZiwgY2FsbGJhY2tcclxuKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGF0cm9wYS5zdXBwb3J0Q2hlY2soJ3hwYXRoJyk7XHJcbiAgICBkb2NyZWYgPSBhdHJvcGEuc2V0QXNPcHRpb25hbEFyZyhkb2N1bWVudCwgZG9jcmVmKTtcclxuICAgIGNvbnRleHROb2RlID0gYXRyb3BhLnNldEFzT3B0aW9uYWxBcmcoZG9jcmVmLCBjb250ZXh0Tm9kZSk7XHJcbiAgICB2YXIgbm9kZXNTbmFwc2hvdCxcclxuICAgIG5zbCxcclxuICAgIGksXHJcbiAgICBuc2k7XHJcbiAgICBub2Rlc1NuYXBzaG90ID0gZG9jcmVmLmV2YWx1YXRlKFxyXG4gICAgICAgIHhwYXRoRXhwcmVzc2lvbixcclxuICAgICAgICBjb250ZXh0Tm9kZSxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFhQYXRoUmVzdWx0Lk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLFxyXG4gICAgICAgIG51bGxcclxuICAgICk7XHJcbiAgICBuc2wgPSBub2Rlc1NuYXBzaG90LnNuYXBzaG90TGVuZ3RoO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IG5zbDsgaSsrKSB7XHJcbiAgICAgICAgbnNpID0gbm9kZXNTbmFwc2hvdC5zbmFwc2hvdEl0ZW0oaSk7XHJcbiAgICAgICAgY2FsbGJhY2sobnNpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpO1xyXG59O1xyXG4vKipcclxuICogUmVtb3ZlcyBub2RlcyBmcm9tIHRoZSBET00gdXNpbmcgYW4gWHBhdGggZXhwcmVzc2lvbi5cclxuICogQGV4YW1wbGVcclxuICogICAvLyB0byByZW1vdmUgYWxsIGFuY2hvcnMgd2l0aCB0aGUgY2xhc3MgXCJvb3BzXCIgaW5zaWRlIG9mIGFueSBkaXYgaW5cclxuICogICAvLyBkb2N1bWVudFxyXG4gKiAgIHZhciB4cGF0aEV4cHJlc3Npb24gPSBcIi4vL2Rpdi8vYVtAY2xhc3M9J29vcHMnXVwiO1xyXG4gKiAgIGF0cm9wYS54cGF0aC5yZW1vdmVOb2Rlc0J5WHBhdGgoeHBhdGhFeHByZXNzaW9uKTtcclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzEzXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB4cGF0aEV4cHJlc3Npb24gQW4gWHBhdGggZXhwcmVzc2lvbiBhcyBhIHN0cmluZ1xyXG4gKiBAcGFyYW0ge0RPTSBOb2RlfSBjb250ZXh0Tm9kZSBPcHRpb25hbC4gVGhlIG5vZGUgd2hpY2ggaXMgdG8gc2VydmUgYXMgdGhlIHJvb3RcclxuICogZm9yIHRoZSBzdXBwbGllZCBYcGF0aCBleHByZXNzaW9uLiBEZWZhdWx0cyB0byB3aGF0ZXZlciBkb2NyZWYgaXMuXHJcbiAqIEBwYXJhbSB7RE9NIERvY3VtZW50fSBkb2NyZWYgT3B0aW9uYWwuIEEgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCB5b3VcclxuICogYXJlIHNlYXJjaGluZywgZGVmYXVsdHMgdG8gZG9jdW1lbnQuXHJcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgdGhlIHF1YW50aXR5IG9mIG5vZGVzIHJlbW92ZWQuXHJcbiAqIEBzZWUgYXRyb3BhLnhwYXRoLnByb2Nlc3NOb2Rlc0J5WHBhdGggZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5hdHJvcGEueHBhdGgucmVtb3ZlTm9kZXNCeVhwYXRoID0gZnVuY3Rpb24gcmVtb3ZlTm9kZXNCeVhwYXRoKFxyXG4gICAgeHBhdGhFeHByZXNzaW9uLCBjb250ZXh0Tm9kZSwgZG9jcmVmXHJcbikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBhdHJvcGEuc3VwcG9ydENoZWNrKCd4cGF0aCcpO1xyXG4gICAgdmFyIGNvdW50O1xyXG4gICAgY291bnQgPSBhdHJvcGEueHBhdGgucHJvY2Vzc05vZGVzQnlYcGF0aChcclxuICAgICAgICB4cGF0aEV4cHJlc3Npb24sXHJcbiAgICAgICAgY29udGV4dE5vZGUsXHJcbiAgICAgICAgZG9jcmVmLFxyXG4gICAgICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGF0cm9wYS5yZW1vdmVOb2RlQnlSZWZlcmVuY2UoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBjb3VudDtcclxufTtcclxuLyoqXHJcbiAqIFNlbGVjdHMgbm9kZXMgZnJvbSB0aGUgRE9NIHVzaW5nIGFuIFhwYXRoIGV4cHJlc3Npb24uXHJcbiAqIEBleGFtcGxlXHJcbiAqIDxwcmU+XHJcbiAqICAgLy8gVG8gZ2V0IGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGRvY3VtZW50IHdpdGggYSBzcmMgYXR0cmlidXRlOlxyXG4gKiAgIHZhciBzcmNFbGVtZW50cyA9IGF0cm9wYS54cGF0aC5nZXROb2Rlc0J5WHBhdGgoJ1tAc3JjXScpO1xyXG4gKiA8L3ByZT5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzEzXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB4cGF0aEV4cHJlc3Npb24gQW4gWHBhdGggZXhwcmVzc2lvbiBhcyBhIHN0cmluZ1xyXG4gKiBAcGFyYW0ge0RPTSBOb2RlfSBjb250ZXh0Tm9kZSBPcHRpb25hbC4gVGhlIG5vZGUgd2hpY2ggaXMgdG8gc2VydmUgYXMgdGhlIHJvb3RcclxuICogZm9yIHRoZSBzdXBwbGllZCBYcGF0aCBleHByZXNzaW9uLiBEZWZhdWx0cyB0byB0aGUgZG9jdW1lbnQncyByb290IG5vZGUuXHJcbiAqIEBwYXJhbSB7RE9NIERvY3VtZW50fSBkb2NyZWYgT3B0aW9uYWwuIEEgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCB5b3VcclxuICogYXJlIHNlYXJjaGluZywgZGVmYXVsdHMgdG8gZG9jdW1lbnQuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSB3aG9zZSBlbGVtZW50cyBhcmUgRE9NIE5vZGVzXHJcbiAqIEBzZWUgYXRyb3BhLnhwYXRoLnByb2Nlc3NOb2Rlc0J5WHBhdGggZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5hdHJvcGEueHBhdGguZ2V0Tm9kZXNCeVhwYXRoID0gZnVuY3Rpb24gZ2V0Tm9kZXNCeVhwYXRoKFxyXG4gICAgeHBhdGhFeHByZXNzaW9uLCBjb250ZXh0Tm9kZSwgZG9jcmVmXHJcbikge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgYXRyb3BhLnN1cHBvcnRDaGVjaygneHBhdGgnKTtcclxuICAgIHZhciBlbGVtZW50UmVmZXJlbmNlcztcclxuICAgIGVsZW1lbnRSZWZlcmVuY2VzID0gW107XHJcbiAgICBhdHJvcGEueHBhdGgucHJvY2Vzc05vZGVzQnlYcGF0aChcclxuICAgICAgICB4cGF0aEV4cHJlc3Npb24sXHJcbiAgICAgICAgY29udGV4dE5vZGUsXHJcbiAgICAgICAgZG9jcmVmLFxyXG4gICAgICAgIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRSZWZlcmVuY2VzLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBlbGVtZW50UmVmZXJlbmNlcztcclxufTtcclxuLyoqXHJcbiAqIEVzY2FwZXMgc2luZ2xlIHF1b3RlcyAoYXBvc3Ryb3BlKSBpbiBYcGF0aCBxdWVyaWVzLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiA8cHJlPlxyXG4gKiAgLy8gdGhpcyBpcyB1c2VmdWwgZm9yIHVzaW5nIGFyYml0cmFyeSBzdHJpbmdzIGluIHlvdXIgcXVlcmllcy5cclxuICogIHZhciBhcmJTdHIsIGVzY2FwZWRTdHIsIHhwYXRoRXhwcmVzc2lvbiwgZm91bmROb2RlcztcclxuICogIGFyYlN0ciA9IFwiSmltbXkgYWluJ3QgbmV2ZXIgc2FpZCBcXFwiU2h1clxcXCIgV2h5PyBJIGRvbid0IGtub3chXCI7XHJcbiAqICBlc2NhcGVkU3RyID0gYXRyb3BhLnhwYXRoLmVzY2FwZVF1b3Rlc1hwYXRoKGFyYlN0cik7XHJcbiAqICAvLyBwcm9kdWNlczogY29uY2F0KCdKaW1teSBhaW4nLCBcIidcIiwgJ3QgbmV2ZXIgc2FpZCBcIlNodXJcIiBXaHk/IEkgZG9uJywgXCInXCIsXHJcbiAqICAvLyAndCBrbm93IScpXHJcbiAqICAvLyBpdCBpcyBtdWNoIGVhc2llciB0byBkZWFsIHdpdGggdGhlIHZhcmlhYmxlIG5hbWUgdGhhbiBpdCBpcyB0byBkZWFsIHdpdGhcclxuICogIC8vIGFsbCB0aG9zZSBxdW90ZXMgYW5kIGNvbW1hcyFcclxuICogIHhwYXRoRXhwcmVzc2lvbiA9ICcuLy9wW2NvbnRhaW5zKHRleHQoKSwnICsgZXNjYXBlZFN0ciArICcpXSc7XHJcbiAqICBmb3VuZE5vZGVzID0gYXRyb3BhLnhwYXRoLmdldE5vZGVzQnlYcGF0aCh4cGF0aEV4cHJlc3Npb24pO1xyXG4gKiAgLy8gZm91bmQgbm9kZXMgd2lsbCBjb250YWluIHRoZSBwIGVsZW1lbnRzIHdoZXJlIHRoZSB0ZXh0IHdhcyBtYXRjaGVkLlxyXG4gKiA8L3ByZT5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgQW4gWHBhdGggcXVlcnlcclxuICogQHJldHVybnMge1N0cmluZ30gUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBjb25jYXQgZnVuY3Rpb24gaW4gWHBhdGhcclxuICogd2hpY2ggd2lsbCBlZmZlY3RpdmVseSB3b3JrIGluIGVzY2FwaW5nIHF1b3RlcyBpbiB5b3VyIHhwYXRoIHF1ZXJ5LlxyXG4gKi9cclxuYXRyb3BhLnhwYXRoLmVzY2FwZVF1b3Rlc1hwYXRoID0gZnVuY3Rpb24gZXNjYXBlUXVvdGVzWHBhdGgoc3RyaW5nKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFwnL2csIFwiJywgXFxcIidcXFwiLCAnXCIpO1xyXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL14oLiopJC9nLCBcImNvbmNhdCgnJDEnKVwiKTtcclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG53aGlsZShhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLnBvcCgpKCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhdHJvcGE7XHJcbiJdfQ==
;