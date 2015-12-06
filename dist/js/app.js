/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * Created by Curtis on 11/12/2015.
 */
/************************************************
 * congress.js
 ************************************************
 *
 * This script contains the definition and
 * methods of the object congress. This object:
 *
 *      * Holds the senators' data
 *      * Holds the vector containing the current
 *          selection
 *      * Contains methods for which to obtain
 *          the data that is plotted (namely,
 *          ideological score and percentage of
 *          times they voted with selection
 *
 * The vis elements send queries and get
 * information from this object.
  */

// congress creation
congress = new Object();

/* congress.selectedMembers:
A set containing the senators that are in the
current selection. Should be manipulated with the
functions addMember or clearMembers, to prevent
errors.
 */
congress.selectedMembers = new Set();

/* congress.data:
An object containing data about a Congress and
votes. Will be loaded in from a json file.
 */
congress.data = {};

/* congress.metaData:
An object containing congressional vote metadata
(senators, votes, etc.). Loaded in from a json
file.
 */
congress.metaData = {};

/* congress.nonselectedData:
Like congress.selectedData, but for those members
who are not in the selection. Manipulating this
directly is not advised.
 */
congress.nonselectedMembers = new Set();

/* congress.addMember:
A method that adds members to selectedMembers and
removes the corresponding members from
nonselectedMembers. It is preferable to use this
method in order to ensure that valid changes to
selectedMembers are made (such as they are, in
fact, a member, or are not already in the
selection) while ensuring that they are removed
from nonselectedMembers.
 */
congress.addMember = function(members) {
    var self = this;

    if (typeof members === "string") {
        members = [members];
    } else if (typeof members != "object") {
        throw new RangeError;
    }

    members.forEach(function(element) {
        if (self.metaData.members.indexOf(element) > -1) {
            self.selectedMembers.add(element);
            self.nonselectedMembers.delete(element);
        } else {
            throw new RangeError;
        }
    });

    // Update congress.memberAgreePercent
    self.getAgreementPercent();
};

/* congress.clearMembers:
A function that clears congress.selectedMembers
of all entries, and adds all members to
congress.nonselectedMembers.
 */
congress.clearMembers = function() {
    var self = this;

    self.selectedMembers.clear();
    self.metaData.members.forEach(function(element) {
        congress.nonselectedMembers.add(element);
    });

    // Update congress.memberAgreePercent
    self.getAgreementPercent();
};

/* congress.memberAgreementPercent:
An object of key-value pairs that contains the
percentage of times that members who are not in
selectedMembers voted the same as those who are
in selectedMembers. This is manipulated by
getAgreementPercent. Do not modify this directly.
 */
congress.memberAgreementPercent = {};

/* congress.stateAgreementPercent:
An object of key-value pairs that contains the
percentage of times for each state a member of that
state's delegation not in the selection voted with
members in the selection. This is manipulated by
getAgreementPercent. Do not modify this directly.
*/
congress.stateAgreementPercent = {};

/* congress.getAgreementPercent:
This function calculates how frequently members
not in the selection voted with those who are in
the selection. It manipulates the
memberAgreementPercent object, where these values
are stored.
 */
congress.getAgreementPercent = function() {
    var self = this;

    if (self.selectedMembers.size == 0) {
        // No members have been selected; now, we interpret memberAgreementPercent as the percentage of times a member voted with the winning side
        self.metaData["members"].forEach(function(val) {
            // Get the number of times the member voted in agreement with a member in the selection
            var count = 0;

            self.metaData.votes.forEach(function(val2, index) {
                //var voteInd = parseInt(val2, 10) - 1;
                if (self.data.members[val].votes[index] == self.data.winning_vote[index]) {
                    count++;
                }
            });

            // Assign to memberAgreementPercent
            self.memberAgreementPercent[val] = count / self.metaData.votes.length;
	    });

        // Do similarly for stateAgreementPercent what was done for memberAgreementPercent
        self.metaData["states"].forEach(function(val) {
            // Get the number of times a member of the state's delegation voted with the winning side
            var count = 0;
            var mem1 = self.selectedMembers.values().next().value;

            self.metaData.votes.forEach(function(val2, index) {
                // Check to see if any member from the delegation agreed on each vote
                var voteInd = parseInt(val2, 10) - 1;
                var delAgreed = false;
                for (dmi = 0; dmi < self.metaData.delegations[val].length; dmi++) {
                    var delMem = self.metaData.delegations[val][dmi];
                    if (self.data.members[delMem].votes[index] == self.data.winning_vote[voteInd]) {

                        delAgreed = true;
                        break;
                    }
                }

                if (delAgreed) {
                    count++;
                }
            });

            // Assign to stateAgreementPercent
            self.stateAgreementPercent[val] = count / self.metaData.votes.length;
        });

    } else {
        // First, get the indices of times everyone in the selection voted in agreement
        var commonVotes = [];

        for (i = 0; i < self.metaData.votes.length; i++) {
            var agreement = true;
            var selectIter = self.selectedMembers.values();
            var mem1 = selectIter.next().value;

            var sn = selectIter.next();
            // Check for agreement
            while (!(sn.done)) {
                // Notice that when a member doesn't vote, that vote is not included
                agreement = agreement & (self.data.members[mem1].votes[i] == self.data.members[sn.value].votes[i]) & (self.data.members[sn.value].votes[i] != "Not Voting");
                sn = selectIter.next();
            }

            if (agreement) {
                commonVotes.push(i);
            }
        }

        // Next, for each member, get the proportion of times they voted the same as members in the selection
        self.metaData["members"].forEach(function(val) {
            // Get the number of times the member voted in agreement with a member in the selection
            var count = 0;
            var mem1 = self.selectedMembers.values().next().value;

            commonVotes.forEach(function(val2) {
                if (self.data.members[val].votes[val2] == self.data.members[mem1].votes[val2]) {
                    count++;
                }
            });

            // Assign to memberAgreementPercent
            if (commonVotes.length > 0) {
                self.memberAgreementPercent[val] = count / commonVotes.length;
            } else {	// A "default" value, which happens for basically the empty set
                self.memberAgreementPercent[val] = 0;
            }
        });

        // Finally, for each state delegation, get the proportion of times any member of the state's delegation voted the same as members in the selection
        self.metaData["states"].forEach(function(val) {
            // Get the number of times a member of the state's delegation voted with the selection
            var count = 0;
            var mem1 = self.selectedMembers.values().next().value;

            commonVotes.forEach(function(val2) {
                // Check to see if any member from the delegation agreed on each vote
                var delAgreed = false;
                for (dmi = 0; dmi < self.metaData.delegations[val].length; dmi++) {
                    var delMem = self.metaData.delegations[val][dmi];
                    if ((self.nonselectedMembers.has(delMem)) &     // Exclude selected members
                        (self.data.members[delMem].votes[val2] == self.data.members[mem1].votes[val2])) {

                        delAgreed = true;
                        break;
                    }
                }

                if (delAgreed) {
                    count++;
                }
            });

            // Assign to memberAgreementPercent
            if (commonVotes.length > 0) {
                self.stateAgreementPercent[val] = count / commonVotes.length;
            } else {	// A "default" value, which happens for basically the empty set
                self.stateAgreementPercent[val] = 0;
            }
        });
    }
};

/**
 * Created by Curtis on 11/19/2015.
 */
/************************************************
 * main.js
 ************************************************
 *
 * This script represents an overall controller,
 * which calls the functions included in other
 * scripts. This script:
 *
 *      * Loads the data in the json files
 *	* Runs the visualizations once the data
 *	  is loaded
 *	* Creates a dispatcher for event handling
  */

// dispatch creation
dispatch = d3.dispatch("selectionChanged", "membersHovered", "membersUnhovered");

/*
dispatch.selectionChanged():
Reloads all views when the member selection has
changed.
*/
dispatch.on("selectionChanged", function() {
    scatterVis.update();
    mapVis.update();
    // Update the p containing the list of members
    d3.select("#memberList").text(selectionStringGen());
});

/*
dispatch.membersHovered(members):
Applies the class "hovered" to dots in the
scatterplot and states in the map that have members
being hovered over by the mouse. Takes a set called
"members", which contains the last names of every
member being hovered.
*/
dispatch.on("membersHovered", function(members) {
    members = new Set(members);
    
    // Highlight dots
    scatterVis.svg.selectAll(".dot")
	/*.sort(function(d) {
	    if (members.has(d)) {
		return 1;
	    }
	    return 0;
	})*/
	.classed("hovered", function(d) {
	    if (members.has(d)) {
		return true;
	    } else {
		return false;
	    }
	});
    
    // Highlight states
    mapVis.statePaths
	.sort(function(d) {
	    var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
	    var delegation = congress.metaData.delegations[stateAbbrev];
	    try {
		for (i = 0; i < delegation.length; i++) {
			if (members.has(delegation[i]) |
			    congress.selectedMembers.has(delegation[i])) {
			    return 1;
			}
		}
	    } catch (TypeError) {
		// Do nothing
	    }
	    return 0;
	})
	.classed("hovered", function(d) {
	    var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
	    var delegation = congress.metaData.delegations[stateAbbrev];
	    //console.log(delegation, state);
	    
	    try {
		for (i = 0; i < delegation.length; i++) {
		    if (members.has(delegation[i])) {
			return true;
		    }
		}
	    } catch (TypeError) {
		    // Do nothing
	    }
	    return false;
	});
});

/*
dispatch.membersUnhovered():
Removes the class "hovered" from every state and dot
in the scatterplot.
*/
dispatch.on("membersUnhovered", function() {
    scatterVis.svg.selectAll(".dot").classed({"hovered": false, "dot": true});
    mapVis.statePaths.classed("hovered", false);
});

// Data loading
// Code inspired by: https://groups.google.com/forum/#!msg/d3-js/3Y9VHkOOdCM/YnmOPopWUxQJ

// First load and assign metadata
d3.json("data/Senate114Metadata.json", function(md) {
        congress.metaData = md;

        // Now load and assign record data
        d3.json("data/SenateRecord114.json", function(cd) {
        congress.data = cd;
        congress.clearMembers();
	    congress.getAgreementPercent();

            // Code from: https://jqueryui.com/autocomplete/#maxheight
            $(function() {
                $( "#memberInput" ).autocomplete({
                    source: congress.metaData.members
                });
            });

	    // Call visualizations
	    scatterVis = new ScatterVis(400,300,30,40,50,30,.4);
	    mapVis = new MapVis(600,375,30,30,30,30,900);
        
	    // A function for generating a string with the members in the selection
	    selectionStringGen = function() {
		var selString = "";
		if (congress.selectedMembers.size < 1) {
		    return "No one selected (charts shows victory rate)";
		}
		congress.selectedMembers.forEach(function(member) {
		    selString = selString + 
				member + " (" +
				congress.data.members[member].party + 
				"-" + congress.data.members[member].state +
				"); "
		});
		
		return selString;
            }
    });
});

/**
 * Created by Curtis on 11/20/2015.
 */
/************************************************
 * scatterVis.js
 ************************************************
 *
 * This script creates and controls the scatterplot
 * from the dataset. In the scatterplot, congress
 * members in the selection are plotted as points,
 * with color indicating political party, x position
 * their ideological leaning (which is precalculated
 * using dimensionality reduction, like the NOMINATE
 * method), and y position the proportion of times
 * the individual voted with the members in the
 * selection. Clicking members changes the
 * selection.
 *
 * main.js calls the function that creates and runs
 * the scatterplot, and also contains the dispatch
 * object used here. The data is loaded in main.js,
 * and congress.js contains its definitions. Notice
 * that the congress object must be active prior to
 * calling this function.
 *
 * A lot of code is based off (or straight-up
 * copied) Mike Bostock's scatterplot tutorial,
 * found here:
 * http://bl.ocks.org/mbostock/3887118
 *
  */

// ScatterVis():
/* In practice, scatterVis is represented as an
object. This function creates an instance of the
scatterVis object (vis "new"), and the function
itself defines the schema of the object. w sets the
visualization's width, and h sets the vis's height.
mt, mb, ml, and mr set the top, bottom, left, and
right margins, respectively. (Notice that the SVG's
width will be w + ml + mr, and its height will be
h + mt + mb.) dotScale determines point size. */

function ScatterVis(w, h, mt, mb, ml, mr, dotScale) {
    var self = this;

    // ScatterVis.svg:
    /* Simply the svg used by scatterVis, where the
    visualization is actually displayed. */
    self.svg = d3.select("#scatterVis")
		.classed("svg-container", true)
		.select("svg")
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr("viewBox", "0 0 " + (w + ml + mr) + " " + (h + mt + mb))
		//.attr("width", w + ml + mr)
		//.attr("height", h + mt + mb)
		.classed("svg-content-responsive", true)
		.append("g")
		.attr("transform", "translate(" + ml + "," + mt + ")");

    // ScatterVis.x():
    /* The x scale (for ideological score) scale
    function. Domain is set to the minimum and
    maximum of the ideological data, and the range
    is set to work with the width of the vis. This
    is a linear scale. */
    self.x = d3.scale.linear()
		.domain([d3.min(congress.metaData.members, function(d) {
		    return congress.data.members[d].ideology;
		}) -.5,
            d3.max(congress.metaData.members, function(d) {
            return congress.data.members[d].ideology;
        }) +.5])
		.range([0,w ]);

    //ScatterVis.power
    /* A number representing the exponent of the
    power scale used in ScatterVis.y. 1 by default
    (in effect, the scale starts linear). */
    self.power = 1;

    // ScatterVis.y():
    /* The y scale (for agreement percent) scale
    function. Domain is the [0;1] interval, and the
    range is set to work with the height of the vis.
    This is a power scale with a starting exponent
    of 1 (so it initially looks like a linear scale;
    this can be changed, though.*/
    self.y = d3.scale.pow().exponent(self.power)
		.domain([0 -.05,1 +.05])
		.rangeRound([h ,0]);

    // ScatterVis.partyColor(party):
    /* This is a function that takes a string
    representing a political party (either "D", "I",
    or "R"), and outputs a string for identifying
    the party that is associated with that color. */
    self.partyColor = function(party) {
	if (party == "R") {
	    return "crimson";
	} else if (party == "D") {
	    return "dodgerblue";
	} else {		// Think independents
	    return "gold";
	}
    }

    // ScatterVis.xAxis():
    /* The function for creating the x axis
    (representing ideological leaning). Notice that
    there are NO tickmarks (the reasoning being that
    the actual value for political ideology may not
    actually be meaningful; I would rather show the
    ranking and some notion of distance, rather than
    focus on the actual values). */
    self.xAxis = d3.svg.axis().scale(self.x).ticks(0).orient("bottom");

    // ScatterVis.yAxis():
    /* The function for creating the y axis
    (representing percentage of times the politician
    voted with the selection). */
    self.yAxis = d3.svg.axis().scale(self.y).orient("left");

    // ScatterVis.tooltip():
    /* The tooltip is a div element that is added to
     the document when the object is created. It is
     manipulated by the mouseover events of the dots
     created and added to the scatterplot. */
    self.tooltip = d3.select("body").append("div")
        //.attr('class', "tooltip")
        .attr('id', "scatterVisTooltip")
        .attr("class", "hidden")
        .attr("transform", "translate(" + ml + "," + mt + ")")
        .append("p")
        .attr("id", "value");

    // ScatterVis.update():
    /* This function tells scatterVis to update the
    visualization to update the values of the
    scatterplot. This function is called when the
    vis is first created and whenever the data needs
    to be updated (this usually is coordinated by
    the event handler defined in main.js). */
    self.update = function() {
        /* For this function, I followed guidelines
        described by Mike Bostock here:
        http://bl.ocks.org/mbostock/3808218
        */
        // Hide tooltip
        d3.select("#scatterVisTooltip").classed("hidden", true);

        // Attach and plot data
        // Data join
        var dots = self.svg.selectAll(".dot")
            .data(congress.metaData.members.sort());	// This data is effectively a list of strings consisting of members' names who are not in the selection

        // Add new dots
        dots.enter().append("circle")
            .attr("class", "dot")
            .style("fill", function(d) {
                return self.partyColor(congress.data.members[d].party);
            })
            .attr("cx", function(d) {
                return self.x(congress.data.members[d].ideology);
            })
            .attr("cy", function(d) {
                return self.y(congress.memberAgreementPercent[d]);
            })
            .attr("r", 8 * dotScale)
            .text(function(d) {
                return d;
            })
            .on("mouseover", function(d) {
                var coordinates = [d3.event.pageX, d3.event.pageY];
                //console.log(coordinates)
                // Return properly formatted value
                var formattedText = d +
		    " (" + congress.data.members[d].party + "-" + congress.data.members[d].state + "): " +
		    d3.round(100 * congress.memberAgreementPercent[d]) + "%";
		    
		/* It is possible for two members to have identical voting
		patterns and therefore for a point to cover others; detect
		other memebers at this location, and add their information
		to the tooltip. */
		// First, find and list other members at this location
		var otherMembersHere = [];
		congress.metaData.members.forEach(function(mem) {
		    if (mem != d &
			!congress.selectedMembers.has(mem) &
			congress.data.members[mem].ideology == congress.data.members[d].ideology &
			congress.memberAgreementPercent[mem] == congress.memberAgreementPercent[d]) {
			
			otherMembersHere.push(mem);
		    }
		});
		
		// If there were other members at this location, add their information to the tooltip string
		otherMembersHere.forEach(function(mem) {
		    formattedText = formattedText + "<br>";
		    formattedText = formattedText + mem +
			" (" + congress.data.members[mem].party + "-" + congress.data.members[mem].state + "): " +
			d3.round(100 * congress.memberAgreementPercent[mem]) + "%";
		});

                if (!congress.selectedMembers.has(d)) {
                    // Zoom and lighten
                    d3.select(this)
                        .transition().duration(400)
                        .attr("r", 16 * dotScale)
                        .attr("opacity",.7);

                    // Move tooltip (code from: http://chimera.labs.oreilly.com/books/1230000000345/ch10.html#_html_div_tooltips)
                    // Update the tooltip position and value
                    d3.select("#scatterVisTooltip")
                        .style("left", coordinates[0] + "px")
                        .style("top", coordinates[1] + "px")
                        .select("#value")
                        .html(formattedText);

                    // Show the tooltip
                    d3.select("#scatterVisTooltip").classed("hidden", false);
                }
                
                // Highlight other elements in the visualization
                // The event handler handles this; call the event membersHovered
                otherMembersHere.push(d);
                dispatch.membersHovered(otherMembersHere);
            }).on("mouseout", function(d) {
                if (!congress.selectedMembers.has(d)) {
                    // Return to defaults
                    d3.select(this)
                        .transition().duration(400)
                        .attr("r", 8 * dotScale)
                        .attr("opacity",1);

                    // Hide the tooltip
                    d3.select("#scatterVisTooltip").classed("hidden", true);
                }
                dispatch.membersUnhovered();
            })
            .on("click", function(d) {
                if (!document.getElementById("keepSelection").checked) {
		    congress.clearMembers();
                }
                congress.addMember([d]);
                dispatch.selectionChanged();
            });

        // Update existing dots
        dots.transition().duration(1000)
            .attr("cx", function(d) {
                return self.x(congress.data.members[d].ideology);
            })
            .attr("cy", function(d) {
                return self.y(congress.memberAgreementPercent[d]);
            })
            .attr("r", function(d) {
                if (congress.selectedMembers.has(d)) {
                    return 0;
                } else {
                    return 8 * dotScale;
                }
            })
            .attr('opacity', 1);

        // Remove existing dots no longer in selection
        dots.exit().transition().duration(1000)
            .attr("r", 0).remove();
    }

    // Create the axes
    self.svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + h + ")")
	    .call(self.xAxis)
	    .append("text")
	    .attr("class", "label")
	    .attr("x", w)
	    .attr("y", -6)
	    .style("text-anchor", "end")
	    .text("Ideology");

    self.svg.append("g")
	    .attr("class", "y axis")
	    .call(self.yAxis)
	    .append("text")
	    .attr("class", "label")
	    .attr("transform", "rotate(-90)")
	    .attr("y", 6)
	    .attr("dy", ".71em")
	    .style("text-anchor", "end")
	    .text("Agreement Rate");

    // Initial dots
    self.update();
}

/**
 * Created by Curtis on 11/24/2015.
 */
/************************************************
 * mapVis.js
 ************************************************
 *
 * This script creates and controls the map
 * visualization. The map visualizes agreement with
 * congressional delegations across states. Color
 * encodes political party, and saturation encodes
 * agreement (high saturation indicates high
 * agreement, while low saturation indicates low
 * agreement). Notice that for a mixed delegation
 * (i.e. a Republican and a Democrat from the same
 * state) the hue will depend on how greatly the
 * members from the two parties agree with the
 * selection (in other words, there will be some
 * intermediate hue between blue and red). Clicking
 * a state changes the selection and adds both
 * members from the state's delegation to the
 * selection, while clearing what the selection
 * currently contains.
 *
 * main.js calls the function that creates and runs
 * the map, and also contains the dispatch object
 * used here. The data is loaded in main.js, and
 * congress.js contains its definitions. Notice
 * that the congress object must be active prior to
 * calling this function.
 *
  */

//mapVis():
/* In practice, mapVis is represented as an
object. This function creates an instance of the
mapVis object (vis "new"), and the function
itself defines the schema of the object. w sets the
visualization's width, and h sets the vis's height.
mt, mb, ml, and mr set the top, bottom, left, and
right margins, respectively. (Notice that the SVG's
width will be w + ml + mr, and its height will be
h + mt + mb.) scale sets the scaling of the map
(a bigger number implies a larger map). */

function MapVis(w, h, mt, mb, ml, mr, scale) {
    var self = this;

    // ScatterVis.svg:
    /* Simply the svg used by scatterVis, where the
    visualization is actually displayed. */
    self.svg = d3.select("#mapVis")
		.classed("svg-container", true)
		.select("svg")
		.attr("preserveAspectRatio", "xMinYMin meet")
		.attr("viewBox", "0 0 " + (w + ml + mr) + " " + (h + mt + mb))
		//.attr("width", w + ml + mr)
		//.attr("height", h + mt + mb)
		.classed("svg-content-responsive", true)
		.append("g")
		.attr("transform", "translate(" + ml + "," + mt + ")");

    // ScatterVis.projection:
    /* Controls the projection used by the map
    visualization (Albers USA projection). */
    self.projection = d3.geo.albersUsa()
                .translate([w / 2, h / 2])
                .scale([scale]);

    // ScatterVis.path
    /* This is an actual realization of the path
    used to draw the map, which depends on the
    projection specified in ScatterVis.projection. */
    self.path = d3.geo.path()
		.projection(self.projection);

    // MapVis.stateColor(state):
    /* This is a function that takes a string
    representing a state and outputs a string
    representing a hexadecimal code for the color
    for a state. This is some combination of hue and
    brightness depending on the state's
    delegation's party affiliation and agreement
    with the selection. */
    self.stateColor = function(state) {
	    /* This method is somewhat complex and
	    * difficult to understand. Basically,
	    * brightness indicates how frequently any
	    * member of the state's delegation agrees
	    * with the selection, and hue indicates the
	    * political leaning of the delegation.
	    * Ignoring third parties and independents
	    * for the moment, if the members of the
	    * state's delegation are from different
	    * parties, the hue of the color will be some
	    * intermediate value between red and blue,
	    * depending on whether the Democrat or the
	    * Republican are more inclined to agree with
	    * the selection. This is determined
	    * subtractively, basically with CMYK logic,
	    * which is then converted to an RGB color
	    * and finally a hex string. */

        // Delegation agreement determines lightness
        var sat = congress.stateAgreementPercent[state];
        // Initialize CMYK object that contains CM
        var cmyk = {C : 0, M : 0, Y : 0, K : 0};
        var rgbVal = {R : 0, G : 0, B : 0};
        // Will contain how many Republicans, Democrats, and Independents are in the delegation
        var rdi = {"R" : 0, "D" : 0, "I" : 0};
        var agreeRatio = {"R" : 0, "D" : 0, "I" : 0};

        // Get delegation's agreement with selection
        try {
            congress.metaData.delegations[state].forEach(function(member) {
                if (congress.nonselectedMembers.has(member)) {
                    rdi[congress.data.members[member].party] += congress.memberAgreementPercent[member];
                }
            });
        }
        catch (TypeError) {
            // Do nothing; stick with default
        }

        // Translate to "share of agreement", which will be used for determining hue
        if (rdi.R + rdi.D + rdi.I != 0) {		// Prevent division by zero
            agreeRatio = {"R" : (rdi.R / (rdi.R + rdi.D + rdi.I)),
                  "D" : (rdi.D / (rdi.R + rdi.D + rdi.I)),
                  "I" : (rdi.I / (rdi.R + rdi.D + rdi.I))};
        }

        // The following are CMYK definitions of the colors that correspond the the parties
        var RColor = {C : 0, M : 0, Y : 0, K : 0};
        var DColor = {C : 0, M : 0, Y : 0, K : 0};
        var IColor = {C : 0, M : 0, Y : 0, K : 0};

        // Republicans: crimson
        RColor.C = 0; RColor.M = .91; RColor.Y = .73; RColor.K = .14;

        // Democrats: dodgerblue
        DColor.C = .88; DColor.M = .44; DColor.Y = 0; DColor.K = 0;

        // Independents: gold
        IColor.C = 0; IColor.M = .16; IColor.Y = 1; IColor.K = 0;

        // Finally, get the CMYK hue  based on agreeRatio
        cmyk.C = sat * ((RColor.C * agreeRatio.R) + (DColor.C * agreeRatio.D) + (IColor.C * agreeRatio.I));
        cmyk.M = sat * ((RColor.M * agreeRatio.R) + (DColor.M * agreeRatio.D) + (IColor.M * agreeRatio.I));
        cmyk.Y = sat * ((RColor.Y * agreeRatio.R) + (DColor.Y * agreeRatio.D) + (IColor.Y * agreeRatio.I));
        cmyk.K = sat * ((RColor.K * agreeRatio.R) + (DColor.K * agreeRatio.D) + (IColor.K * agreeRatio.I));

        // Convert to RGB
        rgbVal.R = 255 * (1 - cmyk.C) * (1 - cmyk.K);
        rgbVal.G = 255 * (1 - cmyk.M) * (1 - cmyk.K);
        rgbVal.B = 255 * (1 - cmyk.Y) * (1 - cmyk.K);

        var color = d3.rgb(rgbVal.R, rgbVal.G, rgbVal.B);
        return color.toString();
    }

    // MapVis.tooltip():
    /* The tooltip is a div element that is added to
     the document when the object is created. It is
     manipulated by the mouseover events of the dots
     created and added to the scatterplot. */
    self.tooltip = d3.select("body").append("div")
        .attr('id', "mapVisTooltip")
        .attr("class", "hidden")
        .attr("transform", "translate(" + ml + "," + mt + ")")
        .append("p")
        .attr("id", "value");

    //Load in GeoJSON data
    d3.json("data/us-states.json", function (json) {
        //Merge the senate data and GeoJSON
        //Bind data and create one path per GeoJSON feature
        self.statePaths = self.svg.selectAll("path")
			  .data(json.features)
			  .enter()
			  .append("path")
			  .attr("d", self.path)
			  .on("click", function(d) {
			      // Make state's delegation the selection
			      var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];

			      
			      if (!document.getElementById("keepSelection").checked) {
				  congress.clearMembers();
			      }
			      congress.addMember(congress.metaData.delegations[stateAbbrev]);
			      dispatch.selectionChanged();
			  })
			  .on("mouseover", function(d) {
			      var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
			      var delegation = congress.metaData.delegations[stateAbbrev];

			      // Get text to display
			      var formattedText = "";
			      for (i = 0; i < delegation.length; i++) {
				  formattedText = formattedText + delegation[i] +
				      " (" + congress.data.members[delegation[i]].party + "-" + congress.data.members[delegation[i]].state + "): " +
				      d3.round(100 * congress.memberAgreementPercent[delegation[i]]) + "%";
				  if (i < delegation.length - 1) {
				      formattedText = formattedText + "<br>";
				  }
			      }

			      var coordinates = [d3.event.pageX + 10, d3.event.pageY - 20];

			      // Fade clear
			      d3.select(this).transition().duration(250)
				  .attr("fill-opacity", .5);

			      // Move tooltip (code from: http://chimera.labs.oreilly.com/books/1230000000345/ch10.html#_html_div_tooltips)
			      // Update the tooltip position and value
			      d3.select("#mapVisTooltip")
				  .style("left", coordinates[0] + "px")
				  .style("top", coordinates[1] - 15 + "px")
				  .select("#value")
				  .html(formattedText);

			      // Show the tooltip
			      d3.select("#mapVisTooltip").classed("hidden", false);
			      dispatch.membersHovered(delegation);
			  })
			  .on("mouseout", function(d) {
			      d3.select(this).transition().duration(250)
				  .attr("fill-opacity", 1);

			      // Hide the tooltip
			      d3.select("#mapVisTooltip").classed("hidden", true);
			      dispatch.membersUnhovered();
			  });

	// MapVis.update():
	/* This function tells mapVis to update the
	visualization to update the values of the
	map. This function is called when the vis is
	first created and whenever the data needs to be
	updated (this usually is coordinated by the
	event handler defined in main.js). Note that the
	map geoJSON file us-states.json MUST BE LOADED
	in order for this to work. */
	self.update = function() {
	    self.statePaths
		.sort(function(d) {
			var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
			var delegation = congress.metaData.delegations[stateAbbrev];

			// Check if a member of the state's delegation is in the selection
			try {
			    for (i = 0; i < delegation.length; i++) {
				if (congress.selectedMembers.has(delegation[i])) {
				    return 1;
				}
			    }
			} catch (TypeError) {
			    // Do nothing
			}

			// Return normal color if no member is in selection
			return 0;
		})
		.attr("class", function(d) {
			var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
			var delegation = congress.metaData.delegations[stateAbbrev];

			// Check if a member of the state's delegation is in the selection
			try {
			    for (i = 0; i < delegation.length; i++) {
				if (congress.selectedMembers.has(delegation[i])) {
				    return "selectionState";
				}
			    }
			} catch (TypeError) {
			    // Do nothing
			}

			// Return normal color if no member is in selection
			return "normalState";
		})
		.transition().duration(350)
		.style("fill", function (d) {
			var stateAbbrev = congress.metaData.state_full_abbrev[d.properties.name];
			return self.stateColor(stateAbbrev);
		});
	}

	self.update();
    });
}
