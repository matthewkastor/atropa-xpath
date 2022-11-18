
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary>Container for all Glorious classes, functions, etc.</summary>
        /// <returns type="atropa"/>
      
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        data : {}, 
      
        /// <field name="xpath" type="">An Xpath toolkit for manipulating the DOM.</field>
        xpath : {}, 
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }, 
        
        setAsOptionalArg: function(defaultVal, optionalArg) {
            /// <summary>Set default values for optional function parameters.</summary>
            /// <param name="defaultVal" type="Mixed">The default value to set.</param>
            /// <param name="optionalArg" type="Mixed">A reference to the optional argument.</param>
            /// <returns type="Mixed">Returns the default value supplied when the optional
            /// argument is undefined or null. Otherwise, the supplied optional argument
            /// is returned.</returns>
        }, 
        
        removeNodeByReference: function(elementReference) {
            /// <summary>Removes DOM Nodes.</summary>
            /// <param name="elementReference" type="DOM Node">A reference to the DOM Node you want
            /// to remove.</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary>Container for gobal data related to the classes and functions.</summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
/* vsdoc for atropa.xpath */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.xpath = {
        /// <summary>An Xpath toolkit for manipulating the DOM.</summary>
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

  

