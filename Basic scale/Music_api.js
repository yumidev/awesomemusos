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
var notes = [];

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

    oscillator.s
    tart(startTime);
    oscillator.stop(endTime);
  };



//This code will play a small tune
//
// var tune = function(){
//
//     playNote(0, 3, 0.5);
//     playNote(1, 10, 0.5);
//     playNote(2, 15, 0.5);
//     playNote(3, 19, 0.5);
//     playNote(3, 15, 0.5);
//     playNote(4, 3, 0.5);
//     playNote(5, 10, 0.5);
//     playNote(6, 15, 0.5);
//     playNote(6, 19, 0.5);
//     playNote(7, 15, 0.5);
//     playNote;
//   };

// This code will play a music file
var foo=new Sound("my.mp3",100,true);

var playKeydown= function(event){
  if ( event.which === A_KEY ) {
    event.preventDefault();
    noteLowC();
  }
  if ( event.which === S_KEY ) {
    event.preventDefault();
    noteD();
  }
  if ( event.which === D_KEY ) {
    event.preventDefault();
    noteE();
  }
  if ( event.which === F_KEY ) {
    event.preventDefault();
    noteF();
  }
  if ( event.which === G_KEY ) {
    event.preventDefault();
    noteG();
  }
  if ( event.which === H_KEY ) {
    event.preventDefault();
    noteA();
  }
  if ( event.which === J_KEY ) {
    event.preventDefault();
    noteB();
  }
  if ( event.which === K_KEY ) {
    event.preventDefault();
    noteTopC();
  }
  if ( event.which === L_KEY ) {
    event.preventDefault();
    foo.start();
  }
}

$(document).on("keydown", function ( event ) {
  // debugger;
  notes.push(event.which)
console.log(notes);
  A_KEY = 65;
  S_KEY = 83;
  D_KEY = 68;
  F_KEY = 70;
  G_KEY = 71;
  H_KEY = 72;
  J_KEY = 74;
  K_KEY = 75;
  L_KEY = 76;

  playKeydown(event);

})

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
