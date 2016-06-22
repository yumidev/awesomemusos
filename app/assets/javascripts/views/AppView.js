var app = app || {};
var fill = [];
var fillArrayTimer;

var saveSong = function (  ) {
  debugger;
  console.log("Let's save our lovely song");
  var song = new app.Song();
  var songName // this should be written when you click the songSave. like.. prompt?
  var project_id; // this should be chosen when you create project
  var song_notes = JSON.stringify(fill); // this should get the array of fill.. how??
  song.set({
    name: songName,
    project_id: project_id,
    song_notes: stringSong
  })
  song.save();
}

var playSong = function () {
  for(var i=0;i<fill.length;i+=1){
    var delay = 0;
    if (fill[i][0] === null) {
      delay += fill[i][1]
    } else {
      playNote(i/10 + delay,fill[i][0],fill[i][1])
      delay = 0;
    }
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
  fill.push([pitch,0.1])
}

var fillArray = function () {
  fill.push([null, 0.1])
  console.log(fill);
}

var startFilling = function (event) {
  console.log("filling started");
  fillArrayTimer = setInterval(function(){fillArray()}, 100);
  $(document).on("keydown", catchKeydown);
}

var stopFilling = function(){
  console.log("filling finished");
  clearInterval(fillArrayTimer)
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
    $(document).on("keydown", playKeydown);
    $("#recordStart").on("click", startFilling);
    $("#recordEnd").on("click", stopFilling);
    $("#playSong").on("click", playSong);
    $("#saveSong").on("click", saveSong);
  }
})
