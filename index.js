const $ = document.querySelectorAll.bind(document);
const sounds = [
    {id:'Bass Drum'},
    {id:'Snare'},
    {id:'Closed Hi-hat'},
    {id:'Opened Hi-hat'},
    {id:'Crash'},
    {id:'Ride'},
    {id:'Cowbell'},
    {id:'Rack Tom'},
    {id:'Floor Tom'}
];
const audioElements = $('audio');
const display = $('.name')[0];
let volumeVal = 0.5;

$('input[type=range]')[0].addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--sliderLinGra', `linear-gradient(to right, rgba(204, 122, 0, 0.95) ${e.target.value}%, rgba(204, 204, 204, 0.9) ${e.target.value}%`);
    volumeVal = e.target.value / 100;
});

function seter(id) {
    setTimeout(() => {
        $(`.${id}-but`)[0].classList.add('pressed');
        setTimeout(() => {
            $(`.${id}-but`)[0].classList.remove('pressed');
        }, 140);
    }, 0);
}

function main(audTag, name) {
    let audio = audTag;
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    display.textContent = name;
}

$('button').forEach((but, i) => {
    but.addEventListener('click', () => {
        main(audioElements[i], sounds[i].id);
    });
});

window.onkeydown = function(e) {
    switch(e.key) {
        case 'q':
            main(audioElements[0], sounds[0].id);
            seter(e.key);
        break;
        case 'w':
            main(audioElements[1], sounds[1].id);
            seter(e.key);
        break;
        case 'e':
            main(audioElements[2], sounds[2].id);
            seter(e.key);
        break;
        case 'a':
            main(audioElements[3], sounds[3].id);
            seter(e.key);
        break;
        case 's':
            main(audioElements[4], sounds[4].id);
            seter(e.key);
        break;
        case 'd':
            main(audioElements[5], sounds[5].id);
            seter(e.key);
        break;
        case 'y':
            main(audioElements[6], sounds[6].id);
            seter(e.key);
        break;
        case 'x':
            main(audioElements[7], sounds[7].id);
            seter(e.key);
        break;
        case 'c':
            main(audioElements[8], sounds[8].id);
            seter(e.key);
        break;
    }
}
