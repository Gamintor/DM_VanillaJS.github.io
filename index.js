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

let volumeVal = 0.5;

$('input[type=range]')[0].addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--sliderLinGra', `linear-gradient(to right, rgba(204, 122, 0, 0.95) ${e.target.value}%, rgba(204, 204, 204, 0.9) ${e.target.value}%`);
    volumeVal = e.target.value / 100;
});

window.onkeydown = function(e) {
    function seter(id) {
        setTimeout(() => {
            $(`.${id}-but`)[0].classList.add('pressed');
            setTimeout(() => {
                $(`.${id}-but`)[0].classList.remove('pressed');
            }, 140);
        }, 0);
    }
    switch(e.key) {
        case 'q':
            const audioQ = $("#bass")[0];
            audioQ.currentTime = 0;
            audioQ.volume = parseFloat(volumeVal);
            audioQ.play();
            $('.name')[0].textContent = sounds[0].id;
            seter('q');
        break;
        case 'w':
            const audioW = $("#snare")[0];
            audioW.currentTime = 0;
            audioW.volume = parseFloat(volumeVal);
            audioW.play();
            $('.name')[0].textContent = sounds[1].id;
            seter('w');
        break;
        case 'e':
            const audioE = $("#closed")[0];
            audioE.currentTime = 0;
            audioE.volume = parseFloat(volumeVal);
            audioE.play();
            $('.name')[0].textContent = sounds[2].id;
            seter('e');
        break;
        case 'a':
            const audioA = $("#opened")[0];
            audioA.currentTime = 0;
            audioA.volume = parseFloat(volumeVal);
            audioA.play();
            $('.name')[0].textContent = sounds[3].id;
            seter('a');
        break;
        case 's':
            const audioS = $("#crash")[0];
            audioS.currentTime = 0;
            audioS.volume = parseFloat(volumeVal);
            audioS.play();
            $('.name')[0].textContent = sounds[4].id;
            seter('s');
        break;
        case 'd':
            const audioD = $("#ride")[0];
            audioD.currentTime = 0;
            audioD.volume = parseFloat(volumeVal);
            audioD.play();
            $('.name')[0].textContent = sounds[5].id;
            seter('d');
        break;
        case 'y':
            const audioY = $("#cow")[0];
            audioY.currentTime = 0;
            audioY.volume = parseFloat(volumeVal);
            audioY.play();
            $('.name')[0].textContent = sounds[6].id;
            seter('y');
        break;
        case 'x':
            const audioX = $("#rack")[0];
            audioX.currentTime = 0;
            audioX.volume = parseFloat(volumeVal);
            audioX.play();
            $('.name')[0].textContent = sounds[7].id;
            seter('x');
        break;
        case 'c':
            const audioC = $("#rack")[0];
            audioC.currentTime = 0;
            audioC.volume = parseFloat(volumeVal);
            audioC.play();
            $('.name')[0].textContent = sounds[7].id;
            seter('c');
        break;
    }
}

$('.q-but')[0].addEventListener('click', () => {
    const audio = $("#bass")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[0].id;
});

$('.w-but')[0].addEventListener('click', () => {
    const audio = $("#snare")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[1].id;
});

$('.e-but')[0].addEventListener('click', () => {
    const audio = $("#closed")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[2].id;
});

$('.a-but')[0].addEventListener('click', () => {
    const audio = $("#opened")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[3].id;
});

$('.s-but')[0].addEventListener('click', () => {
    const audio = $("#crash")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[4].id;
});

$('.d-but')[0].addEventListener('click', () => {
    const audio = $("#ride")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[5].id;
});

$('.y-but')[0].addEventListener('click', () => {
    const audio = $("#cow")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[6].id;
});

$('.x-but')[0].addEventListener('click', () => {
    const audio = $("#rack")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[7].id;
});

$('.c-but')[0].addEventListener('click', () => {
    const audio = $("#rack")[0];
    audio.currentTime = 0;
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = sounds[7].id;
});

