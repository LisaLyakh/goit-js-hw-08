import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const onPlayTime = 'videoplayer-current-time';

const vimeoPlayer = new Player('vimeo-player');
const key = localStorage.getItem(onPlayTime);
if (key) {
    vimeoPlayer.setCurrentTime(parseFloat(key));
}

vimeoPlayer.on(
    'timeupdate',
    throttle(data => {
        localStorage.setItem(onPlayTime, data.seconds.toString());
    }, 1000),
);
