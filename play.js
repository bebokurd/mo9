    'rewind',
    'play', 
    'fast-forward', 
    'progress', 
    'mute', 
    'volume', 
    'captions', 
    'settings', 
    'pip', 
    'airplay', 
    'fullscreen'
];
const player = new Plyr('#video',{controls});

setTimeout(videovisible, 4000)

function videovisible() {
    document.getElementById('loading')
}
var url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

var video = document.getElementById('video');
 if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {     
       video.play();
    });
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.addEventListener('loadedmetadata', function() {
    video.play();
    });
  }
