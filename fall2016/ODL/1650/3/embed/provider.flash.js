webpackJsonpjwplayer([5],{15:function(t,e,i){var a,n;a=[i(1),i(17),i(2),i(18),i(23)],n=function(t,e,i,a,n){function r(t){if(this._currentTextTrackIndex=-1,t){if(this._textTracks||this._initTextTracks(),t.length){var e=0,a=t.length;for(e;e<a;e++){var n=t[e];if(n._id||("captions"===n.kind||"metadata"===n.kind?n._id="native"+n.kind:n._id=x.call(this,n),n.inuse=!0),n.inuse&&!this._tracksById[n._id])if("metadata"===n.kind)n.mode="hidden",n.oncuechange=B.bind(this),this._tracksById[n._id]=n;else if(b(n.kind)){var r,s=n.mode;if(n.mode="hidden",!n.cues.length&&n.embedded)continue;if(n.mode=s,this._cuesByTrackId[n._id]&&!this._cuesByTrackId[n._id].loaded){for(var c=this._cuesByTrackId[n._id].cues;r=c.shift();)p(n,r);n.mode=s,this._cuesByTrackId[n._id].loaded=!0}L.call(this,n)}}}this._renderNatively&&(this.textTrackChangeHandler=this.textTrackChangeHandler||m.bind(this),this.addTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),i.isEdge()&&(this.addTrackHandler=this.addTrackHandler||v.bind(this),this.addTracksListener(this.video.textTracks,"addtrack",this.addTrackHandler))),this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})}}function s(t){if(this._renderNatively=a(this.getName().name),this._renderNatively){var e=t===this._itemTracks;e||n.cancelXhr(this._itemTracks),this._itemTracks=t,t&&(e||(this.disableTextTrack(),w.call(this),this.addTextTracks(t)))}}function c(){return this._currentTextTrackIndex}function u(e){this._textTracks&&(0===e&&t.each(this._textTracks,function(t){t.mode=t.embedded?"hidden":"disabled"}),this._currentTextTrackIndex!==e-1&&(this.disableTextTrack(),this._currentTextTrackIndex=e-1,this._renderNatively&&(this._textTracks[this._currentTextTrackIndex]&&(this._textTracks[this._currentTextTrackIndex].mode="showing"),this.trigger("subtitlesTrackChanged",{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks}))))}function o(t){if(t.text&&t.begin&&t.end){var e=t.trackid.toString(),i=this._tracksById&&this._tracksById[e];i||(i={kind:"captions",_id:e,data:[]},this.addTextTracks([i]),this.trigger("subtitlesTracks",{tracks:this._textTracks}));var a;t.useDTS&&(i.source||(i.source=t.source||"mpegts")),a=t.begin+"_"+t.text;var r=this._metaCuesByTextTime[a];if(!r){r={begin:t.begin,end:t.end,text:t.text},this._metaCuesByTextTime[a]=r;var s=n.convertToVTTCues([r])[0];i.data.push(s)}}}function d(t){this._tracksById||this._initTextTracks();var e="native"+t.type,i=this._tracksById[e],a="captions"===t.type?"Unknown CC":"ID3 Metadata";if(!i){var n={kind:t.type,_id:e,label:a,embedded:!0};i=A.call(this,n),this._renderNatively||"metadata"===i.kind?this.setTextTracks(this.video.textTracks):(i.data=[],g.call(this,[i]))}R.call(this,i,t.cue)&&(this._renderNatively||"metadata"===i.kind?p(i,t.cue):i.data.push(t.cue))}function l(t){var e=this._tracksById[t.name];if(e){e.source=t.source;for(var i=t.captions||[],a=[],r=!1,s=0;s<i.length;s++){var c=i[s],u=t.name+"_"+c.begin+"_"+c.end;this._metaCuesByTextTime[u]||(this._metaCuesByTextTime[u]=c,a.push(c),r=!0)}r&&a.sort(function(t,e){return t.begin-e.begin});var o=n.convertToVTTCues(a);Array.prototype.push.apply(e.data,o)}}function h(t,e,i){t&&(T(t,e,i),this.instreamMode||(t.addEventListener?t.addEventListener(e,i):t["on"+e]=i))}function T(t,e,i){t&&(t.removeEventListener?t.removeEventListener(e,i):t["on"+e]=null)}function f(){n.cancelXhr(this._itemTracks);var t=this._tracksById&&this._tracksById.nativemetadata;(this._renderNatively||t)&&(E.call(this,this.video.textTracks),t&&(t.oncuechange=null)),this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._activeCuePosition=null,this._renderNatively&&(this.removeTracksListener(this.video.textTracks,"change",this.textTrackChangeHandler),E.call(this,this.video.textTracks))}function _(){if(this._textTracks){var t=this._textTracks[this._currentTextTrackIndex];t&&(t.mode=t.embedded?"hidden":"disabled")}}function k(){if(this._textTracks){var t=this._textTracks[this._currentTextTrackIndex];t&&(t.mode="showing")}}function m(){var e=this.video.textTracks,i=t.filter(e,function(t){return(t.inuse||!t._id)&&b(t.kind)});(!this._textTracks||i.length>this._textTracks.length)&&this.setTextTracks(e);var a=-1,n=0;for(n;n<this._textTracks.length;n++)if("showing"===this._textTracks[n].mode){a=n;break}a!==this._currentTextTrackIndex&&this.setSubtitlesTrack(a+1)}function v(){this.setTextTracks(this.video.textTracks)}function g(t){if(t){this._textTracks||this._initTextTracks(),this._renderNatively=a(this.getName().name);for(var e=0;e<t.length;e++){var i=t[e];if(!i.kind||b(i.kind)){var r=A.call(this,i);L.call(this,r),i.file&&(i.data=[],n.loadFile(i,this.addVTTCuesToTrack.bind(this,r),M))}}!this._renderNatively&&this._textTracks&&this._textTracks.length&&this.trigger("subtitlesTracks",{tracks:this._textTracks})}}function x(t){var e,i=t.kind||"cc";return e=t["default"]||t.defaulttrack?"default":t._id||t.name||t.file||t.label||i+this._textTracks.length}function y(t,e){if(this._renderNatively){var i=this._tracksById[t._id];if(!i)return this._cuesByTrackId||(this._cuesByTrackId={}),void(this._cuesByTrackId[t._id]={cues:e,loaded:!1});if(!this._cuesByTrackId[t._id]||!this._cuesByTrackId[t._id].loaded){var a;for(this._cuesByTrackId[t._id]={cues:e,loaded:!0};a=e.shift();)p(i,a)}}}function p(t,e){if(!i.isEdge()||!window.TextTrackCue)return void t.addCue(e);var a=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.addCue(a)}function E(e){e.length&&t.each(e,function(t){t.mode="hidden";for(var e=t.cues.length;e--;)t.removeCue(t.cues[e]);t.embedded||(t.mode="disabled"),t.inuse=!1})}function b(t){return"subtitles"===t||"captions"===t}function C(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._unknownCount=0}function A(e){var i,a=I.call(this,e);if(this._renderNatively||"metadata"===e.kind){var n=this.video.textTracks;i=t.findWhere(n,{label:a}),i?(i.kind=e.kind,i.label=a,i.language=e.language||""):i=this.video.addTextTrack(e.kind,a,e.language||""),i["default"]=e["default"],i.mode="disabled",i.inuse=!0}else i=e,i.data=i.data||[];return i._id||(i._id=x.call(this,e)),i}function I(t){var e=t.label||t.name||t.language;return e||(e="Unknown CC",this._unknownCount++,this._unknownCount>1&&(e+=" ["+this._unknownCount+"]")),e}function L(t){this._textTracks.push(t),this._tracksById[t._id]=t}function w(){if(this._textTracks){var e=t.filter(this._textTracks,function(t){return t.embedded||"subs"===t.groupid});this._initTextTracks(),t.each(e,function(t){this._tracksById[t._id]=t}),this._textTracks=e}}function B(i){var a=i.currentTarget.activeCues;if(a&&a.length){var n=a[a.length-1].startTime;if(this._activeCuePosition!==n){var r=[];if(t.each(a,function(t){t.startTime<n||(t.data||t.value?r.push(t):t.text&&this.trigger("meta",{metadataTime:n,metadata:JSON.parse(t.text)}))},this),r.length){var s=e.parseID3(r);this.trigger("meta",{metadataTime:n,metadata:s})}this._activeCuePosition=n}}}function R(t,e){var i=t.kind;this._cachedVTTCues[t._id]||(this._cachedVTTCues[t._id]={});var a,n=this._cachedVTTCues[t._id];switch(i){case"captions":a=Math.floor(20*e.startTime);var r=Math.floor(20*e.endTime),s=n[a]||n[a+1]||n[a-1];return!(s&&Math.abs(s-r)<=1)&&(n[a]=r,!0);case"metadata":var c=e.data?new Uint8Array(e.data).join(""):e.text;return a=e.startTime+c,!n[a]&&(n[a]=e.endTime,!0)}}function M(t){i.log("CAPTIONS("+t+")")}var D={_itemTracks:null,_textTracks:null,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_currentTextTrackIndex:-1,_unknownCount:0,_renderNatively:!1,_activeCuePosition:null,_initTextTracks:C,addTracksListener:h,clearTracks:f,disableTextTrack:_,enableTextTrack:k,getSubtitlesTrack:c,removeTracksListener:T,addTextTracks:g,setTextTracks:r,setupSideloadedTracks:s,setSubtitlesTrack:u,textTrackChangeHandler:null,addTrackHandler:null,addCuesToTrack:l,addCaptionsCue:o,addVTTCue:d,addVTTCuesToTrack:y};return D}.apply(e,a),!(void 0!==n&&(t.exports=n))},78:function(t,e,i){var a,n;a=[i(2),i(1),i(4),i(6),i(186),i(16),i(3),i(15)],n=function(t,e,i,a,n,r,s,c){function u(t){return t+"_swf_"+l++}function o(e){var i=document.createElement("a");i.href=e.flashplayer;var a=i.hostname===window.location.host;return t.isChrome()&&!a}function d(t,d){function l(t){var e=P[t];if(!e){for(var i=1/0,a=P.bitrates.length;a--;){var n=Math.abs(P.bitrates[a]-t);if(n>i)break;i=n}e=P.labels[P.bitrates[a+1]],P[t]=e}return e}function h(){var t=d.hlslabels;if(!t)return null;var e={},i=[];for(var a in t){var n=parseFloat(a);if(!isNaN(n)){var r=Math.round(n);e[r]=t[a],i.push(r)}}return 0===i.length?null:(i.sort(function(t,e){return t-e}),{labels:e,bitrates:i})}function T(){E=setTimeout(function(){s.trigger.call(R,"flashBlocked")},4e3),x.once("embedded",function(){_(),s.trigger.call(R,"flashUnblocked")},R)}function f(){_(),T()}function _(){clearTimeout(E),window.removeEventListener("focus",f)}function k(t){for(var e=t.levels,i=0;i<e.length;i++){var a=e[i];if(a.index=i,P&&a.bitrate){var n=Math.round(a.bitrate/1e3);a.label=l(n)}}t.levels=A=m(t.levels),t.currentQuality=C=v(A,t.currentQuality)}function m(t){return t.sort(function(t,e){return t.height&&e.height?e.height-t.height:e.bitrate-t.bitrate})}function v(t,e){for(var i=0;i<t.length;i++)if(t[i].index===e)return i}var g,x,y,p=null,E=-1,b=!1,C=-1,A=null,I=-1,L=null,w=!0,B=!1,R=this,M=function(){return x&&x.__ready},D=function(){x&&x.triggerFlash.apply(x,arguments)},P=h();e.extend(this,s,c,{init:function(t){t.preload&&"none"!==t.preload&&!d.autostart&&(p=t)},load:function(t){p=t,b=!1,this.setState(a.LOADING),D("load",t),t.sources.length&&"hls"!==t.sources[0].type&&this.sendMediaType(t.sources)},play:function(){D("play")},pause:function(){D("pause"),this.setState(a.PAUSED)},stop:function(){D("stop"),C=-1,p=null,this.clearTracks(),this.setState(a.IDLE)},seek:function(t){D("seek",t)},volume:function(t){if(e.isNumber(t)){var i=Math.min(Math.max(0,t),100);M()&&D("volume",i)}},mute:function(t){M()&&D("mute",t)},setState:function(){return r.setState.apply(this,arguments)},checkComplete:function(){return b},attachMedia:function(){w=!0,b&&(this.setState(a.COMPLETE),this.trigger(i.JWPLAYER_MEDIA_COMPLETE),b=!1)},detachMedia:function(){return w=!1,null},getSwfObject:function(e){var i=e.getElementsByTagName("object")[0];return i?(i.off(null,null,this),i):n.embed(d.flashplayer,e,u(t),d.wmode)},getContainer:function(){return g},setContainer:function(t){if(g!==t){g=t,x=this.getSwfObject(t),document.hasFocus()?T():window.addEventListener("focus",f),x.once("ready",function(){_(),x.once("pluginsLoaded",function(){x.queueCommands=!1,D("setupCommandQueue",x.__commandQueue),x.__commandQueue=[]});var t=e.extend({},d),a=x.triggerFlash("setup",t);a===x?x.__ready=!0:this.trigger(i.JWPLAYER_MEDIA_ERROR,a),p&&D("init",p)},this);var n=[i.JWPLAYER_MEDIA_ERROR,i.JWPLAYER_MEDIA_SEEK,i.JWPLAYER_MEDIA_SEEKED,"subtitlesTrackChanged","mediaType"],r=[i.JWPLAYER_MEDIA_BUFFER,i.JWPLAYER_MEDIA_TIME],c=[i.JWPLAYER_MEDIA_BUFFER_FULL];x.on([i.JWPLAYER_MEDIA_LEVELS,i.JWPLAYER_MEDIA_LEVEL_CHANGED].join(" "),function(t){k(t),this.trigger(t.type,t)},this),x.on(i.JWPLAYER_AUDIO_TRACKS,function(t){I=t.currentTrack,L=t.tracks,this.trigger(t.type,t)},this),x.on(i.JWPLAYER_AUDIO_TRACK_CHANGED,function(t){I=t.currentTrack,L=t.tracks,this.trigger(t.type,t)},this),x.on(i.JWPLAYER_PLAYER_STATE,function(t){var e=t.newstate;e!==a.IDLE&&this.setState(e)},this),x.on(r.join(" "),function(t){"Infinity"===t.duration&&(t.duration=1/0),this.trigger(t.type,t)},this),x.on(n.join(" "),function(t){this.trigger(t.type,t)},this),x.on(c.join(" "),function(t){this.trigger(t.type)},this),x.on(i.JWPLAYER_MEDIA_BEFORECOMPLETE,function(t){b=!0,this.trigger(t.type),w===!0&&(b=!1)},this),x.on(i.JWPLAYER_MEDIA_COMPLETE,function(t){b||(this.setState(a.COMPLETE),this.trigger(t.type))},this),x.on("visualQuality",function(t){var i=0;A.length>1&&(i=v(A,t.level.index+1)),t.level=e.extend(t.level,{index:i}),t.reason=t.reason||"api",this.trigger("visualQuality",t),this.trigger("providerFirstFrame",{})},this),x.on(i.JWPLAYER_PROVIDER_CHANGED,function(t){y=t.message,this.trigger(i.JWPLAYER_PROVIDER_CHANGED,t)},this),x.on(i.JWPLAYER_ERROR,function(t){this.trigger(i.JWPLAYER_MEDIA_ERROR,t)},this),x.on("subtitlesTracks",function(t){this.addTextTracks(t.tracks)},this),x.on("subtitlesTrackData",function(t){this.addCuesToTrack(t)},this),x.on(i.JWPLAYER_MEDIA_META,function(t){t.metadata&&"textdata"===t.metadata.type?this.addCaptionsCue(t.metadata):this.trigger(t.type,t)},this),o(d)&&x.on("throttle",function(t){_(),"resume"===t.state?s.trigger.call(R,"flashThrottle",t):E=setTimeout(function(){s.trigger.call(R,"flashThrottle",t)},250)},this)}},remove:function(){C=-1,A=null,n.remove(x)},setVisibility:function(t){t=!!t,g.style.opacity=t?1:0},resize:function(t,e,i){i&&D("stretch",i)},setControls:function(t){D("setControls",t)},setFullscreen:function(t){B=t,D("fullscreen",t)},getFullScreen:function(){return B},setCurrentQuality:function(t){D("setCurrentQuality",A[t].index)},getCurrentQuality:function(){return C},setSubtitlesTrack:function(t){D("setSubtitlesTrack",t)},getName:function(){return y?{name:"flash_"+y}:{name:"flash"}},getQualityLevels:function(){return A||p&&p.sources},getAudioTracks:function(){return L},getCurrentAudioTrack:function(){return I},setCurrentAudioTrack:function(t){D("setCurrentAudioTrack",t)},destroy:function(){_(),this.remove(),x&&(x.off(),x=null),g=null,p=null,this.off()}}),this.trigger=function(t,e){if(w)return s.trigger.call(this,t,e)}}var l=0,h=function(){};return h.prototype=r,d.prototype=new h,d.getName=function(){return{name:"flash"}},d}.apply(e,a),!(void 0!==n&&(t.exports=n))},186:function(t,e,i){var a,n;a=[i(2),i(3),i(1)],n=function(t,e,i){function a(t,e,i){var a=document.createElement("param");a.setAttribute("name",e),a.setAttribute("value",i),t.appendChild(a)}function n(n,r,u,o){var d;if(o=o||"opaque",t.isMSIE()){var l=document.createElement("div");r.appendChild(l),l.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="'+u+'" name="'+u+'" tabindex="0"><param name="movie" value="'+n+'"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="'+o+'"><param name="bgcolor" value="'+c+'"><param name="menu" value="false"></object>';for(var h=r.getElementsByTagName("object"),T=h.length;T--;)h[T].id===u&&(d=h[T])}else d=document.createElement("object"),d.setAttribute("type","application/x-shockwave-flash"),d.setAttribute("data",n),d.setAttribute("width","100%"),d.setAttribute("height","100%"),d.setAttribute("bgcolor",c),d.setAttribute("id",u),d.setAttribute("name",u),a(d,"allowfullscreen","true"),a(d,"allowscriptaccess","always"),a(d,"wmode",o),a(d,"menu","false"),r.appendChild(d,r);return d.className="jw-swf jw-reset",d.style.display="block",d.style.position="absolute",d.style.left=0,d.style.right=0,d.style.top=0,d.style.bottom=0,i.extend(d,e),d.queueCommands=!0,d.triggerFlash=function(e){var a=this;if("setup"!==e&&a.queueCommands||!a.__externalCall){for(var n=a.__commandQueue,r=n.length;r--;)n[r][0]===e&&n.splice(r,1);return n.push(Array.prototype.slice.call(arguments)),a}var c=Array.prototype.slice.call(arguments,1),u=t.tryCatch(function(){if(c.length){for(var t=c.length;t--;)"object"==typeof c[t]&&i.each(c[t],s);var n=JSON.stringify(c);a.__externalCall(e,n)}else a.__externalCall(e)});return u instanceof t.Error&&(console.error(e,u),"setup"===e)?(u.name="Failed to setup flash",u):a},d.__commandQueue=[],d}function r(t){t&&t.parentNode&&(t.style.display="none",t.parentNode.removeChild(t))}function s(t,e,i){t instanceof window.HTMLElement&&delete i[e]}var c="#000000";return{embed:n,remove:r}}.apply(e,a),!(void 0!==n&&(t.exports=n))}});