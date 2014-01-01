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
