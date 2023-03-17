const Btn = document.getElementById('btn');

let counter = 0;

Btn.addEventListener('click', (event) => {
    let audio;

    if(counter == 0){
        audio = new Audio('../audio/mario1.mp3');
        counter+=1;
    } else if(counter == 1){
        audio = new Audio('../audio/mario2.mp3');
        counter+=1;
    } else{
        audio = new Audio('../audio/mario3.mp3');
        counter=0;
    }

    audio.play();
});