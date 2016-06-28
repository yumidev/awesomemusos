
// console.log("hello music maker");
// // var notes = [[keycode, time]]
//
// // when you want to play the recorded notes
// // $(document).ready(function(){
//   // for(var i=0;i<fill.length;i+=1){
//   //   playNote(i/10,fill[i][0],fill[i][1])
//   // }
// // })
// var test = [[0,0.5],[0,0.5],[10,0.5],[10,0.5],[0,0.5],[0,0.5],[0,0.5],[0,0.5],
// [0,0.5],[0,0.5],[0,0.5],[0,0.5],[10,0.5],[10,0.5],[3,0.5],[3,0.5]]
// var fill = [];
// var fillArrayTimer;
//
// $(document).on("keydown", function ( event ) {
//   var noteRef = {
//     65: 3,
//     83: 5,
//     68: 7,
//     70: 8,
//     71: 10,
//     72: 12,
//     74: 14,
//     75: 15,
//     76: 3
//   }
//   var keyCode = event.which
//   var pitch = noteRef[keyCode]
// // debugger;
//   fill.push([pitch,0.1])
//   A_KEY = 65;
//   S_KEY = 83;
//   D_KEY = 68;
//   F_KEY = 70;
//   G_KEY = 71;
//   H_KEY = 72;
//   J_KEY = 74;
//   K_KEY = 75;
//   L_KEY = 76;
//
//   playKeydown(event);
// })
//
// var fillArray = function (){
//   fill.push([0, 0.1])
//   console.log(fill);
// }
//
// var startFilling = function(notes, event){
//   console.log("filling started");
//   fillArrayTimer = setInterval(function(){fillArray()}, 100);
// }
//
// var stopFilling = function(){
//   console.log("filling finished");
//   clearInterval(fillArrayTimer)
// }
<<<<<<< HEAD
=======
    // playNote(0, 3, 0.5)playNote(0.5, 10, 0.5)playNote(1, 15, 0.5);
    // playNote(1.5, 19, 0.5);
    // playNote(2, 15, 0.5);
    // playNote(2.5, 3, 0.5);

// var notes=[[0,0]];
// var prevNotesLength = notes.length;

$(document).on("keydown", function ( event ) {
  // debugger;
  // var prevNotesLength = notes.length

//   if (noteLengthNow !== prevNotesLength){
//     var noteRef = {
//       65: 3,
//       83: 5,
//       68: 7,
//       70: 8,
//       71: 10,
//       72: 12,
//       74: 14,
//       75: 15,
//       76: 3
//     }
//     a = noteRef[_.last(notes)]
//   } else {
//     a = 0;
//   }
// fill.push([0, 0.5])
var noteRef = {
  65: 3,
  83: 5,
  68: 7,
  70: 8,
  71: 10,
  72: 12,
  74: 14,
  75: 15,
  76: 3
}
var keyCode = event.which
var pitch = noteRef[keyCode]
// debugger;
  fill.push([pitch,0.5])
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
  // return prevNotesLength;
})


var fill = [];

var fillArray = function (){
  // console.log("This is previous length");
  // debugger;
  // var noteLengthNow= notes.length;
    console.log("fillArray working");
    var a;
    // if (noteLengthNow !== prevNotesLength){
    //   var noteRef = {
    //     65: 3,
    //     83: 5,
    //     68: 7,
    //     70: 8,
    //     71: 10,
    //     72: 12,
    //     74: 14,
    //     75: 15,
    //     76: 3
    //   }
    //   a = noteRef[_.last(notes)]
    // } else {
    //   a = 0;
    // }
  fill.push([0, 0.5])
  console.log(fill);
}
var fillArrayTimer;


var startFilling = function(notes, event){
  console.log("filling started");
  // debugger;
  fillArrayTimer = setInterval(function(){fillArray()}, 500);
}

var stopFilling = function(){
  console.log("filling finished");
  clearInterval(fillArrayTimer)
}

>>>>>>> b861e4b39ced89043d12bb7004f92aa131471090

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
<<<<<<< HEAD
//
// var playKeydown= function(event){
//   if ( event.which === A_KEY ) {
//     event.preventDefault();
//     noteLowC();
//   }
//   if ( event.which === S_KEY ) {
//     event.preventDefault();
//     noteD();
//   }
//   if ( event.which === D_KEY ) {
//     event.preventDefault();
//     noteE();
//   }
//   if ( event.which === F_KEY ) {
//     event.preventDefault();
//     noteF();
//   }
//   if ( event.which === G_KEY ) {
//     event.preventDefault();
//     noteG();
//   }
//   if ( event.which === H_KEY ) {
//     event.preventDefault();
//     noteA();
//   }
//   if ( event.which === J_KEY ) {
//     event.preventDefault();
//     noteB();
//   }
//   if ( event.which === K_KEY ) {
//     event.preventDefault();
//     noteTopC();
//   }
//   if ( event.which === L_KEY ) {
//     event.preventDefault();
//     foo.start();
//   }
// }
=======


  var playKeydown= function(event, prevNotesLength){
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
>>>>>>> b861e4b39ced89043d12bb7004f92aa131471090
