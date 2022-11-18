(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../src/atropa-xpath.js":5}],2:[function(require,module,exports){
/// <reference path="../docs/vsdoc/OpenLayersAll.js"/>
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
var atropa = {};
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


},{}],3:[function(require,module,exports){
/// <reference path="../docs/vsdoc/OpenLayersAll.js"/>
var atropa = require('atropa-header');
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

},{"atropa-header":2}],4:[function(require,module,exports){
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
var atropa = require('atropa-header');
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

},{"atropa-header":2}],5:[function(require,module,exports){
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    node: true
*/
var atropa = require('atropa-header');
atropa.setAsOptionalArg = require('atropa-setAsOptionalArg').setAsOptionalArg;
atropa.removeNodeByReference = require('atropa-removeNodeByReference').removeNodeByReference;
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

},{"atropa-header":2,"atropa-removeNodeByReference":3,"atropa-setAsOptionalArg":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvYnJvd3Nlck1haW4uanMiLCJub2RlX21vZHVsZXMvYXRyb3BhLWhlYWRlci9zcmMvYXRyb3BhLWhlYWRlci5qcyIsIm5vZGVfbW9kdWxlcy9hdHJvcGEtcmVtb3ZlTm9kZUJ5UmVmZXJlbmNlL3NyYy9hdHJvcGEtcmVtb3ZlTm9kZUJ5UmVmZXJlbmNlLmpzIiwibm9kZV9tb2R1bGVzL2F0cm9wYS1zZXRBc09wdGlvbmFsQXJnL3NyYy9hdHJvcGEtc2V0QXNPcHRpb25hbEFyZy5qcyIsInNyYy9hdHJvcGEteHBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciB4cGF0aCA9IHJlcXVpcmUoJy4uL3NyYy9hdHJvcGEteHBhdGguanMnKTtcclxuXHJcbnRyeSB7XHJcbiAgICBPYmplY3Qua2V5cyh4cGF0aCkuZm9yRWFjaChcclxuICAgICAgICBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgICBpZighYXRyb3BhW3Byb3BdKSB7XHJcbiAgICAgICAgICAgICAgICBhdHJvcGFbcHJvcF0gPSB4cGF0aFtwcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0gY2F0Y2ggKGlnbm9yZSkge1xyXG4gICAgYXRyb3BhID0gcmVxdWlyZSgnLi4vc3JjL2F0cm9wYS14cGF0aC5qcycpO1xyXG59XHJcblxyXG5PYmplY3Qua2V5cyh4cGF0aC5kYXRhKS5maWx0ZXIoXHJcbiAgICBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIHJldHVybiBwcm9wICE9PSAncmVxdWlyZW1lbnRzJztcclxuICAgIH1cclxuKS5mb3JFYWNoKFxyXG4gICAgZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICBhdHJvcGEuZGF0YVtwcm9wXSA9IHhwYXRoLmRhdGFbcHJvcF07XHJcbiAgICB9XHJcbik7XHJcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBYUGF0aFJlc3VsdCAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYSA9IHt9O1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhpcyBjbGFzcyBoYXMgYmVlbiBtYXJrZWQgYXMgdW5zdXBwb3J0ZWQgYW5kIHRocm93cyBhbiBcclxuICogIGVycm9yIGlmIGl0IGhhcy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzA4XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhlIG5hbWUgb2YgdGhlIGNsYXNzLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JNZXNzYWdlIE9wdGlvbmFsLiBBIGN1c3RvbSBlcnJvciBtZXNzYWdlLiBEZWZhdWx0cyB0b1xyXG4gKiAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5lcnJvclxyXG4gKi9cclxuYXRyb3BhLnN1cHBvcnRDaGVjayA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBjbGFzc05hbWUgPSBTdHJpbmcoY2xhc3NOYW1lKTtcclxuICAgIGVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZSB8fCBhdHJvcGEuZGF0YVtjbGFzc05hbWVdLmVycm9yO1xyXG4gICAgZXJyb3JNZXNzYWdlID0gU3RyaW5nKGVycm9yTWVzc2FnZSk7XHJcbiAgICBcclxuICAgIGlmKGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uc3VwcG9ydCA9PT0gJ3Vuc3VwcG9ydGVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUHVzaGVzIGEgcmVxdWlyZW1lbnQgY2hlY2sgaW50byBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMuIFRoZSB0ZXN0XHJcbiAqICB0ZXN0cyB3aGV0aGVyIHRoZSBjbGFzcyBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gU2V0c1xyXG4gKiAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSdzIHN1cHBvcnQgdG8gdW5zdXBwb3J0ZWQgYW5kIGVycm9yIHRvIGVycm9yTWVzc2FnZVxyXG4gKiAgaWYgdGhlIHJlcXVpcmVtZW50Rm4gcmV0dXJucyBmYWxzZS4gVGhlIHJlcXVpcmVtZW50IGNoZWNrcyB3aWxsIGFsbCBiZSBydW5cclxuICogIGFmdGVyIHRoZSBsaWJyYXJ5IGhhcyBsb2FkZWQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMwOFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVxdWlyZW1lbnRGbiBBIGZ1bmN0aW9uIHRvIHRlc3Qgd2hldGhlciBvciBub3QgdGhlIGNsYXNzXHJcbiAqICBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gSWYgc3VwcG9ydGVkLCByZXR1cm5zIHRydWUgb3RoZXJ3aXNlXHJcbiAqICByZXR1cm4gZmFsc2UuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBlcnJvck1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIHdoZW4gdGhpcyBjbGFzcyBvciBpdHNcclxuICogIG1ldGhvZHMgYXJlIGNhbGxlZCBpbiB1bnN1cHBvcnRlZCBlbnZpcm9ubWVudHMuIERlZmF1bHRzIHRvOlxyXG4gKiAgJ1RoZSBhdHJvcGEuJyArIGNsYXNzTmFtZSArICcgY2xhc3MgaXMgdW5zdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4nO1xyXG4gKi9cclxuYXRyb3BhLnJlcXVpcmVzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgcmVxdWlyZW1lbnRGbiwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBjaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHR5cGVvZiBjbGFzc05hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXRyb3BhLnJlcXVpcmVzIHJlcXVpcmVzIHRoZSBjbGFzcyBuYW1lIHRvIGJlICcgK1xyXG4gICAgICAgICAgICAgICAgJ3NwZWNpZmllZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihhdHJvcGEuZGF0YVtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIHJlcXVpcmVtZW50Rm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVtZW50Rm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgJ1RoZSBhdHJvcGEuJyArIGNsYXNzTmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJyBjbGFzcyBpcyB1bnN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50Lic7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gcmVxdWlyZW1lbnRGbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uZXJyb3IgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0ZXN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5zdXBwb3J0ID0gJ3Vuc3VwcG9ydGVkJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wdXNoKGNoZWNrKTtcclxufTtcclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgZ29iYWwgZGF0YSByZWxhdGVkIHRvIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgZ29iYWwgZGF0YSByZWxhdGVkIHRvIHRoZSBjbGFzc2VzIGFuZCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5hdHJvcGEuZGF0YSA9IHt9O1xyXG5cclxuYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzID0gW107XHJcblxyXG5hdHJvcGEubm9wID0gZnVuY3Rpb24gbm9wICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG5cclxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2RvY3MvdnNkb2MvT3BlbkxheWVyc0FsbC5qc1wiLz5cclxudmFyIGF0cm9wYSA9IHJlcXVpcmUoJ2F0cm9wYS1oZWFkZXInKTtcclxuLypqc2xpbnRcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG5hdHJvcGEucmVxdWlyZXMoXHJcbiAgICAncmVtb3ZlTm9kZUJ5UmVmZXJlbmNlJyxcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICBpZihkb2N1bWVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbik7XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBET00gTm9kZXMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtET00gTm9kZX0gZWxlbWVudFJlZmVyZW5jZSBBIHJlZmVyZW5jZSB0byB0aGUgRE9NIE5vZGUgeW91IHdhbnRcclxuICogdG8gcmVtb3ZlLlxyXG4gKi9cclxuYXRyb3BhLnJlbW92ZU5vZGVCeVJlZmVyZW5jZSA9IGZ1bmN0aW9uIChlbGVtZW50UmVmZXJlbmNlKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGF0cm9wYS5zdXBwb3J0Q2hlY2soJ3JlbW92ZU5vZGVCeVJlZmVyZW5jZScpO1xyXG4gICAgaWYoZWxlbWVudFJlZmVyZW5jZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZWxlbWVudFJlZmVyZW5jZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnRSZWZlcmVuY2UpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG52YXIgYXRyb3BhID0gcmVxdWlyZSgnYXRyb3BhLWhlYWRlcicpO1xyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgYXRyb3BhICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcbi8qKlxyXG4gKiBTZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG9wdGlvbmFsIGZ1bmN0aW9uIHBhcmFtZXRlcnMuXHJcbiAqIEBleGFtcGxlXHJcbiAqIDxwcmU+XHJcbiAqICAgLy8gVG8gc2V0IGEgZGVmYXVsdCB2YWx1ZSBmb3IgYW4gb3B0aW9uYWwgcGFyYW1ldGVyXHJcbiAqICAgZnVuY3Rpb24ob3B0aW9uYWxBcmcpIHtcclxuICogICAgICAgdmFyIGRlZmF1bHRWYWwgPSAnaGVsbG8gdGhlcmUhJztcclxuICogICAgICAgb3B0aW9uYWxBcmcgPSBhdHJvcGEuc2V0QXNPcHRpb25hbEFyZyhkZWZhdWx0VmFsLCBvcHRpb25hbEFyZyk7XHJcbiAqICAgICAgIHJldHVybiBvcHRpb25hbEFyZztcclxuICogICB9XHJcbiAqIDwvcHJlPlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMjA5MDlcclxuICogQHBhcmFtIHtNaXhlZH0gZGVmYXVsdFZhbCBUaGUgZGVmYXVsdCB2YWx1ZSB0byBzZXQuXHJcbiAqIEBwYXJhbSB7TWl4ZWR9IG9wdGlvbmFsQXJnIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25hbCBhcmd1bWVudC5cclxuICogQHJldHVybnMge01peGVkfSBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIHN1cHBsaWVkIHdoZW4gdGhlIG9wdGlvbmFsXHJcbiAqIGFyZ3VtZW50IGlzIHVuZGVmaW5lZCBvciBudWxsLiBPdGhlcndpc2UsIHRoZSBzdXBwbGllZCBvcHRpb25hbCBhcmd1bWVudFxyXG4gKiBpcyByZXR1cm5lZC5cclxuICovXHJcbmF0cm9wYS5zZXRBc09wdGlvbmFsQXJnID0gZnVuY3Rpb24gKGRlZmF1bHRWYWwsIG9wdGlvbmFsQXJnKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmIChvcHRpb25hbEFyZyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbmFsQXJnID09PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9uYWxBcmcgPSBkZWZhdWx0VmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbmFsQXJnO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG4vKmpzbGludFxyXG4gICAgbm9kZTogdHJ1ZVxyXG4qL1xyXG52YXIgYXRyb3BhID0gcmVxdWlyZSgnYXRyb3BhLWhlYWRlcicpO1xyXG5hdHJvcGEuc2V0QXNPcHRpb25hbEFyZyA9IHJlcXVpcmUoJ2F0cm9wYS1zZXRBc09wdGlvbmFsQXJnJykuc2V0QXNPcHRpb25hbEFyZztcclxuYXRyb3BhLnJlbW92ZU5vZGVCeVJlZmVyZW5jZSA9IHJlcXVpcmUoJ2F0cm9wYS1yZW1vdmVOb2RlQnlSZWZlcmVuY2UnKS5yZW1vdmVOb2RlQnlSZWZlcmVuY2U7XHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBhdHJvcGEsIFhQYXRoUmVzdWx0ICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBhdHJvcGEucmVxdWlyZXMoXHJcbiAgICAgICAgJ3hwYXRoJyxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgd2luZG93LFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZXZhbHVhdGVcclxuICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVyZXF1aXNpdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHByZXJlcXVpc2l0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogQW4gWHBhdGggdG9vbGtpdCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBET00uXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMxM1xyXG4gKiBAbmFtZXNwYWNlIEFuIFhwYXRoIHRvb2xraXQgZm9yIG1hbmlwdWxhdGluZyB0aGUgRE9NLlxyXG4gKi9cclxuYXRyb3BhLnhwYXRoID0ge307XHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgbm9kZXMgZnJvbSB0aGUgRE9NIHVzaW5nIGFuIFhwYXRoIGV4cHJlc3Npb24uXHJcbiAqIEBleGFtcGxlXHJcbiAqICAgLy8gU2F5IHlvdSB3YW50ZWQgdG8gdG91Y2ggYWxsIHRoZSBhbmNob3JzIGFuZCBsaW5rcyBpbiB3aW5kb3cuZG9jdW1lbnRcclxuICogICB2YXIgeHBhdGhFeHByZXNzaW9uLCBjYWxsYmFjaztcclxuICogICB4cGF0aEV4cHJlc3Npb24gPSAnLi8vYSc7XHJcbiAqICAgY2FsbGJhY2sgPSBmdW5jdGlvbihvbmVOb2RlKSB7XHJcbiAqICAgICAgIG9uZU5vZGUudG91Y2hlZCA9IHRydWU7XHJcbiAqICAgfVxyXG4gKiAgIGF0cm9wYS54cGF0aC5wcm9jZXNzTm9kZXNCeVhwYXRoKFxyXG4gKiAgICAgICB4cGF0aEV4cHJlc3Npb24sIGRvY3VtZW50LCBkb2N1bWVudCwgY2FsbGJhY2spO1xyXG4gKiAgIFxyXG4gKiAgIC8vIE9yIHNheSB5b3UgaGF2ZSBhbiBpZnJhbWUsIHdpdGggdGhlIGlkICdteUZyYW1lJy4gSW4gdGhlIGlmcmFtZSB0aGVyZVxyXG4gKiAgIC8vIGlzIGEgZGl2IHdpdGggdGhlIGlkIG15RGl2LlxyXG4gKiAgIC8vIEhlcmUgaXMgaG93IHlvdSB3b3VsZCByZW1vdmUgYWxsIHRoZSBhbmNob3JzIGluIHRoYXQgZGl2LlxyXG4gKiAgIHZhciBteUZyYW1lLCB4cGF0aEV4cHJlc3Npb24sIGNvbnRleHROb2RlLCBkb2NyZWYsIGNhbGxiYWNrO1xyXG4gKiAgIG15RnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlGcmFtZScpO1xyXG4gKiAgIGRvY3JlZiA9IG15RnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICogICBjb250ZXh0Tm9kZSA9IGRvY3JlZi5nZXRFbGVtZW50QnlJZCgnbXlEaXYnKTtcclxuICogICB4cGF0aEV4cHJlc3Npb24gPSAnLi8vYSc7XHJcbiAqICAgY2FsbGJhY2sgPSBmdW5jdGlvbihvbmVOb2RlKSB7XHJcbiAqICAgICAgIGF0cm9wYS5yZW1vdmVOb2RlQnlSZWZlcmVuY2Uob25lTm9kZSk7XHJcbiAqICAgfVxyXG4gKiAgIGF0cm9wYS54cGF0aC5wcm9jZXNzTm9kZXNCeVhwYXRoKFxyXG4gKiAgICAgICB4cGF0aEV4cHJlc3Npb24sIGNvbnRleHROb2RlLCBkb2NyZWYsIGNhbGxiYWNrKTtcclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMzEzXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB4cGF0aEV4cHJlc3Npb24gQW4gWHBhdGggZXhwcmVzc2lvbiBhcyBhIHN0cmluZ1xyXG4gKiBAcGFyYW0ge0RPTSBOb2RlfSBjb250ZXh0Tm9kZSBPcHRpb25hbC4gVGhlIG5vZGUgd2hpY2ggaXMgdG8gc2VydmUgYXMgdGhlIHJvb3RcclxuICogZm9yIHRoZSBzdXBwbGllZCBYcGF0aCBleHByZXNzaW9uLiBEZWZhdWx0cyB0byB3aGF0ZXZlciBkb2NyZWYgaXMuXHJcbiAqIElmIHlvdSBhcmUgdXNpbmcgYSByZWxhdGl2ZSBwYXRoIHN1Y2ggYXMgPGNvZGU+Li8vYTwvY29kZT4gYW5kLCB5b3Ugb25seVxyXG4gKiB3YW50IHRoZSBhbmNob3JzIHRoYXQgYXJlIGRlc2NlbmRhbnRzIG9mIGFub3RoZXIgZWxlbWVudCwgeW91IHdvdWxkXHJcbiAqIHN1cHBseSBhIHJlZmVyZW5jZSB0byB0aGF0IGVsZW1lbnQgZm9yIHRoaXMgYXJndW1lbnQuIFdoZW4gdXNpbmcgYVxyXG4gKiBjb250ZXh0IG5vZGUsIHRoZSBkb2NyZWYgYXJndW1lbnQgbXVzdCByZWZlciB0byB0aGUgY29udGV4dCBub2RlJ3NcclxuICogY29udGFpbmluZyBkb2N1bWVudC5cclxuICogQHBhcmFtIHtET00gRG9jdW1lbnR9IGRvY3JlZiBPcHRpb25hbC4gQSByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IHlvdVxyXG4gKiBhcmUgc2VhcmNoaW5nLCBkZWZhdWx0cyB0byBkb2N1bWVudC4gSWYgeW91IGhhdmUgY3JlYXRlZCBhIHNlcGFyYXRlXHJcbiAqIERPTURvY3VtZW50IHdpdGggdGhlIDxjb2RlPmF0cm9wYS5IVE1MUGFyc2VyPC9jb2RlPiwgYW4gaWZyYW1lLCBvciBieVxyXG4gKiBzb21lIG90aGVyIG1lYW5zLCB5b3Ugd291bGQgcHV0IGEgcmVmZXJlbmNlIHRvIHRoYXQgZG9jdW1lbnQgaGVyZSB0b1xyXG4gKiBpbmRpY2F0ZSB0aGF0IHlvdSBpbnRlbmQgdG8gdXNlIHRoYXQgZG9jdW1lbnQncyByb290LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBIGZ1bmN0aW9uIGFwcGxpZWQgdG8gZXZlcnkgZWxlbWVudCBmb3VuZFxyXG4gKiB1c2luZyB0aGUgc3VwcGxpZWQgeHBhdGggZXhwcmVzc2lvbi4gVGhlIGNhbGxiYWNrIHJlY2VpdmVzIGEgc2luZ2xlXHJcbiAqIGVsZW1lbnQgYXMgaXQncyBvbmx5IGFyZ3VtZW50LlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIHRoZSBxdWFudGl0eSBvZiBub2RlcyBwcm9jZXNzZWQuXHJcbiAqL1xyXG5hdHJvcGEueHBhdGgucHJvY2Vzc05vZGVzQnlYcGF0aCA9IGZ1bmN0aW9uIHByb2Nlc3NOb2Rlc0J5WHBhdGgoXHJcbiAgICB4cGF0aEV4cHJlc3Npb24sIGNvbnRleHROb2RlLCBkb2NyZWYsIGNhbGxiYWNrXHJcbikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBhdHJvcGEuc3VwcG9ydENoZWNrKCd4cGF0aCcpO1xyXG4gICAgZG9jcmVmID0gYXRyb3BhLnNldEFzT3B0aW9uYWxBcmcoZG9jdW1lbnQsIGRvY3JlZik7XHJcbiAgICBjb250ZXh0Tm9kZSA9IGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnKGRvY3JlZiwgY29udGV4dE5vZGUpO1xyXG4gICAgdmFyIG5vZGVzU25hcHNob3QsXHJcbiAgICBuc2wsXHJcbiAgICBpLFxyXG4gICAgbnNpO1xyXG4gICAgbm9kZXNTbmFwc2hvdCA9IGRvY3JlZi5ldmFsdWF0ZShcclxuICAgICAgICB4cGF0aEV4cHJlc3Npb24sXHJcbiAgICAgICAgY29udGV4dE5vZGUsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSxcclxuICAgICAgICBudWxsXHJcbiAgICApO1xyXG4gICAgbnNsID0gbm9kZXNTbmFwc2hvdC5zbmFwc2hvdExlbmd0aDtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBuc2w7IGkrKykge1xyXG4gICAgICAgIG5zaSA9IG5vZGVzU25hcHNob3Quc25hcHNob3RJdGVtKGkpO1xyXG4gICAgICAgIGNhbGxiYWNrKG5zaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaTtcclxufTtcclxuLyoqXHJcbiAqIFJlbW92ZXMgbm9kZXMgZnJvbSB0aGUgRE9NIHVzaW5nIGFuIFhwYXRoIGV4cHJlc3Npb24uXHJcbiAqIEBleGFtcGxlXHJcbiAqICAgLy8gdG8gcmVtb3ZlIGFsbCBhbmNob3JzIHdpdGggdGhlIGNsYXNzIFwib29wc1wiIGluc2lkZSBvZiBhbnkgZGl2IGluXHJcbiAqICAgLy8gZG9jdW1lbnRcclxuICogICB2YXIgeHBhdGhFeHByZXNzaW9uID0gXCIuLy9kaXYvL2FbQGNsYXNzPSdvb3BzJ11cIjtcclxuICogICBhdHJvcGEueHBhdGgucmVtb3ZlTm9kZXNCeVhwYXRoKHhwYXRoRXhwcmVzc2lvbik7XHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMxM1xyXG4gKiBAcGFyYW0ge1N0cmluZ30geHBhdGhFeHByZXNzaW9uIEFuIFhwYXRoIGV4cHJlc3Npb24gYXMgYSBzdHJpbmdcclxuICogQHBhcmFtIHtET00gTm9kZX0gY29udGV4dE5vZGUgT3B0aW9uYWwuIFRoZSBub2RlIHdoaWNoIGlzIHRvIHNlcnZlIGFzIHRoZSByb290XHJcbiAqIGZvciB0aGUgc3VwcGxpZWQgWHBhdGggZXhwcmVzc2lvbi4gRGVmYXVsdHMgdG8gd2hhdGV2ZXIgZG9jcmVmIGlzLlxyXG4gKiBAcGFyYW0ge0RPTSBEb2N1bWVudH0gZG9jcmVmIE9wdGlvbmFsLiBBIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgeW91XHJcbiAqIGFyZSBzZWFyY2hpbmcsIGRlZmF1bHRzIHRvIGRvY3VtZW50LlxyXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIHRoZSBxdWFudGl0eSBvZiBub2RlcyByZW1vdmVkLlxyXG4gKiBAc2VlIGF0cm9wYS54cGF0aC5wcm9jZXNzTm9kZXNCeVhwYXRoIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuYXRyb3BhLnhwYXRoLnJlbW92ZU5vZGVzQnlYcGF0aCA9IGZ1bmN0aW9uIHJlbW92ZU5vZGVzQnlYcGF0aChcclxuICAgIHhwYXRoRXhwcmVzc2lvbiwgY29udGV4dE5vZGUsIGRvY3JlZlxyXG4pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgYXRyb3BhLnN1cHBvcnRDaGVjaygneHBhdGgnKTtcclxuICAgIHZhciBjb3VudDtcclxuICAgIGNvdW50ID0gYXRyb3BhLnhwYXRoLnByb2Nlc3NOb2Rlc0J5WHBhdGgoXHJcbiAgICAgICAgeHBhdGhFeHByZXNzaW9uLFxyXG4gICAgICAgIGNvbnRleHROb2RlLFxyXG4gICAgICAgIGRvY3JlZixcclxuICAgICAgICBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBhdHJvcGEucmVtb3ZlTm9kZUJ5UmVmZXJlbmNlKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbn07XHJcbi8qKlxyXG4gKiBTZWxlY3RzIG5vZGVzIGZyb20gdGhlIERPTSB1c2luZyBhbiBYcGF0aCBleHByZXNzaW9uLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiA8cHJlPlxyXG4gKiAgIC8vIFRvIGdldCBhbGwgdGhlIGVsZW1lbnRzIGluIHRoZSBkb2N1bWVudCB3aXRoIGEgc3JjIGF0dHJpYnV0ZTpcclxuICogICB2YXIgc3JjRWxlbWVudHMgPSBhdHJvcGEueHBhdGguZ2V0Tm9kZXNCeVhwYXRoKCdbQHNyY10nKTtcclxuICogPC9wcmU+XHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMxM1xyXG4gKiBAcGFyYW0ge1N0cmluZ30geHBhdGhFeHByZXNzaW9uIEFuIFhwYXRoIGV4cHJlc3Npb24gYXMgYSBzdHJpbmdcclxuICogQHBhcmFtIHtET00gTm9kZX0gY29udGV4dE5vZGUgT3B0aW9uYWwuIFRoZSBub2RlIHdoaWNoIGlzIHRvIHNlcnZlIGFzIHRoZSByb290XHJcbiAqIGZvciB0aGUgc3VwcGxpZWQgWHBhdGggZXhwcmVzc2lvbi4gRGVmYXVsdHMgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBub2RlLlxyXG4gKiBAcGFyYW0ge0RPTSBEb2N1bWVudH0gZG9jcmVmIE9wdGlvbmFsLiBBIHJlZmVyZW5jZSB0byB0aGUgZG9jdW1lbnQgeW91XHJcbiAqIGFyZSBzZWFyY2hpbmcsIGRlZmF1bHRzIHRvIGRvY3VtZW50LlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgd2hvc2UgZWxlbWVudHMgYXJlIERPTSBOb2Rlc1xyXG4gKiBAc2VlIGF0cm9wYS54cGF0aC5wcm9jZXNzTm9kZXNCeVhwYXRoIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuYXRyb3BhLnhwYXRoLmdldE5vZGVzQnlYcGF0aCA9IGZ1bmN0aW9uIGdldE5vZGVzQnlYcGF0aChcclxuICAgIHhwYXRoRXhwcmVzc2lvbiwgY29udGV4dE5vZGUsIGRvY3JlZlxyXG4pIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGF0cm9wYS5zdXBwb3J0Q2hlY2soJ3hwYXRoJyk7XHJcbiAgICB2YXIgZWxlbWVudFJlZmVyZW5jZXM7XHJcbiAgICBlbGVtZW50UmVmZXJlbmNlcyA9IFtdO1xyXG4gICAgYXRyb3BhLnhwYXRoLnByb2Nlc3NOb2Rlc0J5WHBhdGgoXHJcbiAgICAgICAgeHBhdGhFeHByZXNzaW9uLFxyXG4gICAgICAgIGNvbnRleHROb2RlLFxyXG4gICAgICAgIGRvY3JlZixcclxuICAgICAgICBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50UmVmZXJlbmNlcy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gZWxlbWVudFJlZmVyZW5jZXM7XHJcbn07XHJcbi8qKlxyXG4gKiBFc2NhcGVzIHNpbmdsZSBxdW90ZXMgKGFwb3N0cm9wZSkgaW4gWHBhdGggcXVlcmllcy5cclxuICogQGV4YW1wbGVcclxuICogPHByZT5cclxuICogIC8vIHRoaXMgaXMgdXNlZnVsIGZvciB1c2luZyBhcmJpdHJhcnkgc3RyaW5ncyBpbiB5b3VyIHF1ZXJpZXMuXHJcbiAqICB2YXIgYXJiU3RyLCBlc2NhcGVkU3RyLCB4cGF0aEV4cHJlc3Npb24sIGZvdW5kTm9kZXM7XHJcbiAqICBhcmJTdHIgPSBcIkppbW15IGFpbid0IG5ldmVyIHNhaWQgXFxcIlNodXJcXFwiIFdoeT8gSSBkb24ndCBrbm93IVwiO1xyXG4gKiAgZXNjYXBlZFN0ciA9IGF0cm9wYS54cGF0aC5lc2NhcGVRdW90ZXNYcGF0aChhcmJTdHIpO1xyXG4gKiAgLy8gcHJvZHVjZXM6IGNvbmNhdCgnSmltbXkgYWluJywgXCInXCIsICd0IG5ldmVyIHNhaWQgXCJTaHVyXCIgV2h5PyBJIGRvbicsIFwiJ1wiLFxyXG4gKiAgLy8gJ3Qga25vdyEnKVxyXG4gKiAgLy8gaXQgaXMgbXVjaCBlYXNpZXIgdG8gZGVhbCB3aXRoIHRoZSB2YXJpYWJsZSBuYW1lIHRoYW4gaXQgaXMgdG8gZGVhbCB3aXRoXHJcbiAqICAvLyBhbGwgdGhvc2UgcXVvdGVzIGFuZCBjb21tYXMhXHJcbiAqICB4cGF0aEV4cHJlc3Npb24gPSAnLi8vcFtjb250YWlucyh0ZXh0KCksJyArIGVzY2FwZWRTdHIgKyAnKV0nO1xyXG4gKiAgZm91bmROb2RlcyA9IGF0cm9wYS54cGF0aC5nZXROb2Rlc0J5WHBhdGgoeHBhdGhFeHByZXNzaW9uKTtcclxuICogIC8vIGZvdW5kIG5vZGVzIHdpbGwgY29udGFpbiB0aGUgcCBlbGVtZW50cyB3aGVyZSB0aGUgdGV4dCB3YXMgbWF0Y2hlZC5cclxuICogPC9wcmU+XHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIEFuIFhwYXRoIHF1ZXJ5XHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgY29uY2F0IGZ1bmN0aW9uIGluIFhwYXRoXHJcbiAqIHdoaWNoIHdpbGwgZWZmZWN0aXZlbHkgd29yayBpbiBlc2NhcGluZyBxdW90ZXMgaW4geW91ciB4cGF0aCBxdWVyeS5cclxuICovXHJcbmF0cm9wYS54cGF0aC5lc2NhcGVRdW90ZXNYcGF0aCA9IGZ1bmN0aW9uIGVzY2FwZVF1b3Rlc1hwYXRoKHN0cmluZykge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcJy9nLCBcIicsIFxcXCInXFxcIiwgJ1wiKTtcclxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9eKC4qKSQvZywgXCJjb25jYXQoJyQxJylcIik7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iXX0=
