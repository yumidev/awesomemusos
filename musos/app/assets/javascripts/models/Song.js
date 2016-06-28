var app = app || {};

app.Song = Backbone.Model.extend({
  urlRoot: "/songs",

  defaults: {
    name: "",
    date: "",
    project_id: "",
    song_notes: ""
  },

  initialize: function () {
    console.log("A new song was created");
  }
})
