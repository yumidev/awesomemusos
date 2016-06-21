// // Before we can do anything we need to create an AudioContext. This is a global object that is available in most modern browsers on any webpage.
//
// create the big object
// var audioContext = new AudioContext();
//
//
// create an instance of it and tell it what to do with it
//
// var oscillator = audioContext.createOscillator()
// oscillator.connect(audioContext.destination)
//
// oscillator.start(audioContext.currentTime)
// oscillator.stop(audioContext.currentTime + 2)
// oscillator.type = 'sawtooth'


console.log("hello music maker");

var audioContext = new AudioContext();

//This plays a small tune when the browser starts.  It executes immediately.  I can't figure out how to get it to execute on click.

var playNote = function(delay, pitch, duration){
    var startTime = audioContext.currentTime + delay;
    var endTime = startTime + duration;

    var oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);

    oscillator.type = 'sawtooth';
    oscillator.detune.value = pitch * 100;

    oscillator.start(startTime);
    oscillator.stop(endTime);
  };


var noteLowC = function (){
  playNote(0, 3, 0.5);
};
var noteCSharp = function (){
  playNote(0, 4, 0.5);
};

var noteD = function (){
  playNote(0, 5, 0.5);
};

var noteEFlat = function (){
  playNote(0, 6, 0.5);
};

var noteE = function (){
  playNote(0, 7, 0.5);
};

var noteF = function (){
  playNote(0, 8, 0.5);
};

var noteFSharp = function (){
  playNote(0, 9, 0.5);
};


var noteG = function (){
  playNote(0, 10, 0.5);
};

var noteGSharp = function (){
  playNote(0, 11, 0.5);
};

var noteA = function (){
  playNote(0, 12, 0.5);
};

var noteGSharp = function (){
  playNote(0, 11, 0.5);
};

var noteBFlat = function (){
  playNote(0, 13, 0.5);
};

var noteB = function (){
  playNote(0, 14, 0.5);
};

var noteTopC = function (){
  playNote(0, 15, 0.5);
};















//This code will play a small tune

// var tune = function(){

    playNote(0, 3, 0.5);
    playNote(1, 10, 0.5);
    playNote(2, 15, 0.5);
    playNote(3, 19, 0.5);
    playNote(3, 15, 0.5);
    playNote(4, 3, 0.5);
    playNote(5, 10, 0.5);
    playNote(6, 15, 0.5);
    playNote(6, 19, 0.5);
    playNote(7, 15, 0.5);
    // // playNote;
  // };



    // var oscillator = audioContext.createOscillator()
    // oscillator.connect(audioContext.destination)
    //
    // oscillator.type = 'sawtooth'
    // oscillator.frequency.value = 440
    //
    // oscillator.start(audioContext.currentTime)
    // oscillator.stop(audioContext.currentTime + 2)
    //
    // oscillator.frequency.value = 440 * Math.pow(2, 7 / 12)
