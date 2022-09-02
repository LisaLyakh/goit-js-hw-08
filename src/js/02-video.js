import { Player } from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlayTime = function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};
console.log(onPlayTime);
player.on('timeupdate', throttle(onPlayTime, 1000));
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);
if (parsedTime.seconds === 571.56) {
    localStorage.removeItem('videoplayer-current-time');
} else {
    player
        .setCurrentTime(parsedTime.seconds)
        .then(function (seconds) {
            console.log('seconds = the actual time that the player seeked to');
        })
        .catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    console.log('RangeError');
                    break;
                default:
                    break;
            }
        });
}
