
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


  $(document).on("keydown", function ( event ) {
    // debugger;
    // notes.push(event.which)
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
