var app = app || {};

app.SongInputView = Backbone.View.extend({
  events: {
    'keydown' : 'playKeydown',
    'click #recordEnd' : 'saveSong',
    'click #recordStart' : 'startFilling'
  },
  //
  //
  // var fillArray = function (){
  //   fill.push([0, 0.1])
  //   console.log(fill);
  // }
  var startFilling = function(notes, event){
    console.log("filling started");
    fillArrayTimer = setInterval(function(){fillArray()}, 100);
  },
  // var stopFilling = function(){
  //   console.log("filling finished");
  //   clearInterval(fillArrayTimer)
  // }


  saveSong: function () {
    console.log("Song has been created");
    var fill = [];
    var fillArrayTimer;
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
    fill.push([pitch,0.1])

  },

  el: "#keyboard",

  render: function(){
    var songInputViewTemplate = $("#songInputViewTemplate").html();
    this.$el.html(songInputViewTemplate)
  }

})
