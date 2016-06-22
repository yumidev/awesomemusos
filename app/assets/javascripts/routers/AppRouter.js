var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function () {
    if ($("#main").length === 0)
      return;

    console.log("Routes working");
    var appView = new app.AppView();
    appView.render();
  }

})
