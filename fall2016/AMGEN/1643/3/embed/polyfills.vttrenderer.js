webpackJsonpjwplayer([7],{77:function(t,e){!function(t){function e(t,e){return void 0===e&&(e=1),"rgba("+[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16),e].join(",")+")"}function i(t,i,r){switch(r){case"webvtt.font.color":case"webvtt.font.opacity":var n=Services.prefs.getCharPref("webvtt.font.color"),o=Services.prefs.getIntPref("webvtt.font.opacity")/100;m.fontSet=e(n,o);break;case"webvtt.font.scale":g=Services.prefs.getIntPref("webvtt.font.scale")/100;break;case"webvtt.bg.color":case"webvtt.bg.opacity":var a=Services.prefs.getCharPref("webvtt.bg.color"),s=Services.prefs.getIntPref("webvtt.bg.opacity")/100;m.backgroundSet=e(a,s);break;case"webvtt.edge.color":case"webvtt.edge.type":var l=["","0px 0px ","4px 4px 4px ","-2px -2px ","2px 2px "],h=Services.prefs.getIntPref("webvtt.edge.type"),c=Services.prefs.getCharPref("webvtt.edge.color");m.edgeSet=l[h]+e(c)}}function r(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function n(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):i[1]>59?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function o(){this.values=Object.create(null)}function a(t,e){function i(){function t(t){return e=e.substr(t.length),t}if(!e)return null;var i=e.match(/^([^<]*)(<[^>]+>?)?/);return t(i[1]?i[1]:i[2])}function r(t){return b[t]}function o(t){for(;v=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(v[0],r);return t}function a(t,e){return!S[e.localName]||S[e.localName]===t.localName}function s(e,i){var r=y[e];if(!r)return null;var n=t.document.createElement(r);n.localName=r;var o=w[e];return o&&i&&(n[o]=i.trim()),n}for(var l,h=t.document.createElement("div"),c=h,p=[];null!==(l=i());)if("<"!==l[0])c.appendChild(t.document.createTextNode(o(l)));else{if("/"===l[1]){p.length&&p[p.length-1]===l.substr(2).replace(">","")&&(p.pop(),c=c.parentNode);continue}var f,u=n(l.substr(1,l.length-2));if(u){f=t.document.createProcessingInstruction("timestamp",u),c.appendChild(f);continue}var v=l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!v)continue;if(f=s(v[1],v[3]),!f)continue;if(!a(c,f))continue;v[2]&&(f.className=v[2].substr(1).replace("."," ")),p.push(v[1]),c.appendChild(f),c=f}return h}function s(t){for(var e=0;e<x.length;e++){var i=x[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function l(t){function e(t,e){for(var i=e.childNodes.length-1;i>=0;i--)t.push(e.childNodes[i])}function i(t){if(!t||!t.length)return null;var r=t.pop(),n=r.textContent||r.innerText;if(n){var o=n.match(/^.*(\n|\r)/);return o?(t.length=0,o[0]):n}return"ruby"===r.tagName?i(t):r.childNodes?(e(t,r),i(t)):void 0}var r,n=[],o="";if(!t||!t.childNodes)return"ltr";for(e(n,t);o=i(n);)for(var a=0;a<o.length;a++)if(r=o.charCodeAt(a),s(r))return"rtl";return"ltr"}function h(t){if("number"==typeof t.line&&(t.snapToLines||t.line>=0&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return++r*-1}function c(){}function p(t,e){var i="undefined"!=typeof navigator&&/MSIE\s8\.0/.test(navigator.userAgent),r="rgba(255, 255, 255, 1)",n="rgba(0, 0, 0, 0.8)",o="";"undefined"!=typeof m&&(r=m.fontSet,n=m.backgroundSet,o=m.edgeSet),i&&(r="rgb(255, 255, 255)",n="rgb(0, 0, 0)"),c.call(this),this.cue=e,this.cueDiv=a(t,e.text),this.cueDiv.className="jw-text-track-cue jw-reset";var s={textShadow:o,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};i||(s.writingMode=""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",s.unicodeBidi="plaintext"),this.applyStyles(s,this.cueDiv),this.div=t.document.createElement("div"),s={textAlign:"middle"===e.align?"center":e.align,whiteSpace:"pre-line",position:"absolute"},i||(s.direction=l(this.cueDiv),s.writingMode=""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",s.unicodeBidi="plaintext"),this.applyStyles(s),this.div.appendChild(this.cueDiv);var h=0;switch(e.positionAlign){case"start":h=e.position;break;case"middle":h=e.position-e.size/2;break;case"end":h=e.position-e.size}h=Math.max(Math.min(100,h),0),""===e.vertical?this.applyStyles({left:this.formatStyle(h,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(h,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:"auto",width:this.formatStyle(t.width,"px")})}}function f(t){var e,i,r,n,o="undefined"!=typeof navigator&&/MSIE\s8\.0/.test(navigator.userAgent);if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop;var a=(a=t.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects();t=t.div.getBoundingClientRect(),e=a?Math.max(a[0]&&a[0].height||0,t.height/a.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight,o&&!this.lineHeight&&(this.lineHeight=13)}function u(t,e,i,r,n){function o(t,e){for(var n,o=new f(t),a=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(i,e[s])||t.within(i)&&t.overlapsAny(r);)t.move(e[s]);if(t.within(i))return t;var l=t.intersectPercentage(i);a>l&&(n=new f(t),a=l),t=new f(o)}return n||o}var a=new f(e),s=e.cue,l=h(s),c=[];if(s.snapToLines){var p;switch(s.vertical){case"":c=["+y","-y"],p="height";break;case"rl":c=["+x","-x"],p="width";break;case"lr":c=["-x","+x"],p="width"}var u=a.lineHeight,v=Math.floor(i[p]/u),l=Math.min(l,v-n),d=u*Math.round(l),g=i[p]+u,m=c[0];if(Math.abs(d)>g&&(d=d<0?-1:1,d*=Math.ceil(g/u)*u),l<0){d+=""===s.vertical?i.height:i.width;var b=n*u;d-=b,c=c.reverse()}a.move(m,d)}else{var y=a.lineHeight/i.height*100;switch(s.lineAlign){case"middle":l-=y/2;break;case"end":l-=y}switch(s.vertical){case"":e.applyStyles({top:e.formatStyle(l,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(l,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(l,"%")})}c=["+y","-x","+x","-y"],a=new f(e)}var w=o(a,c);e.move(w.toCSSCompatValues(i))}function v(){}var d=["webvtt.font.color","webvtt.font.opacity","webvtt.font.scale","webvtt.bg.color","webvtt.bg.opacity","webvtt.edge.color","webvtt.edge.type"],g=1;if("undefined"!=typeof Services){var m={};d.forEach(function(t){i(void 0,void 0,t),Services.prefs.addObserver(t,i,!1)})}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},o.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){var i;return!!((i=e.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(e=parseFloat(e),e>=0&&e<=100))&&(this.set(t,e),!0)}};var b={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},y={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},w={v:"title",lang:"lang"},S={rt:"ruby"},x=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];c.prototype.applyStyles=function(t,e){e=e||this.div;for(var i in t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},c.prototype.formatStyle=function(t,e){return 0===t?0:t+e},p.prototype=Object.create(c.prototype),p.prototype.constructor=p,f.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},f.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},f.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},f.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},f.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},f.prototype.intersectPercentage=function(t){var e=Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left)),i=Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top)),r=e*i;return r/(this.height*this.width)},f.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},f.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t;var n={left:t.left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i};return n},v.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},v.convertCueToDOMTree=function(t,e){return t&&e?a(t,e):null};var C="1.5%";v.processCues=function(t,e,i,r){function n(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}if(!t||!e||!i)return null;for(;i.firstChild;)i.removeChild(i.firstChild);if(!e.length)return null;var o=t.document.createElement("div");if(o.className="jw-text-track-container jw-reset",o.style.position="absolute",o.style.left="0",o.style.right="0",o.style.top="0",o.style.bottom="0",o.style.margin=C,i.appendChild(o),n(e)||r){var a=[],s=f.getSimpleBoxPosition(o);!function(){for(var i,r,n=0;n<e.length;n++){r=e[n],i=new p(t,r),i.div.className="jw-text-track-display jw-reset",o.appendChild(i.div);var l=r.text.split("\n").length;u(t,i,s,a,l),r.displayState=i.div,a.push(f.getSimpleBoxPosition(i))}}()}else for(var l=0;l<e.length;l++)o.appendChild(e[l].displayState)},t.WebVTT=v}(this)}});