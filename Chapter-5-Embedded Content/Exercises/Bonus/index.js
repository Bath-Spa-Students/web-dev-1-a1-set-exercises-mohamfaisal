document.addEventListener('DOMContentLoaded', function(){

    const samples= document.querySelectorAll('.Sample');   //selecting the samples

    samples.forEach(Sample => {
        Sample.addEventListener('click', function(){   //when cicked the samples the music plays 

            const audioPath=this.getAttribute('audio-path');
            playAudio(audioPath);
    });
});

function playAudio(audioPath){
    const audio = new Audio(audioPath);  //giving a audio path to the variable 'audio'
    audio.play();
    }
});