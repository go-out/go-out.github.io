'use strict'

var player,
    youtubeID;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: youtubeID,
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'rel': 0
        }
    });
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);