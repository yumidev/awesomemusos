var audioContext = new AudioContext();
//This plays a small tune when the browser starts.  It executes immediately.  I can't figure out how to get it to execute on click.

var playNote = function(delay, pitch, duration){
  var startTime = audioContext.currentTime + delay;
  var endTime = startTime + duration;

  var oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);

  oscillator.type = 'triangle';
  oscillator.detune.value = pitch * 100;

  oscillator.start(startTime);
  oscillator.stop(endTime);
};

var noteLowC = function (){
  playNote(0, 3, 0.1);
};
var noteCSharp = function (){
  playNote(0, 4, 0.1);
};
var noteD = function (){
  playNote(0, 5, 0.1);
};
var noteEFlat = function (){
  playNote(0, 6, 0.1);
};
var noteE = function (){
  playNote(0, 7, 0.1);
};
var noteF = function (){
  playNote(0, 8, 0.1);
};
var noteFSharp = function (){
  playNote(0, 9, 0.1);
};
var noteG = function (){
  playNote(0, 10, 0.1);
};
var noteGSharp = function (){
  playNote(0, 11, 0.1);
};
var noteA = function (){
  playNote(0, 12, 0.1);
};
var noteBFlat = function (){
  playNote(0, 13, 0.1);
};
var noteB = function (){
  playNote(0, 14, 0.1);
};
var noteTopC = function (){
  playNote(0, 15, 0.1);
};
