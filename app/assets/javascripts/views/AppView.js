var app = app || {};

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
  }
})
