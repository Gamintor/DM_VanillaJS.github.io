const $ = document.querySelectorAll.bind(document);

const sounds = [
    {id:'Bass Drum', letter:'Q', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%2011-909-Free-Loops.com.mp3'},
    {id:'Snare', letter:'W', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Alchemist%20Snare%201-1830-Free-Loops.com.mp3'},
    {id:'Closed Hi-hat', letter:'E', src:'https://www.randomthink.net/labs/html5drums/drumkit/Hi%20Hat%20Closed.mp3'},
    {id:'Opened Hi-hat', letter:'A', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dirty%20South%20Hihat%2003-3621-Free-Loops.com.mp3'},
    {id:'Crash', letter:'S', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Crash%2002-5823-Free-Loops.com.mp3'},
    {id:'Ride', letter:'D', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Ride%2001-5844-Free-Loops.com.mp3'},
    {id:'Cowbell', letter:'Y', src:'https://www.randomthink.net/labs/html5drums/drumkit/Cow%20Bell.mp3'},
    {id:'Rack Tom', letter:'X', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Mid%20Tom.wav-21921-Free-Loops.com.mp3'}, 
    {id:'Floor Tom', letter:'C', src:'https://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Ludwig%20Mid%20Tom-8115-Free-Loops.com.mp3'}
];
let volumeVal = 0.5;

$('input[type=range]')[0].addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--sliderLinGra', `linear-gradient(to right, rgba(204, 122, 0, 0.95) ${e.target.value}%, rgba(204, 204, 204, 0.9) ${e.target.value}%`);
    volumeVal = e.target.value / 100;
});

function main(url, name) {
    const audio = new Audio(url);
    audio.currentTime = 0;
    audio.preload = "auto";
    audio.volume = parseFloat(volumeVal);
    audio.play();
    $('.name')[0].textContent = name;
}

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
            main(sounds[0].src, sounds[0].id);
            seter('q');
        break;
        case 'w':
            main(sounds[1].src, sounds[1].id);
            seter('w');
        break;
        case 'e':
            main(sounds[2].src, sounds[2].id);
            seter('e');
        break;
        case 'a':
            main(sounds[3].src, sounds[3].id);
            seter('a');
        break;
        case 's':
            main(sounds[4].src, sounds[4].id);
            seter('s');
        break;
        case 'd':
            main(sounds[5].src, sounds[5].id);
            seter('d');
        break;
        case 'y':
            main(sounds[6].src, sounds[6].id);
            seter('y');
        break;
        case 'x':
            main(sounds[7].src, sounds[7].id);
            seter('x');
        break;
        case 'c':
            main(sounds[8].src, sounds[8].id);
            seter('c');
        break;
    }
}

$('.q-but')[0].addEventListener('click', () => {
    main(sounds[0].src, sounds[0].id);
});

$('.w-but')[0].addEventListener('click', () => {
    main(sounds[1].src, sounds[1].id);
});

$('.e-but')[0].addEventListener('click', () => {
    main(sounds[2].src, sounds[2].id);
});

$('.a-but')[0].addEventListener('click', () => {
    main(sounds[3].src, sounds[3].id);
});

$('.s-but')[0].addEventListener('click', () => {
    main(sounds[4].src, sounds[4].id);
});

$('.d-but')[0].addEventListener('click', () => {
    main(sounds[5].src, sounds[5].id);
});

$('.y-but')[0].addEventListener('click', () => {
    main(sounds[6].src, sounds[6].id);
});

$('.x-but')[0].addEventListener('click', () => {
    main(sounds[7].src, sounds[7].id);
});

$('.c-but')[0].addEventListener('click', () => {
    main(sounds[8].src, sounds[8].id);
});
