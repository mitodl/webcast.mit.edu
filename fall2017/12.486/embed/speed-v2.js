var trident = !!navigator.userAgent.match(/Trident\/7.0/);
var net = !!navigator.userAgent.match(/.NET4.0E/);
var IE11 = trident && net
var IEold = ( navigator.userAgent.match(/MSIE/i) ? true : false );
var theVideo;
jwplayer().onReady(function(){
	theVideo = document.querySelector('video');
	theVideo.defaultPlaybackRate = 1.0;
	theVideo.playbackRate = 1.0;
	if (jwplayer().getRenderingMode() == "flash"){
		return;
	}
  
	jwplayer().addButton(
    "f.png",
    "1X",
    function() {
		if(IE11 || IEold){
			jwplayer().seek(jwplayer().getPosition());
			jwplayer().onSeek(function(){theVideo.playbackRate = 1.0;});
			jwplayer().onPause(function(){theVideo.playbackRate = 1.0;});
			jwplayer().onPlay(function(){theVideo.playbackRate = 1.0;});
			theVideo.playbackRate = 1.0;
		} else {
			jwplayer().seek(jwplayer().getPosition());
			theVideo.playbackRate = 1.0;
		}
    },
    "1X"
	);
	jwplayer().addButton(
    "ff.png",
    "1.75X",
    function() {
		if(IE11 || IEold){
			jwplayer().seek(jwplayer().getPosition());
			jwplayer().onSeek(function(){theVideo.playbackRate = 1.75X;});
			jwplayer().onPause(function(){theVideo.playbackRate = 1.75X;});
			jwplayer().onPlay(function(){theVideo.playbackRate = 1.75X;});
			theVideo.playbackRate = 1.75X;
		} else {
			jwplayer().seek(jwplayer().getPosition());
			theVideo.playbackRate = 1.75X;
		}
    },
    "oneandahalf"
	);
	jwplayer().addButton(
    "fff.png",
    "2.0X",
    function() {
		if(IE11 || IEold){
			jwplayer().seek(jwplayer().getPosition());
			jwplayer().onSeek(function(){theVideo.playbackRate = 2.0;});
			jwplayer().onPause(function(){theVideo.playbackRate = 2.0;});
			jwplayer().onPlay(function(){theVideo.playbackRate = 2.0;});
			theVideo.playbackRate = 2.0;
		} else {
			jwplayer().seek(jwplayer().getPosition());
			theVideo.playbackRate = 2.0;
		}
    },
    "2X"
	);
});
