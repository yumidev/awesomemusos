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
// var notes = [];

// This will draw the notes on the stave
var canvas = $("canvas")[0];
var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);

var ctx = renderer.getContext();
var stave = new Vex.Flow.Stave(10, 0, 500);
stave.addClef("treble").setContext(ctx).draw();

var createNote = function () {

}

var bindingKeyToNote = function (event) {

  notes.push()
}

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


  $(document).on("keydown", function ( event ) {
    debugger;
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



// This code will play a music file
var foo=new Sound("my.mp3",100,true);
// Create the notes
  var notes = [
    // A quarter-note C.
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    new Vex.Flow.StaveNote({ keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" })
  ];

  // Create a voice in 4/4
  var voice = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });
// Add notes to voice
  voice.addTickables(notes);

  // Format and justify the notes to 500 pixels
  var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 500);

  // Render voice
  voice.draw(ctx, stave);

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
