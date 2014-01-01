
/* vsdoc for atropa.xpath */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.xpath = {
        /// <summary></summary>
        /// <returns type="atropa.xpath"/>
                
        processNodesByXpath: function(xpathExpression, contextNode, docref, callback) {
            /// <summary>Processes nodes from the DOM using an Xpath expression.</summary>
            /// <param name="xpathExpression" type="String">An Xpath expression as a string</param>
            /// <param name="contextNode" type="DOM Node">Optional. The node which is to serve as the root
            /// for the supplied Xpath expression. Defaults to whatever docref is.
            /// If you are using a relative path such as &lt;code&gt;.//a&lt;/code&gt; and, you only
            /// want the anchors that are descendants of another element, you would
            /// supply a reference to that element for this argument. When using a
            /// context node, the docref argument must refer to the context node&apos;s
            /// containing document.</param>
            /// <param name="docref" type="DOM Document">Optional. A reference to the document you
            /// are searching, defaults to document. If you have created a separate
            /// DOMDocument with the &lt;code&gt;atropa.HTMLParser&lt;/code&gt;, an iframe, or by
            /// some other means, you would put a reference to that document here to
            /// indicate that you intend to use that document&apos;s root.</param>
            /// <param name="callback" type="Function">A function applied to every element found
            /// using the supplied xpath expression. The callback receives a single
            /// element as it&apos;s only argument.</param>
            /// <returns type="Number">Returns the quantity of nodes processed.</returns>
        }, 
        
        removeNodesByXpath: function(xpathExpression, contextNode, docref) {
            /// <summary>Removes nodes from the DOM using an Xpath expression.</summary>
            /// <param name="xpathExpression" type="String">An Xpath expression as a string</param>
            /// <param name="contextNode" type="DOM Node">Optional. The node which is to serve as the root
            /// for the supplied Xpath expression. Defaults to whatever docref is.</param>
            /// <param name="docref" type="DOM Document">Optional. A reference to the document you
            /// are searching, defaults to document.</param>
            /// <returns type="Number">Returns the quantity of nodes removed.</returns>
        }, 
        
        getNodesByXpath: function(xpathExpression, contextNode, docref) {
            /// <summary>Selects nodes from the DOM using an Xpath expression.</summary>
            /// <param name="xpathExpression" type="String">An Xpath expression as a string</param>
            /// <param name="contextNode" type="DOM Node">Optional. The node which is to serve as the root
            /// for the supplied Xpath expression. Defaults to the document&apos;s root node.</param>
            /// <param name="docref" type="DOM Document">Optional. A reference to the document you
            /// are searching, defaults to document.</param>
            /// <returns type="Array">Returns an array whose elements are DOM Nodes</returns>
        }, 
        
        escapeQuotesXpath: function(string) {
            /// <summary>Escapes single quotes (apostrope) in Xpath queries.</summary>
            /// <param name="string" type="String">An Xpath query</param>
            /// <returns type="String">Returns a string representing a concat function in Xpath
            /// which will effectively work in escaping quotes in your xpath query.</returns>
        }
        
    };

    var $x = window.atropa.xpath;
    $x.__namespace = "true";
    $x.__typeName = "atropa.xpath";
})(this);
