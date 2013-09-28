"use strict";
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    vars: true
*/
/*globals
    atropa,
    describe,
    it,
    expect,
    beforeEach,
    runs,
    jasmine,
    waitsFor,
    spyOn
*/
// end header

describe("atropa.xpath", function() {

    it("must exist", function() {
        expect(atropa.xpath).not.toEqual(undefined);
    });
        
    try {
        
        atropa.supportCheck('xpath');
        
        describe('class is supported in this environment', function () {
            
            describe('processNodesByXpath', function () {
                var cb, qty;
                
                beforeEach(function () {
                    cb = {
                        'touch' : function (el) {
                            el.touched = 'touched';
                        }
                    };
                    
                    spyOn(cb, 'touch').andCallThrough();
                    
                    qty = atropa.xpath.processNodesByXpath(
                            './/a', document.body, document, cb.touch);
                });
                
                it('must return the quantity of nodes processed', function () {
                    expect(qty).toEqual(
                        document.anchors.length + document.links.length);
                });
                
                it('must call the callback on each node', function () {
                    var arr = [];
                    arr.concat(
                        Array.prototype.slice.call(document.links),
                        Array.prototype.slice.call(document.anchors)
                    );
                    arr.forEach(function (a) {
                        expect(a.touched).toEqual('touched');
                    });
                });
            });
            describe('removeNodesByXpath', function () {
                it('must remove nodes matching the given xpath expression',
                    function () {
                        var el = document.createElement('div');
                        el.setAttribute('id', 'removeNodesByXpathDiv');
                        document.body.appendChild(el);
                        expect(
                            document.getElementById('removeNodesByXpathDiv')
                        ).toEqual(el);
                        atropa.xpath.removeNodesByXpath(
                            ".//*[@id='removeNodesByXpathDiv']",
                            document.body,
                            document
                        );
                        expect(
                            document.getElementById('removeNodesByXpathDiv')
                        ).not.toEqual(el);
                    }
                );
            });
            describe('getNodesByXpath', function () {
                it('must retreive nodes matching the given xpath expression',
                    function () {
                        var els = atropa.xpath.getNodesByXpath(
                            ".//A",
                            document.body,
                            document
                        );
                        expect(
                            els[0].tagName.toLowerCase()
                        ).toEqual('a');
                    }
                );
            });
            describe('escapeQuotesXpath', function () {
                it('must escape single quotes in xpath queries', function () {
                    var str = "Jimmy ain't never said \"Shur\" Why? I don't know!";
                    var esc = atropa.xpath.escapeQuotesXpath(str);
                    var escShouldBe = 'concat(\'Jimmy ain\', "\'", \'t never said "Shur" Why? I don\', "\'", \'t know!\')';
                    expect(esc).toEqual(escShouldBe);
                });
            });
        });
    } catch (e) {
        describe('class is not supported in this environment', function () {
            
            it('must set atropa.data.xpath.support to "unsupported"',
                function () {
                    expect(
                        atropa.data.xpath.support
                    ).toEqual(
                        'unsupported'
                    );
                }
            );
            
            function getThrowCheck(fn) {
                return function () {
                    function x () {
                        atropa.xpath[fn]();
                    }
                    it('must throw "[...] is not supported in this environment"',
                        function () {
                            expect(x).toThrow('The atropa.xpath class is unsupported in this environment.')
                        }
                    );
                };
            }
            
            [
                'processNodesByXpath',
                'removeNodesByXpath',
                'getNodesByXpath'
            ].forEach(function (fn) {
                describe(fn, getThrowCheck(fn));
            });
            
        });
    }
    
});


