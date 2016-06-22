
console.log("hello music maker");
// var notes = [[keycode, time]]

var test = [[0,0.5],[0,0.5],[10,0.5],[10,0.5],[0,0.5],[0,0.5],[0,0.5],[0,0.5],
[0,0.5],[0,0.5],[0,0.5],[0,0.5],[10,0.5],[10,0.5],[3,0.5],[3,0.5]]
var sing;
// _.map(test,function(a){
//   var time+=a[1];
// sing += playNote(time,a[0],a[1])
// return sing;
// })

// for(var i=0;i<test.length;i+=1){
//   playNote(i,test[0],test[1])
// }
    // playNote(0, 3, 0.5)playNote(0.5, 10, 0.5)playNote(1, 15, 0.5);
    // playNote(1.5, 19, 0.5);
    // playNote(2, 15, 0.5);
    // playNote(2.5, 3, 0.5);

  var notes=[[0,0]];

  var fill = [];

  var fillArray = function (notes, prevNotesLength, event){
    // debugger;
    var noteLengthNow= notes.length;
    console.log("fillArray working");
    var a;
    if (noteLengthNow !== prevNotesLength){
      // debugger;
      a = _.last(notes)
    } else {
      a = 0;
    }
  fill.push([a,0.5])
  console.log(fill);
  }
  var fillArrayTimer;
  var startFilling = function(notes, event){
    // debugger;
    var prevNotesLength = notes.length
console.log("Prev Notes are" + prevNotesLength);
    console.log("filling started");
    fillArrayTimer = setInterval(function(){fillArray(notes, prevNotesLength, event)}, 1000);
  }

  var stopFilling = function(){
    console.log("filling finished");
    clearInterval(fillArrayTimer)
  }


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
// $(document).ready(function(){
//   for(var i=0;i<test.length;i+=1){
//     // debugger;
//     playNote(i/2,test[i][0],test[i][1])
//   }
// })


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
