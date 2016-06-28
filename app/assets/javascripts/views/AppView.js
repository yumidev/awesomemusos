var app = app || {};
var note = [];
var noteTimer;
var time = 0

var newSong = function () {
  note = [];
  time = 0;
}

var saveSong = function () {
  // debugger;
  console.log("Let's save our lovely song");
  var song = new app.Song();
  var songName = prompt("Please enter the song title", "")// this should be written when you click the songSave. like.. prompt?
  var project_id; // this should be chosen when you create project
  var stringNotes = JSON.stringify(note); // this should get the array of note.. how??
  song.set({
    name: songName,
    project_id: project_id,
    song_notes: stringNotes
  })
  song.save();
}

var playSong = function () {
  for(var i=0;i<note.length;i+=1){
    playNote(note[i][0], note[i][1], note[i][2])
  }
}

var catchKeydown = function ( event ) {
  console.log("Note added");
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
    if ( pitch !== undefined ){
      note.push([time, pitch, 0.1])
    }
  var noteView = new app.NoteView();
  noteView.render();
}

var noteArray = function () {
  time += 0.1
  console.log(time);
  console.log(note);
}

var startFilling = function (event) {
  console.log("Noting started");
  noteTimer = setInterval(function(){noteArray()}, 100);
  $(document).on("keydown", catchKeydown);
}

var stopFilling = function(){
  console.log("Noting finished");
  clearInterval(noteTimer)
}

var playKeydown = function ( event ) {
  app.A_KEY = 65;
  app.S_KEY = 83;
  app.D_KEY = 68;
  app.F_KEY = 70;
  app.G_KEY = 71;
  app.H_KEY = 72;
  app.J_KEY = 74;
  app.K_KEY = 75;
  app.L_KEY = 76;
  app.SPACE_KEY = 32;
  if ( event.which === app.A_KEY ) {
    event.preventDefault();
    noteLowC();
  }
  if ( event.which === app.S_KEY ) {
    event.preventDefault();
    noteD();
  }
  if ( event.which === app.D_KEY ) {
    event.preventDefault();
    noteE();
  }
  if ( event.which === app.F_KEY ) {
    event.preventDefault();
    noteF();
  }
  if ( event.which === app.G_KEY ) {
    event.preventDefault();
    noteG();
  }
  if ( event.which === app.H_KEY ) {
    event.preventDefault();
    noteA();
  }
  if ( event.which === app.J_KEY ) {
    event.preventDefault();
    noteB();
  }
  if ( event.which === app.K_KEY ) {
    event.preventDefault();
    noteTopC();
  }
  if ( event.which === app.L_KEY ) {
    event.preventDefault();
    foo.start();
  }
  if ( event.which === app.SPACE_KEY ) {
    event.preventDefault();
    stopFilling();
  }
}

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function () {
    console.log("App view rendered");
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html( appViewTemplate );
    var songInputView = new app.SongInputView();
    songInputView.render();
    var recordButtonView = new app.RecordButtonView();
    recordButtonView.render();
    var noteView = new app.NoteView();
    noteView.render();
    $(document).on("keydown", playKeydown);
    $("#recordStart").on("click", startFilling);
    $("#recordEnd").on("click", stopFilling);
    $("#playSong").on("click", playSong);
    $("#saveSong").on("click", saveSong);
    $("#newSong").on("click", newSong);
  }
})
